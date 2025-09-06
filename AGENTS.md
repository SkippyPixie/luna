# AGENTS.md
## App
Next.js 14 + TypeScript. Cloudflare Pages (SSR) runtime. Cloudflare D1 for storage.

## Commands
install: pnpm install
dev: pnpm dev
build: pnpm build
test: pnpm test

## Quality Bar
- ESLint + Prettier clean
- Jest unit tests passing
- a11y checks per WCAG 2.1 AA (key screens)

## What to do by default
- Use file-based routing
- Add D1 schema + migration
- Implement pages: /, /check-in, /journal, /entry/[id], /stats, /exercises/breath, /settings
