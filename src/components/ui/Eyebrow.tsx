type EyebrowProps = {
  children: string;
  color?: "coral" | "jade" | "lime";
};

const COLORS: Record<NonNullable<EyebrowProps["color"]>, string> = {
  coral: "text-coral",
  jade: "text-jade",
  lime: "text-lime",
};

export function Eyebrow({ children, color = "coral" }: EyebrowProps) {
  return (
    <p className={`font-mono text-xs font-bold uppercase tracking-[0.25em] ${COLORS[color]}`}>
      {children}
    </p>
  );
}
