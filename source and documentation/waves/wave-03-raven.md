# Wave 3 — הפוך את RAVEN למתודולוגיה רשמית

## Objective

בפרק 13 קיים framework משמעותי:

```text
R — Requirements
A — Assumptions
V — Verification
E — Effects
N — No-go
```

יש להפוך אותו למתודה שחוזרת לאורך הקורס, ולא רעיון מקומי.

## Required changes

### Chapter 13

הוסף deep-dive ברור:

# RAVEN Review

לפני שמאשרים Plan:

### Requirements
מה בדיוק נדרש?

### Assumptions
מה Bob מניח שלא נאמר?

### Verification
איך נדע שהשינוי הצליח?

### Effects
אילו קבצים, שירותים, APIs, נתונים או משתמשים מושפעים?

### No-go
מה אסור להשתנות?

הוסף prompt reusable:

```text
Review this plan using RAVEN:

R — Requirements:
List the explicit requirements.

A — Assumptions:
List every assumption not guaranteed by the repository or the request.

V — Verification:
For each requested outcome, define evidence that proves it works.

E — Effects:
List files, dependencies, APIs, data, security boundaries and users that may be affected.

N — No-go:
List components or behavior that must not change.

Do not implement anything yet.
```

### Chapter 14

לפני Agent execution:

> Run a RAVEN check on the approved plan.

### Chapter 24 — Debugging

השתמש ב־RAVEN בעיקר עבור:
- Assumptions
- Verification
- Effects

### Chapter 25 — Code Review

הוסף checklist:

- Requirements met?
- Hidden assumptions introduced?
- Verification evidence?
- Unintended effects?
- No-go boundaries preserved?

### Chapter 26 — Security

הוסף:
- Assumptions על trust boundaries
- Effects על attack surface
- No-go כגון "אין secrets בקוד"

### Chapter 28 — Handover

הוסף RAVEN summary למסירת מוצר.

## Acceptance Criteria

- RAVEN מופיע לפחות בפרקים 13, 14, 25, 26 ו־28.
- לא מדובר בהעתקה זהה בכל פעם; השימוש מותאם לשלב.
- תלמיד מסוגל להשתמש ב־RAVEN ללא Bob.
