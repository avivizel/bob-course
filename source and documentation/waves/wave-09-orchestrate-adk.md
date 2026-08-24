# Wave 9 — Chapter 31: watsonx Orchestrate ADK

## Critical product correction

הפרק הנוכחי משתמש בפקודות כמו:

```text
wxo agent deploy
wxo agent test
skill publish
```

אלו אינן הפקודות שיש ללמד לפי תיעוד ADK הציבורי הנוכחי.

## Official command family

השתמש ב־CLI:

```text
orchestrate
```

### Import agent into Draft

```bash
orchestrate agents import -f agents/task_agent.yaml
```

### Deploy Draft → Live

```bash
orchestrate agents deploy --name TaskAgent
```

או:

```bash
orchestrate agents deploy -n TaskAgent
```

### Undeploy

```bash
orchestrate agents undeploy --name TaskAgent
```

### Environment

אם הפרק כולל environment workflow, השתמש במושגים:

```bash
orchestrate env activate <environment-name>
```

בדוק את תיעוד ADK לפני הוספת flags.

## Important semantic correction

למד את ההבדל:

```text
import = local definition → Draft
deploy = Draft → Live
```

אל תציג `deploy` כפעולה שמקבלת בהכרח YAML file.

## Developer Edition caveat

כתוב:

> watsonx Orchestrate Developer Edition מיועד לפיתוח לא־ייצורי ועובד עם Draft. לפי תיעוד IBM, deploy ל־Live אינו זמין שם.

## Testing

אל תמציא CLI `agent test` אם אין לו source רשמי לגרסה הנוכחית.

אפשר ללמד:

- test באמצעות Agent Builder / test chat
- automated/evaluation workflow רק אם נמצא בתיעוד הרשמי העדכני
- unit tests לכלים עצמם כאשר אלו functions רגילות

## Tools

הימנע מהנחה שכל tool הוא:

```python
@tool
def ...
```

אלא אם זה נכון לגרסת ADK הנוכחית ומגובה בתיעוד.

בדוק לפני final edit.

## Update AGENTS.md example בתוך Chapter 31

החלף:

```text
## CLI: wxo
```

ב:

```text
## CLI: orchestrate
```

אל תכתוב רשימת subcommands שאינה מאומתת.

## Source

השתמש בתיעוד הרשמי:

`https://developer.watson-orchestrate.ibm.com/agents/import_agent`

ובדפי ADK הרלוונטיים שהתיעוד הנוכחי מפנה אליהם.

## Acceptance Criteria

חיפוש:

```bash
grep -R "wxo agent" .
grep -R "wxo agent test" .
grep -R "wxo agent deploy" .
```

לא יחזיר הוראות פעילות בקורס.

אם `wxo` מופיע כחלק מהשם ההיסטורי/מותג בלבד — ודא שאינו נראה כפקודה.
