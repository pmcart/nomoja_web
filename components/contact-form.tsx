"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  LIMITS,
  PROJECT_TYPES,
  validateContact,
  type ContactErrors,
  type ContactField,
  type ContactInput,
} from "@/lib/contact";
import { buttonClasses } from "./button";
import { ArrowRight, Check } from "./icons";

type Status = "idle" | "sending" | "sent" | "error";

const EMPTY: ContactInput = { name: "", email: "", company: "", projectType: "", message: "" };
const FIELD_ORDER: ContactField[] = ["name", "email", "company", "projectType", "message"];

// 16px+ text keeps iOS from zooming the page on focus.
const inputClass =
  "block w-full rounded-xl border border-line bg-white px-4 text-base text-ink placeholder:text-muted transition-colors aria-[invalid=true]:border-ember";
const labelClass = "mb-1.5 block text-[0.9375rem] font-medium";
const hintClass = "font-normal text-muted";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-ember">
      {message}
    </p>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const startedAt = useRef(0);

  const [values, setValues] = useState<ContactInput>(EMPTY);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [notice, setNotice] = useState("");

  // When the form appeared. The server rejects submissions faster than a person can write.
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (status === "sent") successRef.current?.focus();
  }, [status]);

  function update(field: ContactField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  }

  // Validate on blur, not on every keystroke.
  function checkField(field: ContactField) {
    const result = validateContact(values);
    setErrors((current) => ({ ...current, [field]: result.ok ? undefined : result.errors[field] }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const result = validateContact(values);
    if (!result.ok) {
      setErrors(result.errors);
      setNotice("");
      const first = FIELD_ORDER.find((field) => result.errors[field]);
      if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("sending");
    setNotice("");
    const honeypot = new FormData(event.currentTarget).get("website");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.data, website: honeypot ?? "", startedAt: startedAt.current }),
      });
      const body: { ok?: boolean; error?: string; errors?: ContactErrors } = await res.json().catch(() => ({}));

      if (res.ok && body.ok) {
        setStatus("sent");
        return;
      }
      if (res.status === 400 && body.errors) {
        setErrors(body.errors);
        setStatus("idle");
        return;
      }

      setStatus("error");
      setNotice(
        body.error === "too_fast"
          ? "That was very quick. Please check your message and send it again."
          : body.error === "rate_limited"
            ? "You’ve sent a few messages in a short time. Please try again in a few minutes."
            : "Something went wrong sending your message. Please try again in a moment.",
      );
    } catch {
      setStatus("error");
      setNotice("We couldn’t reach the server. Please check your connection and try again.");
    }
  }

  if (status === "sent") {
    const firstName = values.name.split(/\s+/)[0];
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="py-4 outline-none">
        <span className="grid size-12 place-items-center rounded-full bg-forest text-paper">
          <Check />
        </span>
        <h3 className="mt-5 font-serif text-3xl leading-tight">Thanks, {firstName}. We’ve got it.</h3>
        <p className="mt-3 text-ink-2">
          A person here will read your message properly and reply to <strong className="font-medium">{values.email}</strong>{" "}
          with questions or a suggested next step.
        </p>
        <Link
          href="/services"
          className="mt-6 inline-flex items-center gap-2 font-medium underline underline-offset-4"
        >
          While you wait, see what we build <ArrowRight />
        </Link>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="cf-name" className={labelClass}>
          Your name
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={LIMITS.name + 20}
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          onBlur={() => checkField("name")}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "cf-name-error" : undefined}
          className={`${inputClass} h-12`}
        />
        <FieldError id="cf-name-error" message={errors.name} />
      </div>

      <div>
        <label htmlFor="cf-email" className={labelClass}>
          Email
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          onBlur={() => checkField("email")}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "cf-email-error" : undefined}
          className={`${inputClass} h-12`}
        />
        <FieldError id="cf-email-error" message={errors.email} />
      </div>

      <div>
        <label htmlFor="cf-company" className={labelClass}>
          Company <span className={hintClass}>(optional)</span>
        </label>
        <input
          id="cf-company"
          name="company"
          type="text"
          autoComplete="organization"
          value={values.company}
          onChange={(e) => update("company", e.target.value)}
          onBlur={() => checkField("company")}
          aria-invalid={errors.company ? true : undefined}
          aria-describedby={errors.company ? "cf-company-error" : undefined}
          className={`${inputClass} h-12`}
        />
        <FieldError id="cf-company-error" message={errors.company} />
      </div>

      <fieldset>
        <legend className={labelClass}>
          What’s this about? <span className={hintClass}>(optional)</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {PROJECT_TYPES.map((type) => (
            <label key={type} className="relative cursor-pointer">
              <input
                type="radio"
                name="projectType"
                value={type}
                checked={values.projectType === type}
                onChange={() => update("projectType", type)}
                className="peer sr-only"
              />
              <span className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-4 text-[0.9375rem] transition-colors hover:border-ink/40 peer-checked:border-forest peer-checked:bg-forest peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-ink">
                {type}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="cf-message" className={labelClass}>
          What are you looking to build or fix?
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          onBlur={() => checkField("message")}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "cf-message-error" : undefined}
          placeholder="A few lines is plenty. What’s the problem, and what would ‘solved’ look like?"
          className={`${inputClass} min-h-36 resize-y py-3`}
        />
        <FieldError id="cf-message-error" message={errors.message} />
      </div>

      {/* Honeypot: invisible to people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave this field empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {notice && (
        <p role="alert" className="rounded-xl border border-ember/40 bg-ember/5 px-4 py-3 text-[0.9375rem] text-ember">
          {notice}
        </p>
      )}

      <div>
        <button type="submit" disabled={status === "sending"} className={buttonClasses("primary", "md", "w-full sm:w-auto")}>
          {status === "sending" ? "Sending…" : "Send my enquiry"}
          {status !== "sending" && <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />}
        </button>
        <p className="mt-3 text-sm text-muted">
          We only use your details to reply to you. See our{" "}
          <Link href="/privacy" className="underline underline-offset-4 hover:text-ink">
            privacy policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
