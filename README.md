# franciscocunha.ai

Editorial landing page for Francisco Cunha — Operations Consultant · AI Implementation.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Contact form

The form at the bottom of the page posts to `POST /api/contact`, a Next.js Route Handler that emails `francisco.m.camposcunha@gmail.com` via SMTP using `nodemailer`.

Copy `.env.example` to `.env.local` and fill in:

- `SMTP_HOST`, `SMTP_PORT` — `smtp.gmail.com:465` works for a personal Gmail.
- `SMTP_USER` — the sending Gmail address.
- `SMTP_PASS` — a Gmail **App Password** (Google account → Security → 2-Step Verification → App passwords).
- `SMTP_FROM` — formatted sender, e.g. `"Francisco Cunha <francisco.m.camposcunha@gmail.com>"`.

If the env vars are missing in production the route returns HTTP 500 and the form shows an inline error pointing to the mailto fallback.
