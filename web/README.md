# ToolTrust Web UI

Next.js front end for the ToolTrust security directory. No database or backend — it reads scan reports from `../data/reports/*.json` (relative to the repo root).

## Run locally

From the **repository root** (so `data/reports` is available):

```bash
cd web && npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
cd web && npm run build && npm run start
```

## Deploy on Vercel

1. Push the repo to GitHub and go to [vercel.com](https://vercel.com).
2. **Import** the repository.
3. Set **Root Directory** to `web` (the app and `package.json` live there).
4. Leave **Build Command** as `npm run build` and **Output Directory** as default.
5. Deploy. The app reads `../data/reports/*.json` at build time, so the repo root must include the `data/reports` folder (e.g. commit reports or ensure they’re present in the branch you deploy).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AgentSafe-AI/tooltrust-directory&project-name=tooltrust-directory&root-directory=web)

## Stack

- Next.js 16 (App Router)
- TypeScript, Tailwind CSS
- lucide-react
- Data: static JSON from `data/reports/`
