# Vignesh Balamurugan: Portfolio

Personal portfolio site built with Vite, React, TypeScript, Tailwind CSS v4, and Framer Motion.

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build to dist/
npm run preview  # serve the production build locally
npm run lint     # run oxlint
```

## Editing content

All site content (profile, education, experience, projects, skills) lives in [`src/data.ts`](src/data.ts). Components in `src/components/` render it, so most updates only need changes to that one file.

## Deploying

`npm run build` outputs a static site to `dist/`, which can be hosted on any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).
