/**
 * Single source of truth for site-wide facts. Edit here, not in components.
 */
export const site = {
  name: "Nomoja",
  tagline: "Software and AI for Irish businesses",
  description:
    "Nomoja builds custom software, SaaS, websites and AI-powered workflows for businesses in Ireland. Tell us what you’re trying to do.",

  // Set NEXT_PUBLIC_SITE_URL in production (used for canonical URLs, sitemap, social cards).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  // Optional public contact address. Left empty on purpose: enquiries go through the
  // form, and an address in the page source invites spam. Set NEXT_PUBLIC_CONTACT_EMAIL
  // if you want one shown in the footer and privacy policy.
  publicEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",

  // Registered company details. Irish rules expect business websites to show these once
  // the company is registered, so fill them in when you have them. Empty values are hidden.
  company: {
    legalName: "",
    registrationNumber: "",
    registeredOffice: "",
  },

  nav: [
    { label: "Services", href: "/services" },
    { label: "How we work", href: "/#how-we-work" },
    { label: "FAQ", href: "/#faq" },
  ],
} as const;
