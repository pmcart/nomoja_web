import type { CSSProperties, ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] ${
        dark ? "text-mist" : "text-muted"
      }`}
    >
      <span aria-hidden="true" className="size-1.5 rounded-full bg-coral" />
      {children}
    </p>
  );
}

/** Stagger helper for the .rise entrance animation: style={delay(120)}. */
export function delay(ms: number): CSSProperties {
  return { "--d": ms } as CSSProperties;
}
