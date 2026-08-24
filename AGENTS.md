# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Project

Static HTML course site (Hebrew/RTL) — 34 chapter pages + index — for the IBM Bob course.
No package manager, no bundler, no framework. Pure vanilla HTML/CSS/JS.

## Build Command

```
node scripts/build.mjs
```

This regenerates **all** HTML files (`index.html` + `chapter-01.html` … `chapter-34.html`) from data in `scripts/`.
**Never hand-edit the generated HTML files.** All content lives in the scripts data modules.

No test runner, no lint tool, no CI config exists in this project.

## Architecture

```
scripts/
  chapters-part1.mjs   — AUTHOR, CAPSTONE, PHASES, CHAPTERS (ch. 1–10)
  chapters-part2.mjs   — CHAPTERS_PART2 (ch. 11–34)
  concept-details.mjs  — DETAILS: hover popup text, keyed "chapter:term" or "term"
  build.mjs            — combines all data, renders every page, writes to root
assets/css/guide.css   — single stylesheet (IBM Plex Sans Hebrew + JetBrains Mono)
assets/js/guide.js     — progress bar, sidebar scroll, concept-popup interactions
```

## Content Data Schema (chapters-part*.mjs)

Each chapter object requires these fields:

| Field | Type | Notes |
|---|---|---|
| `num` | number | 1–34 |
| `title` / `subtitle` | string | Hebrew |
| `phase` | string | one of: `foundation`, `bob`, `product`, `build`, `ai`, `quality`, `enterprise` |
| `time` | string | e.g. `"30 דק'"` |
| `intro` | string | |
| `concepts` | `{term, def, example, pitfall}[]` | |
| `analogy` | `{text, bridge}` | |
| `bob` | `{modes, workflow, prompt, promptWhy}` | `modes` = `["Ask"\|"Plan"\|"Agent"]` |
| `mistake` | `{bad, good}` | |
| `lab` | `string[]` | |
| `exercise` | string | |
| `quiz` | `{q, a}[]` | |
| `summary` | `string[]` | |
| `capstone?` | string | optional, ch. 11–34 only |
| `diagram?` | string | optional raw HTML (`<div class="flow-diagram">…</div>`) |
| `compare?` | `{bad, good}` | optional prompt comparison |
| `deep?` | `{title, html}` | optional deep-dive card (html is **not** escaped by `esc()`) |

### Content quality requirements
- `lab` array **must end** with `"הצלחה = ..."` — a concrete success criterion. All ch. 1–28 have this.
- `analogy.bridge` **must be a concrete actionable task** (not a rhetorical question) that students perform against TaskFlow. All ch. 1–28 have this.
- ch. 1–10: 6 `concepts`, 5 `quiz` questions. ch. 11–28: 4+ concepts, 3+ quiz.

## Critical Patterns

- **`esc(s)`** in `build.mjs` — all text data must pass through `esc()` before being placed in HTML. The one exception is `ch.deep.html`, which is inserted raw (it is trusted HTML, not user text).
- **Concept popup lookup**: `DETAILS` keys are `"chapter:term"` first, falling back to `"term"`. Always add new entries with the `"chapterNum:term"` key to avoid collisions.
- **`«text»`** guillemet syntax in strings gets converted by `esc()` into `<strong><em>text</em></strong>`. Use this for emphasis inside Hebrew text fields.
- **Phase badge colours** are hardcoded in `phaseBadge()` in `build.mjs`. If a new phase id is added, its colour must be added there too.
- **`data-chapter` attribute** on `<body>` drives the JS progress bar; the build sets this automatically.
- Concept popups are moved to `document.body` at runtime by `guide.js` to escape overflow clipping.
- **Flow diagrams must render LTR** — `assets/css/guide.css` sets `direction: ltr` on `.flow-diagram`. All diagram node order is left→right.

## Code Style

- ES modules (`.mjs`), Node.js native — no transpilation.
- All Hebrew text is stored in `.mjs` data files, never directly in HTML templates.
- CSS custom properties (`--var`) for all colours, spacing, and fonts — avoid hardcoded values in new CSS.
- JS is a single IIFE in `guide.js`; no modules, no imports on the client side.

## Phase → Chapter Map

| Phase | Chapters |
|---|---|
| `foundation` | 1–4 |
| `bob` | 5–10 |
| `product` | 11–14 |
| `build` | 15–19 |
| `ai` | 20–23 |
| `quality` | 24–28 |
| `enterprise` | 29–34 |

Enterprise chapters cover: IBM i Premium Package (29), IBM Z (30), watsonx Orchestrate/ADK (31), Java Modernization (32), SaaS Architecture (33), On-Prem/Air-Gap (34).
