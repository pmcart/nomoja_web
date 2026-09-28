# Nomoja website

Marketing site for Nomoja: custom software and AI-powered workflows for Irish businesses. Built with Next.js 16, React 19 and Tailwind CSS 4.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # production build
npm run lint
```

Copy `.env.example` to `.env.local` and fill it in (already done for local development). In development, with no `RESEND_API_KEY`, submitted enquiries are printed to the terminal instead of emailed.

## Before launch

- [x] **Email delivery works** (tested 26 Sep 2026: an enquiry through the live endpoint was delivered to `CONTACT_TO_EMAIL` via Resend). For production, set `RESEND_API_KEY` in your host's environment settings, ideally a **sending-only** key rather than a full-access one. Later, verify your own domain in Resend and set `CONTACT_FROM_EMAIL` to an address on it (e.g. `Nomoja <hello@yourdomain.ie>`); the default `onboarding@resend.dev` test sender is fine for now but more likely to land in spam.
- [ ] **Site URL.** Set `NEXT_PUBLIC_SITE_URL` to the live domain **at build time** (canonical links, sitemap and social cards use it).
- [ ] **Company details.** Fill in `company` in `lib/site.ts` (legal name, CRO number, registered office). Irish rules expect these on a business website; they stay hidden until set.
- [ ] **Review the copy and the privacy policy** (`app/privacy/page.tsx`). Both are drafts written without knowing how you actually run things; the privacy policy is a plain-English starter, not legal advice.
- [ ] **Real proof.** Add case studies or testimonials when you have them. Nothing here is invented, by design.
- [ ] If you add analytics, add cookie consent first and update the privacy policy.

## Structure

See `CLAUDE.md` for a map of the code and the rules the site is built on, and `BRIEF.md` for the design direction.

## Deploying

Any Node host works; [Vercel](https://vercel.com) is the simplest. Set the environment variables from `.env.example` in the host's settings. The enquiry rate limiter is in-memory per server instance, which is fine for a contact form; add Cloudflare Turnstile if spam ever gets through.
