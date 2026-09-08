import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "red" | "ink" | "outline-paper" | "outline-red" | "outline-ink";
  className?: string;
};

const VARIANTS: Record<NonNullable<ButtonProps["variant"]>, string> = {
  red: "bg-red text-paper border-red",
  ink: "bg-ink text-paper border-paper/30",
  "outline-paper": "bg-transparent text-paper border-paper/40",
  "outline-red": "bg-transparent text-red border-red",
  "outline-ink": "bg-transparent text-ink border-ink",
};

export function Button({ href, children, variant = "red", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`press-hard press-hard-red shadow-hard-red inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wide transition-colors ${VARIANTS[variant]} ${className}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
