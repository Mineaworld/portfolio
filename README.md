# Dy Minea Portfolio

Portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Stack
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui primitives

## Local Development
1. Install dependencies:
```bash
npm install
```
2. Start dev server:
```bash
npm run dev
```
3. Open `http://localhost:3000`.

## Production Build
1. Build the app:
```bash
npm run build
```
2. Start the production server:
```bash
npm run start
```

`npm run start` runs the built Next.js app on port `3000`.

This project includes an App Router API route at `app/api/contact/route.ts`, so it should run as a Next.js server app instead of a static export.

## Quality Checks
- Lint:
```bash
npm run lint
```
- Typecheck:
```bash
npm run typecheck
```

## Troubleshooting (Windows)
If you hit `ChunkLoadError` or build fails with `EPERM ... .next\\trace`:
1. Stop all running Next.js or Node processes.
2. Clear generated artifacts:
```bash
npm run clean
```
3. Restart the dev server or rebuild:
```bash
npm run dev
```

## Included Sections
- Hero
- About
- Skills
- Projects
- Experience
- Contact
