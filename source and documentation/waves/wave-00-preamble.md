# IBM Bob — תוכנית ביצוע מלאה לשיפור קורס IBM Bob

**מסמך הנחיות לביצוע ב־IBM Bob**  
**Repository:** `avivizel/bob-course`  
**אתר:** `https://avivizel.github.io/bob-course/`  
**תאריך בסיס לאימות מידע מוצרי:** 2026-08-24  
**מטרת המסמך:** לבצע refinement מתודי, תוכני וטכני לקורס הקיים — בלי לשבור את מבנה האתר, בלי להמציא יכולות מוצר, ובלי להפוך את הקורס לקורס תכנות כללי.

---

# 1. Mission

המטרה היא לשדרג את הקורס כך שהוא ילמד בצורה ברורה, עקבית ומקצועית את העיקרון הבא:

> **AI אינו מחליף את שיקול הדעת של המפתח. הוא מגדיל את החשיבות של Intent, Context, Plan, Scope, Review, Verification ו־Human Accountability.**

הקורס צריך להישאר קורס מעשי המבוסס IBM Bob, אך להיות ממוסגר באופן רחב יותר כקורס:

> **פיתוח תוכנה בעידן Agentic AI באמצעות IBM Bob**

הקורס **אינו** אמור להפוך לקורס Python, JavaScript, Web Development, RAG או Enterprise Architecture מלא.  
בכל נושא טכני יש ללמד את ה־minimum mental model שהלומד חייב להבין כדי לעבוד באחריות עם Bob.

---

# 2. Non-negotiable repository rules

לפני כל שינוי:

1. קרא במלואו את `AGENTS.md`.
2. מפה את מבנה ה־repository.
3. אל תניח שקובץ HTML הוא מקור התוכן.
4. אל תערוך ידנית:
   - `index.html`
   - `chapter-01.html` … `chapter-34.html`
5. התוכן נשמר במודולי הנתונים תחת `scripts/`.
6. לאחר שינוי תוכן או renderer חובה להריץ:

```bash
node scripts/build.mjs
```

7. כל שינוי חייב להתבצע במקור הנתונים או ב־generator.
8. שמור על:
   - Hebrew RTL
   - מבנה הניווט הקיים
   - עיצוב קיים
   - 34 פרקים קיימים
   - URLs קיימים לפרקים
9. אין לבצע renumber לפרקים.
10. אין להסיר תוכן Enterprise — רק למקם אותו נכון מבחינה פדגוגית.
11. אין להוסיף dependencies חיצוניים ללא צורך הכרחי.
12. אין להמיר את הפרויקט ל־framework אחר.
13. אין לבצע redesign חזותי רחב. המיקוד הוא refinement תוכני ומתודי.

---

# 3. Read-first files

לפני Plan, קרא לפחות:

```text
AGENTS.md
scripts/build.mjs
scripts/chapters-part1.mjs
scripts/chapters-part2.mjs
scripts/concept-details.mjs
assets/css/guide.css
assets/js/guide.js
```

בנוסף בדוק את ה־generated output של:

```text
index.html
chapter-02.html
chapter-13.html
chapter-15.html
chapter-17.html
chapter-21.html
chapter-22.html
chapter-24.html
chapter-26.html
chapter-28.html
chapter-31.html
chapter-33.html
chapter-34.html
```

מטרת הקריאה: להבין איך כל שינוי תוכני מיוצג במודל הנתונים ואיך הוא נרנדר.

---

# 4. Working mode

בצע את העבודה ב־waves.

לכל Wave:

1. Ask — הבן את הקוד והתוכן הקיים.
2. Plan — הצג:
   - files to change
   - reason
   - risks
   - validation
3. Agent — שנה רק את ה־scope שאושר.
4. Build.
5. Review generated diff.
6. Validate.
7. רק אז עבור ל־Wave הבא.

אין לבצע את כל השינויים בבת אחת.

---

# 5. Global Definition of Done

בסיום העבודה:

- כל 34 הפרקים עדיין זמינים.
- כל הקישורים Previous / Next עובדים.
- `index.html` תקין.
- אין שינוי ידני ב־generated HTML.
- `node scripts/build.mjs` מסתיים בהצלחה.
- אין שימוש בפקודות Orchestrate מיושנות מסוג `wxo agent ...`.
- פרק 34 אינו מציג On-Prem כיכולת GA מוכחת ללא מקור רשמי.
- פרק 33 אינו מקבע נתוני infrastructure/model/region שאין להם source רשמי עדכני.
- פרק 21 אינו טוען ש־RAG = "No Hallucination".
- פרק 26 מבחין בין validation, parameterization ו־output encoding.
- דוגמת `helmet.js` אינה משמשת כדוגמה מרכזית בקורס Flask.
- פרק 2 מסביר traceback בצורה נכונה.
- הקורס מציג שלושה מסלולי־על:
  - Core
  - Build
  - Enterprise Specializations
- RAVEN הופך למסגרת מתודית שחוזרת ביותר מנקודה אחת.
- נוסף final assessment אמיתי.
- נוסף source/version discipline לפרקים תלויי־מוצר.
- אין claims שיווקיים או compliance claims בלתי מבוססים.
- הלומד מבין בכל פרק מה Bob יכול לבצע ומה האדם חייב להבין ולאשר.
