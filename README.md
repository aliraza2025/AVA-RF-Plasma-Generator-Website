# AVA RF Plasma Generator Website

Premium Next.js marketing website for AVA RF plasma generators, developed from product marketing strategy, AVA brand positioning, datasheets, UI/UX wireframes, and semiconductor RF power collateral.

Live site: https://ava-website-liart.vercel.app

## Overview

This repository contains the AVA RF Plasma Generator Website, a modern product marketing website developed for AVA, a sub-brand of Analogic under the Power and Motion Control business segment. The project translates AVA's product marketing roadmap, brand strategy, datasheet content, website wireframes, and semiconductor RF power positioning into a polished responsive web experience.

The website was created as part of Spring 2026 Product Marketing Internship work supporting AVA's digital presence, product portfolio storytelling, and go-to-market content. It includes homepage messaging, product pages for AVA 1213, AVA 3013, and AVA 6013, technical specification content, datasheet downloads, product imagery, 360-style image viewers, contact flows, map integration, and process-control visual sections.

The design direction follows a minimal, modern, high-tech industrial aesthetic using Analogic-inspired blue, white, and gray tones. The content and structure were informed by AVA marketing collateral, product datasheets, competitive website research, social media strategy, SEMICON/event planning concepts, and website development roadmap work.

## Project Highlights

- Built a responsive AVA website with Next.js, React, Tailwind CSS, Framer Motion, and Lucide icons
- Developed homepage, product listing, individual product pages, About page, and Contact page
- Centralized AVA product specs, datasheet links, image paths, and marketing content for maintainability
- Added product-focused carousel sections with zoomed product imagery
- Added AI-generated semiconductor process-control carousel visuals
- Added image-based 360 product viewers using supplied AVA product angle photos
- Integrated datasheet downloads for AVA 1213, AVA 3013, and AVA 6013
- Added SEO-friendly metadata, sitemap, robots file, and clean page routing
- Organized handoff documentation, asset manifest, deployment notes, and maintenance guide
- Grounded website messaging in AVA product collateral, datasheets, competitive research, and product marketing strategy

## Quick Start

Requirements:

- Node.js 22 LTS recommended, Node.js 20+ supported
- npm

Install and run locally:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Validate before sharing or deploying:

```bash
npm run lint
npm run build
```

Create a clean handoff archive:

```bash
npm run handoff:archive
```

This creates `ava-website-handoff.tar.gz` inside the project folder and excludes generated/developer-only folders such as `node_modules`, `.next`, `.vercel`, and `.git`.

## Project Map

```text
AVA webiste/
├── docs/                    Handoff, asset, and deployment notes
├── public/assets/           Logos, product images, datasheets, flyer, AI visuals
├── src/app/                 Next.js routes and SEO metadata
├── src/components/          Reusable UI, carousel, gallery, and layout components
├── src/lib/                 Centralized assets, product specs, nav, contact data
├── package.json             Scripts and dependencies
└── README.md                Setup overview
```

## Main Routes

- `/`
- `/products`
- `/products/ava-1213`
- `/products/ava-3013`
- `/products/ava-6013`
- `/about`
- `/contact`
- `/robots.txt`
- `/sitemap.xml`

## Content and Data

- Product data and specifications: `src/lib/products.ts`
- Image/PDF path mapping: `src/lib/assets.ts`
- Navigation, benefits, contact info: `src/lib/site.ts`
- Global styling and design tokens: `src/app/globals.css`

Product pages include the required note: "Specifications subject to change without notice."

## Asset Notes

All supplied product images, AVA logos, Analogic logos, datasheets, flyer, and generated carousel images are stored in `public/assets/`.

Important details:

- Original supplied asset filenames are preserved where used.
- Datasheet download buttons link directly to the PDFs in `public/assets/`.
- The requested optional file `AVA logo - transparent background.png` was not available locally. The site maps the optional transparent logo to `AVA logo TM.png` as a fallback and documents that in `src/lib/assets.ts`.
- AI-generated process-control carousel images are saved in `public/assets/` with descriptive filenames.

See `docs/ASSET_MANIFEST.md` for the full asset list.

## Deployment

The current production alias is:

https://ava-website-liart.vercel.app

Future Vercel production deployments should keep updating this same URL.

Deploy from the linked local project:

```bash
npx vercel --prod --yes
```

See `docs/DEPLOYMENT.md` for deployment and handoff details.

## Guardrails

This website intentionally avoids:

- Fake testimonials
- Invented customer names or customer logos
- Unsupported certifications
- Unsupported performance claims

All copy is grounded in the provided AVA/Analogic context, datasheets, flyer, and user-approved direction.
