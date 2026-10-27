# Futuristic World

Frontend for [futuristicworld.us](https://futuristicworld.us), a technology publication covering AI, machines, space, and energy.

This build is React + Vite only. There is no database and no API server. Stories and guides live in `src/data` and render in the browser. The homepage desk remembers a reading lane in this browser only.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deploy

`npm run build` writes a static site to `dist/`. Point futuristicworld.us at that folder on your host.

Client-side routes need an SPA fallback to `index.html`. `vercel.json` and `public/_redirects` cover Vercel and Netlify. On another host, rewrite unknown paths to `index.html`.

The newsletter and contact forms validate in the browser and do not store or send submissions. Connect them to an email service before launch.
