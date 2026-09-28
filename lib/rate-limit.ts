/**
 * Minimal in-memory rate limiter for the enquiry endpoint.
 *
 * Best effort only: state lives in one server instance, so on serverless hosting each
 * instance keeps its own counts. That is fine for a contact form (it stops a single
 * client hammering the endpoint); add Turnstile/hCaptcha if spam ever gets through.
 */
const hits = new Map<string, number[]>();

export function rateLimit(
  key: string,
  { limit = 5, windowMs = 10 * 60_000 }: { limit?: number; windowMs?: number } = {},
): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);

  if (recent.length >= limit) {
    hits.set(key, recent);
    return false;
  }

  recent.push(now);
  hits.set(key, recent);

  // Keep memory bounded.
  if (hits.size > 5000) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= windowMs)) hits.delete(k);
    }
  }

  return true;
}
