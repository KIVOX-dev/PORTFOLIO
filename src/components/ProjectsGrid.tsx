import { PROJECTS } from "@/content/site";
import { HardCard } from "@/components/ui/HardCard";
import { Reveal } from "@/components/ui/Reveal";
import { Slideshow } from "@/components/ui/Slideshow";
import Link from "next/link";

export function ProjectsGrid() {
  return (
    <section className="border-b-2 border-ink bg-cream px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-4xl uppercase tracking-tight sm:text-5xl">
            More Work
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={0.06 * i}>
              <Link href={project.href} className="group block h-full">
                <HardCard className="press-hard flex h-full flex-col gap-4 p-5">
                  {project.images.length > 0 ? (
                    <Slideshow
                      images={project.images}
                      alt={project.name}
                      aspectClassName="aspect-video rounded-lg"
                    />
                  ) : (
                    <div className="flex aspect-video items-center justify-center rounded-lg border-2 border-dashed border-ink/30 bg-ink/5">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
                        [ image ]
                      </span>
                    </div>
                  )}
                  <h3 className="font-display text-xl uppercase">{project.name}</h3>
                  <p className="font-body text-sm text-ink/70">{project.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full border-2 border-ink bg-offwhite px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </HardCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
