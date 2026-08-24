# Wave 8 — Security: Chapter 26

## Problem 1 — `sanitize` אינו מושג מספיק מדויק

החלף גישה כללית של:

> sanitize input

בחלוקה:

### Validation
האם הקלט חוקי לפי ה־business rule?

דוגמה:

```text
priority ∈ {low, medium, high}
```

### Parameterization
SQL אינו נבנה באמצעות string concatenation.

### Output encoding
כאשר מציגים מידע ב־HTML יש לקודד לפי context.

### Authorization
גם ID תקין אינו אומר שלמשתמש יש זכות לגשת אליו.

## Problem 2 — `helmet.js`

ה־Capstone הוא Flask.

`helmet.js` היא דוגמת Node/Express ולכן שוברת את הרצף.

### Required change

הסר אותה כדוגמה מרכזית.

במקום זאת הסבר framework-neutral:

```text
CSP
HSTS
X-Content-Type-Options
secure cookie attributes
```

אפשר להוסיף:

> ב־Flask ניתן להגדיר headers ישירות או באמצעות extension מתאים, אך יש לבדוק את תיעוד הגרסה שבה משתמש הפרויקט.

אל תכריח dependency חדש רק כדי להדגים headers.

## Add AI-specific security

הוסף ל־Threat Model:

- prompt injection
- excessive agency
- over-privileged tools
- sensitive context leakage
- secrets in prompts
- unsafe generated code

## Acceptance Criteria

- אין `helmet.js` כפתרון ל־Flask.
- validation ≠ parameterization ≠ encoding.
- authorization מופיע כגבול נפרד.
- AI agent threats מופיעים לצד OWASP basics.
