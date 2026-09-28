import Image from "next/image";
import { Container } from "./ui";

/**
 * Real logos, self-hosted, each linking back to the company's own site. Names and
 * descriptions are pulled from each site's own copy (title/meta description), not
 * written by us. See RAMPSTACK-PROVENANCE.txt-style discipline: nothing here is invented.
 */
const companies = [
  {
    name: "StoryOps",
    href: "https://storyops.news",
    description: "Media monitoring, enhanced with AI",
    src: "/logos/storyops-mark.png",
    width: 1254,
    height: 1254,
  },
  {
    name: "Doramino",
    href: "https://doramino.io",
    description: "DORA resilience testing, made manageable",
    src: "/logos/doramino-mark.png",
    width: 1254,
    height: 1254,
  },
  {
    name: "PanoptAI",
    href: "https://panoptai.io",
    description: "AI usage monitoring & compliance",
    src: "/logos/panoptai-mark.svg",
    width: 64,
    height: 64,
  },
  {
    name: "See Us All",
    href: "https://seeusall.ie",
    description: "A calmer way for families to organise life",
    src: "/logos/seeusall-mark.png",
    width: 450,
    height: 320,
  },
] as const;

export function TrustedBy() {
  return (
    <section aria-label="Trusted by" className="border-b border-line bg-paper py-12 sm:py-14">
      <Container className="flex flex-col gap-7 sm:flex-row sm:items-center sm:gap-10">
        <p className="shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-muted">Trusted by</p>
        <ul className="grid flex-1 grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4">
          {companies.map((c) => (
            <li key={c.name}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-card transition-colors group-hover:border-ink/35 group-focus-visible:border-ink/35">
                  <Image
                    src={c.src}
                    alt=""
                    width={c.width}
                    height={c.height}
                    className="h-7 w-7 object-contain"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[0.9375rem] font-medium text-ink">{c.name}</span>
                  <span className="block truncate text-sm text-muted">{c.description}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
