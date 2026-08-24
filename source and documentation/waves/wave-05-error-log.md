# Wave 5 — תיקון Chapter 2: Error Log / Python traceback

## Problem

הטקסט הנוכחי מלמד:

> "השורה הראשונה = הגורם; השורות הבאות = stack trace"

ובחלק אחר:

> "השורה הראשונה לרוב מצביעה על הסיבה; סוף הלוג = תוצאה"

זה אינו מודל בטוח ל־Python traceback.

ב־Python, בדרך כלל exception type והודעת השגיאה המשמעותית נמצאים בסוף ה־traceback, בעוד שה־frames מעליהם מראים איך הגענו לשם.

## Required replacement

החלף את הגדרת `Error Log` במשהו בסגנון:

> **Error Log** — פלט שמראה מה קרה בזמן ההרצה. ב־Python traceback קוראים קודם את שורת ה־exception האחרונה כדי לזהות את סוג השגיאה וההודעה, ואז עולים דרך ה־stack frames כדי להבין מאיפה היא הגיעה.

### Example

```text
Traceback (most recent call last):
  File "app.py", line 12, in <module>
    from tasks import load_tasks
ModuleNotFoundError: No module named 'tasks'
```

הסבר:

- השורה האחרונה אומרת **מה נכשל**.
- ה־frames מעליה אומרים **איפה ואיך הגענו לכשל**.

### Pitfall

אל תלמד:

> תמיד קראו את השורה הראשונה.

למד:

> קראו את ה־exception message, ואז את ה־traceback בהקשר.

## Update lab

במקום:

> האם הצגתם ל־Bob את שורה 1 של ה־log?

כתוב:

> האם הצגתם ל־Bob את הודעת ה־exception ואת ה־traceback הרלוונטי, בלי להסתיר את ההקשר?

## Update quiz

שאלה:

> מאיפה מתחילים לקרוא Python traceback?

תשובה:

> מזהים את סוג ה־exception וההודעה בסוף, ואז עולים דרך ה־frames כדי לאתר את מקור הבעיה.

## Acceptance Criteria

חיפוש repository אחר הביטויים הבאים לא יחזיר את ההסבר הישן:

```text
השורה הראשונה = הגורם
השורה הראשונה לרוב מצביעה על הסיבה
```
