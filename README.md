# Futuristic World

Public marketing site for Futuristic World. It explains digital-asset and tokenization technology and collects inquiries. It does not issue tokens, connect wallets, or trade assets.

Unconfirmed legal names, addresses, emails, customers, licenses, audits, and partners are not invented. Those fields stay `Not yet published`.

## Run locally

Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

`node_modules` and `.next` are not part of the project you upload. They are recreated by `npm install` and `npm run build`. Do not commit or zip them.

Without `CONTACT_WEBHOOK_URL`, the form does not send email. In development it writes `.data/contact-submissions.jsonl` and says so on screen. `.data/` is not committed.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |

## Environment variables

Copy `.env.example` to `.env.local`.

| Variable | Purpose |
| --- | --- |
| `CONTACT_WEBHOOK_URL` | HTTPS endpoint that receives inquiry JSON. If it is empty in production, the form stores nothing and returns 503. |
| `CONTACT_WEBHOOK_TOKEN` | Optional. Sent as `Authorization: Bearer …` when set. |

The public site URL is `site.url` in `src/config/site.ts`. The default is `https://futuristicworld.us`.

## Edit content

- Shared copy and the disclaimer: `src/config/site.ts`
- Navigation: `src/config/navigation.ts`
- Home and service copy: `src/content/pages.ts`
- Articles: add an entry in `src/content/insights.ts`. It appears at `/insights/[slug]` and in the sitemap.
- Public projects: `publicProjects` in `src/app/(marketing)/projects/page.tsx`. An empty list shows “Projects in development.” Add only confirmed projects.

## Push to GitHub

This folder is already a git repository. Do not commit secrets (`.env.local`, `.data/`).

```bash
git add .
git commit -m "Add the Futuristic World marketing site"
gh repo create futuristic-world --private --source=. --remote=origin --push
```

Without `gh`, create an empty GitHub repository, then `git remote add origin <url>` and `git push -u origin HEAD`.

GitHub stores the source. The contact API needs a Node server such as Vercel. GitHub Pages static hosting does not run `/api/contact`.

## Deploy on Vercel

1. Import the GitHub repository as a Vercel project.
2. Set `CONTACT_WEBHOOK_URL` in the project environment.
3. Before attaching `futuristicworld.us`, confirm `site.url` in `src/config/site.ts` matches the live origin.

## Not in this version

Wallet connection, token deployment, trading, custody, payments, investment solicitation, and a Korean `/ko` locale. Pages are split under the App Router so those can be added later.

## Still unpublished

Legal entity, address, official email, social accounts, team biographies, public projects, and the privacy controller and retention period. Do not fill those with sample values until they are confirmed.
