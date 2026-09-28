import Link from "next/link";
import { ArrowRight } from "./icons";

type Variant = "primary" | "secondary" | "secondary-dark";
type Size = "md" | "sm";

// One primary style, one secondary style (plus its on-dark twin). Not five.
const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,color,border-color,transform] duration-200 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60";

const sizes: Record<Size, string> = {
  md: "h-13 px-7 text-base",
  sm: "h-11 px-5 text-[0.9375rem]",
};

const variants: Record<Variant, string> = {
  primary: "bg-coral text-ink hover:bg-coral-soft",
  secondary: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  "secondary-dark": "border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

export function buttonClasses(variant: Variant = "primary", size: Size = "md", className = "") {
  return `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim();
}

export function LinkButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  arrow = variant === "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link href={href} className={buttonClasses(variant, size, className)}>
      {children}
      {arrow && <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />}
    </Link>
  );
}
