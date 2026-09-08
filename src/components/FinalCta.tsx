"use client";

import { FINAL_CTA, SITE } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

export function FinalCta() {
  return (
    <section id="contact" className="relative overflow-hidden border-b border-hair bg-ink px-6 py-24 text-paper md:py-32">
      <div
        className="pointer-events-none absolute -left-32 -bottom-32 h-[480px] w-[480px] rounded-full bg-target opacity-20"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <Eyebrow index="06">{FINAL_CTA.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-5xl uppercase tracking-tight sm:text-6xl md:text-7xl">
            {FINAL_CTA.headline}
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <TiltCard
            strength={4}
            className="mx-auto mt-12 max-w-md rounded-2xl border-2 border-red/50 bg-graphite p-8 text-left shadow-glow-red"
          >
            <p className="font-script text-3xl text-red">{FINAL_CTA.script}</p>

            <form
              className="mt-6 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:${SITE.email}`;
              }}
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-lg border border-paper/30 bg-transparent px-4 py-3 font-mono text-sm text-paper placeholder:text-paper/40 focus:border-red focus:outline-none"
              />
              <button
                type="submit"
                className="press-hard press-hard-red shrink-0 rounded-lg border-2 border-red bg-red px-6 py-3 font-mono text-sm font-bold uppercase tracking-wide text-paper"
              >
                Send →
              </button>
            </form>

            <div className="mt-6 flex gap-6 border-t border-paper/10 pt-6 font-mono text-xs uppercase tracking-wide text-paper/60">
              <a href={SITE.social.github} className="hover:text-red">
                GitHub
              </a>
              <a href={SITE.social.linkedin} className="hover:text-red">
                LinkedIn
              </a>
              <a href={SITE.resumeUrl} className="hover:text-red">
                Resume
              </a>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
