import type { Metadata } from "next";
import { LinkButton } from "@/components/button";
import { Check } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Container, delay, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI apps and workflows, web apps and SaaS, websites and small projects, built for businesses in Ireland.",
  alternates: { canonical: "/services" },
};

const offerings = [
  {
    id: "ai",
    n: "01",
    title: "AI apps & workflows",
    lead: "Our main focus.",
    body: "Custom AI that fits into how your business already runs: processing documents, answering questions from your own data, triaging and drafting replies, producing the reports your team keeps building by hand. We design each one with a person reviewing wherever a mistake would matter, and we start with the smallest version that proves the value.",
    goodFor: [
      "Teams buried in email, documents or repetitive admin",
      "Businesses whose knowledge lives in files and in people’s heads",
      "Anyone who’s seen a chatbot demo and wondered what it would take to make it genuinely useful",
    ],
    includes: [
      "A short discovery to find where AI genuinely helps (and where it doesn’t)",
      "A working prototype on your real data",
      "Integration with the tools you already use",
      "Human review built in where it matters",
      "Monitoring and improvement after launch",
    ],
  },
  {
    id: "apps",
    n: "02",
    title: "Web apps & SaaS",
    lead: "Products and internal tools, built properly.",
    body: "From the first working version of a new product to the internal tools your team relies on every day. We build web applications that are fast, secure and easy to extend, and we’re comfortable taking an idea from sketch to launch.",
    goodFor: [
      "Founders turning an idea into a product",
      "Businesses outgrowing spreadsheets and shared inboxes",
      "Teams that need a customer portal or an internal tool",
    ],
    includes: [
      "Scoping and technical design",
      "Design and build in short, visible cycles",
      "Sign-in, payments and integrations where needed",
      "Deployment and handover, or ongoing support",
    ],
  },
  {
    id: "websites",
    n: "03",
    title: "Websites",
    lead: "Clear, fast, and built to get you enquiries.",
    body: "A website should make it obvious what you do and easy to get in touch. We design and build fast, accessible sites that are written to be found in search and structured to turn visitors into conversations.",
    goodFor: [
      "New businesses that need a credible presence",
      "Sites that look dated or load slowly",
      "Companies whose website doesn’t generate enquiries",
    ],
    includes: [
      "Design, and help with the words",
      "A fast, accessible, mobile-first build",
      "Search and analytics foundations, if you want them",
      "A simple way for you to keep content up to date",
    ],
  },
  {
    id: "small",
    n: "04",
    title: "Small projects & fixes",
    lead: "Not everything needs a big project.",
    body: "If you have a specific problem (a small automation, an integration between two tools, a prototype to test an idea, or a project that’s gone quiet), we’re happy to take a look. Small jobs are welcome.",
    goodFor: [
      "One-off integrations and automations",
      "Prototypes and proofs of concept",
      "Audits, reviews and second opinions",
      "Rescuing or finishing a stalled project",
    ],
    includes: [
      "A clear, small scope",
      "A straight estimate before you commit",
      "Plain-English updates as we go",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-40 size-[30rem] rounded-full bg-coral/20 blur-[110px]" />
        </div>
        <Container className="pb-16 pt-16 sm:pb-20 sm:pt-24">
          <div className="rise" style={delay(0)}>
            <Eyebrow>Services</Eyebrow>
          </div>
          <h1
            className="rise mt-6 max-w-4xl text-balance font-serif text-[clamp(2.8rem,7vw,5.2rem)] leading-[1] tracking-[-0.02em]"
            style={delay(80)}
          >
            What we build, <em className="italic text-ember">and who it’s for.</em>
          </h1>
          <p className="rise mt-6 max-w-2xl text-pretty text-lg text-ink-2 sm:text-xl" style={delay(180)}>
            AI-powered apps and workflows are our focus. Alongside them, we build the software and websites businesses
            run on, from a one-week fix to a multi-month platform.
          </p>
        </Container>
      </section>

      <Container>
        <div className="divide-y divide-ink/15 border-y border-ink/15">
          {offerings.map((item) => (
            <section
              key={item.id}
              id={item.id}
              aria-labelledby={`${item.id}-title`}
              className="grid gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_1.4fr] lg:gap-20"
            >
              <Reveal>
                <p className="font-mono text-sm text-muted">{item.n}</p>
                <h2 id={`${item.id}-title`} className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
                  {item.title}
                </h2>
                <p className="mt-3 text-lg text-ember">{item.lead}</p>
              </Reveal>

              <Reveal delay={80}>
                <p className="text-pretty text-lg text-ink-2">{item.body}</p>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-muted">Good for</h3>
                    <ul className="mt-4 space-y-3">
                      {item.goodFor.map((line) => (
                        <li key={line} className="flex gap-3 text-ink-2">
                          <Check className="mt-1 size-4 shrink-0 text-forest" />
                          <span className="text-pretty">{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-muted">What’s involved</h3>
                    <ul className="mt-4 space-y-3">
                      {item.includes.map((line) => (
                        <li key={line} className="flex gap-3 text-ink-2">
                          <Check className="mt-1 size-4 shrink-0 text-forest" />
                          <span className="text-pretty">{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </section>
          ))}
        </div>
      </Container>

      <section className="on-dark mt-20 bg-forest py-20 text-paper sm:mt-28 sm:py-24">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Reveal className="max-w-2xl">
            <h2 className="text-balance font-serif text-[clamp(2.1rem,4.6vw,3.4rem)] leading-[1.05] tracking-[-0.015em]">
              Not sure which one you need? <em className="italic text-coral">That’s a normal place to start.</em>
            </h2>
            <p className="mt-4 text-lg text-mist">
              Tell us what you’re trying to do and we’ll help you work out the right shape for it.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <LinkButton href="/contact">Tell us what you’re building</LinkButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
