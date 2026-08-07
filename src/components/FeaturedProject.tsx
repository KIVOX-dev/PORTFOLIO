import { FEATURED_PROJECT } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedProject() {
  return (
    <section id="work" className="border-b-2 border-ink bg-cream px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow color="coral">{FEATURED_PROJECT.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-5xl uppercase tracking-tight sm:text-6xl md:text-7xl">
            {FEATURED_PROJECT.headline}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal delay={0.1}>
            {/* Cream-bezel device frame — replace the placeholder box with an <Image> once you add a screenshot */}
            <div className="rounded-3xl border-2 border-ink bg-offwhite p-3 shadow-hard-lg">
              <div className="flex aspect-[4/3] items-center justify-center rounded-xl border-2 border-dashed border-ink/30 bg-ink/5">
                <span className="font-mono text-xs uppercase tracking-widest text-ink/40">
                  [ project screenshot ]
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col gap-6">
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/50">
                  Problem
                </p>
                <p className="mt-2 font-body text-ink/80">{FEATURED_PROJECT.problem}</p>
              </div>
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/50">
                  Approach
                </p>
                <p className="mt-2 font-body text-ink/80">{FEATURED_PROJECT.approach}</p>
              </div>
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/50">
                  Result
                </p>
                <p className="mt-2 font-body text-ink/80">{FEATURED_PROJECT.result}</p>
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
