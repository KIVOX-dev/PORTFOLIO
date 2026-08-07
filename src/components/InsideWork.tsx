import { INSIDE_WORK } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Terminal } from "@/components/ui/Terminal";

export function InsideWork() {
  return (
    <section id="skills" className="border-b-2 border-ink bg-ink px-6 py-24 text-offwhite md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow color="jade">{INSIDE_WORK.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-5xl uppercase tracking-tight sm:text-6xl md:text-7xl">
            {INSIDE_WORK.headline}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 md:items-stretch">
          <div className="grid gap-px overflow-hidden rounded-2xl border-2 border-offwhite/20 sm:grid-cols-2">
            {INSIDE_WORK.items.map((item, i) => (
              <Reveal key={item.mono} delay={0.08 * i} className="bg-ink">
                <div className="flex h-full flex-col gap-2 border border-offwhite/10 p-8">
                  <p className="font-script text-3xl text-lime">{item.script}</p>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-offwhite/70">
                    {item.mono}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Terminal />
        </div>
      </div>
    </section>
  );
}
