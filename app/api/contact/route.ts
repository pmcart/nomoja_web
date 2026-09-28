import { validateContact, type ContactInput } from "@/lib/contact";
import { rateLimit } from "@/lib/rate-limit";

/**
 * POST /api/contact
 *
 * Spam defence, in layers (see the form-strategy skill):
 *   1. honeypot field  - filled by bots, invisible to people
 *   2. minimum fill time - a person can't write a message in under 2.5 seconds
 *   3. per-IP rate limit
 *   4. strict server-side validation and size limits
 *
 * Delivery: Resend's REST API. Configure RESEND_API_KEY, CONTACT_TO_EMAIL and
 * CONTACT_FROM_EMAIL (see .env.example). With no API key in development the enquiry
 * is logged to the console instead, so the form can be tried locally.
 */

const MAX_BODY_CHARS = 20_000;
const MIN_FILL_MS = 2_500;

function json(body: Record<string, unknown>, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function clientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

/** Header-safe single line (no CR/LF), trimmed to a sensible length. */
function oneLine(value: string, max = 80): string {
  return value.replace(/[\r\n]+/g, " ").slice(0, max);
}

function formatEnquiry(data: ContactInput): string {
  return [
    "New enquiry from the Nomoja website",
    "",
    `Name:          ${oneLine(data.name, 100)}`,
    `Email:         ${data.email}`,
    `Company:       ${data.company ? oneLine(data.company, 120) : "-"}`,
    `Interested in: ${data.projectType || "-"}`,
    "",
    "Message:",
    data.message,
    "",
    "-----",
    `Received ${new Date().toISOString()}. Reply to this email to answer ${oneLine(data.name, 40)} directly.`,
  ].join("\n");
}

export async function POST(request: Request) {
  // Read as text so the size limit holds even without a Content-Length header.
  const raw = await request.text();
  if (raw.length > MAX_BODY_CHARS) return json({ ok: false, error: "too_large" }, 413);

  let body: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) throw new Error("not an object");
    body = parsed as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: "bad_request" }, 400);
  }

  // 1. Honeypot: pretend success so bots learn nothing.
  if (typeof body.website === "string" && body.website.trim() !== "") return json({ ok: true });

  // 2. Minimum fill time (also rejects a missing or future timestamp).
  const startedAt = Number(body.startedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) {
    return json({ ok: false, error: "too_fast" }, 429);
  }

  // 3. Rate limit.
  if (!rateLimit(clientIp(request))) return json({ ok: false, error: "rate_limited" }, 429);

  // 4. Validate.
  const result = validateContact(body);
  if (!result.ok) return json({ ok: false, error: "invalid", errors: result.errors }, 400);
  const { data } = result;

  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Nomoja <onboarding@resend.dev>";
  const apiKey = process.env.RESEND_API_KEY;

  if (!to) {
    console.error("[contact] CONTACT_TO_EMAIL is not set; enquiry not delivered.");
    return json({ ok: false, error: "not_configured" }, 500);
  }

  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.log("\n[contact] RESEND_API_KEY not set. Enquiry (dev mode, not emailed):\n\n" + formatEnquiry(data) + "\n");
      return json({ ok: true, dev: true });
    }
    console.error("[contact] RESEND_API_KEY is not set; enquiry not delivered.");
    return json({ ok: false, error: "not_configured" }, 500);
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `New enquiry from ${oneLine(data.name, 60)}`,
        text: formatEnquiry(data),
        reply_to: data.email,
      }),
    });

    if (!res.ok) {
      console.error("[contact] Resend rejected the email:", res.status, await res.text());
      return json({ ok: false, error: "send_failed" }, 502);
    }

    // Log the message id so delivery can be looked up in the Resend dashboard.
    const sent: { id?: string } = await res.json().catch(() => ({}));
    console.log("[contact] enquiry emailed via Resend, id:", sent.id ?? "unknown");
  } catch (error) {
    console.error("[contact] Could not reach Resend:", error);
    return json({ ok: false, error: "send_failed" }, 502);
  }

  return json({ ok: true });
}
