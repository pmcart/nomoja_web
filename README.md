# Nomoja website

Marketing site for Nomoja: custom software and AI-powered workflows for Irish businesses. Built with Next.js 16, React 19 and Tailwind CSS 4.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # static export, served from ./out
npm run lint
```

Copy `.env.example` to `.env.local` and fill it in (already done for local development). The enquiry form posts straight to Formspree from the browser, so there's nothing to configure for local delivery — submissions in dev land in the same Formspree form as production.

## Before launch

- [x] **Email delivery works** — the contact form posts to Formspree (`https://formspree.io/f/mppwkqjv`), which forwards enquiries by email. Check the form's notification address in the [Formspree dashboard](https://formspree.io).
- [x] **Site URL.** `NEXT_PUBLIC_SITE_URL` is set to `https://nomoja.com` in `.github/workflows/deploy.yml` (canonical links, sitemap and social cards use it, baked in **at build time**).
- [ ] **Company details.** Fill in `company` in `lib/site.ts` (legal name, CRO number, registered office). Irish rules expect these on a business website; they stay hidden until set.
- [ ] **Review the copy and the privacy policy** (`app/privacy/page.tsx`). Both are drafts written without knowing how you actually run things; the privacy policy is a plain-English starter, not legal advice.
- [ ] **Real proof.** Add case studies or testimonials when you have them. Nothing here is invented, by design.
- [ ] If you add analytics, add cookie consent first and update the privacy policy.

## Structure

See `CLAUDE.md` for a map of the code and the rules the site is built on, and `BRIEF.md` for the design direction.

## Deploying

Static export, hosted on GitHub Pages. `.github/workflows/deploy.yml` builds on every push to `master` and deploys via GitHub's `actions/deploy-pages`. The custom domain is set in `public/CNAME` and in the repo's Settings → Pages; DNS is managed at the registrar. Spam defence for the form is the honeypot field plus Formspree's own filtering; add Formspree's reCAPTCHA option or Cloudflare Turnstile if spam ever gets through.
