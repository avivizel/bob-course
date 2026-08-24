# Wave 0 — Baseline and inventory

## Objective

לייצר baseline לפני שינוי.

## Tasks

בצע:

```bash
git status
node scripts/build.mjs
git diff --stat
```

בדוק:

- האם ה־working tree נקי לפני העבודה.
- האם build קיים משנה קבצים גם בלי שינוי source.
- האם יש תוכן ידני שלא מיוצר דרך `build.mjs`.
- כיצד `PHASES` מוגדרים.
- כיצד index נבנה.
- כיצד chapter time מוצג.
- כיצד `deep`, `diagram`, `compare` ו־concept details נרנדרים.

## Required output before editing

הצג Plan קצר עם:

```text
Source-of-truth files:
Generated files:
Renderer files:
Content files:
CSS/JS files:
Current build status:
Risks:
```

## Acceptance Criteria

- אין עדיין שינוי source.
- ידוע בדיוק אילו קבצים ייערכו בכל Wave.
- build baseline הצליח.
