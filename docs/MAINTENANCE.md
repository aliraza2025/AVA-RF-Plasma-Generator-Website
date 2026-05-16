# Maintenance Notes

## Updating Product Specs

Edit:

```text
src/lib/products.ts
```

Each product entry controls:

- Product name and slug
- Power/frequency/type
- Overview copy
- Key highlights
- Technical specifications
- Image gallery
- Datasheet link
- Related products

Keep product specifications aligned with the supplied datasheets.

## Updating Images or PDFs

1. Add the new file to `public/assets/`.
2. Update `src/lib/assets.ts` if the path is shared.
3. Update `src/lib/products.ts` if it is product-specific.
4. Run:

```bash
npm run lint
npm run build
```

## Updating Contact Details

Edit:

```text
src/lib/site.ts
```

The public contact details are displayed on the footer, About page, and Contact page.

The form recipient is configured separately in:

```text
src/app/contact/page.tsx
```

The recipient should not be displayed in the public contact details section unless specifically requested.

## Updating Navigation

Edit:

```text
src/lib/site.ts
```

Look for `navItems`.

## Updating SEO

Global metadata:

```text
src/app/layout.tsx
```

Page-level metadata:

```text
src/app/about/page.tsx
src/app/contact/page.tsx
src/app/products/page.tsx
src/app/products/[slug]/page.tsx
```

Sitemap:

```text
src/app/sitemap.ts
```

Robots:

```text
src/app/robots.ts
```

## Current Quality Checks

Use these before handoff or deployment:

```bash
npm run lint
npm run build
```
