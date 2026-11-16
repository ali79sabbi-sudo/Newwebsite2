# TwincitySpa — website

Luxury spa & massage website for TwincitySpa, Bahria Town Phase 7, Rawalpindi.
Next.js 16 (App Router, fully static) · TypeScript · Tailwind CSS v4.

## Run locally
```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start   # production build
npm run lint
```

## Where things live
| What | File |
|---|---|
| Business details (NAP, hours, geo, socials) — single source of truth | `src/lib/site.ts` |
| Treatment content (14 pages) | `src/data/services-a.ts`, `src/data/services-b.ts` |
| Location content (8 pages) | `src/data/locations.ts` |
| Blog articles | `src/data/blog.ts` |
| FAQ page | `src/data/faqs.ts` |
| Verified reviews (empty = hidden) | `src/data/reviews.ts` |
| Images + alt text | `public/images/`, `src/lib/images.ts`, credits in `docs/IMAGE-CREDITS.md` |
| Design tokens | `src/app/globals.css` (`@theme`) |
| Metadata + JSON-LD helpers | `src/lib/seo.ts` |

## Deploy
**Vercel (recommended):** import the repo → framework auto-detected → add env vars from `.env.example` (optional) → deploy → add domain `twincityspa.com` (and redirect `www` → apex).

**Any Node host:** `npm ci && npm run build && npm start` (port 3000) behind Nginx/Cloudflare with HTTPS.

## After launch
1. Verify the domain in Google Search Console (`GOOGLE_SITE_VERIFICATION`) and submit `https://twincityspa.com/sitemap.xml`.
2. Do the same in Bing Webmaster Tools.
3. Create/claim the Google Business Profile with the **same** name, phone and address as `src/lib/site.ts`; add its URL to `site.social.googleBusiness`.
4. Validate structured data with Google's Rich Results Test and validator.schema.org.
5. Fill in the items in `docs/PLACEHOLDERS.md`.
