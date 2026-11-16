# Outstanding information (owner to confirm)

Nothing below was invented. Fill these in and redeploy — values flow through the UI, metadata and JSON-LD automatically.

| Item | Where to edit | Current behaviour |
|---|---|---|
| Exact street / building / plot address | `src/lib/site.ts` → `address.streetAddress`, `postalCode` | Shows "Bahria Town Phase 7, Rawalpindi"; pin shared via WhatsApp |
| GPS coordinates | `site.geo` | Omitted from schema |
| Google Maps link | `site.mapsUrl` | Contact page shows "Request location pin" |
| ~~Opening hours~~ ✅ | `site.openingHours` in `src/lib/site.ts` | Every day 12:00 PM – 5:00 AM |
| ~~Prices & session lengths~~ ✅ | `src/data/pricing.ts` (`STANDARD_RATES`); override per service via `rates` | PKR 3,000 / 30 min · PKR 6,000 / 1 hour for every treatment |
| Couples & four hands total price | `rates` on those services | Standard rates shown; site asks guests to confirm the total |
| Real team photos | `teamPhotos` in `src/app/therapists/page.tsx` | Representative Pexels photos, labelled as such |
| Which treatments are actually offered | remove/adjust entries in the services files | All 14 shown |
| Couples / four hands availability | service copy says "subject to availability" | — |
| Therapist profiles & qualifications | `therapists` array in `src/app/therapists/page.tsx` | Owner note shown |
| Female/male therapist availability | therapists page + FAQs | "Availability confirmed at booking" |
| Verified reviews | `src/data/reviews.ts` | Reviews section hidden |
| Social profiles / Google Business Profile URL | `site.social` | Hidden |
| Founding year, team story | `src/app/about/page.tsx` (owner note) | Owner note shown |
| Genuine premises photography | replace files in `public/images/` (keep names or update `src/lib/images.ts`) | Licensed Pexels images, labelled as representative |
| Cancellation policy specifics | `src/app/privacy-policy/page.tsx` | Generic wording |
| Legal review of privacy/terms | — | Template note shown on page |

When placeholders are filled, also remove the visible "Owner note" boxes (search for `placeholder-note`).
