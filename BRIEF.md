# Nomoja: Creative Brief

Produced with the `creative-direction` skill. Every visual or copy decision on the site should answer to this. If a change wants to break it, that is a decision to make on purpose, not by accident.

## Project

**Nomoja** is a new software studio for Irish businesses. It builds apps, SaaS, websites and small projects of any size, with a focus on AI-powered apps and workflows.

**Audience:** owners and managers of Irish SMEs (and some founders) who suspect AI could help their business but can't tell where it genuinely does and where it's hype. Mostly non-technical. Tired of jargon.

**Goal:** turn visitors into enquiries. One action matters: the enquiry form.

## The four axes

| Axis | Position | Why |
|---|---|---|
| Tone register | **Conversational**, with professional restraint | The AI category is loud and jargon-heavy. Plain speech is the differentiator. |
| Aesthetic philosophy | **Editorial Restrained** | Generous space, one signature visual, few colours. Confidence over decoration. |
| Audience relationship | **Companion** | The audience feels lost, not ignorant. We walk with them; we don't lecture or sell at them. |
| Sensory ambition | **Considered** | The craft should be noticed without being the point. |

No tension flagged: Editorial Restrained + Considered + Conversational is a coherent, well-trodden combination.

## Synthesis

This brief produces a site that feels like a well-made magazine about software: warm paper, ink-black serif headlines with an italic emphasis, one vivid coral accent, and deep forest green for weight. It speaks like a sensible person across a table. It shows what AI work looks like (one animated diagram, concrete examples) instead of claiming it. It asks for one thing, an honest description of the problem, and makes that easy.

## Design tokens

Defined in `app/globals.css` (`@theme`). Contrast is WCAG AA for every text pairing.

- **Paper** `#F4F1EA` (page), **Paper-2** `#EBE6DA` (alternate sections), **Ink** `#14130F`
- **Forest** `#0C2F24` (dark sections, footer), **Mist** `#A9B8AF` (secondary text on forest)
- **Coral** `#FF6B3D`: buttons and small accents only, never text on paper. **Ember** `#B8330A` is the text accent on paper.
- **Type:** Instrument Serif (display, with italic for emphasis), Geist (body/UI), Geist Mono (small labels).
- **Buttons:** one primary (coral, ink text), one secondary (outline). No others.
- **Motion:** page-load rise, scroll reveal, and the hero diagram. All disabled under `prefers-reduced-motion`.

## Rejection list

What this brief says no to:

- No fabricated proof: no invented client logos, testimonials, statistics or case studies. A "Trusted by" logo (StoryOps, Doramino, PanoptAI, See Us All, added 28 Sep 2026) is real: self-hosted from `public/logos/`, linked to the company's own site, described only in that company's own words. No quote is ever put in a company's mouth.
- No purple/blue AI gradients, glowing brains, robot imagery, or "revolutionise / unlock / supercharge" language.
- No stock photography.
- No dark-mode-by-default "hacker" look; the site is deliberately light and warm.
- No pop-ups, chat widgets, or cookie banners while there's nothing to consent to.
- No competing calls to action. Every section leads back to the one form.
- No exclamation marks.

## Inspiration references

None supplied yet. **Gap:** add 2 to 4 URLs of sites you admire, with a line on what resonates, and re-run the brief to sharpen it.

## Open questions

- Real case studies or testimonials from StoryOps, Doramino, PanoptAI or See Us All to show? The layout has room for a "Selected work" section once they exist.
- Is "AI-first" the right headline positioning, or should it lead with the outcome for a particular sector?
- Do you want a public email address shown, or form-only? (Currently form-only.)
- Is there a logo or brand colour already in mind? The wordmark and palette here are a strong starting point, not a final identity.
