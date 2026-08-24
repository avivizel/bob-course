# Wave 11 — Chapter 33: Bob SaaS Architecture

## Objective

לשמור את הפרק — הוא חשוב — אבל להפוך אותו מעמוד "facts פנימיים" לעמוד שמבחין בין known architecture concepts לבין product details שתלויים בגרסה.

## Review every factual claim

בדוק במיוחד:

- cloud providers
- exact AWS regions
- exact IBM Cloud regions
- Bob Model Gateway
- Redis
- COS
- Admin DB
- master/read replica
- exact model families
- entitlement behavior
- exact payload semantics
- retention
- audit storage
- authentication path
- `.bobignore` semantics
- statement that code on disk "does not leave"
- model data retention

## Required rule

כל claim שאי אפשר לאמת מול source רשמי public/current:

### Option A
הסר.

### Option B
הפוך ל־conceptual architecture:

> "ארכיטקטורה מופשטת להמחשת data flow; רכיבי implementation בפועל עשויים להשתנות."

### Option C
סמן:

> "Illustrative / not a contractual architecture."

## Model list

במקום להקפיא רשימה:

```text
Granite
Claude
Llama
Mistral
...
```

למד concept:

> Bob משתמש ב־multi-model orchestration ובוחר/מנתב משימות למודל מתאים בהתאם ליכולת, performance/cost ולזמינות המוצר.

אפשר לתת דוגמאות **רק אם נבדקו**.

## IBM official framing

IBM הודיעה על multi-model orchestration שמנתב משימות לפי accuracy, performance ו־cost.

הפוך זאת למושג המרכזי.

## `.bobignore`

אל תבטיח:

> `.bobignore` = "לא יוצא לעולם"

אלא אם זה כתוב במפורש בתיעוד הרשמי.

ניסוח בטוח יותר:

> `.bobignore` הוא מנגנון לצמצום context/גישה בהתאם להתנהגות Bob המתועדת; אין להשתמש בו כתחליף יחיד ל־secrets management, repository access control או data governance.

## Acceptance Criteria

- אין exact region table ללא source עדכני.
- אין internal infrastructure claims ללא source.
- אין הבטחת absolute privacy שאינה מתועדת.
- התלמיד עדיין מבין:
  - context
  - inference payload
  - data boundary
  - model routing
  - least privilege
  - sensitive code considerations
