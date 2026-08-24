# Wave 15 — Improve quizzes without making course longer

## Objective

השאלות הקיימות טובות ל־reinforcement אך תשובות מיידיות מקטינות את ערך ההערכה.

## Required change

אל תסיר תשובות.

שנה renderer כך שתשובות יהיו collapsed by default:

```html
<details>
  <summary>הצג תשובה</summary>
  ...
</details>
```

או מנגנון קיים שקול.

## Add question types

בפרקים נבחרים הוסף:

- explain why
- choose mode
- approve/reject
- find hidden assumption
- predict side effect
- identify missing evidence

פחות:

> "מה זה X?"

יותר:

> "Bob מציע X. האם זה נכון במקרה הזה ולמה?"

## Acceptance Criteria

- answers אינן visible מיד.
- אין פגיעה ב־accessibility.
- keyboard navigation תקין.
