export type FaqItem = { q: string; a: string };

/** Native <details>: keyboard accessible, works without JavaScript. */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map(({ q, a }) => (
        <details key={q} className="group">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-medium [&::-webkit-details-marker]:hidden">
            <span className="text-balance">{q}</span>
            <span
              aria-hidden="true"
              className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-xl leading-none transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="pb-6 pr-10 text-pretty text-ink-2">{a}</p>
        </details>
      ))}
    </div>
  );
}
