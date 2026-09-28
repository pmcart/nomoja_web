import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Nomoja collects, uses and protects the personal data you send us through this website.",
  alternates: { canonical: "/privacy" },
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-serif text-3xl leading-tight">{title}</h2>
      <div className="mt-4 space-y-4 text-ink-2">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  const { company, publicEmail } = site;
  const companyDetails = [
    company.legalName,
    company.registrationNumber && `registered in Ireland, no. ${company.registrationNumber}`,
    company.registeredOffice && `registered office: ${company.registeredOffice}`,
  ].filter(Boolean);

  // TODO(owner): this is a plain-English starter policy, not legal advice. Have it reviewed
  // before launch, and update it if you add analytics, a newsletter or other data processing.
  return (
    <Container className="max-w-3xl pb-24 pt-14 sm:pt-20">
      <Eyebrow>Legal</Eyebrow>
      <h1 className="mt-6 text-balance font-serif text-[clamp(2.6rem,6vw,4.4rem)] leading-[1] tracking-[-0.02em]">
        Privacy policy
      </h1>
      <p className="mt-5 text-lg text-ink-2">
        The short version: we collect what you send us through the enquiry form, we use it to reply to you, and we don’t
        sell it or use it for anything else.
      </p>
      <p className="mt-2 text-sm text-muted">Last updated 26 September 2026.</p>

      <Section title="Who we are">
        <p>
          Nomoja is a software and AI development business based in Ireland. We’re the controller of the personal data
          collected through this website{companyDetails.length > 0 && <> ({companyDetails.join(", ")})</>}.
        </p>
        <p>
          To contact us about your data,{" "}
          {publicEmail ? (
            <>
              email <a className="font-medium underline underline-offset-4" href={`mailto:${publicEmail}`}>{publicEmail}</a> or
              use the <a className="font-medium underline underline-offset-4" href="/contact">contact form</a>.
            </>
          ) : (
            <>
              use the <a className="font-medium underline underline-offset-4" href="/contact">contact form</a> and mention
              your request.
            </>
          )}
        </p>
      </Section>

      <Section title="What we collect">
        <p>
          <strong className="font-medium text-ink">When you send an enquiry:</strong> your name, email address, company
          (optional), the type of project you’re interested in (optional) and the message you write.
        </p>
        <p>
          <strong className="font-medium text-ink">Automatically:</strong> our hosting provider processes technical data
          such as your IP address, browser type, the pages requested and the time, in server logs, in order to deliver
          the site and keep it secure.
        </p>
      </Section>

      <Section title="Why we use it, and our legal basis">
        <p>
          We use your enquiry to reply to you and, if you’d like, to discuss or provide our services. Our legal basis is
          taking steps at your request before entering into a contract, and our legitimate interests in running and
          securing our business.
        </p>
        <p>
          We don’t add enquiries to a mailing list, and we don’t use them for automated decision-making or profiling.
        </p>
      </Section>

      <Section title="Who we share it with">
        <p>
          Only service providers that help us run this site and handle email: our email delivery provider (currently
          Resend) and our hosting provider. They process data on our instructions. Some are based outside the European
          Economic Area; where that’s the case we rely on appropriate safeguards, such as the European Commission’s
          Standard Contractual Clauses. We don’t sell your data.
        </p>
      </Section>

      <Section title="How long we keep it">
        <p>
          Only as long as we need it for the purposes above. If an enquiry doesn’t lead to a project, we delete it once
          there’s no longer a reason to keep it. If we do work together, we keep the relevant records for the duration of
          the relationship and for as long as the law requires.
        </p>
      </Section>

      <Section title="Cookies">
        <p>
          This site doesn’t use advertising or analytics cookies, and we don’t track you across other websites. If that
          changes, we’ll update this page and ask for your consent where the law requires it.
        </p>
      </Section>

      <Section title="Your rights">
        <p>
          You can ask us for a copy of your personal data, ask us to correct or delete it, ask us to restrict how we use
          it, object to us using it, or ask for it in a portable format. Get in touch using the details above and we’ll
          respond promptly.
        </p>
        <p>
          You also have the right to complain to the Irish Data Protection Commission at{" "}
          <a
            className="font-medium underline underline-offset-4"
            href="https://www.dataprotection.ie"
            rel="noopener noreferrer"
            target="_blank"
          >
            dataprotection.ie
          </a>
          .
        </p>
      </Section>

      <Section title="Changes to this policy">
        <p>If we change how we handle personal data, we’ll update this page and the date at the top.</p>
      </Section>
    </Container>
  );
}
