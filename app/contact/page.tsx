import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Container, delay, Eyebrow } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Nomoja what you’re trying to do. A few lines is plenty. We’ll read it properly and reply.",
  alternates: { canonical: "/contact" },
};

const next = [
  ["1", "You tell us what you’re trying to do."],
  ["2", "We reply with questions, or a suggested next step."],
  ["3", "If it makes sense, we set up a short call."],
];

export default function ContactPage() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-32 size-[28rem] rounded-full bg-coral/20 blur-[110px]" />
      </div>

      <Container className="grid items-start gap-12 pb-24 pt-14 sm:pt-20 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <div className="rise" style={delay(0)}>
            <Eyebrow>Contact</Eyebrow>
          </div>
          <h1
            className="rise mt-6 text-balance font-serif text-[clamp(2.6rem,6vw,4.6rem)] leading-[1] tracking-[-0.02em]"
            style={delay(80)}
          >
            Tell us what you’re <em className="italic text-ember">trying to do.</em>
          </h1>
          <p className="rise mt-6 max-w-md text-pretty text-lg text-ink-2" style={delay(160)}>
            A few lines is plenty. We’ll read it properly and come back with questions, or a straight answer on whether
            and how we can help.
          </p>

          <div className="rise mt-10" style={delay(240)}>
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-muted">What happens next</h2>
            <ol className="mt-5 space-y-4">
              {next.map(([n, text]) => (
                <li key={n} className="flex items-center gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-ink/20 font-mono text-sm text-ember">
                    {n}
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ol>
            {site.publicEmail && (
              <p className="mt-8 text-ink-2">
                Prefer email?{" "}
                <a href={`mailto:${site.publicEmail}`} className="font-medium underline underline-offset-4">
                  {site.publicEmail}
                </a>
              </p>
            )}
          </div>
        </div>

        <div className="rise rounded-3xl border border-line bg-card p-6 shadow-[0_40px_90px_-60px_rgb(12_47_36/0.5)] sm:p-9" style={delay(160)}>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
