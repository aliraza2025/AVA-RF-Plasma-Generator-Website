# Asset Manifest

All project assets are stored in:

```text
public/assets/
```

References are centralized in:

```text
src/lib/assets.ts
```

## Logos

| File | Use |
| --- | --- |
| `AVA logo TM.png` | AVA primary logo and transparent-logo fallback |
| `AVA logo TM white bg.png` | AVA logo on white/light backgrounds |
| `analogic-transparent-logo.png` | Original Analogic transparent logo |
| `analogic-transparent-logo-cropped.png` | Cropped Analogic transparent logo used in footer |
| `analogic-whitebkg-logo.png` | Original Analogic white-background logo |
| `analogic-whitebkg-logo-cropped.png` | Cropped Analogic white-background logo |

Note: `AVA logo - transparent background.png` was requested but was not available locally. The fallback is documented in `src/lib/assets.ts`.

## Product Images

### AVA 1213

| File | Use |
| --- | --- |
| `ava1213 front.jpg` | Product carousel, product card, product page, spin viewer |
| `ava1213 left.jpg` | Product page gallery and spin viewer |
| `ava 1213 right.jpg` | Product page gallery and spin viewer |

### AVA 3013

| File | Use |
| --- | --- |
| `ava3013 front.jpg` | Product carousel, product card, product page, spin viewer |
| `ava3013 left.jpg` | Product page gallery and spin viewer |
| `ava3013 right.jpg` | Product page gallery and spin viewer |

### AVA 6013

| File | Use |
| --- | --- |
| `ava6013 front.jpg` | Hero, product carousel, product card, product page, spin viewer |
| `ava6013 left.jpg` | Product page gallery and spin viewer |
| `ava6013 right.jpg` | Product page gallery and spin viewer |
| `ava6013 back.jpg` | Product page gallery and spin viewer |

## Documents

| File | Use |
| --- | --- |
| `Flyer- Final.pdf` | Source material / public asset |
| `DATASHEET-AVA-1216.pdf` | AVA 1213 download |
| `DATASHEET-AVA-3016.pdf` | AVA 3013 download |
| `DATASHEET-AVA-6016.pdf` | AVA 6013 download |

## Generated / Supporting Visuals

| File | Use |
| --- | --- |
| `semiconductor-manufacturing-control.svg` | Legacy/static process-control visual |
| `process-control-cleanroom.png` | Process-control carousel slide |
| `process-control-plasma.png` | Process-control carousel slide |
| `process-control-service.png` | Process-control carousel slide |

## Filename Notes

Some source filenames include spaces, such as:

- `AVA logo TM.png`
- `AVA logo TM white bg.png`
- `ava 1213 right.jpg`
- `Flyer- Final.pdf`

Next.js serves these correctly from `public/assets/` using URL-encoded paths internally. Keep the filenames as-is unless the code mapping in `src/lib/assets.ts` and `src/lib/products.ts` is updated.
