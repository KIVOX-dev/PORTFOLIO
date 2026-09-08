"use client";

import { useEffect, useState } from "react";
import { TERMINAL } from "@/content/site";

const TYPE_STYLES: Record<string, string> = {
  command: "text-paper",
  success: "text-red",
  muted: "text-paper/50",
  accent: "text-red-dim",
};

const CHAR_DELAY: Record<string, number> = {
  command: 45,
  success: 10,
  muted: 10,
  accent: 25,
};

const LINE_PAUSE = 250;
const RESTART_PAUSE = 2200;
const CLEAR_PAUSE = 500;

type Line = (typeof TERMINAL.lines)[number];

export function Terminal() {
  const [doneLines, setDoneLines] = useState<Line[]>([]);
  const [typing, setTyping] = useState<{ text: string; type: Line["type"] } | null>(null);

  useEffect(() => {
    let cancelled = false;
    const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

    async function run() {
      while (!cancelled) {
        setDoneLines([]);
        setTyping(null);
        await sleep(CLEAR_PAUSE);

        for (const item of TERMINAL.lines) {
          const delay = CHAR_DELAY[item.type] ?? 20;
          for (let c = 1; c <= item.text.length; c++) {
            if (cancelled) return;
            setTyping({ text: item.text.slice(0, c), type: item.type });
            await sleep(delay);
          }
          if (cancelled) return;
          setDoneLines((prev) => [...prev, item]);
          setTyping(null);
          await sleep(LINE_PAUSE);
        }

        await sleep(RESTART_PAUSE);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-xl border-2 border-red bg-black shadow-[0_0_40px_-8px_rgba(229,23,31,0.4)]"
    >
      <div className="flex items-center gap-2 border-b-2 border-red/30 bg-red/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-dim" />
        <span className="h-3 w-3 rounded-full bg-red" />
        <span className="h-3 w-3 rounded-full bg-steel" />
        <span className="ml-2 font-mono text-xs uppercase tracking-wide text-paper/50">
          {TERMINAL.label}
        </span>
      </div>

      <div className="flex min-h-[320px] flex-col gap-2 p-6 font-mono text-sm">
        {doneLines.map((item, i) => (
          <p key={i} className={TYPE_STYLES[item.type]}>
            {item.text}
          </p>
        ))}
        <p className={typing ? TYPE_STYLES[typing.type] : undefined}>
          {typing?.text}
          <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-red" />
        </p>
      </div>
    </div>
  );
}
