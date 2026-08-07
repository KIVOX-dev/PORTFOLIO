import { PROCESS } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HardCard } from "@/components/ui/HardCard";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section className="border-b-2 border-ink bg-cream px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow color="coral">{PROCESS.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-5xl uppercase tracking-tight sm:text-6xl md:text-7xl">
            {PROCESS.headline}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {PROCESS.steps.map((step, i) => (
            <Reveal key={step.title} delay={0.1 + i * 0.1}>
              <HardCard className="flex h-full flex-col gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink bg-lime font-mono text-lg font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-2xl uppercase">{step.title}</h3>
                <p className="font-body text-ink/70">{step.description}</p>
              </HardCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
