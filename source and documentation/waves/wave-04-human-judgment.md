# Wave 4 — חיזוק Human Judgment בפרקי הבנייה

## Problem

פרקים 15–19 טובים, אך תלמיד מתחיל עלול לחשוב שאם Bob יודע לכתוב HTML/JS/API/SQL/Auth — אין צורך להבין את המנגנון.

## Required pattern

בכל אחד מפרקים 15–19 הוסף section עקבי:

# מה Bob יכול לעשות — ומה אתם חייבים להבין

אין להפוך זאת לשיעור ארוך.

### Chapter 15 — HTML/CSS

Bob יכול:
- לייצר markup
- לכתוב CSS
- לשפר responsive layout

האדם חייב להבין:
- structure vs style
- semantics
- accessibility basics
- מה קורה במסך לאחר השינוי

### Chapter 16 — JavaScript

Bob יכול:
- לכתוב event handlers
- לבצע fetch
- לשנות DOM

האדם חייב להבין:

```text
event → state/data → function → DOM/result
```

וכן:
- async operation
- error path

### Chapter 17 — Backend/API

Bob יכול:
- ליצור endpoint
- לכתוב request handling

האדם חייב להבין:

```text
Request
→ Validation
→ Authorization
→ Business Logic
→ Persistence
→ Response
```

וכן:
- HTTP method
- status code
- failure case

### Chapter 18 — Database

Bob יכול:
- לכתוב schema
- query
- migration

האדם חייב להבין:
- table
- key
- relationship
- transaction
- why parameterized query matters
- data loss risk

### Chapter 19 — Identity/Auth

Bob יכול:
- לכתוב login logic
- middleware/decorator
- session handling

האדם חייב להבין את ההבדל בין:

```text
Authentication = מי אתה?
Authorization  = מה מותר לך?
```

וכן:
- session
- password handling
- IDOR / object-level authorization

## Acceptance Criteria

- 15–19 כוללים mental model מפורש.
- אין ניסיון ללמד syntax לעומק.
- התלמיד יודע מה הוא חייב להיות מסוגל להסביר לפני אישור diff.
