import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "lime" | "ink" | "coral" | "outline-cream" | "outline-ink";
  className?: string;
};

const VARIANTS: Record<NonNullable<ButtonProps["variant"]>, string> = {
  lime: "bg-lime text-ink border-ink",
  ink: "bg-ink text-offwhite border-ink",
  coral: "bg-coral text-ink border-ink",
  "outline-cream": "bg-transparent text-offwhite border-offwhite",
  "outline-ink": "bg-transparent text-ink border-ink",
};

export function Button({ href, children, variant = "lime", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`press-hard shadow-hard inline-flex items-center gap-2 rounded-lg border-2 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wide ${VARIANTS[variant]} ${className}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
