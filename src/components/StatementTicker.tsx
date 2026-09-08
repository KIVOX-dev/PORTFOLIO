import { STATEMENT } from "@/content/site";

export function StatementTicker() {
  const items = [...STATEMENT.ticker, ...STATEMENT.ticker];

  return (
    <div className="overflow-hidden border-y border-hair bg-red py-4">
      <div className="animate-marquee flex w-max gap-6 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-6 font-mono text-sm font-bold uppercase tracking-wide text-ink"
          >
            {item}
            <span className="text-ink/50">{"///"}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
