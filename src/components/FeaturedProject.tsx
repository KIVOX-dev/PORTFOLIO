import { FEATURED_PROJECT } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Slideshow } from "@/components/ui/Slideshow";
import { TiltCard } from "@/components/ui/TiltCard";

export function FeaturedProject() {
  return (
    <section id="work" className="border-b border-hair-ink bg-paper px-6 py-24 text-ink md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow index="04">{FEATURED_PROJECT.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-5xl uppercase tracking-tight sm:text-6xl md:text-7xl">
            {FEATURED_PROJECT.headline}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal delay={0.1}>
            <TiltCard
              strength={6}
              className="relative rounded-3xl border-2 border-ink bg-paper-dim p-3 shadow-hard-lg"
            >
              <span className="absolute -top-3 left-6 rounded-full border border-ink bg-red px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-paper">
                Featured
              </span>
              <Slideshow images={FEATURED_PROJECT.images} alt={FEATURED_PROJECT.headline} />
            </TiltCard>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col gap-6">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-red">
                  Problem
                </p>
                <p className="mt-2 font-body text-ink/70">{FEATURED_PROJECT.problem}</p>
              </div>
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-red">
                  Approach
                </p>
                <p className="mt-2 font-body text-ink/70">{FEATURED_PROJECT.approach}</p>
              </div>
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-red">
                  Result
                </p>
                <p className="mt-2 font-body text-ink/70">{FEATURED_PROJECT.result}</p>
              </div>
              <Button href={FEATURED_PROJECT.href} variant="ink" className="w-fit">
                View project
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
