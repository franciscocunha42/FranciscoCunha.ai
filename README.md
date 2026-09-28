# Campos Cunha Consulting — franciscocunha.ai

Editorial landing page for Campos Cunha Consulting (KVK 42156042), the independent practice of Francisco Cunha.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## How it's built

- Next.js static export (`output: "export"`) — `npm run build` writes the whole site to `out/`. No server, no secrets.
- The contact form doesn't send anything itself. It drafts an email from what the visitor typed, then lets them send it however they like: their email app (mailto), Gmail, Outlook, WhatsApp, or by copying the text.

## Deploy to Cloudflare Pages

1. Cloudflare dashboard → *Workers & Pages* → *Create* → *Pages* → *Connect to Git* → pick this repo.
   - Production branch: the branch you want live (e.g. `main`).
   - Framework preset: *Next.js (Static HTML Export)*
   - Build command: `npm run build` · Build output directory: `out`
   - Environment variable: `NODE_VERSION` = `22`
2. Project → *Custom domains* → add your domain.

Every push to the production branch redeploys automatically; other branches get preview URLs.
