# Futuristic World

Corporate marketing site for [Futuristic World](https://futuristicworld.us) — blockchain, AI, and financial technology. Built from the **Website Development Specification 2026** (Next.js App Router, TypeScript, Tailwind CSS).

## Local development

Node.js 22+.

```bash
cd E:\Work\1125
npm install
npm run dev
```

Open http://localhost:3000.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Push to GitHub (auto-deploy)

After you connect this folder to your GitHub repo and CI/hosting:

```bash
git status
git add .
git commit -m "Rebuild Futuristic World corporate website"
git push origin main
```

Do **not** commit: `node_modules/`, `.next/`, `.env.local`, `.data/`, secrets.

## Environment

Copy `.env.example` → `.env.local`.

| Variable | Purpose |
| --- | --- |
| `CONTACT_WEBHOOK_URL` | HTTPS endpoint for contact form JSON |
| `CONTACT_WEBHOOK_TOKEN` | Optional bearer token |

## Edit content

| Area | Location |
| --- | --- |
| Company copy | `src/config/site.ts` |
| Navigation | `src/config/navigation.ts` |
| Pillars & process | `src/content/pillars.ts` |
| Products | `src/content/products.ts` |
| Projects (verification flags) | `src/content/projects.ts` |
| Technology lists | `src/content/technology.ts` |
| Insights articles | `src/content/insights.ts` |
| Images | `public/images/` (see `ASSETS.md`) |

Unverified projects use `approvedForPublication: false` so they never appear publicly.

## Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS 4
- Lucide icons
- Optional Cloudflare deploy via `@opennextjs/cloudflare` (see `wrangler.jsonc`)

## Deployment

If you use Cloudflare Workers as in the copied template:

```bash
npm run deploy
```

Set `CONTACT_WEBHOOK_URL` as a Worker secret in production.