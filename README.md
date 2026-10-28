# MS Shopping Store

A custom e-commerce store (customer site and admin panel) built with Next.js 14, TypeScript, Tailwind CSS and Supabase (PostgreSQL, Auth, Storage). Inspired by large marketplaces, with an original orange and charcoal design. The supplied MS Shopping Store logo is included at `public/ms-shopping-store-logo.png` and is used in the site header and footer.

**Hosting note:** this project is a custom Next.js/Supabase application, not a WordPress/WooCommerce plugin or theme. GitHub stores the source code; deploy the running application to a Next.js-compatible host such as Vercel and configure Supabase separately. GitHub Pages alone cannot run this server-side application.

> **Honest status:** this code has been checked statically (syntax, imports, unit tests for the helper functions). It has **not** yet been built against real dependencies, connected to a live database, or deployed. Follow "First run checklist" below and fix anything the commands report before going live. Online payment is **not** connected; Cash on Delivery works end to end once the database is set up.

## Features
**Storefront:** homepage slider (banners from the admin), categories, Flash Sale / Trending / Best Sellers / New Arrivals / Recommended / Special Offers, search with category, price, rating and stock filters, sorting, pagination, product pages with gallery zoom, sizes and colors, reviews, related and recently viewed products, wishlist, cart drawer, checkout, order confirmation.

**Customers:** register, log in, log out, password reset, profile, saved addresses, order history and details, wishlist.

**Admin (`/admin`, admins only):** dashboard with real statistics and chart, products (multi-image upload, variations, bulk actions), categories, orders and status updates, customers, inventory with stock history, coupons, homepage banners, review moderation, sales reports with CSV export, store settings (shipping fees, payment methods, announcement bar, low-stock level). Works on phones.

**Quality:** animations with reduced-motion support, skeleton loaders, toasts, keyboard and screen-reader friendly, SEO metadata, sitemap and robots, security headers (CSP, HSTS), cached public data.

## Tech stack
Next.js 14 (App Router, Server Actions) · TypeScript · Tailwind CSS · Supabase (Postgres with Row Level Security, Auth, Storage) · Zod validation · Node test runner.

## Prerequisites
Node.js 18.18 or newer (20 recommended), npm, a free Supabase account (https://supabase.com), a GitHub account, and a Vercel account (or any Node host) for deployment.

## Setup
```bash
npm install
cp .env.example .env.local      # Windows: copy .env.example .env.local
```
Fill in `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` and `NEXT_PUBLIC_SITE_URL` (Supabase: Project Settings, API). Leave the payment variables empty.

### Database
In the Supabase **SQL Editor** run these files from `supabase/`, **in this order, once each**:
1. `schema.sql` (tables, security policies, ordering functions, image storage)
2. `seed.sql` (starting categories)
3. `part2.sql` (settings, inventory, moderation, reports, security hardening)
4. optional: `seed_sample_products.sql` (demo products, flagged as samples; remove with `delete from public.products where is_sample;`)

### Auth settings (Supabase, Authentication, URL Configuration)
Set **Site URL** to your site address and add these **Redirect URLs**: `http://localhost:3000/auth/callback` and `https://YOUR-DOMAIN/auth/callback`. For quick local tests you can turn off "Confirm email"; keep it on in production.

### Create your admin account
Register on the site, then run in the SQL Editor (use your email):
```sql
update public.profiles set role = 'admin'
where id = (select id from auth.users where email = 'you@example.com');
```
Log out and in again and open `/admin`. Roles are enforced on the server and by database policies, never by the browser.

### Run locally
```bash
npm run dev          # http://localhost:3000
```

## First run checklist (do this before deploying)
```bash
npm run typecheck && npm run lint && npm test && npm run build
```
Then walk through `docs/TESTING.md` (registration, product creation with images, cart, checkout, order management) on desktop and on a phone. Report or fix anything that fails.

## Environment variables
| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | yes | Public anon key (safe in the browser, protected by Row Level Security) |
| `NEXT_PUBLIC_SITE_URL` | yes | Canonical site URL (SEO, emails, reset links) |
| `NEXT_PUBLIC_CONTACT_*`, `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_SOCIAL_*` | no | Footer, contact page, WhatsApp button |
| `PAYMENT_PROVIDER`, `PAYMENT_API_KEY`, `PAYMENT_WEBHOOK_SECRET` | no | Online payments, see `docs/PAYMENTS.md` |
| `SUPABASE_SERVICE_ROLE_KEY` | only for online payments | Used by the payment webhook only. Server-side secret. |

Real values go in `.env.local` (ignored by git) or your host's environment settings, never in the repository.

## GitHub
```bash
git init
git add .
git commit -m "MS Shopping Store"
git branch -M main
git remote add origin https://github.com/YOUR-USER/ms-shopping-store.git
git push -u origin main
```
Check `git status` first: `.env.local` must not appear. The workflow in `.github/workflows/ci.yml` runs install, lint, typecheck, tests and build on every push using placeholder values.

## Deploy on Vercel
1. Vercel, **Add New Project**, import the GitHub repository (framework is detected as Next.js).
2. Add the environment variables above in **Settings, Environment Variables** (production `NEXT_PUBLIC_SITE_URL` = your final https address).
3. Deploy. Vercel provides HTTPS automatically; add a custom domain under **Settings, Domains** and follow its DNS instructions.
4. In Supabase add the production URL to **Site URL** and **Redirect URLs** (see Auth settings).
5. Open the live site and repeat the checklist in `docs/TESTING.md` against production. Do not consider the site live until it passes.

## Project structure
See `docs/ARCHITECTURE.md`.

## Security notes
Row Level Security on every table; orders are created only by the `place_order` database function which re-reads prices, validates stock under row locks and applies shipping and coupons; admin actions check the role on the server and in the database; image uploads are admin-only, 5 MB, JPG/PNG/WebP; the browser never sends prices or roles that are trusted; no card data is stored (online payments must use a hosted gateway page).
