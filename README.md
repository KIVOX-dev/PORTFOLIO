# Kaviarasan M — Portfolio

Personal portfolio of Kaviarasan M, a student, designer and developer based in Coimbatore, India. Live at [www.buildwithkavi.online](https://www.buildwithkavi.online).

The site has an interactive 3D hero, a dark and light theme, and a showcase of products built at GrowALabs, each shown on a 3D laptop or phone with its own detail page.

## Stack

- [Next.js](https://nextjs.org) (App Router) and React 19
- [Three.js](https://threejs.org) for the hero sphere and device models
- [Framer Motion](https://www.framer.com/motion/)
- CSS Modules with PostCSS custom media
- Amazon SES for the contact form
- Deployed on [Vercel](https://vercel.com)

## Getting started

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run the TypeScript compiler without emitting files |

## Project structure

```
src/
├── app/          Routes: home, contact, /products/[slug], API, 404 and error pages
├── components/   Shared UI (button, heading, image, model, transition, theme provider...)
├── content/      Product data shown on the home page and detail pages (work.js)
├── home/         Home page sections: intro, product summaries, profile
├── contact/      Contact form and styles
├── layouts/      Navbar, error page and product page layout
├── hooks/        Reusable hooks
├── utils/        Helpers for styles, images, Three.js and metadata
└── config.json   Name, role, social links and site URL
public/
├── assets/       Fonts, 3D models, textures and product screenshots
└── draco/        Draco decoder for compressed 3D models
```

## Editing content

- **Name, role and social links:** `src/config.json`.
- **Products:** `src/content/work.js`. Each entry sets the title, summary, device type (`laptop` or `phone`), link and detail page copy. Screenshots live in `public/assets/work/`: `<name>.jpg` (1280×800), `<name>-large.jpg` (2560×1600) and `<name>-placeholder.jpg`. Phone products use portrait screenshots (375×812) listed under `mobileShots`.
- **About text and photo:** `src/home/profile.jsx` and `public/assets/profile*.jpg`.
- **Theme colors and type:** `src/components/theme-provider/theme.js`.

## Contact form

The form posts to `/api/contact` and sends mail through Amazon SES. Copy `.env.example` to `.env.local` and fill in:

```
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
EMAIL=            # where messages are delivered
FROM_EMAIL=       # a sender address verified in SES
```

Without these, the form shows an error instead of sending.

## Deployment

Pushes to `main` deploy to production, and pull requests get a preview, through GitHub Actions (`.github/workflows/deploy.yml`). Lint, typecheck and build must pass first.

Add these repository secrets in GitHub (Settings → Secrets and variables → Actions):

| Secret | Where to find it |
| --- | --- |
| `VERCEL_TOKEN` | vercel.com/account/tokens |
| `VERCEL_ORG_ID` | `orgId` in `.vercel/project.json` after running `vercel link` |
| `VERCEL_PROJECT_ID` | `projectId` in the same file |

Also add the contact form variables above in the Vercel project settings.
