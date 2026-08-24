# Required final report from Bob

בסוף העבודה אל תכתוב רק:

> Done.

הפק report:

```markdown
# Course Refinement Report

## Build
- command:
- result:

## Validation
- command:
- result:

## Files changed
- ...

## Pedagogical changes
- ...

## Technical corrections
- ...

## Product facts updated
- ...

## Claims removed because they were not verified
- ...

## IBM sources used
- ...

## Remaining uncertainties
- ...

## Manual review recommended
- ...

## Git diff summary
- ...
```

בנוסף:

```bash
git diff --stat
git status
```

והצג את התוצאה.

---

# Bob master execution prompt

לאחר שמסמך זה נמצא ב־repository, ניתן להתחיל עם prompt הבא ב־Plan Mode:

```text
Read AGENTS.md and this course-refinement execution document in full.

Your task is to improve the IBM Bob course without changing its 34-chapter numbering, URLs, core visual identity, or static-site architecture.

Important:
- The root HTML files are generated artifacts. Never hand-edit them.
- Source content lives under scripts/.
- Run node scripts/build.mjs after every approved wave.
- Do not implement all changes in one pass.
- Product-dependent claims must be verified against current official IBM sources before editing.
- Do not invent IBM Bob features, deployment architecture, CLI commands, regions, model availability, compliance claims, or security guarantees.
- Preserve Hebrew/RTL and the current beginner-friendly teaching style.

First perform Wave 0 only:
1. Read the repository instructions and architecture.
2. Run the existing build.
3. Map every source file that would need to change.
4. Identify how index, chapter content, concept details, deep sections, phase grouping and navigation are generated.
5. Return a wave-by-wave implementation plan with risks and validation steps.

Do not change any file yet.
```

---

# Agent-mode prompt אחרי אישור Plan

```text
Execute only the approved wave.

Rules:
1. Change source-of-truth files only.
2. Do not hand-edit generated HTML.
3. Keep the diff minimal and scoped.
4. Preserve Hebrew RTL, chapter numbering and URLs.
5. After editing, run:
   node scripts/build.mjs
6. Run the current validation available in the repository.
7. Review git diff for unintended generated changes.
8. Report:
   - source files changed
   - generated files changed
   - acceptance criteria passed/failed
   - unresolved issues

Stop after this wave. Do not continue to the next wave without review.
```

---

# Final quality question

לפני סיום, עבור על כל הקורס ושאל על כל פרק:

> **אם Bob ייתן לתלמיד תשובה שנשמעת בטוחה אבל שגויה — האם הפרק הזה נתן לתלמיד כלים לזהות זאת?**

אם התשובה היא "לא":

אל תוסיף עוד חומר.

הוסף:
- evidence requirement,
- verification step,
- judgment exercise,
- או boundary ברור.

זו מטרת ה־refinement כולו.

---

# Final target

לאחר התיקונים, הקורס צריך ללמד את השרשרת הבאה:

```text
Understand
→ Define Intent
→ Bound Scope
→ Provide Context
→ Plan
→ RAVEN Review
→ Approve
→ Execute
→ Test
→ Inspect Diff
→ Verify Evidence
→ Security Review
→ Human Decision
→ Handover
```

והלומד צריך לצאת עם ההבנה:

> **Bob יכול לבצע חלק גדול מעבודת הפיתוח. האחריות להבין, להחליט, לאמת ולאשר נשארת אצל האדם.**
