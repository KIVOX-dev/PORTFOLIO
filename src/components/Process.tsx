import { PROCESS } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function Process() {
  return (
    <section className="border-b border-hair bg-void px-6 py-24 text-paper md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow index="02">{PROCESS.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-5xl uppercase tracking-tight sm:text-6xl md:text-7xl">
            {PROCESS.headline}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {PROCESS.steps.map((step, i) => (
            <Reveal key={step.title} delay={0.1 + i * 0.1}>
              <TiltCard className="flex h-full flex-col gap-4 rounded-2xl border border-hair bg-graphite p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-red bg-ink font-mono text-lg font-bold text-red">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-2xl uppercase">{step.title}</h3>
                <p className="font-body text-paper/70">{step.description}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
