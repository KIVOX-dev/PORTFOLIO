import { SKILLS } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { Terminal } from "@/components/ui/Terminal";

export function InsideWork() {
  return (
    <section id="skills" className="border-b border-hair bg-ink px-6 py-24 text-paper md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow index="03">{SKILLS.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-5xl uppercase tracking-tight sm:text-6xl md:text-7xl">
            {SKILLS.headline}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 md:items-stretch">
          <div className="grid gap-6 sm:grid-cols-1">
            {SKILLS.groups.map((group, i) => (
              <Reveal key={group.title} delay={0.08 * i}>
                <TiltCard strength={6} className="rounded-2xl border border-hair bg-graphite p-6">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-red">
                    {group.title}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-paper/20 bg-ink px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wide text-paper/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Terminal />
        </div>
      </div>
    </section>
  );
}
