import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "./ui";
import { Wordmark } from "./wordmark";

const linkClass = "text-mist underline-offset-4 transition-colors hover:text-paper hover:underline";

export function Footer() {
  const { company } = site;
  const year = new Date().getFullYear();
  const companyLine = [
    company.legalName,
    company.registrationNumber && `Registered in Ireland, no. ${company.registrationNumber}`,
    company.registeredOffice && `Registered office: ${company.registeredOffice}`,
  ].filter(Boolean);

  return (
    <footer className="on-dark bg-forest text-paper">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Wordmark className="text-[2.4rem]" />
            <p className="mt-4 max-w-xs text-mist">{site.tagline}. Custom software, websites and AI-powered workflows.</p>
          </div>

          <nav aria-label="Services">
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-mist">Services</h2>
            <ul className="mt-4 space-y-3">
              <li><Link className={linkClass} href="/services#ai">AI apps &amp; workflows</Link></li>
              <li><Link className={linkClass} href="/services#apps">Web apps &amp; SaaS</Link></li>
              <li><Link className={linkClass} href="/services#websites">Websites</Link></li>
              <li><Link className={linkClass} href="/services#small">Small projects</Link></li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-mist">Company</h2>
            <ul className="mt-4 space-y-3">
              <li><Link className={linkClass} href="/#how-we-work">How we work</Link></li>
              <li><Link className={linkClass} href="/#faq">FAQ</Link></li>
              <li><Link className={linkClass} href="/contact">Contact</Link></li>
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-mist">Legal</h2>
            <ul className="mt-4 space-y-3">
              <li><Link className={linkClass} href="/privacy">Privacy policy</Link></li>
              {site.publicEmail && (
                <li><a className={linkClass} href={`mailto:${site.publicEmail}`}>{site.publicEmail}</a></li>
              )}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-forest-line pt-6 text-sm text-mist sm:flex-row sm:justify-between">
          <p>© {year} Nomoja. Made in Ireland.</p>
          {companyLine.length > 0 && <p>{companyLine.join(" · ")}</p>}
        </div>
      </Container>
    </footer>
  );
}
