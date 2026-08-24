# Wave 10 — Source discipline לכל תוכן תלוי מוצר

## Objective

תוכן על Bob, watsonx Orchestrate, IBM i, IBM Z, SaaS architecture ו־On-Prem משתנה מהר.

יש להפריד בין:

1. concept יציב
2. product fact זמני

## Schema extension

הוסף fields optional לפרק, לדוגמה:

```javascript
verifiedAt: "2026-08-24",
sources: [
  {
    label: "IBM official documentation",
    url: "..."
  }
]
```

אפשר לבחור שמות field אחרים, אך שמור על מודל ברור.

## Renderer

אם `verifiedAt` או `sources` קיימים, רנדר box:

```text
מידע תלוי גרסה
נבדק מול תיעוד IBM בתאריך: 24.08.2026

מקורות:
- IBM ...
- IBM ...
```

## Apply at minimum

- Chapter 29
- Chapter 30
- Chapter 31
- Chapter 32
- Chapter 33
- Chapter 34

שקול גם:
- 8
- 9
- 10
- 22
- 23

אם הם מכילים behavior של Bob שעלול להשתנות.

## Rule

IBM official source > blog > third-party > assumption.

אם אין source רשמי:

כתוב:

> "לא אומת בתיעוד ציבורי רשמי"

או הסר את ה־claim.

## Do not

- אל תמציא source.
- אל תשתמש ב־generic CPD docs כדי להוכיח Bob-specific architecture.
- אל תשתמש בתיעוד watsonx.ai כדי להוכיח ש־Bob משתמש בו בדרך מסוימת.
- אל תשתמש בדף מוצר אחד כדי להסיק data retention/compliance שלא נאמרו בו.
