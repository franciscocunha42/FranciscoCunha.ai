# franciscocunha.ai

Editorial landing page for Francisco Cunha — Operations Consultant · AI Implementation.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Configuration

- **Contact form** — copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORMSPREE_ID` to your Formspree endpoint ID. If unset, the form falls back to a `mailto:` action so the page still works in dev.
- **Portrait** — drop a JPG at `public/portrait.jpg` (recommended 720×920, ~150 KB) for the About-Lede block.
