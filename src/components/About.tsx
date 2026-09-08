import { STATEMENT, INSIDE_WORK } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-b border-hair-ink bg-paper px-6 py-24 text-ink md:py-32">
      <div className="bg-dots-ink pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-script text-4xl text-red sm:text-5xl">{STATEMENT.script}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-lg font-body text-base text-ink/70 sm:text-lg">
            {STATEMENT.paragraph}
          </p>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2">
        {INSIDE_WORK.items.map((item, i) => (
          <Reveal key={item.mono} delay={0.08 * i}>
            <TiltCard className="h-full rounded-2xl border border-hair-ink bg-paper-dim p-8 shadow-hard-sm">
              <p className="font-script text-3xl text-red">{item.script}</p>
              <p className="mt-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/70">
                {item.mono}
              </p>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
