import { SPLIT_BAND } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function SplitBand() {
  return (
    <section className="grid border-b border-hair md:grid-cols-2">
      <div className="border-b border-hair bg-red px-6 py-20 text-ink md:border-r md:border-b-0 md:py-28">
        <Reveal>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-ink/70">
            {SPLIT_BAND.clients.eyebrow}
          </p>
          <h3 className="mt-4 font-display text-4xl uppercase tracking-tight sm:text-5xl">
            {SPLIT_BAND.clients.headline}
          </h3>
          <p className="mt-6 max-w-sm font-body text-ink/80">{SPLIT_BAND.clients.pitch}</p>
          <Button href="#contact" variant="ink" className="mt-8">
            {SPLIT_BAND.clients.ctaLabel}
          </Button>
        </Reveal>
      </div>

      <div className="bg-ink px-6 py-20 text-paper md:py-28">
        <Reveal delay={0.1}>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-red">
            {SPLIT_BAND.recruiters.eyebrow}
          </p>
          <h3 className="mt-4 font-display text-4xl uppercase tracking-tight sm:text-5xl">
            {SPLIT_BAND.recruiters.headline}
          </h3>
          <p className="mt-6 max-w-sm font-body text-paper/80">
            {SPLIT_BAND.recruiters.pitch}
          </p>

          <div className="mt-8 rounded-xl border border-red/40 bg-black/40 p-5 shadow-[0_0_24px_-4px_rgba(229,23,31,0.4)]">
            {SPLIT_BAND.recruiters.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex justify-between gap-4 border-b border-paper/10 py-2 font-mono text-sm last:border-b-0"
              >
                <span className="uppercase tracking-wide text-red">{fact.label}</span>
                <span className="text-paper/80">{fact.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
