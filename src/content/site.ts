// ─────────────────────────────────────────────────────────────────────────
// SITE CONTENT — edit everything in this one file.
// Every value below is a placeholder. Replace anything wrapped in
// [BRACKETS] with your real content before shipping.
// ─────────────────────────────────────────────────────────────────────────

export const SITE = {
  name: "Kaviarasan M",
  initials: "KM",
  role: "Full-Stack Developer",
  tagline: "Turning ideas into fast, functional products — end to end.",
  navTagline: "Kaviarasan M — ships code that ships products",
  location: "Coimbatore",
  availability: "AVAILABLE FOR WORK",
  email: "07kaviarasan@gmail.com",
  resumeUrl: "#", // TODO: link to your resume PDF
  social: {
    github: "https://github.com/KIVOX-dev",
    linkedin: "https://www.linkedin.com/in/kaviarasan-m-b29095377",
  },
};

export const HERO = {
  pillText: "AVAILABLE FOR PROJECTS — 2026",
  headlineLines: ["I BUILD", "PRODUCTS", "THAT WORK"],
  underlineWord: "WORK",
  subheading:
    "Need a landing page or website that actually converts? I design and build it — fast, clean, and built to grow with your business.",
};

export const STATEMENT = {
  script: "quiet code, loud results",
  paragraph:
    "I move fast from idea to shipped product — sketching the flow, building the interface, and wiring up the backend without losing sight of what the user actually needs. Every project gets the same treatment: clean code, sharp design, no wasted motion.",
  ticker: [
    "REACT",
    "NEXT.JS",
    "TYPESCRIPT",
    "NODE.JS",
    "FASTAPI",
    "FIGMA",
    "MONGODB",
    "SHIPPED 8+ PROJECTS",
  ],
};

export const PROCESS = {
  eyebrow: "THE PROCESS",
  headline: "HOW I WORK",
  steps: [
    {
      title: "Discover",
      description:
        "I start by understanding the problem — your users, your goals, what \"done\" actually looks like — before touching a single line of code.",
    },
    {
      title: "Design & Build",
      description:
        "Interfaces get designed in Figma, then built in React/Next.js with clean, typed, maintainable code from day one.",
    },
    {
      title: "Ship & Iterate",
      description:
        "I deploy fast, gather real feedback, and keep refining — a product isn't finished at launch, it's finished when it works for your users.",
    },
  ],
};

export const INSIDE_WORK = {
  eyebrow: "WHAT I BRING",
  headline: "INSIDE THE WORK",
  items: [
    { script: "fast turnaround", mono: "SHIP IN DAYS NOT MONTHS" },
    { script: "clean code", mono: "MAINTAINABLE & TESTED" },
    { script: "clear comms", mono: "NO SURPRISES" },
    { script: "real results", mono: "METRICS THAT MATTER" },
  ],
};

// Simulated terminal output next to INSIDE_WORK — purely decorative,
// replace lines with whatever you actually want to show running.
export const TERMINAL = {
  label: "tests.sh — running",
  lines: [
    { text: "$ npm run test", type: "command" },
    { text: "✓ auth.test.ts (12 passed)", type: "success" },
    { text: "✓ api/routes.test.ts (9 passed)", type: "success" },
    { text: "✓ ui/components.test.tsx (18 passed)", type: "success" },
    { text: "Tests: 39 passed, 0 failed", type: "muted" },
    { text: "$ npm run build", type: "command" },
    { text: "✓ build completed in 3.2s", type: "success" },
    { text: "ready to ship →", type: "accent" },
  ] as { text: string; type: "command" | "success" | "muted" | "accent" }[],
};

export const FEATURED_PROJECT = {
  eyebrow: "SELECTED WORK",
  headline: "[FEATURED PROJECT NAME]",
  image: null, // TODO: add screenshot to /public and reference it here
  problem: "[The problem this project solved.]",
  approach: "[Your approach — key decisions, stack, role.]",
  result: "[The outcome — a real metric or concrete result.]",
  href: "#", // TODO: link to live project
};

export const SPLIT_BAND = {
  clients: {
    eyebrow: "FOR CLIENTS",
    headline: "NEED SOMETHING BUILT?",
    pitch:
      "You get a developer who designs, builds, and ships — no handoffs, no translation loss between what you asked for and what you get.",
    ctaLabel: "Start a project",
  },
  recruiters: {
    eyebrow: "FOR RECRUITERS",
    headline: "LOOKING TO HIRE?",
    pitch:
      "Looking for a full-stack role where I can own features end-to-end — from UI to API to deployment.",
    facts: [
      { label: "STACK", value: "React · Next.js · Node.js · TypeScript · Python" },
      { label: "AVAILABILITY", value: "Open to full-time & freelance" },
      { label: "LOCATION", value: "Coimbatore, India (remote-friendly)" },
    ],
  },
};

export type Project = {
  name: string;
  description: string;
  tags: string[];
  href: string;
  image: string | null;
};

export const PROJECTS: Project[] = [
  {
    name: "[Project 2 name]",
    description: "[One-line description of what it does and the outcome.]",
    tags: ["[Tag]", "[Tag]"],
    href: "#",
    image: null,
  },
  {
    name: "[Project 3 name]",
    description: "[One-line description of what it does and the outcome.]",
    tags: ["[Tag]", "[Tag]"],
    href: "#",
    image: null,
  },
  {
    name: "[Project 4 name]",
    description: "[One-line description of what it does and the outcome.]",
    tags: ["[Tag]", "[Tag]"],
    href: "#",
    image: null,
  },
];

export const FINAL_CTA = {
  eyebrow: "GET IN TOUCH",
  headline: "LET'S BUILD SOMETHING.",
  script: "say hi 👋",
};

export const FOOTER = {
  meta: `${SITE.name.toUpperCase()}.COM | ${SITE.availability} | BASED IN ${SITE.location.toUpperCase()}`,
};
