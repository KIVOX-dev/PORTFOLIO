import type { ReactNode } from "react";

type HardCardProps = {
  children: ReactNode;
  className?: string;
  tone?: "graphite" | "ink" | "paper";
};

const TONES: Record<NonNullable<HardCardProps["tone"]>, string> = {
  graphite: "bg-graphite text-paper border-hair",
  ink: "bg-ink text-paper border-hair",
  paper: "bg-paper text-ink border-ink",
};

export function HardCard({ children, className = "", tone = "graphite" }: HardCardProps) {
  return (
    <div className={`rounded-2xl border ${TONES[tone]} ${className}`}>
      {children}
    </div>
  );
}
