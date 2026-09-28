import type { CSSProperties } from "react";
import { Check, Spark } from "./icons";
import { delay } from "./ui";

/**
 * The hero's signature moment: messy inputs go in, a Nomoja workflow does the work,
 * and useful outputs come out with a person approving what matters.
 * Pure HTML + CSS (no JS, no images). Decorative, so described once via aria-label.
 * Layout and animation live in globals.css (.flow-*, .orb).
 */

const inputs = [
  { tag: "Email", title: "Customer enquiry", detail: "“Quote for 40 units?”" },
  { tag: "PDF", title: "Supplier invoice", detail: "invoice_2291.pdf" },
  { tag: "Sheet", title: "Order spreadsheet", detail: "orders_march.xlsx" },
];

const outputs = [
  { tag: "Review", title: "Draft reply ready", detail: "Waiting for your OK", pending: true },
  { tag: "System", title: "Records updated", detail: "Invoice matched to order" },
  { tag: "Report", title: "Weekly summary", detail: "Sent Friday, 9:00" },
];

const tagClass = "font-mono text-xs uppercase tracking-[0.12em] text-muted";

export function WorkflowVisual() {
  return (
    <figure
      role="img"
      aria-label="Diagram: a customer email, a supplier invoice and an order spreadsheet flow into a Nomoja workflow, which produces a drafted reply awaiting your approval, updated records and a weekly summary."
      className="relative rounded-[1.75rem] border border-line bg-card/70 p-4 shadow-[0_40px_90px_-50px_rgb(12_47_36/0.45)] backdrop-blur-sm sm:p-6"
    >
      <figcaption className="mb-4 flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.12em] text-muted">
        <span>Example workflow</span>
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-coral" />
          Enquiry triage
        </span>
      </figcaption>

      <div
        className="grid gap-2 md:grid-cols-[minmax(0,1fr)_7.5rem_minmax(0,1fr)] md:gap-x-5"
        style={{ "--flow-gap": "1.25rem" } as CSSProperties}
      >
        {/* Inputs */}
        <ul className="grid min-w-0 gap-2 md:grid-rows-3 md:gap-3">
          {inputs.map((item, i) => (
            <li
              key={item.title}
              data-side="in"
              className="flow-chip rise min-w-0 rounded-xl border border-line bg-card px-4 py-3"
              style={{ ...delay(450 + i * 120), "--delay": `${i * 0.5}s` } as CSSProperties}
            >
              <span className={tagClass}>{item.tag}</span>
              <p className="text-[0.9375rem] font-medium leading-snug">{item.title}</p>
              <p className="truncate text-sm text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>

        <span aria-hidden="true" className="flow-v" />

        {/* The workflow itself */}
        <div
          className="on-dark rise flex items-center gap-4 overflow-hidden rounded-2xl bg-forest px-5 py-4 text-paper md:flex-col md:justify-center md:gap-4 md:px-3 md:py-6 md:text-center"
          style={delay(800)}
        >
          <span className="orb text-ink">
            <Spark />
          </span>
          <div>
            <p className="font-serif text-xl leading-tight">Nomoja</p>
            <p className="text-sm text-mist">reads, checks, drafts</p>
            <p className="mt-2 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-forest-2 px-2.5 py-1 text-xs text-paper">
              <Check className="size-3.5 text-coral" />
              you approve
            </p>
          </div>
        </div>

        <span aria-hidden="true" className="flow-v" />

        {/* Outputs */}
        <ul className="grid min-w-0 gap-2 md:grid-rows-3 md:gap-3">
          {outputs.map((item, i) => (
            <li
              key={item.title}
              data-side="out"
              className={`flow-chip rise min-w-0 rounded-xl border px-4 py-3 ${
                item.pending ? "border-coral/60 bg-coral/10" : "border-line bg-card"
              }`}
              style={{ ...delay(950 + i * 120), "--delay": `${i * 0.5 + 1.3}s` } as CSSProperties}
            >
              <span className={tagClass}>{item.tag}</span>
              <p className="text-[0.9375rem] font-medium leading-snug">{item.title}</p>
              <p className="truncate text-sm text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
