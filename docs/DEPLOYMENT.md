# Deployment Notes

## Current Production Site

Production alias:

```text
https://ava-website-liart.vercel.app
```

This is the link to keep sharing. Production deploys from this Vercel project should continue aliasing to the same URL.

## Local Validation

Before deploying:

```bash
npm run lint
npm run build
```

## Deploy To Vercel

The local project is currently linked to Vercel in `.vercel/`, but that folder is not meant for general handoff archives.

If the project is still linked on the machine:

```bash
npx vercel --prod --yes
```

If a new person receives the handoff archive, they can either:

1. Import the project folder into Vercel through the Vercel dashboard, or
2. Run `npx vercel` and follow the linking prompts.

Recommended Vercel settings:

| Setting | Value |
| --- | --- |
| Framework | Next.js |
| Install command | `npm install` |
| Build command | `npm run build` |
| Output directory | Next.js default |
| Node.js | 22.x recommended, 20.x supported |

## Environment Variables

No environment variables are required for the current static/public website.

The contact form currently uses a browser `mailto:` action. If server-side email routing is added later, document the required provider keys here and keep secrets out of the repository.

## Post-Deploy Smoke Check

After deployment, verify:

```bash
curl -sS -L -o /dev/null -w 'home %{http_code}\n' https://ava-website-liart.vercel.app/
curl -sS -L -o /dev/null -w 'product %{http_code}\n' https://ava-website-liart.vercel.app/products/ava-6013
curl -sS -L -o /dev/null -w 'contact %{http_code}\n' https://ava-website-liart.vercel.app/contact
curl -sS -L -o /dev/null -w 'datasheet %{http_code}\n' https://ava-website-liart.vercel.app/assets/DATASHEET-AVA-6016.pdf
```

Expected response for each is `200`.

## Handoff Archive

Create a clean archive:

```bash
npm run handoff:archive
```

Output:

```text
ava-website-handoff.tar.gz
```

The archive excludes local/generated folders:

- `.git/`
- `.next/`
- `.vercel/`
- `node_modules/`
- coverage/build output
