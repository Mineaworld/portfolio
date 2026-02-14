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

## Production Build (Static Export)
1. Build the app:
```bash
npm run build
```
2. Preview exported output:
```bash
npm run start
```

`npm run start` serves the generated `out/` directory on port `3000`.

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
If build fails with `EPERM ... .next\\trace`:
1. Stop all running Next.js or Node processes.
2. Delete `.next` and `out` folders.
3. Run:
```bash
npm run build
```

## Included Sections
- Hero
- About
- Skills
- Projects
- Experience
- Contact
