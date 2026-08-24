# Wave 17 — Capstone consistency review

בצע review רוחבי ל־TaskFlow בפרקים 11–28.

בדוק:

1. האם אותה architecture נשמרת?
2. האם אותם entity names נשמרים?
3. האם API endpoints עקביים?
4. האם DB schema עקבי?
5. האם auth model עקבי?
6. האם RAG docs path עקבי?
7. האם tests מתייחסים ל־features שבאמת נבנו?
8. האם security mitigations תואמים ל־implementation?
9. האם deployment chapter משקף את stack שנבנה?
10. האם handover מתייחס לכל מה שנוצר?

## Rule

אם נמצא inconsistency:

- אל "תקן" אוטומטית לפי ניחוש.
- השתמש בפרקים הקודמים כ־source of truth.
- שמור על minimal architecture.

## Acceptance Criteria

כתוב `docs/capstone-consistency.md` עם:

```text
Entity
First introduced
Current definition
Where used
Inconsistency found?
Resolution
```

אם repository אינו משתמש כרגע ב־`docs/`, מותר ליצור אותו.
