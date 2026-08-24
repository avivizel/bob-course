# Wave 6 — AI Reliability: Chapter 21

## Problem

הביטוי:

> `No hallucination policy`

עלול ליצור תפיסה ש־RAG מונע hallucinations.

RAG אינו מבטל hallucinations.

Failures אפשריים כוללים:

- retrieval miss
- bad ranking
- irrelevant context
- incomplete context
- incorrect synthesis
- unsupported claim
- citation mismatch
- stale source
- malicious source

## Required conceptual model

החלף את framing ל:

# Ground → Cite → Verify → Abstain

### Ground
תשובה מבוססת על evidence שנשלף.

### Cite
הצג מקור ברור.

### Verify
בדוק שהמקור באמת תומך בטענה.

### Abstain
אם אין evidence מספיק — אמור שאין תשובה מבוססת.

## RAG definition

הסבר:

```text
RAG = Retrieve → Add evidence to context → Generate
```

אל תכתוב ש־Grounding = "cite sources" בלבד.

Grounding הוא קישור התשובה ל־evidence מאומת; citation הוא אחד ממנגנוני הבקרה.

## Add failure modes

הוסף 4–6 failure modes פשוטים עם דוגמאות.

## Required evaluation lab

במקום בדיקה בודדת, הוסף mini evaluation set.

צור 15 שאלות:

```text
10 שאלות שהתשובה להן קיימת במסמכים
3 שאלות שאין להן תשובה במסמכים
2 שאלות שבהן מסמך מכיל מידע דומה אך אינו תומך בטענה המבוקשת
```

עבור כל שאלה מדוד:

```text
Retrieved correct source?      yes/no
Answer supported?              yes/no
Citation correct?              yes/no
Should abstain?                yes/no
Did abstain when required?     yes/no
```

## Success criterion

הצלחה אינה "המודל ענה".

הצלחה:

> כל claim ניתן לקשור ל־evidence, ובמקרים ללא evidence המערכת נמנעת מתשובה.

## Acceptance Criteria

לא קיים בקורס claim מסוג:

```text
RAG prevents hallucinations
No hallucination
RAG = no hallucination
```

אלא אם הוא מופיע כדוגמה לטענה שגויה.
