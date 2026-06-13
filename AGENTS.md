# AGENTS.md

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — typecheck (`tsc -b`) then bundle (`vite build`)
- `npm run lint` — ESLint flat config (`eslint.config.js`)
- No test framework installed yet.

## TypeScript quirks

- `verbatimModuleSyntax: true` → always use `import type { Foo }` for type-only imports
- `erasableSyntaxOnly: true` → no `enum`, no `namespace`, no parameter properties
- `noUnusedLocals` + `noUnusedParameters` → unused code is a build error

## Tailwind + CSS

- Tailwind v4: configured inline in `src/index.css` via `@import "tailwindcss"`
- daisyUI v5: added via `@plugin "daisyui"` in the same CSS file
- No `tailwind.config.js` or `postcss.config.js` — the Vite plugin handles everything

## Architecture

- **Static-first**: all data is compiled into the bundle. No backend, no API, no DB.
- Data lives in `src/data/` as TypeScript module files exporting arrays:
  - `src/data/categories/index.ts` — `Category[]`
  - `src/data/regulations/index.ts` — `Regulation[]`
  - `src/data/summaries/index.ts` — `RegulationSummary[]`, `RegulationVersion[]`
- To add content, edit these TS files; no separate JSON or CMS.

## Routes

| Path | Component | Purpose |
|------|-----------|---------|
| `/` | Home | Landing page, category cards, latest laws |
| `/laws` | Laws | Filterable list via `?category=` & `?subcategory=` query params |
| `/laws/:id` | LawDetail | Full text + audit key points summary |
| `/notes` | Notes | **Placeholder** — not implemented |
| `/comparison` | Comparison | **Placeholder** — not implemented |
| `/export` | Export | **Placeholder** — not implemented |

## Key conventions

- All UI text is Traditional Chinese (zh-TW)
- Categories use string IDs referencing `categoryId` on Regulation
- Regulations link to subcategories via optional `subcategoryId`
- No CSS-in-JS; all styling uses daisyUI classes + Tailwind utilities
- The `scraper/` directory at root is reserved for future Python crawlers

## Known gaps (not yet implemented)

- Search bar in Navbar is visual-only (Phase 2)
- No pagination, tag cloud, or sorting on Laws page
- No test framework
- `index.html` still has `<html lang="en">` and default Vite title — should be updated
- Favicon `/favicon.svg` does not exist
