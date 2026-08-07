import { STATEMENT } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

export function StatementTicker() {
  const items = [...STATEMENT.ticker, ...STATEMENT.ticker];

  return (
    <section id="about" className="relative overflow-hidden border-b-2 border-ink bg-cream">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden="true" />
      <div className="relative px-6 py-24 text-center">
        <Reveal>
          <p className="font-script text-4xl text-jade sm:text-5xl">{STATEMENT.script}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-lg font-body text-base text-ink/70 sm:text-lg">
            {STATEMENT.paragraph}
          </p>
        </Reveal>
      </div>

      <div className="overflow-hidden border-y-2 border-ink bg-ink py-5">
        <div className="animate-marquee flex w-max gap-6 whitespace-nowrap">
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-6 font-mono text-sm font-bold uppercase tracking-wide text-offwhite"
            >
              {item}
              <span className="text-lime">///</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
