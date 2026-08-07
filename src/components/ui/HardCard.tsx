import type { ReactNode } from "react";

type HardCardProps = {
  children: ReactNode;
  className?: string;
  tone?: "offwhite" | "ink" | "lime";
};

const TONES: Record<NonNullable<HardCardProps["tone"]>, string> = {
  offwhite: "bg-offwhite text-ink",
  ink: "bg-ink text-offwhite",
  lime: "bg-lime text-ink",
};

export function HardCard({ children, className = "", tone = "offwhite" }: HardCardProps) {
  return (
    <div
      className={`rounded-2xl border-2 border-ink shadow-hard ${TONES[tone]} ${className}`}
    >
      {children}
    </div>
  );
}
