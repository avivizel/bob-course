# Language and teaching style

הקורס מיועד גם למתחילים.

שמור על:

- עברית פשוטה.
- משפטים קצרים.
- אנגלית רק למונחים המקצועיים.
- הסבר לפני acronym.
- דוגמה לפני edge cases.
- "למה זה חשוב" לפני implementation detail.

## Avoid

- marketing language
- absolute claims
- "תמיד"
- "לעולם"
- "אפס סיכון"
- "אין hallucinations"
- "secure"
- "compliant"

אלא כאשר ההקשר באמת מוכיח זאת.

## Preferred style

במקום:

> המערכת בטוחה.

כתוב:

> הבקרה מצמצמת את הסיכון X; עדיין נדרש Y.

במקום:

> Bob לא שולח את הקובץ.

כתוב:

> לפי ההתנהגות המתועדת של הגרסה הנבדקת, context נשלח בהתאם למנגנון X; מידע רגיש עדיין דורש access control ו־secrets discipline.

---

# Do not over-correct

אין להפוך את הקורס ל:

- university computer science degree
- OWASP course
- Python course
- JavaScript course
- LLM research course
- IBM product encyclopedia

בכל תיקון שאל:

> האם הידע הזה עוזר לתלמיד לנהל Bob בצורה טובה ובטוחה יותר?

אם לא — אל תוסיף.
