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
| `npm run build` | Next.js build, then the Cloudflare Worker in `.open-next` |
| `npm run preview` | Build and serve that Worker locally |
| `npm run deploy` | Build and deploy with Wrangler (needs a Cloudflare login) |
| `npm run start` | Serve the Next.js production build on Node |

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

This folder is already a git repository. Commit the source and `package-lock.json`. Do not commit `node_modules`, `.next`, `.open-next`, `.wrangler`, `.env.local`, or `.data/`.

```bash
git add .
git commit -m "Add the Futuristic World marketing site"
gh repo create futuristic-world --private --source=. --remote=origin --push
```

Without `gh`, create an empty GitHub repository, then `git remote add origin <url>` and `git push -u origin HEAD`.

## Cloudflare

Connect the GitHub repository in Cloudflare → Workers → Create → Import a repository. Production branch: `main`.

The dashboard defaults already match this project:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Non-production branch command | `npx opennextjs-cloudflare upload` |

`npm run build` runs Next, then writes `.open-next/worker.js`. Wrangler publishes that Worker. Each push to `main` builds and updates the live site.

If a preview branch fails with “worker.js was not found”, set the non-production command to `npx opennextjs-cloudflare upload`.

Set `CONTACT_WEBHOOK_URL` (and `CONTACT_WEBHOOK_TOKEN` if you use it) as a Worker secret. The form returns 503 until that URL exists. It is not stored in git.

The first deploy gets a `*.workers.dev` hostname. Attach `futuristicworld.us` in the Worker settings after that, and keep `site.url` in `src/config/site.ts` equal to the live origin. Node.js version for the build: 22.

## Not in this version

Wallet connection, token deployment, trading, custody, payments, investment solicitation, and a Korean `/ko` locale. Pages are split under the App Router so those can be added later.

## Still unpublished

Legal entity, address, official email, social accounts, team biographies, public projects, and the privacy controller and retention period. Do not fill those with sample values until they are confirmed.
