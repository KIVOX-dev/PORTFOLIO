"use client";

import { FINAL_CTA, SITE } from "@/content/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section id="contact" className="border-b-2 border-ink bg-cream px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <Eyebrow color="coral">{FINAL_CTA.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-5xl uppercase tracking-tight sm:text-6xl md:text-7xl">
            {FINAL_CTA.headline}
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 max-w-md rounded-2xl border-2 border-ink bg-ink p-8 text-left shadow-hard-lg">
            <p className="font-script text-3xl text-lime">{FINAL_CTA.script}</p>

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
                className="w-full rounded-lg border-2 border-offwhite/30 bg-transparent px-4 py-3 font-mono text-sm text-offwhite placeholder:text-offwhite/40 focus:border-lime focus:outline-none"
              />
              <button
                type="submit"
                className="press-hard shadow-hard-lime shrink-0 rounded-lg border-2 border-lime bg-lime px-6 py-3 font-mono text-sm font-bold uppercase tracking-wide text-ink"
              >
                Send →
              </button>
            </form>

            <div className="mt-6 flex gap-6 border-t border-offwhite/10 pt-6 font-mono text-xs uppercase tracking-wide text-offwhite/60">
              <a href={SITE.social.github} className="hover:text-lime">
                GitHub
              </a>
              <a href={SITE.social.linkedin} className="hover:text-lime">
                LinkedIn
              </a>
              <a href={SITE.resumeUrl} className="hover:text-lime">
                Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
