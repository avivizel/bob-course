# Wave 18 — Validation script

לפרויקט אין test runner.

הוסף script פשוט ללא dependencies:

```text
scripts/validate.mjs
```

## Checks

### Files
- `index.html` קיים.
- כל `chapter-01.html` … `chapter-34.html` קיימים.
- `final-assessment.html` אם נבחרה האפשרות העצמאית.

### Navigation
- כל chapter מכיל previous/next לפי הצורך.
- chapter 1 אינו דורש previous.
- chapter 34 אינו דורש next.
- links מפנים לקבצים קיימים.

### Content regressions

Fail אם נמצאים phrases אסורים:

```text
השורה הראשונה = הגורם
No hallucination policy
wxo agent test
wxo agent deploy
מתאים ל-GDPR, PCI-DSS, HIPAA, ISO 27001
```

אפשר לנהל denylist בקובץ validate.

### Course metadata
- 34 chapters.
- unique chapter numbers.
- unique titles.
- valid phase.
- labs 1–28 עדיין מסתיימים ב־`הצלחה =`.
- concept detail keys חדשים אינם מתנגשים.

### HTML sanity
ללא parser חיצוני, בצע checks בסיסיים:
- `<html`
- `<head`
- `<body`
- closing tags בסיסיים
- duplicate title marker אם יש

אל תנסה לבנות HTML parser משלך.

## Run

```bash
node scripts/build.mjs
node scripts/validate.mjs
```

## Acceptance Criteria

שתי הפקודות מסתיימות exit code 0.
