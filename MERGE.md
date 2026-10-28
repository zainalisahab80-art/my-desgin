# How to merge Part 2 into Part 1

1. Unzip `ms-shopping-store-part1.zip` (you get the folder `ms-shopping-store`).
2. Unzip `ms-shopping-store-part2.zip` into the SAME place. Your unzip tool will ask about existing files: choose **Replace / Overwrite all**.
3. Run `npm install` (Part 2 adds `server-only` and `tsx`).
4. In the Supabase SQL Editor run `supabase/part2.sql` ONCE (after `schema.sql` and `seed.sql`).
5. Follow README.md (it replaces the Part 1 README) and run: `npm run typecheck && npm run lint && npm test && npm run build`.

Nothing was deleted from Part 1. 31 files are new, 34 Part 1 files are updated.

## Updated Part 1 files (overwritten)
- .env.example
- README.md
- next.config.mjs
- package.json
- src/app/(shop)/account/layout.tsx
- src/app/(shop)/account/orders/[id]/page.tsx
- src/app/(shop)/cart/page.tsx
- src/app/(shop)/checkout/page.tsx
- src/app/(shop)/contact/page.tsx
- src/app/(shop)/page.tsx
- src/app/(shop)/product/[slug]/page.tsx
- src/app/actions/admin.ts
- src/app/actions/checkout.ts
- src/app/actions/misc.ts
- src/app/admin/layout.tsx
- src/app/admin/orders/[id]/page.tsx
- src/app/admin/page.tsx
- src/app/admin/products/page.tsx
- src/app/globals.css
- src/components/admin-shell.tsx
- src/components/auth-forms.tsx
- src/components/cart-lines.tsx
- src/components/checkout-form.tsx
- src/components/footer.tsx
- src/components/header-actions.tsx
- src/components/header.tsx
- src/components/hero-slider.tsx
- src/components/order-summary.tsx
- src/components/product-card.tsx
- src/components/sales-chart.tsx
- src/lib/data.ts
- src/lib/site.ts
- src/lib/types.ts
- tailwind.config.ts

## New files
- .github/workflows/ci.yml
- docs/ARCHITECTURE.md
- docs/PAYMENTS.md
- docs/TESTING.md
- src/app/(shop)/account/loading.tsx
- src/app/(shop)/loading.tsx
- src/app/(shop)/template.tsx
- src/app/actions/admin-extra.ts
- src/app/admin/banners/page.tsx
- src/app/admin/coupons/page.tsx
- src/app/admin/customers/page.tsx
- src/app/admin/inventory/page.tsx
- src/app/admin/loading.tsx
- src/app/admin/reports/export/route.ts
- src/app/admin/reports/page.tsx
- src/app/admin/reviews/page.tsx
- src/app/admin/settings/page.tsx
- src/app/api/payments/webhook/route.ts
- src/app/icon.svg
- src/app/robots.ts
- src/app/sitemap.ts
- src/components/admin-forms.tsx
- src/lib/csv.ts
- src/lib/payments/gateway.example.ts
- src/lib/payments/index.ts
- src/lib/payments/types.ts
- src/lib/supabase/public.ts
- src/lib/supabase/service.ts
- supabase/part2.sql
- tests/csv.test.ts
- tests/utils.test.ts
