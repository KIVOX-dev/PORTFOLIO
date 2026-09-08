"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/content/site";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-hair bg-ink/90 text-paper backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-baseline gap-3">
          <Link href="#" className="font-display text-xl tracking-tight">
            {SITE.initials}
            <span className="text-red">.</span>
          </Link>
          <span className="hidden font-script text-xl text-red sm:inline">
            {SITE.navTagline}
          </span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-sm font-bold uppercase tracking-wide text-paper/90 transition-colors hover:text-red"
            >
              {link.label}
            </Link>
          ))}
          <span className="rounded-full border border-red bg-red/10 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wide text-red">
            {SITE.availability}
          </span>
          <Button href={SITE.resumeUrl} variant="outline-paper" className="shadow-none">
            Resume
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-paper transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              open ? "translate-y-2 rotate-45 bg-red" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-paper transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-paper transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              open ? "-translate-y-2 -rotate-45 bg-red" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[65px] z-40 bg-ink/97 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-6 px-8 py-12">
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.32, 0.72, 0, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl uppercase text-paper"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.32, ease: [0.32, 0.72, 0, 1] }}
              >
                <Button href={SITE.resumeUrl} variant="red">
                  Resume
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
