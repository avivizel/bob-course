# Wave 14 — Final Assessment אמיתי

## Objective

להבדיל בין "סיימתי את TaskFlow" לבין "אני יודע לנהל Bob בפרויקט חדש".

## Do not add chapter 35

שמור 34 פרקים.

## Preferred implementation

הוסף page עצמאי שנוצר על ידי `build.mjs`:

```text
final-assessment.html
```

אם זה דורש שינוי גדול מדי, הוסף final assessment deep section ל־Chapter 28 ו־CTA ברור ב־index.

העדפה: page עצמאי.

## Assessment scenario

התלמיד מקבל repository קטן שלא ראה קודם.

המשימה:

> הוסף feature X מבלי לשנות behavior קיים שאינו קשור.

ה־assessment בודק את התהליך.

## Student deliverables

```text
1. Repository map
2. Product intent
3. Scope
4. Acceptance Criteria
5. RAVEN review
6. Implementation plan
7. Diff
8. Tests/evidence
9. Security review
10. Handover note
```

## Oral defense

הוסף:

> **5-minute defense:** Bob כתב חלק מהקוד. הסבר מה השתנה, למה, איך הוכחת שזה עובד, ומה הסיכון העיקרי שנשאר.

## Rubric

100 נקודות:

| נושא | נקודות |
|---|---:|
| הבנת repository ו־context | 10 |
| Intent ו־scope | 10 |
| Acceptance Criteria | 10 |
| RAVEN / assumptions | 10 |
| Plan quality | 10 |
| Controlled implementation | 10 |
| Diff review | 10 |
| Tests / evidence | 10 |
| Security / least privilege | 10 |
| Explanation / ownership | 10 |

### Critical fail conditions

גם עם ציון מספרי גבוה, assessment נכשל אם:

- secret נכנס ל־Git
- destructive operation בוצעה ללא approval
- התלמיד אינו מסוגל להסביר שינוי מהותי
- tests לא הורצו אך נטען "הכול עובד"
- Bob ביצע scope expansion מהותי ללא אישור

## Acceptance Criteria

- assessment אינו מבוסס רק על TaskFlow.
- בודק process + judgment, לא רק output.
- rubric ברור.
