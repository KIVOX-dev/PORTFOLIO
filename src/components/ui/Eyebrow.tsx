type EyebrowProps = {
  children: string;
  index?: string;
};

export function Eyebrow({ children, index }: EyebrowProps) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.25em] text-red">
      {index && <span className="text-steel">{index}</span>}
      <span className="h-px w-6 bg-red" aria-hidden="true" />
      {children}
    </p>
  );
}
