# Campos Cunha Consulting — franciscocunha.ai

Editorial landing page for Campos Cunha Consulting (KVK 42156042), the independent practice of Francisco Cunha.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## How it's built

- Next.js static export (`output: "export"`) — `npm run build` writes the site to `out/`.
- The contact form posts to `/api/contact`, a **Cloudflare Pages Function** in `functions/api/contact.ts`. It emails `francisco.m.camposcunha@gmail.com` through the [Resend](https://resend.com) HTTP API.

## Deploy to Cloudflare Pages

1. **Resend (email):** sign up at resend.com → *Domains* → add your domain and add the DNS records it shows (on Cloudflare DNS) → *API Keys* → create a key.
2. **Cloudflare:** dashboard → *Workers & Pages* → *Create* → *Pages* → *Connect to Git* → pick this repo.
   - Production branch: the branch you want live (e.g. `main`).
   - Framework preset: *Next.js (Static HTML Export)*
   - Build command: `npm run build` · Build output directory: `out`
   - Environment variable: `NODE_VERSION` = `22`
3. **Secrets:** project → *Settings* → *Variables and Secrets* → add `RESEND_API_KEY` (as a secret), `CONTACT_FROM` (e.g. `Campos Cunha Consulting <contact@yourdomain>`), optionally `CONTACT_TO`. Redeploy.
4. **Domain:** project → *Custom domains* → add your domain.

Every push to the production branch redeploys automatically; other branches get preview URLs.

## Testing the form locally

```bash
npm run build
cp .env.example .dev.vars   # fill in the values
npx wrangler pages dev out  # http://localhost:8788
```

With `npm run dev` the form has no backend and falls back to the mailto link.
