/**
 * Enquiry form: shared field definitions and validation.
 * Used by the client form (for instant feedback) and the API route (for correctness).
 * Client validation is UX; the server re-validates everything.
 */

export const PROJECT_TYPES = [
  "AI workflow or app",
  "Web app or SaaS",
  "Website",
  "Not sure yet",
] as const;

export const LIMITS = {
  name: 100,
  email: 254,
  company: 120,
  message: 4000,
} as const;

export const MIN_MESSAGE_LENGTH = 10;

export type ContactInput = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
};

export type ContactField = keyof ContactInput;
export type ContactErrors = Partial<Record<ContactField, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContact(
  raw: Partial<Record<ContactField, unknown>>,
): { ok: true; data: ContactInput } | { ok: false; errors: ContactErrors; data: ContactInput } {
  const data: ContactInput = {
    name: text(raw.name),
    email: text(raw.email),
    company: text(raw.company),
    projectType: text(raw.projectType),
    message: text(raw.message),
  };

  const errors: ContactErrors = {};

  if (!data.name) errors.name = "Please tell us your name.";
  else if (data.name.length > LIMITS.name) errors.name = "That name is a bit long. Could you shorten it?";

  if (!data.email) errors.email = "Please add your email so we can reply.";
  else if (data.email.length > LIMITS.email || !EMAIL_PATTERN.test(data.email))
    errors.email = "That doesn’t look like a full email address, e.g. name@company.ie";

  if (data.company.length > LIMITS.company) errors.company = "That’s a bit long. Could you shorten it?";

  if (data.projectType && !(PROJECT_TYPES as readonly string[]).includes(data.projectType))
    errors.projectType = "Please pick one of the options.";

  if (!data.message) errors.message = "Tell us a little about what you’re trying to do.";
  else if (data.message.length < MIN_MESSAGE_LENGTH)
    errors.message = "A sentence or two would help us understand. Even a rough one is fine.";
  else if (data.message.length > LIMITS.message)
    errors.message = `That’s over ${LIMITS.message.toLocaleString("en-IE")} characters. Could you trim it a little?`;

  return Object.keys(errors).length ? { ok: false, errors, data } : { ok: true, data };
}
