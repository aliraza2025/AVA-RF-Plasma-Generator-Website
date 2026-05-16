# AVA Website Handoff Guide

Use this document when sharing the AVA website project with another designer, developer, agency, or internal stakeholder.

## What To Share

Share the project folder or the generated archive:

```bash
npm run handoff:archive
```

The archive is created inside the project folder:

```text
ava-website-handoff.tar.gz
```

Do not manually include these folders in a handoff unless specifically needed:

- `node_modules/`
- `.next/`
- `.vercel/`
- `.git/`

Those folders are local/generated and can be recreated.

## Setup For A New Person

1. Extract the archive or open the project folder.
2. Install Node.js 22 LTS, or Node.js 20+.
3. Run:

```bash
npm install
npm run dev
```

4. Open:

```text
http://localhost:3000
```

5. Before sharing or deploying changes, run:

```bash
npm run lint
npm run build
```

## Folder Responsibilities

```text
public/assets/
```

Stores all public downloadable/viewable files: logos, product imagery, datasheets, flyer, and generated carousel visuals.

```text
src/lib/assets.ts
```

The single source for image and PDF paths. Update this file instead of hard-coding paths throughout components.

```text
src/lib/products.ts
```

The single source for AVA product specs, descriptions, datasheet links, and gallery mappings.

```text
src/lib/site.ts
```

Shared navigation, contact info, benefits, trust cards, and assurance cards.

```text
src/components/
```

Reusable visual and interactive pieces, including:

- `site-header.tsx`
- `site-footer.tsx`
- `product-family-carousel.tsx`
- `process-control-carousel.tsx`
- `product-spin-viewer.tsx`
- `product-gallery.tsx`

```text
src/app/
```

Next.js App Router pages, metadata, sitemap, and robots file.

## Current Live URL

Production alias:

```text
https://ava-website-liart.vercel.app
```

Keep this link for sharing. Future production deployments should update this same URL.

## Contact Form Behavior

The contact form uses a `mailto:` action to send inquiries to the configured internal recipient. The recipient is intentionally not shown in the public contact details section.

If a true server-side form is needed later, replace the `mailto:` form in `src/app/contact/page.tsx` with an API route or form service.

## Key Design Features

- Sticky responsive header
- Mobile navigation
- Product family carousel with zoomed AVA product imagery
- Process-control carousel with AI-generated semiconductor visuals
- Individual product pages for AVA 1213, AVA 3013, and AVA 6013
- Image-based 360 spin viewers for each product page
- Direct datasheet downloads
- Contact page with embedded map
- SEO metadata, sitemap, and robots file

## Content Rules

Do not add:

- Fake customer quotes
- Customer logos unless supplied and approved
- Certifications unless verified
- Unsupported performance claims

Keep technical specs aligned with the supplied datasheets and centralized product data.
