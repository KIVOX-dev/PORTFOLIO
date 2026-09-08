"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HERO, SITE } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-hair bg-ink px-6 pt-16 pb-24 text-paper md:pt-24 md:pb-32"
    >
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true" />
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-target opacity-25"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col items-start text-left">
          <Reveal>
            <span className="press-hard press-hard-red shadow-hard-red inline-flex items-center rounded-full border-2 border-red bg-ink px-5 py-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-red">
              {HERO.pillText}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-8 font-display text-[13vw] leading-[0.92] uppercase tracking-tight sm:text-7xl md:text-8xl lg:text-[6.5rem]">
              {HERO.headlineLines.map((line) => (
                <span key={line} className="block">
                  {line.split(" ").map((word, i, words) => (
                    <span key={i}>
                      {word === HERO.underlineWord ? (
                        <span className="text-red underline decoration-red/50 decoration-[8px] underline-offset-[8px]">
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
            <p className="mt-8 max-w-xl font-body text-base text-paper/70 sm:text-lg">
              {HERO.subheading}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="#work" variant="red">
                View my work
              </Button>
              <Button href="#contact" variant="outline-paper">
                Get in touch
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex items-center gap-5 text-paper/60">
              <a
                href={SITE.social.github}
                aria-label="GitHub"
                className="transition-colors hover:text-red"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6.2 0c2.3-1.6 3.4-1.2 3.4-1.2.6 1.7.2 2.9.1 3.2.8.9 1.3 2 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" />
                </svg>
              </a>
              <a
                href={SITE.social.linkedin}
                aria-label="LinkedIn"
                className="transition-colors hover:text-red"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5ZM.24 8.25h4.5V23h-4.5V8.25ZM8.02 8.25h4.32v2.02h.06c.6-1.14 2.07-2.34 4.26-2.34 4.55 0 5.39 3 5.39 6.9V23h-4.5v-6.68c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54V23h-4.5V8.25Z" />
                </svg>
              </a>
              <span className="font-mono text-xs uppercase tracking-widest">
                {SITE.location}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative mx-auto w-full max-w-sm">
          <div
            className="pointer-events-none absolute -inset-6 rounded-[2rem] border border-dashed border-red/25 animate-spin-slow"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -inset-10 rounded-full border border-red/10"
            aria-hidden="true"
          />

          <TiltCard
            strength={8}
            className="relative rounded-[1.75rem] border-2 border-red/60 bg-graphite p-2 shadow-glow-red"
          >
            <div className="relative aspect-[2/3] overflow-hidden rounded-[1.4rem]">
              <Image
                src={SITE.photo}
                alt={SITE.name}
                fill
                priority
                sizes="(min-width: 1024px) 380px, 80vw"
                className="object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="bg-dots-red pointer-events-none absolute inset-x-0 top-0 h-16 opacity-30" />
            </div>

            <span className="absolute left-5 top-5 rounded-full border border-red/60 bg-ink/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-red">
              {SITE.initials} / 2026
            </span>
            <span className="absolute bottom-5 right-5 font-mono text-[10px] uppercase tracking-widest text-paper/70">
              N.01
            </span>
          </TiltCard>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="animate-float-slow absolute -bottom-6 -left-6 flex items-center gap-2 rounded-full border-2 border-ink bg-red px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide text-paper shadow-hard"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-paper" />
            {SITE.role}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
