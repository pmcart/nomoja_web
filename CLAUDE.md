@AGENTS.md

# Nomoja website

Marketing site for **Nomoja**, a software and AI development studio for Irish businesses (AI apps and workflows first; also web apps/SaaS, websites, small projects). Its only job is to win enquiries. **It is a brochure site, not an application**: keep it small, static and fast. No database, no CMS, no auth.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS 4 (design tokens live in `app/globals.css` under `@theme`). Read `node_modules/next/dist/docs/` before using Next APIs (see AGENTS.md).

## Commands

`npm run dev` · `npm run build` · `npm run start` · `npm run lint`

## Layout

- `app/page.tsx` home · `app/services` · `app/contact` · `app/privacy` · `app/not-found.tsx`
- `app/api/contact/route.ts` enquiry endpoint (honeypot, min fill time, rate limit, validation, Resend email)
- `components/` shared UI. `workflow-visual.tsx` is the hero diagram; `contact-form.tsx` is the only client-heavy form
- `lib/site.ts` site-wide facts (name, URL, optional public email, company registration details, nav)
- `lib/contact.ts` form fields and validation, shared by client and server
- `BRIEF.md` creative direction. **Read it before any visual or copy change.**

## Rules that matter

- **Never fabricate proof**: no invented client logos, testimonials, stats or case studies. Add real ones only when the owner supplies them.
- Coral (`#FF6B3D`) is never used for text on paper (fails contrast); use `ember` for accent text.
- One primary button style, one secondary. One call to action per section: the enquiry form.
- Keep the form to the minimum fields. Validate on blur; the server re-validates everything.
- Content must be visible without JavaScript; motion respects `prefers-reduced-motion`.
- If analytics or any non-essential cookie is ever added, update `app/privacy/page.tsx` and add consent first.
- Copy uses typographic apostrophes and quotes (’ “ ”), not straight ones.

## Environment

See `.env.example`. `CONTACT_TO_EMAIL` (recipient), `RESEND_API_KEY` (delivery), `CONTACT_FROM_EMAIL`, `NEXT_PUBLIC_SITE_URL` (**baked in at build time**), optional `NEXT_PUBLIC_CONTACT_EMAIL`. With no API key in development, enquiries are printed to the terminal.

## Skills

`.claude/skills/` holds a website-focused subset of the RampStack catalog (see `RAMPSTACK-PROVENANCE.txt`). Most useful here: `design-standards`, `landing-page-copy`, `form-strategy`, `seo-onpage`, `seo-technical`, `accessibility-audit`, `performance-optimization`, `security-baseline`, `launch-runbook`.
