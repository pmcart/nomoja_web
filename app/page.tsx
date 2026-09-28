import type { Metadata } from "next";
import Link from "next/link";
import { LinkButton } from "@/components/button";
import { ContactForm } from "@/components/contact-form";
import { Faq, type FaqItem } from "@/components/faq";
import { ArrowRight } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { TrustedBy } from "@/components/trusted-by";
import { Container, delay, Eyebrow } from "@/components/ui";
import { WorkflowVisual } from "@/components/workflow-visual";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const trust = [
  { label: "Based in Ireland", text: "Working with Irish businesses first" },
  { label: "Any size", text: "From small fixes to large builds" },
  { label: "AI-first", text: "But plain software when it’s the better answer" },
  { label: "People in charge", text: "Human review where it matters" },
];

const services = [
  {
    n: "01",
    title: "AI apps & workflows",
    text: "Custom AI that fits how your business already runs: handling documents, answering questions from your own data, drafting the replies and reports your team keeps writing by hand.",
    href: "/services#ai",
    focus: true,
  },
  {
    n: "02",
    title: "Web apps & SaaS",
    text: "Customer portals, internal tools and software products, built properly and ready to grow from first version to full platform.",
    href: "/services#apps",
  },
  {
    n: "03",
    title: "Websites",
    text: "Fast, clear, credible websites that turn visitors into enquiries, built so you can keep them up to date.",
    href: "/services#websites",
  },
  {
    n: "04",
    title: "Small projects & fixes",
    text: "Integrations, automations, prototypes, audits, or rescuing a project that’s stalled. Small jobs are welcome here.",
    href: "/services#small",
  },
];

const examples = [
  {
    tag: "Triage",
    title: "Enquiries read, sorted and answered",
    text: "Incoming emails and form submissions are categorised and get a drafted reply, sent only when someone on your team approves it.",
  },
  {
    tag: "Documents",
    title: "Invoices and forms, without the retyping",
    text: "Pull the details out of PDFs and forms, check them, and drop clean data into the systems you already use.",
  },
  {
    tag: "Knowledge",
    title: "Answers from your own documents",
    text: "An assistant that answers staff questions from your policies, manuals and past work, and shows where each answer came from.",
  },
  {
    tag: "Drafting",
    title: "First drafts of quotes and reports",
    text: "Quotes, summaries and weekly reports assembled from your data, in your format, ready for a human edit.",
  },
  {
    tag: "Assistant",
    title: "A front line that knows when to hand off",
    text: "A chat assistant that handles the routine questions and passes the tricky ones to your team, with the full context attached.",
  },
  {
    tag: "Reporting",
    title: "Tidy data, honest reports",
    text: "Clean up messy spreadsheets, flag what doesn’t add up, and produce the reports you keep rebuilding by hand.",
  },
];

const steps = [
  {
    n: "01",
    title: "Talk",
    text: "A straight conversation about what you’re trying to do and what’s getting in the way. No jargon, no script. If AI isn’t the answer, we’ll say so.",
  },
  {
    n: "02",
    title: "Scope",
    text: "We turn the idea into a clear, small first version: what it does, what it doesn’t, what it needs, and what it will take.",
  },
  {
    n: "03",
    title: "Build",
    text: "We build in short cycles and show working software early, so you’re steering something real instead of reading a spec.",
  },
  {
    n: "04",
    title: "Improve",
    text: "After launch we watch how it’s really used, fix what’s rough and extend what works. With AI especially, version one is the start.",
  },
];

const principles = [
  {
    title: "AI where it earns its place.",
    text: "Plenty of problems are better solved with plain software, a better process, or a spreadsheet. We’ll tell you which one you have.",
  },
  {
    title: "People stay in charge.",
    text: "We design AI workflows with a human check wherever a mistake would matter. Drafts, not surprises.",
  },
  {
    title: "Built to be understood.",
    text: "Clear, maintainable software that your next developer, or your own team, can pick up. No black boxes.",
  },
  {
    title: "Local, and careful with your data.",
    text: "Based in Ireland and building for Irish businesses, with GDPR and the EU AI Act in mind from the first conversation.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Do we need to be technical to work with you?",
    a: "No. You bring the problem and the knowledge of your business. We handle the technical side and explain it in plain English as we go.",
  },
  {
    q: "What does a project cost?",
    a: "It depends on what you’re building, so we don’t publish a one-size-fits-all price list. Tell us what you’re after and we’ll give you an honest estimate. Where we can, we’ll suggest a smaller first version so you see value before committing to more.",
  },
  {
    q: "Will the AI make things up?",
    a: "It can, which is why we design around it: answers grounded in your own documents, checks on anything that matters, and a person approving anything customer-facing or high-stakes. We’ll be upfront about what a system can and can’t do reliably.",
  },
  {
    q: "Where does our data go?",
    a: "We agree that with you before we build: which tools and providers are used, where data is processed and what’s stored. We choose options with your data protection obligations in mind, and put it in writing.",
  },
  {
    q: "Do you only work with Irish businesses?",
    a: "We’re focused on Ireland to start with, and we’re happy to talk to anyone with a good project.",
  },
  {
    q: "Do you take on small projects?",
    a: "Yes. A website or a small fix is as welcome as a multi-month platform build. We match the approach to the size of the job.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO: one promise, one action */}
      <section className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10">
          <div className="dot-grid absolute inset-0" />
          <div className="absolute -right-32 -top-32 size-[34rem] rounded-full bg-coral/25 blur-[110px]" />
          <div className="absolute -left-44 top-1/2 size-[30rem] rounded-full bg-forest/10 blur-[110px]" />
        </div>

        <Container className="grid items-center gap-14 pb-20 pt-12 sm:pt-20 lg:grid-cols-[1fr_1.08fr] lg:gap-12 lg:pb-28 lg:pt-24">
          <div className="min-w-0">
            <div className="rise" style={delay(0)}>
              <Eyebrow>Software &amp; AI studio · Ireland</Eyebrow>
            </div>
            <h1
              className="rise mt-6 text-balance font-serif text-[clamp(2.7rem,5.4vw,4.5rem)] leading-[0.98] tracking-[-0.02em]"
              style={delay(80)}
            >
              Software and AI that actually <em className="italic text-ember">earn their keep.</em>
            </h1>
            <p className="rise mt-6 max-w-xl text-pretty text-lg text-ink-2 sm:text-xl" style={delay(180)}>
              Nomoja builds custom apps, SaaS and websites for Irish businesses, with a focus on AI-powered workflows
              that take real work off your team’s plate.
            </p>
            <div className="rise mt-9 flex flex-wrap items-center gap-3" style={delay(280)}>
              <LinkButton href="#start">Tell us what you’re building</LinkButton>
              <LinkButton href="/services" variant="secondary">
                See what we build
              </LinkButton>
            </div>
            <p className="rise mt-4 text-sm text-muted" style={delay(340)}>
              No sales script. Just a straight conversation about what’s worth building.
            </p>
          </div>

          <div className="rise min-w-0" style={delay(200)}>
            <WorkflowVisual />
          </div>
        </Container>
      </section>

      {/* WHAT WE STAND FOR: honest positioning */}
      <Container>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line py-7 md:grid-cols-4">
          {trust.map((item) => (
            <li key={item.label}>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-ember">{item.label}</p>
              <p className="mt-1.5 text-[0.9375rem] leading-snug text-ink-2">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>

      {/* TRUSTED BY: real companies, real logos, linked back to their own sites */}
      <TrustedBy />

      {/* PROBLEM */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <Eyebrow>The situation</Eyebrow>
            <h2 className="mt-5 text-balance font-serif text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.04] tracking-[-0.015em]">
              Everyone’s selling AI. Most businesses need <em className="italic">one thing that works.</em>
            </h2>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-lg text-ink-2">
            <p className="text-pretty">
              Somewhere in your business, people are copying details between systems, answering the same questions,
              chasing documents and building the same report every week. You suspect AI could help. You’re just not
              sure where it genuinely does, and where it’s expensive noise.
            </p>
            <p className="text-pretty">
              We start with the problem, not the technology. Sometimes the answer is an AI workflow. Sometimes it’s
              a simple piece of software, or a better process. We’ll tell you honestly which, and then build the
              smallest thing that proves it.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-paper-2 py-20 sm:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>What we build</Eyebrow>
            <h2 className="mt-5 text-balance font-serif text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.04] tracking-[-0.015em]">
              Software for every stage, <em className="italic">with AI at the centre.</em>
            </h2>
          </Reveal>

          <ul className="mt-12 divide-y divide-ink/15 border-y border-ink/15">
            {services.map((service, i) => (
              <li key={service.n}>
                <Reveal delay={i * 60}>
                  <Link
                    href={service.href}
                    className="group grid gap-3 py-8 sm:grid-cols-[4rem_1fr_auto] sm:items-start sm:gap-8 md:grid-cols-[4rem_1fr_1.3fr_auto]"
                  >
                    <span className="font-mono text-sm text-muted">{service.n}</span>
                    <span className="flex flex-wrap items-center gap-3">
                      <span className="font-serif text-3xl leading-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
                        {service.title}
                      </span>
                      {service.focus && (
                        <span className="rounded-full bg-forest px-3 py-1 font-mono text-xs uppercase tracking-[0.1em] text-paper">
                          Our focus
                        </span>
                      )}
                    </span>
                    <span className="text-pretty text-ink-2 sm:col-start-2 md:col-start-auto">{service.text}</span>
                    <span
                      aria-hidden="true"
                      className="hidden size-11 place-items-center rounded-full border border-ink/20 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-paper sm:grid"
                    >
                      <ArrowRight />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* AI IN PRACTICE */}
      <section id="ai-in-practice" className="on-dark bg-forest py-20 text-paper sm:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow dark>AI in practice</Eyebrow>
            <h2 className="mt-5 text-balance font-serif text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.04] tracking-[-0.015em]">
              What an AI workflow <em className="italic text-coral">actually looks like.</em>
            </h2>
            <p className="mt-5 text-pretty text-lg text-mist">
              A few of the things we build. Each one keeps a person in charge of what matters, and each starts small.
            </p>
          </Reveal>

          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {examples.map((item, i) => (
              <li key={item.title}>
                <Reveal
                  delay={(i % 3) * 80}
                  className="h-full rounded-2xl border border-forest-line bg-forest-2/60 p-7 transition-colors hover:bg-forest-2"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-coral">{item.tag}</p>
                  <h3 className="mt-4 text-balance font-serif text-2xl leading-snug">{item.title}</h3>
                  <p className="mt-3 text-pretty text-mist">{item.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="mt-12">
            <LinkButton href="#start">Got a process like this? Tell us</LinkButton>
          </Reveal>
        </Container>
      </section>

      {/* PROCESS */}
      <section id="how-we-work" className="py-20 sm:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="mt-5 text-balance font-serif text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.04] tracking-[-0.015em]">
              Small steps, real software, <em className="italic">no surprises.</em>
            </h2>
          </Reveal>

          <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.n}>
                <Reveal delay={i * 80} className="border-t border-ink pt-6">
                  <span className="font-serif text-6xl leading-none text-forest/25">{step.n}</span>
                  <h3 className="mt-5 font-serif text-3xl">{step.title}</h3>
                  <p className="mt-3 text-pretty text-ink-2">{step.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-paper-2 py-20 sm:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>How we think</Eyebrow>
            <h2 className="mt-5 text-balance font-serif text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.04] tracking-[-0.015em]">
              Plain-spoken, careful, <em className="italic">on your side.</em>
            </h2>
          </Reveal>

          <ul className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
            {principles.map((item, i) => (
              <li key={item.title}>
                <Reveal delay={(i % 2) * 80}>
                  <h3 className="font-serif text-3xl leading-snug">{item.title}</h3>
                  <p className="mt-3 max-w-md text-pretty text-ink-2">{item.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ: objections, answered straight */}
      <section id="faq" className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-5 text-balance font-serif text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.04] tracking-[-0.015em]">
              The things people <em className="italic">ask first.</em>
            </h2>
            <p className="mt-5 max-w-sm text-pretty text-ink-2">
              Something not covered here? Ask us in the form below. We’d rather answer honestly than guess.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Faq items={faqs} />
          </Reveal>
        </Container>
      </section>

      {/* FINAL CTA: one action */}
      <section id="start" className="on-dark bg-forest py-20 text-paper sm:py-28">
        <Container className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <Reveal>
            <Eyebrow dark>Start a project</Eyebrow>
            <h2 className="mt-5 text-balance font-serif text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[1.02] tracking-[-0.02em]">
              Got something in mind? <em className="italic text-coral">Let’s talk it through.</em>
            </h2>
            <p className="mt-6 max-w-md text-pretty text-lg text-mist">
              Tell us what you’re trying to do. A few lines is plenty. We’ll read it properly and come back with
              questions, or a straight answer on whether and how we can help.
            </p>
            <ol className="mt-10 space-y-5">
              {[
                ["1", "You tell us what you’re trying to do."],
                ["2", "We reply with questions or a suggested next step."],
                ["3", "If it makes sense, we set up a short call."],
              ].map(([n, text]) => (
                <li key={n} className="flex items-center gap-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-forest-line font-mono text-sm text-coral">
                    {n}
                  </span>
                  <span className="text-paper">{text}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={100} className="rounded-3xl bg-paper p-6 text-ink sm:p-9">
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
