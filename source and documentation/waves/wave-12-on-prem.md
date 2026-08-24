# Wave 12 — Chapter 34: On-Prem / Air-Gap

## P0 correction

נכון ל־2026-08-24, ההודעה הציבורית הרשמית של IBM מ־2026-04-28 אומרת:

> Bob is generally available as SaaS. On-premises deployment is targeted in the future.

לכן אין ללמד public GA On-Prem architecture כאילו היא product fact סופי, אלא אם קיים ב־repository source רשמי חדש יותר שמוכיח אחרת.

## Required title

אם אין source GA חדש יותר, שנה לכיוון:

> **Bob On-Prem — ארכיטקטורת יעד ושיקולי פריסה עתידית**

או:

> **Bob On-Prem / Air-Gap — מה ידוע ומה עדיין תלוי בזמינות המוצר**

## Required status banner

בתחילת הפרק:

> **סטטוס מוצר:** לפי הודעת IBM הציבורית מ־28.04.2026, IBM Bob זמין כ־SaaS, ופריסת On-Prem מתוכננת לעתיד. התרשים בפרק זה מתאר שיקולים וארכיטקטורת יעד אפשרית, ואינו מפרט מחייב של מוצר GA אלא אם מצורף source רשמי חדש יותר.

## Remove or reframe unsupported Bob-specific claims

בדוק והסר/סמן illustrative אם אין source:

- Bob On-Prem נותן "אותה חוויית IDE בדיוק"
- Bob Gateway Pod רץ על OpenShift
- AuthN/AuthZ דווקא LDAP/SAML
- metering נשמר ב־CPD
- audit נשמר ב־CPD
- "שום prompt לא עוזב את הרשת"
- Bob images מגיעים מ־private registry באופן מסוים
- exact GPU sizing ל־Bob
- exact model registry flow
- exact endpoint flow
- Bob uses watsonx.ai on CPD in exactly this topology

מותר להסביר:

- מהו On-Prem conceptually
- מהו air gap
- למה data residency חשוב
- מהן דרישות אופייניות ל־private inference
- מהי הפרדה בין IDE/client, gateway, inference, identity, logging
- שאלות שארגון צריך לשאול לפני deployment

אך יש לסמן בבירור:

```text
Conceptual target architecture
Not confirmed Bob GA implementation
```

## Compliance correction

הסר claim:

```text
מתאים ל-GDPR, PCI-DSS, HIPAA, ISO 27001
```

במקום:

> פריסה מקומית עשויה לסייע לעמוד בדרישות data residency, security ו־control, אך compliance נקבע לפי התצורה, התהליכים, הבקרות וההסמכה של הארגון — לא מעצם היות המוצר On-Prem.

## GPU correction

אל תציג sizing חד־משמעי של Bob:

```text
Granite 8B ~20GB VRAM
A100 x2 ...
H100 x4 ...
```

אלא אם IBM Bob On-Prem documentation הרשמי דורש זאת.

אפשר לכתוב:

> דרישות GPU תלויות במודל, precision, concurrency, latency target ו־serving stack. יש להשתמש ב־sizing guide הרשמי של גרסת המוצר.

## Source

חובה לכלול:

`https://newsroom.ibm.com/2026-04-28-introducing-ibm-bob-ai-development-partner-that-takes-enterprises-from-ai-assisted-coding-to-production-ready-software`

## Acceptance Criteria

- הפרק אינו מציג future target כ־current GA.
- אין compliance certification claim.
- אין Bob-specific internal topology ללא source.
- עדיין מתקבל פרק לימודי שימושי על On-Prem design thinking.
