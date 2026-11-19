# SEO foundation for joorkonberim.ir

The public domain could not be fetched from the inspection environment; this
branch is **not confirmed deployed**. The key frontend files in `jourkonberim`
and `jourkonberim-v` were identical at the time of review. Confirm the
deployment's source repository and build workflow before merging.

## Changes
- Persian metadata defaults, Open Graph defaults and absolute URL base.
- Dedicated metadata and canonical URLs for each tour detail page.
- `/robots.txt` and a minimal `/sitemap.xml` via Next.js Metadata Routes.
- Noindex for login, register, dashboard, and **unverified demo** tour listings/details.

## Critical business/data warning
The frontend imports static `lib/tours.ts` records with prices, ratings,
remaining seats and departure dates; registration and booking content also
describes demo behaviors. Do not allow those records to be treated as real
bookable offers or put them in a search sitemap until verified. Replace with
current real API data and review claims, imagery, structured data, and dates.

## Before production
1. Run `npm ci && npm run build && npm run lint`.
2. Confirm the live site is deployed from this repository and branch.
3. Verify the public origin and redirect/canonical policy for www/non-www.
4. Inspect server-rendered source HTML, `/robots.txt`, `/sitemap.xml`,
   `/tours`, and each real tour page after deploying.
5. Hook up real tours with correct update/deletion semantics; only then remove
   noindex and include verified canonical offer pages in the sitemap.
6. Connect Google Search Console and review indexing, CWV, and organic clicks.
