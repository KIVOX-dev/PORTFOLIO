import { PROJECTS } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TiltCard } from "@/components/ui/TiltCard";
import { Reveal } from "@/components/ui/Reveal";
import { Slideshow } from "@/components/ui/Slideshow";
import Link from "next/link";

export function ProjectsGrid() {
  return (
    <section className="border-b border-hair-ink bg-paper px-6 py-24 text-ink md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow index="05">MORE WORK</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-4xl uppercase tracking-tight sm:text-5xl">
            Selected Projects
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={0.06 * i}>
              <Link href={project.href} className="group block h-full">
                <TiltCard
                  strength={7}
                  className="press-hard relative flex h-full flex-col gap-4 rounded-2xl border-2 border-ink bg-paper-dim p-5 shadow-hard-sm"
                >
                  <span className="absolute right-4 top-4 z-10 font-mono text-[10px] uppercase tracking-widest text-ink/40">
                    P.{String(i + 1).padStart(2, "0")}
                  </span>

                  {project.images.length > 0 ? (
                    <Slideshow
                      images={project.images}
                      alt={project.name}
                      aspectClassName="aspect-video rounded-lg"
                    />
                  ) : (
                    <div className="flex aspect-video items-center justify-center rounded-lg border-2 border-dashed border-ink/15 bg-ink/5">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
                        [ image ]
                      </span>
                    </div>
                  )}
                  <h3 className="font-display text-xl uppercase">{project.name}</h3>
                  <p className="font-body text-sm text-ink/60">{project.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full border border-red/50 bg-ink px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wide text-red"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
