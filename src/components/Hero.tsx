import { HERO } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-ink px-6 py-24 text-offwhite md:py-36">
      <div className="bg-dots-light pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <Reveal>
          <span className="press-hard shadow-hard-lime inline-flex items-center rounded-full border-2 border-lime bg-ink px-5 py-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-lime">
            {HERO.pillText}
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-8 font-display text-[13vw] leading-[0.95] uppercase tracking-tight sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            {HERO.headlineLines.map((line) => (
              <span key={line} className="block">
                {line.split(" ").map((word, i, words) => (
                  <span key={i}>
                    {word === HERO.underlineWord ? (
                      <span className="underline decoration-lime decoration-[10px] underline-offset-[6px]">
                        {word}
                      </span>
                    ) : (
                      word
                    )}
                    {i < words.length - 1 ? " " : ""}
                  </span>
                ))}
              </span>
            ))}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl font-body text-base text-offwhite/80 sm:text-lg">
            {HERO.subheading}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
