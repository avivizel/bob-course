# Plan Mode Rules

## Build pipeline constraint
There is a single build step (`node scripts/build.mjs`) with no incremental or watch mode. Any plan that involves content or template changes must end with a rebuild step; there is no dev server.

## Template and data are tightly coupled
`build.mjs` has a fixed HTML template — the chapter schema is not configurable at runtime. Plans that add new section types (beyond `capstone`, `diagram`, `compare`, `deep`) must include modifying the template in `build.mjs` as well as the data schema.

## No dependency management
There is no `package.json`. The project uses only Node.js built-ins (`fs`, `path`, `url`). Plans must not introduce npm packages without also creating a `package.json` and updating the build command.

## RTL / Hebrew layout
The entire site is `lang="he" dir="rtl"`. Any new UI elements must be tested for RTL layout. CSS uses `--sidebar-w: 280px` and `--content-w: 760px` as layout anchors. Exception: `.flow-diagram` is explicitly `direction: ltr` so node order renders left→right.

## Chapter scope: 34 chapters, 7 phases
- Phase ceiling is dynamic: `build.mjs` uses `ALL[ALL.length - 1].num` as the upper bound for "next chapter" links — adding chapters does not require changing `build.mjs`.
- `PHASES` array in `chapters-part1.mjs` controls the phase groupings. Adding a new phase requires: (1) entry in `PHASES`, (2) colour in `phaseBadge()` in `build.mjs`.
- Enterprise phase (29–34) is the terminal phase. Any new chapters append after 34 in `chapters-part2.mjs`.

## IBM i chapter (ch. 29) — architectural constraints
- The chapter has 10 concepts (more than the typical 5–6) reflecting the enriched feature set from the June 2026 Office Hours transcript.
- `/erd` is a slash-command that belongs in DB Mode context — not Developer Mode.
- The RPG Modernization Workflow is a **3-phase ordered process**; plans that suggest parallelising the OPM→ILE and free-form steps will be incorrect (compile gate required between each phase).
- Reports saved to IFS become Bob context — this is an architectural pattern, not a UI convenience.

## Content quality schema (ch. 1–28)
All chapters must have:
- `lab` array ending with `"הצלחה = ..."` — a concrete success criterion (all ch. 1–28 now have this)
- `analogy.bridge` — a concrete actionable task (not a rhetorical question) that students complete using the chapter topic against TaskFlow (all ch. 1–28 now have this)
- ch. 1–10: 6 `concepts`, 5 `quiz` questions
- ch. 11–28: 4+ `concepts`, 3+ `quiz` questions
