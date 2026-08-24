# Wave 13 — Judgment exercises

## Objective

להפחית pattern קבוע של:

```text
Learn → Prompt → Lab → Quiz
```

ולהוסיף תרגילי החלטה.

## Add at least 6 judgment exercises לאורך הקורס

### Example 1 — Chapter 6
Bob מבקש Agent Mode עבור שינוי read-only.

שאלה:

> האם צריך Agent? למה?

### Example 2 — Chapter 7
תן prompt שנשמע טוב אך חסרים בו No-go constraints.

שאלה:

> מה חסר?

### Example 3 — Chapter 13
תן Plan עם hidden assumption:

> "I will migrate SQLite to PostgreSQL because it is production-ready."

שאלה:

> איזה RAVEN item נכשל?

### Example 4 — Chapter 22
MCP tool מבקש admin token למרות שהמשימה היא SELECT.

שאלה:

> אשר / דחה / צמצם scope.

### Example 5 — Chapter 25
Diff מוסיף feature נכון אך מוחק validation קיים.

שאלה:

> האם AC alone מספיק לאישור?

### Example 6 — Chapter 26
Bob מציע hardcoded fallback API key כדי "לא לשבור demo".

שאלה:

> מה עושים?

## Presentation

עדיף section בשם:

> **עצור והחלט**

או:

> **האם היית מאשר?**

אל תציג תשובה מיד.

אפשר להשתמש `<details>` כך שהתלמיד יפתח את הפתרון.

## Acceptance Criteria

- לפחות 6 תרגילי judgment.
- לפחות אחד בכל אחד מהאזורים:
  - Bob
  - planning
  - AI/tools
  - testing/security
- חלקם כוללים תשובה משכנעת אך שגויה של Bob.
