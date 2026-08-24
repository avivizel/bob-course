export const CHAPTERS_PART2 = [
  {
    num: 11,
    title: "Product Intent ו-Mini PRD",
    subtitle: "בעיה וערך לפני פתרון",
    phase: "product",
    time: "40 דק'",
    capstone: "כתבו Mini PRD ל-TaskFlow — מנהל משימות לצוות קטן.",
    intro: "מוצר טוב מתחיל בכאב אמיתי. Mini PRD = מסמך קצר: מי, מה, למה, scope — בלי stack.",
    concepts: [
      { term: "Problem Statement", def: "הבעיה — לא הפתרון.", example: "«צוות מאבד track של משימות»", pitfall: "«נבנה אפליקציית AI»." },
      { term: "Target User", def: "משתמש ספציפי.", example: "מפתח בצוות 5 אנשים", pitfall: "«כולם»." },
      { term: "Outcome", def: "שינוי מדיד.", example: "80% משימות עם status", pitfall: "«יהיה טוב»." },
      { term: "Scope", def: "V1 vs later.", example: "V1: CRUD, לא notifications", pitfall: "feature creep." },
    ],
    analogy: { text: "Mini PRD מגדיר מה «done» נראה כמו לפני שמתחילים לבנות. בלי הגדרה זו, כל feature נראה דחוף ושום דבר לא «גמור». V1 Scope שנכתב מראש מאפשר לסגור sprint — לא להוסיף עוד ועוד.", bridge: "כתבו שני רשימות ל-TaskFlow V1: 3 פיצ'רים שבפנים (In), ו-3 פיצ'רים שבחוץ (Out of Scope). שמרו כ-scope.md." },
    bob: { modes: ["Ask"], workflow: "ראיון — לא קוד.", prompt: "Ask up to 5 questions that clarify user, pain, and outcome. Then write a Mini PRD with no stack choice and no code.", promptWhy: "Product לפני tech." },
    mistake: { bad: "PRD = רשימת features.", good: "PRD = problem + user + outcome + scope." },
    lab: ["ראיון (או self).", "Problem statement.", "Mini PRD.", "Out of scope list.", "Review.", "הצלחה = Mini PRD של עמוד אחד עם בעיה, משתמש, outcome מדיד ו-Out of Scope list ברורה."],
    exercise: "PRD ל-TaskFlow — 1 עמוד.",
    quiz: [
      { q: "בעיה vs פתרון?", a: "בעיה = כאב; פתרון = איך." },
      { q: "Out of Scope?", a: "מגביל V1 — חוסך זמן." },
      { q: "Outcome מדיד?", a: "מספר, %, זמן — לא adjective." },
    ],
    summary: ["Product לפני code.", "PRD = 1 עמוד.", "Scope = guardrail.", "Capstone: TaskFlow PRD."],
    deep: { title: "תבנית Mini PRD", html: `<pre class="code-block"># TaskFlow — Mini PRD
## Problem: [כאב]
## User: [מי]
## Outcome: [מדיד]
## V1 Scope: [in]
## Out of Scope: [out]
## Success: [איך נדע]</pre>` },
  },
  {
    num: 12,
    title: "Stories, קריטריוני קבלה ו-Vertical Slice",
    subtitle: "חלקים קטנים עם ערך",
    phase: "product",
    time: "35 דק'",
    capstone: "Story: «כמשתמש, אני יוצר משימה ורואה אותה ברשימה».",
    intro: "User Story + AC = חוזה. Vertical Slice = feature שלם end-to-end — לא שכבה בודדת.",
    concepts: [
      { term: "User Story", def: "As a… I want… So that…", example: "As user, create task, see in list", pitfall: "technical story." },
      { term: "Acceptance Criteria", def: "Given/When/Then.", example: "Given empty list, when add, then shows 1 item", pitfall: "vague AC." },
      { term: "Vertical Slice", def: "UI→API→DB במכה.", example: "create task E2E", pitfall: "רק DB week 1." },
      { term: "INVEST", def: "Independent, Negotiable, Valuable…", example: "story קטנה", pitfall: "epic as story." },
    ],
    analogy: { text: "Vertical Slice אחד שעובד end-to-end — UI, API ו-DB — מוכיח שהארכיטקטורה עצמה עובדת. Horizontal slice (שבוע של DB בלבד) לא מוכיח כלום עד שמחברים את שאר השכבות. בעיות אינטגרציה מתגלות מוקדם ב-vertical, לא ב-sprint האחרון.", bridge: "הגדירו את ה-Slice הראשון ל-TaskFlow: שם, שכבות (UI/API/DB), ו-AC אחת שתוכיח שהוא עבד." },
    bob: { modes: ["Plan"], workflow: "Stories from PRD.", prompt: "From the PRD: write 3 user stories with acceptance criteria and a vertical-slice order. No code.", promptWhy: "Plan backlog." },
    mistake: { bad: "«בנה backend» — לא slice.", good: "«create task — UI+API+DB»." },
    lab: ["3 stories מ-PRD.", "AC לכל אחת.", "בחר slice 1.", "Plan.", "הצלחה = שלוש stories עם Given/When/Then מלאים ו-slice ראשון שסגור ע\"י AC בלבד."],
    exercise: "Story + AC ל-«סימון Done».",
    quiz: [
      { q: "Vertical vs Horizontal?", a: "Vertical = E2E value; Horizontal = layer only." },
      { q: "AC טוב?", a: "Given/When/Then — testable." },
      { q: "Story גדולה?", a: "Split — INVEST." },
    ],
    summary: ["Story = חוזק.", "Slice = value.", "AC לפני Agent.", "Slice 1 = create task."],
  },
  {
    num: 13,
    title: "תכנון עם Plan Mode",
    subtitle: "ביקורת דרך פעולה לפני קוד",
    phase: "product",
    time: "30 דק'",
    capstone: "Plan ל-slice «יצירת משימה» — קבצים, שלבים, tests.",
    intro: "Plan Mode = blueprint. קוראים, מערערים, מאשרים — ורק אז Agent.",
    concepts: [
      { term: "Plan Document", def: "קבצים, שלבים, סיכונים.", example: "plan/create-task.md", pitfall: "plan בראש." },
      { term: "Risk", def: "מה עלול להשתבש.", example: "DB migration", pitfall: "ignore risks." },
      { term: "Rollback Point", def: "commit לפני Agent.", example: "git tag pre-slice-1", pitfall: "no checkpoint." },
      { term: "RAVEN Review", def: "מסגרת לביקורת plan לפני Agent: Requirements / Assumptions / Verification / Effects / No-go.", example: "האם הplan מכסה את ה-AC? אילו הנחות Bob הוסיף? איך כל שלב ייבדק?", pitfall: "auto-approve plan." },
    ],
    analogy: { text: "Plan שנכתב לפני קוד חושף הנחות — כלומר החלקים שBob ממלא לבד מבלי לדעת. Plan שנכתב אחרי קוד הוא תיעוד, לא תכנון. RAVEN review מחפש את ה-«נעדכן לפי הצורך» שבplan — זה תמיד הגיאה שתעלה בproblems.", bridge: "פתחו plan/create-task.md ו-RAVEN אותו: זהו הנחה אחת לא מוצהרת וכתבו כיצד לבדוק אותה לפני שמתחילים לכתוב קוד." },
    bob: { modes: ["Plan"], workflow: "Plan → RAVEN review → Agent.", prompt: "Review this plan using RAVEN:\n\nR — Requirements:\nList the explicit requirements.\n\nA — Assumptions:\nList every assumption not guaranteed by the repository or the request.\n\nV — Verification:\nFor each requested outcome, define evidence that proves it works.\n\nE — Effects:\nList files, dependencies, APIs, data, security boundaries and users that may be affected.\n\nN — No-go:\nList components or behavior that must not change.\n\nDo not implement anything yet.", promptWhy: "RAVEN הופך Plan לביקורת שיטתית לפני אישור." },
    mistake: { bad: "Agent בלי plan מאושר.", good: "Plan file → RAVEN review → approve → step 1." },
    lab: ["Plan Mode → create task.", "RAVEN: בדקו Requirements, Assumptions, Verification, Effects, No-go.", "Approve.", "שמרו plan/.", "הצלחה = קובץ plan/create-task.md ב-repo, עם RAVEN pass ולפחות הנחה אחת שזוהתה ותוקנה."],
    exercise: "החילו RAVEN על plan קיים — מצאו הנחה אחת לא מוצהרת.",
    quiz: [
      { q: "Plan vs prompt?", a: "Plan = persistent, structured, reviewable." },
      { q: "RAVEN — N = ?", a: "No-go: איפה נדרש אישור אנושי לפני המשך." },
      { q: "Plan ארוך?", a: "Split plans — per slice." },
    ],
    summary: ["Plan = חוזה.", "RAVEN review לפני Agent.", "Risks explicit.", "plan/ ב-repo."],
    deep: { title: "RAVEN Review", html: `<p style="margin-top:0">לפני שמאשרים Plan:</p><ul style="margin:0;padding-right:1.2rem"><li><strong>Requirements</strong> — מה בדיוק נדרש?</li><li><strong>Assumptions</strong> — מה Bob מניח שלא נאמר?</li><li><strong>Verification</strong> — איך נדע שהשינוי הצליח?</li><li><strong>Effects</strong> — אילו קבצים, שירותים, APIs, נתונים או משתמשים מושפעים?</li><li><strong>No-go</strong> — מה אסור להשתנות?</li></ul><pre class="code-block" style="margin-top:0.75rem">Review this plan using RAVEN:

R — Requirements:
List the explicit requirements.

A — Assumptions:
List every assumption not guaranteed by the repository or the request.

V — Verification:
For each requested outcome, define evidence that proves it works.

E — Effects:
List files, dependencies, APIs, data, security boundaries and users that may be affected.

N — No-go:
List components or behavior that must not change.

Do not implement anything yet.</pre><p style="margin-top:0.75rem">אם שלב ב-plan מנוסח «נעדכן קבצים לפי הצורך» — זה No-go. בקשו ניסוח ספציפי לפני אישור.</p>` },
  },
  {
    num: 14,
    title: "מימוש Agentic באיטרציות",
    subtitle: "תוכנית לפועל — צעדים קטנים",
    phase: "product",
    time: "40 דק'",
    capstone: "ממשו שלב 1 מ-plan/create-task.md בלבד.",
    intro: "Agent מהיר — איטרציות קצרות: שינוי → test → diff → stop או continue.",
    concepts: [
      { term: "Iteration", def: "change → run → verify.", example: "step 1 only", pitfall: "all steps auto." },
      { term: "Todo List", def: "צעדים גלויים.", example: "Bob todos", pitfall: "hidden work." },
      { term: "Inline Instruction", def: "הערה בקובץ לשינוי ממוקד.", example: "// TODO: add validation", pitfall: "vague TODO." },
      { term: "Stop Condition", def: "מתי עוצרים.", example: "test fail → stop", pitfall: "fix loop forever." },
    ],
    analogy: { text: "כל iteration מסתיים בשתי שאלות: האם ה-test עבר? האם ה-diff מובן? אם התשובה לאחת מהן לא — עוצרים. Agent שממשיך על כשלון בנה שכבות על שגיאה; כל iteration נוסף מרחיק את נקודת החזרה. לפני ביצוע ב-Agent, RAVEN check על ה-plan המאושר מוודא שהשלב שאתם עומדים לממש עדיין תואם לדרישות, להנחות ולגבולות ה-No-go.", bridge: "כתבו 3 stop conditions ספציפיות ל-TaskFlow Agent: מה יגרום לכם לעצור, לבדוק ולהחליט — לפני שממשיכים לשלב הבא. לאחר מכן הריצו RAVEN על ה-plan המאושר ובדקו שה-stop conditions אכן מופיעות ב-Verification או ב-No-go." },
    bob: { modes: ["Agent"], workflow: "RAVEN check על plan מאושר → שלב אחד → tests → diff → decision.", prompt: "Run a RAVEN check on the approved plan. Then implement step 1 only from @plan/create-task.md. Run tests. Show diff. Stop.", promptWhy: "בודק את ה-plan שוב רגע לפני הביצוע." },
    mistake: { bad: "Agent continues after test fail.", good: "Stop → diagnose → new plan." },
    lab: ["Step 1 Agent.", "Run tests.", "Review diff.", "Approve or rollback.", "Document.", "הצלחה = שלב 1 מ-plan/create-task.md ממומש, tests ירוקים, diff מובן ומאושר."],
    exercise: "Stop condition — 3 triggers.",
    quiz: [
      { q: "שינוי קטן?", a: "קל diff, test, rollback." },
      { q: "Inline instruction?", a: "Scope ממוקד בקובץ." },
      { q: "Stop condition?", a: "test fail, scope creep, unclear diff." },
    ],
    summary: ["שלב אחד.", "Test every iteration.", "Stop > guess.", "Diff = gate."],
  },
  {
    num: 15,
    title: "HTML, CSS וחוויית משתמש",
    subtitle: "מסך ברור, נגיש, רספונסיבי",
    phase: "build",
    time: "45 דק'",
    capstone: "UI TaskFlow: רשימה, טופס הוספה, מצבי All/Open/Done.",
    intro: "HTML = מבנה. CSS = עיצוב. UX = המשתמש מבין בלי manual.",
    concepts: [
      { term: "Semantic HTML", def: "main, nav, button.", example: "<button> not <div onclick>", pitfall: "div soup." },
      { term: "Accessibility", def: "labels, contrast, keyboard.", example: "aria-label", pitfall: "color only." },
      { term: "Responsive", def: "mobile + desktop.", example: "flex/grid", pitfall: "desktop only." },
      { term: "Design Token", def: "צבעים/spacing עקביים.", example: "--primary: #0f62fe", pitfall: "random px." },
    ],
    analogy: { text: "Semantic HTML ו-design tokens הם גם תיעוד: כשקוראים <button> מבינים שמדובר בפעולה; כשרואים var(--primary) מבינים שזה צבע המערכת. קוד שמשתמש ב-div ו-pixel מפוזרים מכריח את הקורא לנחש כוונה.", bridge: "פתחו את ה-UI של TaskFlow בדפדפן וסמנו 3 אלמנטים: האם כל אחד משתמש ב-Semantic HTML? האם CTA הראשי ברור ב-keyboard בלבד?" },
    bob: { modes: ["Agent"], workflow: "Plan UI → Agent scoped @public.", prompt: "Context: @public/\nGoal: task list + add form\nConstraints: semantic, RTL, mobile\nAC: keyboard nav works", promptWhy: "Scoped UI work." },
    mistake: { bad: "inline styles everywhere.", good: "CSS variables + classes." },
    lab: ["HTML structure.", "CSS tokens.", "RTL test.", "Mobile width.", "Screenshot.", "הצלחה = UI TaskFlow טוען, RTL נכון, form נגיש ב-keyboard, responsive ב-375px."],
    exercise: "WCAG check — 3 items.",
    quiz: [
      { q: "Semantic?", a: "meaning for screen readers + SEO." },
      { q: "Responsive?", a: "works all viewports." },
      { q: "Token?", a: "consistent design system." },
    ],
    summary: ["Semantic HTML.", "RTL + a11y.", "Tokens.", "Capstone UI."],
    deep: { title: "מה Bob יכול לעשות — ומה אתם חייבים להבין", html: `<p style="margin-top:0"><strong>Bob יכול:</strong></p><ul style="margin:0;padding-right:1.2rem"><li>לייצר markup</li><li>לכתוב CSS</li><li>לשפר responsive layout</li></ul><p style="margin:0.75rem 0 0.25rem"><strong>האדם חייב להבין:</strong></p><ul style="margin:0;padding-right:1.2rem"><li>structure vs style</li><li>semantics</li><li>accessibility basics</li><li>מה קורה במסך לאחר השינוי</li></ul><pre class="code-block" style="margin-top:0.75rem">&lt;main&gt;
  &lt;form id="add-task" aria-label="הוספת משימה"&gt;
    &lt;input name="title" required&gt;
    &lt;button type="submit"&gt;הוסף&lt;/button&gt;
  &lt;/form&gt;
  &lt;ul id="task-list"&gt;&lt;/ul&gt;
&lt;/main&gt;</pre>` },
  },
  {
    num: 16,
    title: "JavaScript ופיתוח מבוסס רכיבים",
    subtitle: "התנהגות ורכיבים",
    phase: "build",
    time: "45 דק'",
    capstone: "JS: fetch tasks, render list, handle submit.",
    intro: "JS = אירועים + DOM + fetch. רכיב = UI+logic קטן (TaskItem, TaskForm).",
    concepts: [
      { term: "Event Handler", def: "תגובה לפעולה.", example: "submit → createTask", pitfall: "no preventDefault." },
      { term: "DOM Update", def: "render from data.", example: "tasks.map → li", pitfall: "innerHTML XSS." },
      { term: "Component", def: "יחידה לשימוש חוזר.", example: "renderTaskItem(task)", pitfall: "god file." },
      { term: "State", def: "מידע UI.", example: "filter = 'open'", pitfall: "state scattered." },
    ],
    analogy: { text: "Component ניתן לבדיקה, לשימוש חוזר ולהחלפה בנפרד. קובץ app.js של 500 שורות מחייב קריאת הכל כדי לשנות דבר אחד. מודולים (api.js, ui.js, state.js) מאפשרים לעבוד על חלק אחד בלי לפגוע בשאר.", bridge: "פצלו את app.js של TaskFlow לשלושה קבצים: api.js (fetch), ui.js (render), app.js (wiring). רשמו מה שייך לכל קובץ לפני שמתחילים." },
    bob: { modes: ["Agent"], workflow: "One component per iteration.", prompt: "Implement TaskList render from @api. No new libs. Tests for empty list.", promptWhy: "Component scope." },
    mistake: { bad: "500 lines app.js.", good: "modules: api.js, ui.js, app.js." },
    lab: ["Event wiring.", "Fetch + render.", "Component extract.", "Test empty.", "Commit.", "הצלחה = רשימת משימות מ-fetch, הוספת משימה עובדת, test empty list עובר."],
    exercise: "Split app.js — 3 modules.",
    quiz: [
      { q: "preventDefault?", a: "stop form reload on submit." },
      { q: "XSS?", a: "escape user input in DOM." },
      { q: "Component?", a: "reuse + test isolation." },
    ],
    summary: ["Events + fetch.", "Components.", "State central.", "Modules."],
    deep: { title: "מה Bob יכול לעשות — ומה אתם חייבים להבין", html: `<p style="margin-top:0"><strong>Bob יכול:</strong></p><ul style="margin:0;padding-right:1.2rem"><li>לכתוב event handlers</li><li>לבצע fetch</li><li>לשנות DOM</li></ul><p style="margin:0.75rem 0 0.25rem"><strong>האדם חייב להבין:</strong></p><pre class="code-block">event → state/data → function → DOM/result</pre><ul style="margin:0;padding-right:1.2rem"><li>async operation</li><li>error path</li></ul>` },
  },
  {
    num: 17,
    title: "Backend ו-API",
    subtitle: "שרת מקבל בקשה ומחזיר תשובה",
    phase: "build",
    time: "50 דק'",
    capstone: "POST/GET /api/tasks — contract + validation.",
    intro: "Backend = כללים + אבטחה. API = חוזה. Frontend לא סומך על input.",
    concepts: [
      { term: "Endpoint", def: "path + method.", example: "POST /api/tasks", pitfall: "RPC soup." },
      { term: "Request/Response", def: "body + status.", example: "201 + {id, title}", pitfall: "200 for errors." },
      { term: "Validation", def: "server-side always.", example: "title required", pitfall: "client only." },
      { term: "Error Codes", def: "400, 404, 500.", example: "400 invalid", pitfall: "200 + {error}." },
    ],
    analogy: { text: "Validation בצד השרת קיימת כי הclient אינו מהימן — JavaScript בדפדפן ניתן לעקיפה. API שמסמוך על client validation מאפשר שליחת נתונים שרירותיים ישירות ל-DB. status codes נכונים (400, 404, 500) הם חלק מה-contract — לא פרט עיצובי.", bridge: "כתבו את ה-schema של POST /tasks: שדות חובה, שדות אופציונליים, ואילו status codes יוחזרו לכל תרחיש. שמרו כ-docs/api-contract.md." },
    diagram: `<div class="flow-diagram"><div class="flow-node">POST /tasks</div><span class="flow-arrow">→</span><div class="flow-node secondary">Validate</div><span class="flow-arrow">→</span><div class="flow-node">Service</div><span class="flow-arrow">→</span><div class="flow-node storage">DB</div><span class="flow-arrow">→</span><div class="flow-node primary">201 JSON</div></div>`,
    bob: { modes: ["Plan", "Agent"], workflow: "Contract first.", prompt: "Plan POST /api/tasks: schema, status codes, errors, tests. No impl until approved.", promptWhy: "API contract." },
    mistake: { bad: "200 for everything.", good: "400 bad input, 404 not found, 201 created." },
    lab: ["Write contract.", "Plan approve.", "Implement.", "Test valid/invalid.", "curl test.", "הצלחה = POST /api/tasks מחזיר 201 ל-input תקין ו-400 ל-title חסר, מאומת ב-curl."],
    exercise: "OpenAPI snippet for GET /tasks.",
    quiz: [
      { q: "GET vs POST?", a: "GET read; POST create." },
      { q: "Status codes?", a: "machine-readable result." },
      { q: "Server validation?", a: "client can lie." },
    ],
    summary: ["Contract first.", "Correct status.", "Validate server.", "Test with curl."],
    deep: { title: "מה Bob יכול לעשות — ומה אתם חייבים להבין", html: `<p style="margin-top:0"><strong>Bob יכול:</strong></p><ul style="margin:0;padding-right:1.2rem"><li>ליצור endpoint</li><li>לכתוב request handling</li></ul><p style="margin:0.75rem 0 0.25rem"><strong>האדם חייב להבין:</strong></p><pre class="code-block">Request
→ Validation
→ Authorization
→ Business Logic
→ Persistence
→ Response</pre><ul style="margin:0;padding-right:1.2rem"><li>HTTP method</li><li>status code</li><li>failure case</li></ul><pre class="code-block" style="margin-top:0.75rem">POST /api/tasks
Body: { "title": string (required) }
201: { "id": number, "title": string, "status": "open" }
400: { "error": "title required" }</pre>` },
  },
  {
    num: 18,
    title: "מסד נתונים ושכבת מידע",
    subtitle: "אחסון עקבי וניתן לשאילתה",
    phase: "build",
    time: "45 דק'",
    capstone: "SQLite: tasks table, migrations, queries.",
    intro: "DB = source of truth. Schema, migrations, queries — Bob עוזר, אתם מאמתים.",
    concepts: [
      { term: "Schema", def: "מבנה טבלאות.", example: "tasks(id, title, status)", pitfall: "no PK." },
      { term: "Migration", def: "שינוי schema versioned.", example: "001_create_tasks.sql", pitfall: "manual alter." },
      { term: "Query", def: "CRUD operations.", example: "INSERT, SELECT WHERE", pitfall: "SQL injection." },
      { term: "Transaction", def: "all or nothing.", example: "BEGIN…COMMIT", pitfall: "partial write." },
    ],
    analogy: { text: "Migration היא שינוי schema עם גיבוי מובנה — כל שינוי מתועד, ניתן לחזרה וניתן להרצה מחדש בסביבה חדשה. ALTER TABLE ידני מוביל לסביבות לא מסונכרנות: staging שונה מ-production שונה מ-local, ובאגים שמתרחשים רק בproduction.", bridge: "בדקו את טבלת tasks של TaskFlow: האם יש index על עמודת status? על user_id? הסבירו מתי query על «open tasks של user» יהיה איטי בלי index." },
    bob: { modes: ["Agent"], workflow: "Migration file + test.", prompt: "Create migration 001_tasks.sql + repository layer. Parameterized queries only.", promptWhy: "Safe SQL." },
    mistake: { bad: "string concat SQL.", good: "parameterized queries." },
    lab: ["Schema design.", "Migration.", "CRUD repo.", "Test insert/select.", "Commit.", "הצלחה = migration 001 רץ ב-fresh DB, test insert+select עובר, parameterized queries בלבד."],
    exercise: "Query: open tasks only.",
    quiz: [
      { q: "Migration?", a: "reproducible schema changes." },
      { q: "SQL injection?", a: "params — never concat input." },
      { q: "PK?", a: "unique id per row." },
    ],
    summary: ["Schema explicit.", "Migrations.", "Parameterized.", "Repo layer."],
    deep: { title: "מה Bob יכול לעשות — ומה אתם חייבים להבין", html: `<p style="margin-top:0"><strong>Bob יכול:</strong></p><ul style="margin:0;padding-right:1.2rem"><li>לכתוב schema</li><li>query</li><li>migration</li></ul><p style="margin:0.75rem 0 0.25rem"><strong>האדם חייב להבין:</strong></p><ul style="margin:0;padding-right:1.2rem"><li>table</li><li>key</li><li>relationship</li><li>transaction</li><li>why parameterized query matters</li><li>data loss risk</li></ul>` },
  },
  {
    num: 19,
    title: "Full Stack, זהות והרשאות",
    subtitle: "חיבור שכבות + הגנה",
    phase: "build",
    time: "50 דק'",
    capstone: "TaskFlow: login בסיסי + protected routes.",
    intro: "Full stack = flow שלם + auth. Session/JWT — secrets ב-.env, לא בקוד.",
    concepts: [
      { term: "Authentication", def: "מי אתה.", example: "login", pitfall: "plain password." },
      { term: "Authorization", def: "מה מותר.", example: "my tasks only", pitfall: "IDOR." },
      { term: "Session/JWT", def: "proof after login.", example: "httpOnly cookie", pitfall: "localStorage JWT — JavaScript בדפדפן יכול לקרוא localStorage, ולכן token שמור שם חשוף ל-XSS. httpOnly cookie נחסמת לגישה מ-JS — הדפדפן שולח אותה אוטומטית אבל קוד הדף לא יכול לגנוב אותה." },
      { term: "E2E Flow", def: "login → action → logout.", example: "create as user A", pitfall: "test only happy." },
    ],
    analogy: { text: "Authentication ו-Authorization הם שני בדיקות עצמאיות: «מי אתה?» ו-«מה מותר לך?». middleware שבודק רק את ה-token אך לא את ה-ownership מאפשר IDOR — גישה למשימה של משתמש אחר דרך שינוי id ב-URL. שתי הבדיקות חייבות להיות בצד השרת.", bridge: "כתבו את ה-middleware של TaskFlow בשלושה שלבים: (1) פענוח token, (2) בדיקת תוקף, (3) בדיקת ownership — task.userId === req.user.id. הגדירו מה מוחזר בכל כשלון." },
    bob: { modes: ["Plan", "Agent"], workflow: "Auth plan → implement minimal.", prompt: "Plan: basic auth for TaskFlow. Threats, session, protected /api/tasks. No impl yet.", promptWhy: "Security plan." },
    mistake: { bad: "auth in frontend only.", good: "middleware on every protected route." },
    lab: ["Auth plan.", "Login endpoint.", "Middleware.", "Test unauthorized.", "E2E.", "הצלחה = GET /api/tasks ללא token מחזיר 401, עם token מחזיר את המשימות של המשתמש בלבד."],
    exercise: "Threat: access task by ID — mitigation?",
    quiz: [
      { q: "Auth vs Authz?", a: "identity vs permission." },
      { q: "IDOR?", a: "access others' data by ID — prevent server-side." },
      { q: "httpOnly?", a: "JS can't steal cookie." },
    ],
    summary: ["Server auth.", "Middleware.", "No secrets in code.", "E2E auth test."],
    deep: { title: "מה Bob יכול לעשות — ומה אתם חייבים להבין", html: `<p style="margin-top:0"><strong>Bob יכול:</strong></p><ul style="margin:0;padding-right:1.2rem"><li>לכתוב login logic</li><li>middleware/decorator</li><li>session handling</li></ul><p style="margin:0.75rem 0 0.25rem"><strong>האדם חייב להבין את ההבדל בין:</strong></p><pre class="code-block">Authentication = מי אתה?
Authorization  = מה מותר לך?</pre><ul style="margin:0;padding-right:1.2rem"><li>session</li><li>password handling</li><li>IDOR / object-level authorization</li></ul>` },
  },
  {
    num: 20,
    title: "API של מודל AI",
    subtitle: "שילוב מודל — פלט, עלות, כשלים",
    phase: "ai",
    time: "40 דק'",
    capstone: "TaskFlow: «הצע כותרת משימה» — optional AI assist.",
    intro: "Model API = שירות חיצוני. Timeout, retry, cost limits, fallbacks.",
    concepts: [
      { term: "Prompt Template", def: "system + user pattern.", example: "Suggest task title for: {{ctx}}", pitfall: "raw user in system." },
      { term: "Token Budget", def: "max input/output.", example: "500 tokens", pitfall: "unbounded." },
      { term: "Timeout/Retry", def: "fail gracefully.", example: "3s timeout, 1 retry", pitfall: "hang forever." },
      { term: "Fallback", def: "when model fails.", example: "empty suggestion", pitfall: "500 to user." },
    ],
    analogy: { text: "קריאה סינכרונית למודל AI ללא timeout חוסמת את כל ה-request עד לתשובה — אם המודל איטי, המשתמש תקוע. Fallback ברור (הצעה ריקה, הודעת שגיאה ידידותית) מבדיל בין תכונה שנכשלת בחן לבין שירות שמתרסק.", bridge: "תכננו את ה-fallback של «הצעת כותרת» ב-TaskFlow: מה המשתמש רואה אם המודל לא עונה תוך 3 שניות? מה הוא רואה אם ה-API key חסר? רשמו שני תרחישים עם ה-UX המתאים." },
    bob: { modes: ["Plan"], workflow: "Design API wrapper.", prompt: "Plan AI suggest-title: interface, timeout, cost cap, fallback. No keys in code.", promptWhy: "Resilience design." },
    mistake: { bad: "sync call, no timeout.", good: "async + timeout + fallback UI." },
    lab: ["Plan AI feature.", "Wrapper function.", "Mock test.", "Cost estimate.", "Document.", "הצלחה = wrapper מחזיר fallback תוך 3 שניות כשהמודל לא זמין, mock test עובר."],
    exercise: "Fallback UX — 2 options.",
    quiz: [
      { q: "Token budget?", a: "control cost + latency." },
      { q: "Timeout?", a: "user not stuck waiting." },
      { q: "Keys?", a: "env only — never commit." },
    ],
    summary: ["Wrapper layer.", "Timeout + fallback.", "Cost cap.", "Mock tests."],
  },
  {
    num: 21,
    title: "אמינות, Grounding ו-RAG",
    subtitle: "Ground → Cite → Verify → Abstain",
    phase: "ai",
    time: "45 דק'",
    capstone: "TaskFlow: «שאל על מדיניות צוות» — RAG על docs/.",
    intro: "RAG = Retrieve → Add evidence to context → Generate. המטרה אינה «אין hallucinations», אלא לקשור כל תשובה ל-evidence, לבדוק אותו, ולהימנע מתשובה כשאין בסיס מספיק.",
    concepts: [
      { term: "RAG", def: "Retrieve → Add evidence to context → Generate.", example: "docs/ → evidence → answer", pitfall: "להניח ש-RAG מונע hallucinations." },
      { term: "Grounding", def: "קישור התשובה ל-evidence מאומת — לא רק ציטוט.", example: "התשובה נתמכת בפסקה שנשלפה ונבדקה", pitfall: "citation בלי בדיקה שהמקור באמת תומך בטענה." },
      { term: "Citation", def: "הצגת מקור ברור שאפשר לבדוק.", example: "[policy.md#L12]", pitfall: "no cite." },
      { term: "Abstain", def: "אם אין evidence מספיק — לא ממציאים תשובה.", example: "«לא נמצא במסמכים»", pitfall: "לענות תשובה סבירה אך לא נתמכת." },
      { term: "Failure Mode", def: "דרך טיפוסית שבה מערכת RAG עדיין נכשלת.", example: "retrieval miss או citation mismatch", pitfall: "לבדוק רק אם «המודל ענה»." },
    ],
    analogy: { text: "RAG מפריד בין מה שהמודל «יודע» מה-training לבין מה שמותר לו להגיד בהקשר זה. אבל retrieval לבדו לא מבטיח אמת: המערכת יכולה לשלוף מקור לא נכון, לדרג מקור חלש מעל חזק, או לייצר synthesis שלא נתמך בפועל. לכן המודל הנכון הוא Ground → Cite → Verify → Abstain.", bridge: "רשמו 3 מסמכים שיכנסו ל-docs/ של TaskFlow RAG. לאחר מכן כתבו: שאלה אחת שיש לה תשובה, שאלה אחת שאין לה תשובה, ושאלה אחת עם מידע דומה אך לא תומך — ובדקו שהמערכת שלכם עונה, נמנעת, או דוחה בהתאם." },
    diagram: `<div class="flow-diagram"><div class="flow-node">Ground</div><span class="flow-arrow">→</span><div class="flow-node secondary">Cite</div><span class="flow-arrow">→</span><div class="flow-node">Verify</div><span class="flow-arrow">→</span><div class="flow-node primary">Abstain if needed</div></div>`,
    bob: { modes: ["Plan", "Agent"], workflow: "docs/ first, then RAG plan + evaluation.", prompt: "Plan RAG for docs/: retrieval strategy, evidence format, citation format, verification step, and abstain rule. Include failure modes and a mini evaluation set. Do not claim RAG prevents hallucinations.", promptWhy: "הופך אמינות לתכנון מדיד, לא לסיסמה." },
    mistake: { bad: "RAG = no hallucination.", good: "Ground → Cite → Verify → Abstain." },
    lab: ["Create docs/sample.", "בנו mini evaluation set של 15 שאלות: 10 עם תשובה במסמכים, 3 ללא תשובה, 2 עם מידע דומה אך לא תומך.", "לכל שאלה מדדו: Retrieved correct source? Answer supported? Citation correct? Should abstain? Did abstain when required?", "נתחו 4 failure modes לפחות: retrieval miss, bad ranking, unsupported claim, citation mismatch.", "תקנו כלל או retrieval אחד לפי הממצאים.", "הצלחה = כל claim ניתן לקשור ל-evidence, ובמקרים ללא evidence המערכת נמנעת מתשובה."],
    exercise: "תנו דוגמה ל-2 שאלות שצריכות abstain ולמה.",
    quiz: [
      { q: "RAG מונע hallucinations?", a: "לא. הוא יכול לשפר grounding, אבל עדיין קיימים כשלים כמו retrieval miss, incorrect synthesis או citation mismatch." },
      { q: "מה ההבדל בין Grounding ל-Citation?", a: "Grounding הוא קישור התשובה ל-evidence מאומת; citation הוא מנגנון שמראה את המקור כדי לאפשר בדיקה." },
      { q: "מתי צריך Abstain?", a: "כשאין evidence מספיק, כשהמקור לא תומך בטענה, או כשהשליפה לא מהימנה — לא מנחשים." },
    ],
    summary: ["Ground first.", "Cite clearly.", "Verify support.", "Abstain without evidence."],
    deep: { title: "Failure modes ב-RAG", html: `<ul style="margin:0;padding-right:1.2rem"><li><strong>retrieval miss</strong> — המסמך הנכון לא נשלף כלל</li><li><strong>bad ranking</strong> — נשלף מקור חלש מעל מקור טוב יותר</li><li><strong>irrelevant or incomplete context</strong> — יש evidence חלקי או לא רלוונטי</li><li><strong>incorrect synthesis</strong> — המודל מחבר בין עובדות למסקנה שלא נתמכת</li><li><strong>citation mismatch</strong> — הציטוט קיים, אבל לא תומך בפועל בטענה</li><li><strong>stale or malicious source</strong> — המקור שנשלף ישן או זדוני</li></ul><p style="margin-top:0.75rem">הצלחה ב-RAG אינה «המודל ענה», אלא «הטענה נתמכת — או שהמערכת נמנעה מתשובה».</p>` },
  },
  {
    num: 22,
    title: "MCP, כלים ו-Workflows",
    subtitle: "Bob + מערכות חיצוניות",
    phase: "ai",
    time: "35 דק'",
    intro: "MCP = Model Context Protocol — כלים מcontrolled ל-Bob (DB, API, files). Workflows = רצף מוגדר.",
    concepts: [
      { term: "MCP Server", def: "tool provider.", example: "DB read-only MCP", pitfall: "full admin MCP." },
      { term: "Tool Scope", def: "allowed operations.", example: "SELECT only", pitfall: "DROP allowed." },
      { term: "Workflow", def: "ordered steps.", example: "lint → test → report", pitfall: "ad hoc." },
      { term: "Audit", def: "log tool calls.", example: "who queried what", pitfall: "no logs." },
    ],
    analogy: { text: "MCP tool עם הרשאות write לDB בproduction הוא גרסת AI של «DROP TABLE» בלי undo. כל tool שנרשם ל-Bob מוסיף קצה התקפה פוטנציאלי. read-only MCP על staging הוא ההפרש בין ניסוי מבוקר לבין תקלה בלתי הפיכה.", bridge: "רשמו את ה-MCP tools ש-TaskFlow Bob ישתמש בהם: לכל tool — scope (read/write), סביבה (staging/prod), ואיזה audit log נדרש. ודאו שאין write ל-prod." },
    bob: { modes: ["Ask"], workflow: "Understand MCP catalog.", prompt: "List MCP tools available. For each: capability, risk, least privilege recommendation.", promptWhy: "Tool governance." },
    mistake: { bad: "MCP with write to prod.", good: "read-only staging MCP." },
    lab: ["Inventory MCP tools.", "Risk table.", "Workflow diagram.", "Audit requirement.", "הצלחה = טבלת risk עם כל MCP tool, scope מינימלי מוגדר לכל אחד ו-workflow diagram ב-docs/."],
    exercise: "Workflow: «release check» — 4 steps.",
    quiz: [
      { q: "MCP?", a: "standard for AI tools." },
      { q: "Tool scope?", a: "minimum ops." },
      { q: "Audit?", a: "compliance + debug." },
    ],
    summary: ["MCP = controlled tools.", "Least privilege.", "Workflows explicit.", "Audit logs."],
  },
  {
    num: 23,
    title: "Skills ו-Subagents",
    subtitle: "שיטות חוזרות — שליטה",
    phase: "ai",
    time: "35 דק'",
    intro: "Skills = playbooks ל-Bob. Subagents = delegation — parent keeps accountability.",
    concepts: [
      { term: "Skill", def: "reusable instruction file.", example: "SKILL: code-review.md", pitfall: "skill bloat." },
      { term: "Subagent", def: "task-specific agent.", example: "explore codebase", pitfall: "unbounded subagent." },
      { term: "Orchestration", def: "parent coordinates.", example: "main reviews sub output", pitfall: "blind trust." },
      { term: "Handoff", def: "structured output.", example: "findings list", pitfall: "vague summary." },
    ],
    analogy: { text: "Skill שמוגדרת פעם אחת רצה עקבית — בלי שינויים בין sessions. Task חוזרת שמתוארת בprompt חדש בכל פעם מקבלת פלטים שונים תלוי בניסוח. Subagent שמדווח ממצאים לparent שמאשר — מבדיל בין automation לאוטונומיה בלתי נשלטת.", bridge: "כתבו SKILL.md ל-TaskFlow PR review: רשמו 5 פריטי checklist, את ה-output format הנדרש, ומה ה-stop rule (מתי Skill לא ממשיכה בלי אישור)." },
    bob: { modes: ["Plan"], workflow: "Define skill when 3+ repeats.", prompt: "Draft SKILL.md for TaskFlow code review: checklist, output format, stop rules.", promptWhy: "Repeatable quality." },
    mistake: { bad: "subagent auto-merge.", good: "subagent report → human approve." },
    lab: ["Identify repeat task.", "Write skill.", "Run once.", "Refine.", "Commit skill.", "הצלחה = skill.md ב-repo, רץ עקבי בשתי הרצות עם אותו output format."],
    exercise: "Subagent scope — 3 allowed, 3 denied.",
    quiz: [
      { q: "Skill vs rule?", a: "skill = task playbook; rule = always on." },
      { q: "Subagent?", a: "delegate — parent accountable." },
      { q: "Handoff?", a: "structured — reviewable." },
    ],
    summary: ["Skills for repeats.", "Subagents bounded.", "Parent reviews.", "Handoff structured."],
  },
  {
    num: 24,
    title: "Debugging שיטתי עם Bob",
    subtitle: "סיבה אמיתית — לא ניחוש",
    phase: "quality",
    time: "40 דק'",
    intro: "Debug = reproduce → isolate → hypothesis → test. Bob מ accelerate — לא מחליף method.",
    concepts: [
      { term: "Reproduce", def: "same steps → same bug.", example: "add task twice", pitfall: "can't reproduce." },
      { term: "Isolate", def: "narrow layer.", example: "API vs UI", pitfall: "fix symptom." },
      { term: "Hypothesis", def: "testable guess.", example: "race on double submit", pitfall: "random changes." },
      { term: "Evidence", def: "logs, breakpoints.", example: "console + network tab", pitfall: "fix without proof." },
    ],
    analogy: { text: "«תתקן» בלי reproduce steps נותן ל-Bob תוצר שנראה נכון — עד שהבאג מתרחש שוב. Hypothesis testable מכוונת את Bob לאסוף logs ספציפיים, לא לשנות קוד באקראי. שינוי קוד לפני ראיה הוא debugging בהנחה, לא בבדיקה.", bridge: "כתבו bug report ל-TaskFlow: reproduce steps (3 שלבים), expected vs actual, ו-hypothesis אחת עם איך לבדוק אותה — לפני שנוגעים בקוד." },
    bob: { modes: ["Ask"], workflow: "Evidence before fix.", prompt: "Bug: [describe]. List 3 hypotheses, how to test each, what evidence needed. No code changes.", promptWhy: "Method over magic." },
    mistake: { bad: "«fix it» loop.", good: "reproduce → hypothesis → test → fix." },
    lab: ["Inject/know bug.", "Reproduce.", "Network/log evidence.", "Fix one thing.", "Regression test.", "הצלחה = bug מתועד עם reproduce steps, hypothesis שנבדקה, fix עם evidence ו-regression test ירוק."],
    exercise: "Debug checklist — 5 steps.",
    quiz: [
      { q: "Reproduce first?", a: "no reproduce = no verify fix." },
      { q: "Isolate?", a: "which layer — data, API, UI." },
      { q: "Evidence?", a: "proves hypothesis." },
    ],
    summary: ["Reproduce.", "Hypothesis driven.", "Evidence.", "Regression test."],
  },
  {
    num: 25,
    title: "בדיקות ו-Code Review",
    subtitle: "הוכחה + איכות",
    phase: "quality",
    time: "45 דק'",
    intro: "Tests = spec executable. Review = human gate + Bob assist — לא replace.",
    concepts: [
      { term: "Unit Test", def: "function isolation.", example: "validateTitle()", pitfall: "no tests." },
      { term: "Integration", def: "API + DB.", example: "POST creates row", pitfall: "mock everything." },
      { term: "Review Checklist", def: "security, AC, style.", example: "SQL params?", pitfall: "LGTM blind." },
      { term: "Coverage", def: "what's tested.", example: "critical paths", pitfall: "100% vanity." },
    ],
    analogy: { text: "Test שנכתב אחרי קוד בודק מה הקוד עושה — לא מה הוא צריך לעשות. AC שנכתבה לפני קוד היא ה-spec; test שנגזר ממנה בודק עמידה ב-spec. Code review ב-Bob הוא עזר, לא תחליף — המפתח הוא שמכיר את ה-business logic ורואה את מה שBob מחמיץ. RAVEN review ב-code review שואל לא רק «האם זה עובד?» אלא גם «אילו הנחות נוספו? מה הושפע? ומה היה אסור לגעת בו?».", bridge: "מצאו path אחד ב-TaskFlow שאין לו test: כתבו AC בפורמט Given/When/Then ואז test שבודק בדיוק את ה-AC — לא את מה שהקוד כבר עושה. לאחר מכן עברו עליו עם checklist RAVEN review." },
    bob: { modes: ["Agent"], workflow: "AC → tests → RAVEN review → merge.", prompt: "From @plan/create-task.md AC: write integration tests for POST /api/tasks. Run. Report. Then review the diff with this checklist: Requirements met? Hidden assumptions introduced? Verification evidence? Unintended effects? No-go boundaries preserved?", promptWhy: "RAVEN הופך review לביקורת מלאה יותר." },
    mistake: { bad: "merge without tests.", good: "AC → tests → RAVEN review → merge." },
    lab: ["Tests for slice 1.", "Run CI/local.", "Bob review + human.", "עברו על checklist: Requirements met? Hidden assumptions introduced? Verification evidence? Unintended effects? No-go boundaries preserved?", "Fix findings.", "הצלחה = unit + integration tests עוברים ב-CI, review checklist מסומן, merge ל-main."],
    exercise: "Review checklist — 8 items.",
    quiz: [
      { q: "Unit vs integration?", a: "unit = piece; integration = together." },
      { q: "Review purpose?", a: "catch logic, security, AC gaps." },
      { q: "Coverage?", a: "critical paths > percentage." },
    ],
    summary: ["AC → tests.", "Review checklist.", "Bob assists.", "Merge with proof."],
  },
  {
    num: 26,
    title: "Secure by Design עם Bob",
    subtitle: "אבטחה מהתכנון",
    phase: "quality",
    time: "40 דק'",
    intro: "Security = requirements. OWASP basics: injection, auth, secrets, headers.",
    concepts: [
      { term: "Input Validation", def: "all inputs.", example: "sanitize title", pitfall: "trust client." },
      { term: "Secrets Management", def: ".env, vault.", example: "API_KEY env", pitfall: "git commit." },
      { term: "Headers", def: "CSP, HSTS.", example: "helmet.js", pitfall: "default none." },
      { term: "Threat Model", def: "who attacks what.", example: "IDOR on /tasks/:id", pitfall: "no threats." },
    ],
    analogy: { text: "אבטחה שנוספת בסוף הפרויקט מחייבת refactor — headers, validation ו-secrets management שלא תוכננו מראש. Threat model שנכתב ב-PRD הופך כל feature request לשאלת אבטחה: «מה התוקף יכול לעשות עם זה?» — לפני שכותבים שורה. ב-RAVEN של security חשוב במיוחד לבדוק Assumptions על trust boundaries, Effects על attack surface, ו-No-go כמו «אין secrets בקוד».", bridge: "זהו את ה-Threat #1 של TaskFlow בהגדרת STRIDE: כתבו Asset, Threat ו-Mitigation אחת. לאחר מכן הוסיפו RAVEN security review: מה הנחתם על trust boundary, מה ה-attack surface שהושפע, ומה אסור שישתנה?" },
    bob: { modes: ["Ask"], workflow: "Threat model + RAVEN security review לפני feature.", prompt: "Threat model TaskFlow: assets, threats, mitigations. STRIDE lite. Then add RAVEN notes: Assumptions about trust boundaries, Effects on attack surface, and No-go items such as no secrets in code. No code.", promptWhy: "מאחד threat modeling עם גבולות אבטחה מפורשים." },
    mistake: { bad: "security audit at end only.", good: "threat per feature + RAVEN security review." },
    lab: ["Threat model.", "RAVEN security review: Assumptions / Effects / No-go.", "Fix 1 finding.", "Secret scan.", "Header check.", "הצלחה = threat model עם STRIDE lite, לפחות finding אחת תוקנה, secret scan נקי, CSP header פעיל, ו-No-go כמו «אין secrets בקוד» נשמר."],
    exercise: "STRIDE on login — 1 per letter?",
    quiz: [
      { q: "Injection?", a: "params — validate + param queries." },
      { q: "Secrets in git?", a: "rotate + gitignore + scan." },
      { q: "Secure by design?", a: "security in PRD/plan." },
    ],
    summary: ["Threat model.", "Validate server.", "Secrets out git.", "Headers."],
  },
  {
    num: 27,
    title: "ארכיטקטורה, פריסה ותפעול",
    subtitle: "מקומי → production",
    phase: "quality",
    time: "45 דק'",
    intro: "Deploy = artifact + env + monitor. Logs, health check, rollback plan.",
    concepts: [
      { term: "Build Artifact", def: "immutable deploy unit.", example: "docker image", pitfall: "copy files manual." },
      { term: "Environment", def: "dev/staging/prod.", example: "משתני סביבה שונים", pitfall: "prod test." },
      { term: "Health Check", def: "/health → 200.", example: "DB ping", pitfall: "no monitor." },
      { term: "Rollback", def: "previous version.", example: "redeploy v1.2", pitfall: "no backup." },
    ],
    analogy: { text: "Deploy לproduction ללא staging הוא הוכחת production — המשתמשים הם ה-QA. Health check ב-/health + rollback מתועד מבדיל בין deploy עם רשת ביטחון לבין deploy שדורש hotfix בשעה 2 בלילה.", bridge: "הגדירו את ה-staging environment של TaskFlow: URL, משתני סביבה שונים מ-prod, ו-smoke test של 3 בדיקות שחייבות לעבור לפני deploy ל-production." },
    bob: { modes: ["Plan"], workflow: "Deploy plan doc.", prompt: "Plan TaskFlow deploy: artifact, env vars, health, rollback, monitoring. No deploy yet.", promptWhy: "Ops readiness." },
    mistake: { bad: "deploy Friday, no rollback.", good: "staging → smoke → prod + rollback." },
    lab: ["Deploy plan.", "Health endpoint.", "Staging deploy.", "Smoke test.", "Runbook draft.", "הצלחה = staging deployed, /health מחזיר 200, smoke test עובר, runbook עם 3 scenarios כתוב."],
    exercise: "Runbook: «DB down» — 5 steps.",
    quiz: [
      { q: "Artifact?", a: "same build all envs." },
      { q: "Health check?", a: "orchestrator knows alive." },
      { q: "Rollback?", a: "tested procedure." },
    ],
    summary: ["Plan deploy.", "Staging first.", "Health + logs.", "Rollback tested."],
  },
  {
    num: 28,
    title: "עלויות, ממשל והעברת מוצר",
    subtitle: "Cost, ownership, handover",
    phase: "quality",
    time: "50 דק'",
    capstone: "Handover checklist ל-TaskFlow — README, Runbook, ADR, Known Limits.",
    intro: "מוצר חי = cost + governance + docs. Handover = צוות אחר מריץ בלי אתם.",
    concepts: [
      { term: "Cost per Action", def: "AI + infra per op.", example: "$0.002/suggest", pitfall: "tokens only." },
      { term: "Rate Limit", def: "budget guard.", example: "100 req/min", pitfall: "unlimited AI." },
      { term: "Audit Trail", def: "who did what.", example: "userId, action, ts", pitfall: "no logs." },
      { term: "Handover", def: "docs + demo + shadow.", example: "2h pairing", pitfall: "README only." },
    ],
    analogy: { text: "Handover שמורכב מ-README בלבד הוא handover שיכשל. הצוות הבא נתקל בquestions שלא ענו עליהם: איפה ה-secrets? איך מתאוששים מ-DB down? מה הquality bars? Runbook + ADR + Known Limitations הם התשובות שכתובות — לא שנשאלות לראשונה בתקלה. RAVEN summary במסירה מבטיח שלא מוסרים רק קבצים, אלא גם את הדרישות, ההנחות, הראיות, ההשפעות והגבולות שאסור להפר בהמשך.", bridge: "בדקו את ה-README של TaskFlow: רשמו 3 שאלות שצוות חדש ישאל שאין להן תשובה שם. הוסיפו את התשובות ל-Runbook, ואז כתבו RAVEN summary קצר למסירה לפני שסוגרים את ה-sprint." },
    bob: { modes: ["Agent"], workflow: "Generate handover pack + RAVEN summary.", prompt: "Update README, Runbook, ADR summary, AGENTS.md, Known Limitations for TaskFlow. Add a RAVEN summary section covering Requirements, Assumptions, Verification, Effects, and No-go. Include budget alerts section.", promptWhy: "מסירה מלאה כוללת גם הקשר שיפוטי, לא רק artifacts." },
    mistake: { bad: "token cost only.", good: "infra + support + failure cost." },
    lab: ["Cost estimate.", "Runbook.", "Handover to peer.", "Peer runs solo.", "Sign-off checklist.", "הצלחה = peer הריץ TaskFlow לבד, תיקן בעיה אחת ללא עזרתכם, ו-sign-off checklist הושלם."],
    exercise: "Handover checklist — 10 items.",
    quiz: [
      { q: "Cost per request vs user?", a: "infra cost vs pricing — both track." },
      { q: "Audit trail?", a: "actor, action, time, resource." },
      { q: "Handover success?", a: "peer deploys + fixes issue without you." },
    ],
    summary: ["Full cost picture.", "Governance + audit.", "Handover pack.", "Capstone complete."],
    deep: { title: "Handover Checklist", html: `<pre class="code-block">☐ README: install, run, test
☐ AGENTS.md reviewed for accuracy (stack, commands, rules)
☐ Runbook: 3 common incidents
☐ ADR: key decisions
☐ Known limitations
☐ Cost dashboard / alerts
☐ Peer solo deploy verified</pre>` },
  },
  {
    num: 29,
    title: "Bob ו-IBM i — Premium Package",
    subtitle: "RPG, DB2 for i — Developer Mode, DB Mode, Workflows ויכולות מתקדמות",
    phase: "enterprise",
    time: "55 דק'",
    intro: "Premium Package for i (לא plugin — «חבילה») הוא ה-add-on הרשמי של IBM ל-Bob V2 עבור פיתוח IBM i. הוא מוסיף שני מצבים חדשים (Developer Mode ו-DB Mode), Native Connection דרך SSH (לא MCP), slash-command «/erd» ליצירת ERD אוטומטי, ו-Workflows מוכנים: RPG Modernization, RPG Unit Testing, Index Strategy Advisor, Business Rules Extraction ו-Security Reporting. כל workflow ניתן להרחיב — ואפשר ליצור Workflows, Skills וTools משלכם.",
    concepts: [
      { term: "Native Connection (SSH)", def: "Bob מתחבר ל-IBM i דרך SSH — אותו חיבור כמו VS Code. לא MCP server חיצוני. אבטחה מלאה, enterprise-grade, תמיכה מלאה של IBM.", example: "לחיצה על IBM i icon ב-Bob IDE → בחירת מערכת → עץ ספריות + schema browser. Bob מזהה workspace: local / library list / IFS.", pitfall: "להשתמש ב-open-source MCP server לחיבור — Tim Rowe (מוצר): \"Stop it. Don't do it.\" אינו מאובטח, לא נתמך ע\"י IBM, ולא מספק את שאר יכולות ה-PP for i." },
      { term: "/erd — ERD slash-command", def: "פקודת /erd schema-name בצ'אט מפעילה skill שמריץ SQL Services queries מרובות על IBM i בו-זמנית (multi-thread) ומייצר Entity Relationship Diagram.", example: "/erd toystore → Bob מריץ 4 sub-skills במקביל (columns, keys, foreign keys, constraints) → Mermaid ERD של כל הטבלאות", pitfall: "לצפות ל-ERD בלי חיבור Native — /erd דורש חיבור פעיל ל-IBM i ו-DB Mode." },
      { term: "Developer Mode", def: "מצב Bob עם persona של מומחה IBM i: RPG (fixed ו-free-form), CL, DDS, display files, ILE — עם כל ה-skills הרלוונטיים אינפוז' למודל.", example: "Bob מזהה RPG 1984, מציג Mermaid diagram של תוכנית, מסביר data structures ו-display files", pitfall: "לעבוד ב-Agent Mode ללא Developer Mode פעיל — Bob חסר את ה-IBM i context." },
      { term: "DB Mode", def: "מצב Bob עם persona של מומחה DB2 for i: SQL, indexes, security, schema design, performance optimization.", example: "«Report on security of toy store schema» → Bob מריץ SQL Services queries ומפיק דו\"ח מפורט עם vulnerabilities", pitfall: "לבקש DB analysis ב-Developer Mode — השתמשו ב-DB Mode לכל מה שנוגע לנתונים." },
      { term: "RPG Modernization Workflow", def: "Workflow מובנה שממיר RPG OPM → ILE → free-form בשלבים עם compile gate בין כל שלב. הוא אינטראקטיבי: שואל שאלות, מזהה I-specs/O-specs/go-tos, ומייצר Summary Report.", example: "שלב 1: OPM→ILE (QRPG→QRPGLE) + compile. שלב 2: scan I-specs/O-specs. שלב 3: המרה ל-free-form + write + compile. שלב אחרון: Modernization Summary Report.", pitfall: "לאשר write בלי לקרוא את ה-diff — RPG רגיש מאוד ל-column positions. הWorkflow מבקש approval לפני כל write." },
      { term: "Field-Add — DDS + DB + RPG", def: "Bob מזהה אוטומטית את ה-display file, הDB file וה-RPG program הקשורים, ומשנה את כולם בו-זמנית. מריץ compile בסוף ומתקן שגיאות.", example: "\"Add field 'flight hours' to the flight maintenance screen\" → Bob מוצא display file + DB + RPG → מתכנן → מגיש diff לכל קובץ → compile. DDS syntax error? Bob מתקן אוטומטית ומריץ מחדש.", pitfall: "לתת prompt כללי בלי context — Bob יחפש את הקבצים לבד, אך שם מפורש של display file מזרז ומדייק." },
      { term: "Bob מתקן שגיאות compile", def: "כשיש שגיאת DDS/RPG לאחר שינוי, Bob מזהה את השגיאה מה-*EVENTF output, מתקן אוטומטית, ומריץ compile מחדש — ללא התערבות ידנית.", example: "DDS: \"right parenthesis was not found\" → Bob updates DDS source → recompile → success", pitfall: "להניח שהcompile הראשון יצליח תמיד — תמיד לפקח על ה-to-do list panel ולוודא compile clean." },
      { term: "Job Log Analysis", def: "Bob יכול לקבל job log ולנתח אותו לזיהוי גורמי שגיאה, בעיות ביצועים וצריכת storage חריגה.", example: "«Who is using all the spool storage?» → Bob מריץ SQL Services → מזהה Job Watcher jobs → root cause + המלצות cleanup", pitfall: "לצפות לדיוק מלא בלי לספק קובץ job log — Bob יכול לחפש לבד אך קובץ מפורש מדויק יותר." },
      { term: "Custom Workflows / Skills / Tools", def: "Everything in Bob is extendable. ניתן ליצור Workflows, Skills וTools מותאמים. ה-Built-in workflows לא ניתנים לעריכה — אבל אפשר ליצור מחדש בהתאמה אישית.", example: "Custom workflow: RPG code review לפי תקנים פנימיים. Custom skill: תיעוד אוטומטי ל-IFS. Custom tool: שליחת Slack notification לאחר compile.", pitfall: "לנסות לערוך built-in workflows — לא ניתן. צרו workflow חדש מבוסס עליהם." },
      { term: "Reports → IFS → Source Control", def: "כל דו\"ח (modernization summary, business rules, ERD, security report) ניתן לשמירה ב-IFS. Bob ממליץ לשמור מסמכי Markdown ב-source control — הוא ישתמש בהם כ-context בפעולות עתידיות.", example: "Modernization Report נשמר ל-/home/timerowe/stock/409-report.md. בפעם הבאה שBob מתבקש להוסיף feature לאותה תוכנית — הוא קורא את ה-report.", pitfall: "לשמור reports רק ב-chat — אחרי reload הם אינם זמינים לBob כ-context." },
      { term: "Multi-Task (Bob V2)", def: "Bob V2 מריץ מספר tasks במקביל. כל task עם to-do list גלוי בראש הממשק. פעולות שרצות על IBM i עצמה (SQL Services, compile, file read) כמעט ללא token usage.", example: "Business rules extraction: 12 tools רצות בו-זמנית על IBM i — כמעט ללא token usage עד ניתוח הנתונים. Security report + Modernization workflow רצים במקביל.", pitfall: "לנסות לעקוב אחרי כל task ידנית — השתמשו ב-to-do list panel בראש הממשק, לא ב-chat scroll." },
    ],
    analogy: { text: "Developer Mode מזהה RPG, DDS ו-ILE כי IBM i context הוזרק למודל — בלי המצב הזה, Bob מטפל ב-RPG כמו בקוד כללי ומפספס מוסכמות קריטיות (column positions, I-specs, compile order). DB Mode מכיר DB2 for i לעומק — שאלת SQL למודל ב-Developer Mode תיתן תשובה פחות מדויקת.", bridge: "ב-IBM i שלכם: מה ה-workflow הראשון שתפעילו? Business Rules Extraction על תוכנית קריטית, /erd לתיעוד schema, או Index Strategy Advisor לשיפור ביצועים?" },
    diagram: `<div class="flow-diagram"><div class="flow-node">Bob IDE + PP for i</div><span class="flow-arrow">→</span><div class="flow-node secondary">SSH (Native Connection)</div><span class="flow-arrow">→</span><div class="flow-node">IBM i 7.x</div><span class="flow-arrow">→</span><div class="flow-node storage">QSYS + DB2 for i + IFS</div></div>
<div class="flow-diagram" style="margin-top:0.5rem"><div class="flow-node">RPG Modernization Workflow</div><span class="flow-arrow">→</span><div class="flow-node secondary">OPM→ILE (compile)</div><span class="flow-arrow">→</span><div class="flow-node secondary">→Free-Form (compile)</div><span class="flow-arrow">→</span><div class="flow-node storage">Summary Report → IFS</div></div>
<p style="font-size:0.85rem;color:var(--ink-secondary);margin-top:0.25rem">Native Connection = SSH ישיר. קומפילציה תמיד על IBM i — גם עבור קוד מ-local workspace. Reports נשמרים ל-IFS ומשמשים כ-context עתידי.</p>`,
    bob: { modes: ["Ask", "Plan", "Agent"], workflow: "Developer Mode: Ask להבנת member + /erd לתיעוד schema → Plan להמרה → Agent: RPG Modernization Workflow שלב-שלב. DB Mode: Ask לניתוח schema → Workflow לדו\"ח אוטומטי → שמור ל-IFS.", prompt: "In Developer mode, Ask: read QRPGLESRC/ORDENTR. What is this program? Create a Mermaid diagram of its structure. List all display files and database files it uses. Do not change anything.", promptWhy: "Ask + Developer Mode = Bob מזהה RPG, DDS, ILE — תוצאה עם context מלא לפני כל שינוי." },
    mistake: { bad: "להשתמש ב-MCP server חיצוני במקום Native Connection — פחות בטוח, לא נתמך, לא מספק Developer/DB Modes/Workflows.", good: "Premium Package for i עם Native Connection → Developer Mode / DB Mode לפי הצורך → Reports ל-IFS → source control." },
    compare: { bad: "Convert all RPG to free-form", good: "Context: @QRPGLESRC/ORDENTR (in Developer mode)\nGoal: Use RPG Modernization Workflow — step by step\nStep 1: OPM→ILE compile gate\nStep 2: free-form conversion compile gate\nAC: Modernization Summary Report saved to IFS, RPG Unit Test suite passes" },
    lab: [
      "התקינו Premium Package for i + Code for IBM i developer pack ב-Bob V2.",
      "התחברו ל-IBM i דרך Native Connection (לא MCP). בחרו workspace: library list.",
      "DB Mode: הריצו /erd schema-name — צפו ב-multi-threaded SQL queries ובMermaid ERD.",
      "Developer Mode: פתחו member ב-Ask — בקשו Mermaid diagram של התוכנית.",
      "הפעילו RPG Modernization Workflow — עקבו אחרי compile gates ו-Summary Report.",
      "הפעילו Business Rules Extraction — שמרו את הדו\"ח ל-IFS.",
      "בקשו מBob לנתח job log: מי מנצל הכי הרבה spool storage?",
    ],
    exercise: "הפעילו Index Strategy Advisor ותעדו 3 המלצות שקיבלתם. שמרו את ה-report ל-IFS ובדקו שBob יכול לקרוא אותו בפעם הבאה.",
    quiz: [
      { q: "למה Native Connection ולא MCP server?", a: "אבטחה: SSH מנוהל IBM, enterprise-grade, security-by-design. MCP server חיצוני הוא open-source, לא נתמך, ולא מספק Developer Mode / DB Mode / Workflows / /erd." },
      { q: "מה עושה /erd?", a: "slash-command שמפעיל skill: מריץ מספר SQL Services queries בו-זמנית על IBM i ומייצר Mermaid Entity Relationship Diagram של ה-schema." },
      { q: "RPG Modernization Workflow — כמה שלבים?", a: "שלושה שלבים עם compile gate: (1) OPM→ILE, (2) scan I/O specs, (3) המרה ל-free-form + write + compile. בסוף: Modernization Summary Report." },
      { q: "Developer Mode vs DB Mode?", a: "Developer = RPG/ILE/CL/DDS. DB = SQL/indexes/security/performance. /erd דורש DB Mode. Modernization Workflow דורש Developer Mode." },
      { q: "האם ניתן ליצור Workflows מותאמים?", a: "כן — everything in Bob is extendable. Built-in workflows לא ניתנים לעריכה, אבל ניתן ליצור Workflows, Skills וTools מותאמים." },
    ],
    summary: ["Premium Package for i — חבילה, לא plugin.", "Native Connection = SSH, לא MCP.", "/erd — ERD אוטומטי מ-schema ב-IBM i.", "RPG Modernization Workflow: OPM→ILE→free-form, compile gate בכל שלב.", "Bob מתקן שגיאות compile אוטומטית.", "Reports → IFS → source control → context עתידי לBob.", "כל workflows/skills/tools ניתנים להרחבה."],
    deep: { title: "מבנה סביבת עבודה IBM i עם Bob V2", html: `<pre class="code-block"># AGENTS.md — IBM i Project (Premium Package for i)
## Stack: RPG IV free-form · DB2 for i · CL · DDS · ILE
## Connection: Native (SSH) — NOT external MCP server
## Libraries: TASKFLOW (dev) | TASKFLOWP (prod — read-only)
## Compile: CRTRPGMOD + CRTPGM; always *EVENTF
## Bob V2 modes:
- Developer Mode: RPG/CL/DDS analysis, modernization workflow, new code
- DB Mode: SQL analysis, schema security, index optimization, /erd
## Rules:
- Agent compiles after every member change; stop on *EVENTF error
- Bob auto-corrects compile errors — monitor to-do list, not chat
- /erd runs in DB Mode; requires active IBM i connection
- Workflows run on dev library only
- Save all reports (modernization, ERD, business rules) to IFS docs/
- Commit IFS docs/ to source control — Bob uses them as future context
- Compile local code → IBM i temp dir → results back to IDE</pre>
<p style="margin-top:0.75rem"><strong>Workflows מובנים (Start Workflow ← כפתור בממשק):</strong></p>
<ul style="margin:0;padding-right:1.2rem">
<li><strong>RPG Modernization</strong> — OPM→ILE→free-form, compile gate per step, Summary Report</li>
<li><strong>RPG Unit Testing</strong> — Test Plan → implement test cases (RUDF) — שני שלבים</li>
<li><strong>Index Strategy Advisor</strong> — מנתח plan cache + MTIs → המלצות indexes</li>
<li><strong>Business Rules Extraction</strong> — מנתח source + DDS + DB → מסמך עם requirements, validations, calculations, decision logic</li>
<li><strong>Security Reporting</strong> — מריץ DB2 SQL Services → דו\"ח vulnerabilities</li>
</ul>
<p style="margin-top:0.75rem"><strong>Custom Extensions:</strong> ניתן ליצור Workflows, Skills וTools מותאמים. Built-in workflows לא ניתנים לעריכה.</p>` },
  },
  {
    num: 30,
    title: "Bob ו-IBM Z — Z Understand וקוד Mainframe",
    subtitle: "COBOL, PL/I, CICS, Db2 — ניתוח גרוס לפני שינוי",
    phase: "enterprise",
    time: "55 דק'",
    intro: "IBM Z מחזיק קוד COBOL/PL/I בן עשרות שנות. Bob דרך Premium Package for Z (PP4Z) לא מנחש — הוא שואל קודם את Z Understand, מאגר ניתוח דטרמיניסטי שסורק אלפי תוכניות ויוצר call graph, data flow ו-data dictionary. המודל מסביר על בסיס עובדות, לא ניחושים.",
    concepts: [
      { term: "Z Understand", def: "שרת ניתוח שסורק COBOL/PL/I/HLASM/JCL למאגר יחסים שניתן לשאילתה.", example: "CALLERS(N991DATE) = 30 תוכניות — תוצאה דטרמיניסטית", pitfall: "לשאול את המודל בלבד — יחזיר 13 או 29 תוכניות תלוי בפגישה." },
      { term: "Z Architect Mode", def: "מצב ניתוח בלי שינוי קוד — call graph, data flow, impact analysis.", example: "«מי קורא ל-N991DATE?» → query ל-Z Understand → 30 קוראים מאומתים", pitfall: "לנתח בלי Z Understand — ניחוש על קוד של 20MB." },
      { term: "Z Code Mode", def: "הסבר, refactor וסטנדרטים לקוד COBOL/PL/I/HLASM.", example: "המרת COBOL implicit paragraph ל-structured sections", pitfall: "refactor ללא impact analysis — שובר תוכניות שקוראות ל-paragraph ששונה." },
      { term: "Dependency Based Build (DBB)", def: "build מבוסס תלויות על z/OS — רק מה שהשתנה.", example: "שינוי copybook → DBB מזהה ומבנה רק תוכניות תלויות", pitfall: "full rebuild כל פעם — שעות במקום דקות." },
    ],
    analogy: { text: "מודל שפה מנחש כמה תוכניות קוראות ל-paragraph — Z Understand סופר. הפרש בין 13 ל-30 קוראים הוא הפרש בין regression test חלקי לבין regression test שמוצא את הבאג. Z Understand נותן עובדות דטרמיניסטיות שהמודל לא יכול להשיג מהtext בלבד.", bridge: "ב-TaskFlow על Z: אם משנים copybook אחד — כמה תוכניות מושפעות? Z Understand יודע." },
    diagram: `<div class="flow-diagram"><div class="flow-node">Bob IDE + PP4Z</div><span class="flow-arrow">→</span><div class="flow-node secondary">Z Understand MCP</div><span class="flow-arrow">→</span><div class="flow-node">z/OS LPAR</div><span class="flow-arrow">→</span><div class="flow-node storage">COBOL/PL/I/Db2/CICS</div></div><p style="font-size:0.85rem;color:var(--ink-secondary);margin-top:0.25rem">Z Understand מחזיר עובדות דטרמיניסטיות. המודל מסביר על בסיסן — לא מנחש.</p>`,
    bob: { modes: ["Ask", "Plan", "Agent"], workflow: "Z Architect (Ask/Plan) → impact analysis → Z Code (Agent) → DBB build → debug.", prompt: "Use Z Architect mode: query Z Understand for all callers of N991DATE. Show the deterministic count and list programs. Do not change any code.", promptWhy: "עובדות לפני קוד. Z Understand נותן מספר מדויק — לא ניחוש." },
    mistake: { bad: "«תסביר את כל הקוד של N991DATE» — Bob יחזיר ניחוש חלקי.", good: "Z Architect: CALLERS(N991DATE) → 30 תוכניות מאומתות → Plan impact → Z Code: שנו רק N991DATE." },
    compare: { bad: "Refactor the CALCULATE-TAX paragraph", good: "Z Architect: find all callers of CALCULATE-TAX paragraph\nZ Understand result: 7 programs\nPlan: assess each caller, update copybook, regression tests for all 7\nZ Code Agent: change one program at a time, DBB build after each" },
    lab: ["Z Architect: שאלו «מי קורא ל-[תוכנית]?».", "קבלו מספר דטרמיניסטי מ-Z Understand.", "Plan: impact analysis לכל הקוראים.", "Z Code Agent: שנו תוכנית אחת.", "DBB build + debug ב-z/OS."],
    exercise: "כתבו AGENTS.md ל-Z project: estate scope, Z Understand endpoint, כלל impact analysis לפני כל שינוי copybook, איסור full rebuild.",
    quiz: [
      { q: "למה Z Understand לפני שינוי?", a: "המודל לבד מנחש. Z Understand נותן מספר מדויק של תוכניות מושפעות — הבדל בין 13 ל-30." },
      { q: "Z Architect vs Z Code?", a: "Architect = ניתוח בלי שינוי. Code = refactor/הסבר בשליטה." },
      { q: "DBB במקום full rebuild?", a: "רק תוכניות שהשתנו או תלויות בשינוי — חוסך שעות build." },
    ],
    summary: ["Z Understand = עובדות, לא ניחוש.", "Z Architect לניתוח, Z Code לשינוי.", "Impact analysis לפני כל refactor.", "DBB build — תלויות בלבד."],
    deep: { title: "מבנה סביבת עבודה IBM Z עם Bob", html: `<pre class="code-block"># AGENTS.md — IBM Z Project
## Stack: COBOL · PL/I · HLASM · JCL · CICS · IMS · Db2 z/OS
## Z Understand: https://[internal-host]/zunderstand (read-only MCP)
## Build: Dependency Based Build (DBB) — never full rebuild
## Rules:
- Always query Z Understand before changing a copybook or paragraph
- Z Architect mode for analysis; Z Code mode for implementation
- Impact analysis required: list all callers before Agent touches code
- One program per Agent iteration; DBB build gate after each
- Debug: IBM Debug for z/OS — not local simulation
## Deployment: z/OS LPAR via DBB; no manual IEBCOPY</pre>` },
  },
  {
    num: 31,
    title: "Bob ו-watsonx Orchestrate — ADK ופיתוח Agents",
    subtitle: "בניית agents עצמאיים עם ADK ופריסה ל-Orchestrate",
    phase: "enterprise",
    time: "55 דק'",
    intro: "watsonx Orchestrate היא פלטפורמת agents של IBM — כל agent הוא יחידה עצמאית עם כלים (tools), זיכרון ומודל LLM. ADK (Agent Development Kit) הוא ה-Python SDK לבניית agents ב-code ופריסתם ל-Orchestrate. Bob הוא השותף הטבעי: Plan מתכנן את ה-topology, Agent כותב את ה-tools, ו-ADK CLI פורס לפלטפורמה.",
    concepts: [
      { term: "watsonx Orchestrate Agent", def: "יחידה עצמאית: LLM + tools + memory + identity. מופיע ב-Agent Catalog ויכול לקבל הפניות מ-agents אחרים.", example: "agent «TaskReviewer» עם tool לקריאת Jira ו-tool לכתיבת דו\"ח", pitfall: "לבלבל בין Bob Agent Mode (מצב IDE) לבין Orchestrate Agent (יחידה פרוסה בפלטפורמה)." },
      { term: "ADK — Agent Development Kit", def: "Python SDK רשמי להגדרת agents, tools ו-multi-agent orchestrations בקוד, ופריסה ל-Orchestrate.", example: "@tool def get_open_tasks(): ... — decorator שהופך פונקציה ל-tool", pitfall: "לכתוב tool לוגיקה ישירות ב-agent definition — tool חייב להיות פונקציה נפרדת מ-decorated." },
      { term: "Skill", def: "יכולת קריאה (callable capability) שנחשפת ל-agent: REST API, AppConnect flow, Python function, או Orchestrate native integration.", example: "skill «CreateTask» = POST /api/tasks עם schema מוגדר", pitfall: "skill בלי schema ברור — agent לא יודע מתי להפעיל אותו." },
      { term: "Multi-Agent Orchestration", def: "Agent אחד (orchestrator) מנתב עבודה ל-agents מומחים לפי intent. כל sub-agent אחראי על domain.", example: "OrchestratorAgent → TaskAgent | NotificationAgent | ReportAgent", pitfall: "orchestrator שמכיל כל הלוגיקה — שוברים isolation ומקשים test." },
      { term: "ADK CLI", def: "כלי שורת פקודה לפריסה, בדיקה וניהול agents ב-Orchestrate: wxo agent deploy | skill publish | agent test.", example: "wxo agent deploy --file agent.yaml --env production", pitfall: "פריסה ישירה ל-production בלי test ב-local ADK server." },
      { term: "Agent Catalog", def: "רגיסטרי של agents פרוסים שניתן לגלות ולהפנות מ-agents אחרים בפלטפורמה.", example: "orchestrator מחפש «TaskAgent» ב-catalog לפי capability tag", pitfall: "שני agents עם שמות דומים ב-catalog — orchestrator בוחר את הלא נכון." },
    ],
    analogy: { text: "Agent אחד ענק עם גישה לכל הtools מייצר coupling: שגיאה בlogic אחת גורמת לתקלה בכל שאר הפעולות, וקשה לdebug. Specialist agents — כל אחד עם tool מינימלי — מאפשרים isolation, testing עצמאי ורי-פריסה של agent בודד בלי לפגוע בשאר.", bridge: "ב-TaskFlow: אילו agents נדרשים? מה ה-tool של כל אחד? מי ה-orchestrator?" },
    diagram: `<div class="flow-diagram"><div class="flow-node primary">Bob IDE + ADK</div><span class="flow-arrow">→</span><div class="flow-node secondary">wxo CLI deploy</div><span class="flow-arrow">→</span><div class="flow-node">Orchestrate Platform</div><span class="flow-arrow">→</span><div class="flow-node storage">Agent Catalog</div></div>
<div class="flow-diagram" style="margin-top:0.5rem"><div class="flow-node primary">User / App</div><span class="flow-arrow">→</span><div class="flow-node secondary">Orchestrator Agent</div><span class="flow-arrow">→</span><div class="flow-node">Specialist Agents</div><span class="flow-arrow">→</span><div class="flow-node storage">Tools / Skills / APIs</div></div>
<p style="font-size:0.85rem;color:var(--ink-secondary);margin-top:0.25rem">Bob עוזר בשלב הפיתוח. ADK CLI פורס. Orchestrate מריץ בפרודקשן.</p>`,
    bob: { modes: ["Ask", "Plan", "Agent"], workflow: "Ask להבנת Orchestrate topology → Plan לארכיטקטורת agents ו-tools → Agent לכתיבת Python tools ו-YAML + deploy.", prompt: "In Plan mode: design a multi-agent system for TaskFlow. Define: orchestrator agent, specialist agents (task, notification, report), tools per agent, skill schemas. No code yet.", promptWhy: "Topology Plan לפני קוד — agents הם microservices. ארכיטקטורה שגויה יקרה לתקן." },
    mistake: { bad: "לכתוב agent אחד ענק עם כל הלוגיקה.", good: "orchestrator קטן + specialist agents עם tool אחד-שניים כל אחד." },
    compare: { bad: "Build me a watsonx Orchestrate agent for TaskFlow", good: "Context: @docs/taskflow-api.md\nGoal: Define ADK agent «TaskAgent» with two tools: get_open_tasks and create_task\nConstraints: use ADK Python SDK, tools must be pure functions, no side-effects in agent init\nAC: wxo agent test passes locally before deploy" },
    lab: [
      "התקינו ADK: pip install ibm-watsonx-orchestrate-adk.",
      "Ask: בקשו מ-Bob להסביר את מבנה ADK project (agent.yaml + tools.py).",
      "Plan: תכננו orchestrator + שני specialists ל-TaskFlow.",
      "Agent: כתבו tool אחד עם @tool decorator — בדקו locally עם wxo agent test.",
      "Deploy ל-staging: wxo agent deploy --env staging.",
    ],
    exercise: "הגדירו Agent Catalog entry ל-TaskAgent: שם, capabilities, tools, authentication.",
    quiz: [
      { q: "הבדל Agent ב-Bob לעומת Agent ב-Orchestrate?", a: "Bob Agent Mode = מצב IDE לכתיבת קוד. Orchestrate Agent = יחידה פרוסה עם LLM+tools שרצה בפרודקשן." },
      { q: "למה @tool decorator?", a: "ADK רושם את הפונקציה ב-schema של ה-agent — הLLM יודע מתי ואיך להפעיל אותה." },
      { q: "test לפני deploy?", a: "wxo agent test מריץ agent locally מול ADK dev server — בלי זה באגים מגיעים ישר לפרודקשן." },
    ],
    summary: ["ADK = Python SDK לפיתוח agents.", "Plan topology לפני קוד.", "Tool = פונקציה נפרדת עם @decorator.", "test locally → deploy staging → production."],
    deep: { title: "מבנה ADK Project עם AGENTS.md", html: `<pre class="code-block"># AGENTS.md — watsonx Orchestrate / ADK Project
## Platform: watsonx Orchestrate (SaaS or CPD)
## SDK: ibm-watsonx-orchestrate-adk (Python 3.11+)
## CLI: wxo (agent deploy | skill publish | agent test | agent logs)
## Project structure:
#   agents/          — agent YAML definitions
#   tools/           — @tool decorated Python functions
#   skills/          — skill schemas (OpenAPI or AppConnect)
#   tests/           — wxo agent test cases
## Rules:
- Plan agent topology before any code (orchestrator + specialists)
- Each tool = one pure function; no state in tools
- wxo agent test must pass before wxo agent deploy
- Never hardcode API keys — use Orchestrate secret manager
- Deploy order: tools → skills → specialist agents → orchestrator
## Refs:
- ADK docs: developer.watson-orchestrate.ibm.com/docs/adk
- Tutorial: developer.watson-orchestrate.ibm.com/tutorials/advanced_tutorials</pre>` },
  },
  {
    num: 32,
    title: "Bob ו-Java Modernization — מ-WebSphere ל-Liberty + React",
    subtitle: "OpenRewrite, AMA ו-UI Modernization Workflow",
    phase: "enterprise",
    time: "55 דק'",
    intro: "Premium Package for Java מביא ל-Bob שני כלים מרכזיים: OpenRewrite לטרנספורמציה אוטומטית של קוד Java, ו-AMA (Application Modernization Accelerator) לתכנון מיגרציה מ-WebSphere ל-Liberty. יחד הם מאפשרים Workflow מלא: ניתוח → תכנית מיגרציה → ביצוע → React+Carbon frontend — בלי scaffolding ידני.",
    concepts: [
      { term: "OpenRewrite", def: "מנוע טרנספורמציה אוטומטי של קוד Java. מחיל recipes (כללי שינוי) על קוד קיים — מ-Struts ל-Jakarta EE, dependency upgrades, code style.", example: "Recipe: MigrateStrutsToJakartaEE — מחיל 40+ שינויים אוטומטיים על כל codebase", pitfall: "להריץ recipes בלי לקרוא ה-diff — OpenRewrite משנה הרבה קבצים בבת אחת, דרוש review." },
      { term: "AMA — Application Modernization Accelerator", def: "כלי IBM (JSphere) שמנתח WebSphere application ומייצר Migration Plan מפורט: סיכונים, מאמץ, שלבים. Bob צורך את ה-Plan לניתוח ו-replatform.", example: "AMA מנתח EAR → מפיק migration-plan.json → Bob קורא ומבצע replatform ל-Liberty", pitfall: "לדלג על AMA ולמגרר ידנית — AMA מזהה WebSphere APIs נסתרות שBob לבד יפספס." },
      { term: "UI Modernization Workflow", def: "Workflow מובנה ב-Bob שמנתח Java web app ומייצר: architecture document, Mermaid diagram, ו-JSON של אפשרויות מיגרציה. אחר כך Bob מבצע migration end-to-end.", example: "Struts 2 על WebSphere → Jakarta EE REST (Liberty) + React TypeScript + Carbon Design System", pitfall: "לבחור framework לפני שBob הריץ architecture analysis — הניתוח לפעמים מגלה מגבלות שמשנות את הבחירה." },
      { term: "Jakarta EE Backend", def: "Bob מייצר REST API חדש עם JAX-RS, pom.xml, server.xml, ו-project structure במקביל. Logic העסקי מועבר ללא שינוי.", example: "POST /api/prescriptions עם Jakarta EE — Bob מבצע scaffold בו-זמנית, מטפל בהגבלות סביבה עם shell commands", pitfall: "לצפות שBob ימגרר business logic — הוא מעתיק intact. שינויי לוגיקה = משימה נפרדת." },
      { term: "React + Carbon Design System", def: "Bob בונה React TypeScript SPA עם Vite ו-Carbon Design System (IBM). Port alignment אוטומטי (backend 9080, frontend 3000), CORS, shared components בparallel.", example: "Bob מנתח pom.xml → מזהה server port ו-API context path → מגדיר CORS → scaffold React+Vite+Carbon", pitfall: "לא לאשר כל npm command — Bob מבקש approval לפקודות scaffold. קראו לפני שמאשרים." },
      { term: "Parallel Scaffolding", def: "Bob V2 מריץ יצירת components, hooks, ו-pages במקביל. Build נקי עם zero TypeScript errors הוא gate לסיום.", example: "DashboardPage, PrescriptionsPage, MedicinesPage — נבנים במקביל, shared utilities קודם", pitfall: "להחשיב warnings כשגיאות — Bob מבחין בין blocking errors ל-non-blocking font/bundle warnings." },
    ],
    analogy: { text: "מיגרציה ידנית של WebSphere app מפספסת WebSphere APIs נסתרות — קוד שנראה standard Java אך משתמש ב-proprietary EJBs או class loaders. AMA מנתח דטרמיניסטית ומייצר רשימה. OpenRewrite מחיל שינויים ב-recipe אחיד על כל ה-codebase, לא file-by-file. בלי שניהם, Bob מגרר ממה שרואה — לא ממה שיש.", bridge: "ב-TaskFlow: אם הייתם צריכים למגרר מ-Struts ל-Jakarta EE — מה היה הסיכון הגדול ביותר? AMA אמור לזהות אותו." },
    diagram: `<div class="flow-diagram"><div class="flow-node">WebSphere + Struts</div><span class="flow-arrow">→</span><div class="flow-node secondary">AMA Analysis</div><span class="flow-arrow">→</span><div class="flow-node">Bob UI Modernization Workflow</div><span class="flow-arrow">→</span><div class="flow-node storage">Liberty + React + Carbon</div></div>
<div class="flow-diagram" style="margin-top:0.5rem"><div class="flow-node">Architecture Doc</div><span class="flow-arrow">+</span><div class="flow-node">Mermaid Diagram</div><span class="flow-arrow">+</span><div class="flow-node">migration.json</div><span class="flow-arrow">→</span><div class="flow-node storage">Framework Selection → Execute</div></div>
<p style="font-size:0.85rem;color:var(--ink-secondary);margin-top:0.25rem">Bob מייצר 3 artifacts לפני שנוגע בקוד. ה-Workflow מבצע end-to-end אחרי אישור.</p>`,
    bob: { modes: ["Plan", "Agent"], workflow: "Plan: הפעילו UI Modernization Workflow → בחרו frameworks → אשרו architecture. Agent: Bob מבצע migration end-to-end עם approval gates.", prompt: "Start the Java UI Modernization workflow. Regenerate architecture analysis for @src/. Do not make any code changes until I confirm the framework choices.", promptWhy: "Architecture analysis לפני בחירת framework — הניתוח מגלה תלויות ו-WebSphere APIs שמשפיעות על ה-migration path." },
    mistake: { bad: "לבקש מBob למגרר ישירות בלי AMA ובלי architecture analysis.", good: "AMA → migration plan → UI Modernization Workflow → architecture analysis → framework selection → execute." },
    compare: { bad: "Migrate this Java app from Struts to React", good: "Run UI Modernization workflow on @src/\nAfter architecture analysis, I will confirm:\n- Frontend: React + Carbon Design System\n- Backend: Jakarta EE (Liberty)\nConstraints: preserve all business logic intact, zero TypeScript errors in final build\nAC: all pages load, API endpoints respond correctly" },
    lab: [
      "הפעילו UI Modernization Workflow על Java project לדוגמה.",
      "קראו architecture document ו-Mermaid diagram שנוצרו.",
      "בחרו frameworks (React+Carbon / Jakarta EE).",
      "אשרו ועקבו אחרי parallel scaffold — קראו כל diff.",
      "ודאו: zero TypeScript errors, כל pages עובדות.",
    ],
    exercise: "קראו migration-plan.json שנוצר ו-AMA report — זהו 3 WebSphere APIs שדורשות טיפול מיוחד.",
    quiz: [
      { q: "מה AMA עושה שBob לבד לא יכול?", a: "מנתח דטרמיניסטי של WebSphere APIs, EJBs, ו-proprietary dependencies — מייצר migration plan מפורט עם סיכונים ומאמץ." },
      { q: "OpenRewrite vs ידני?", a: "OpenRewrite מחיל עשרות שינויים אוטומטיים וניתנים ל-review. ידני = שגיאות, עקביות נמוכה." },
      { q: "למה architecture analysis לפני framework selection?", a: "הניתוח מגלה מגבלות (WebSphere APIs, JSP dependencies) שיכולות לשנות את בחירת ה-framework." },
    ],
    summary: ["AMA מנתח → Bob מבצע.", "UI Modernization Workflow = 9 שלבים end-to-end.", "Architecture analysis לפני framework selection.", "Zero TypeScript errors = gate לסיום."],
    deep: { title: "מבנה Premium Package for Java", html: `<ul style="margin:0;padding-right:1.2rem">
<li><strong>OpenRewrite VSIX Extension</strong> — מחיל recipe transformations אוטומטיות על קוד Java</li>
<li><strong>AMA (JSphere, licensed separately)</strong> — WebSphere→Liberty migration plan. רישיון כלול ב: Enterprise Application Runtimes (EAR) או Modernized Runtime Extension for Java (MoRE)</li>
<li><strong>UI Modernization Workflow</strong> — Struts/JSP → Jakarta EE REST + React TypeScript + Carbon</li>
</ul>
<pre class="code-block" style="margin-top:0.75rem"># AGENTS.md — Java Modernization Project
## Stack: Java 17+ · Jakarta EE · Liberty · React TypeScript · Carbon
## Build: Maven (pom.xml) · Vite (frontend)
## Ports: backend=9080, frontend=3000
## Artifacts: docs/architecture.md, docs/architecture.mmd, migration.json
## Rules:
- Always run AMA before Bob migration workflow
- Read architecture analysis before selecting framework
- OpenRewrite diff must be reviewed before commit
- Zero TypeScript errors required before marking Done
- Business logic migrated intact — logic changes = separate task</pre>` },
  },
  {
    num: 33,
    title: "ארכיטקטורת Bob SaaS — Regional Deployment ו-Data Flows",
    subtitle: "מה עובר על הקו, איפה המודלים רצים, ואיך להגן על IP",
    phase: "enterprise",
    time: "35 דק'",
    intro: "Bob SaaS רץ על AWS + IBM Cloud בשלושה אזורים: ארה\"ב, אירופה ויפן. כל prompt עובר דרך שכבת AuthN/AuthZ, Bob Model Gateway ו-Metering לפני שמגיע למודל. Bob תומך במגוון LLMs — IBM Granite, Claude, Llama ועוד. להבין את ה-Data Flow אומר לדעת מה יוצא מה-IDE, מה נשמר, ומה לא.",
    concepts: [
      { term: "LLMs הזמינים ב-Bob", def: "Bob תומך במספר מודלים: IBM Granite דרך watsonx.ai; Anthropic Claude; Meta Llama; Mistral — דרך שכבת ה-inference.", example: "Granite לקוד IBM ו-enterprise; Claude לניתוח ו-reasoning מורכב", pitfall: "להניח שכל המודלים זמינים בכל region ובכל חבילה — הזמינות תלויה ב-entitlement ובאזור." },
      { term: "Regional Deployment", def: "Bob SaaS פרוס בשלושה אזורים: US (AWS us-east-1/us-west-1 + IBM Cloud us-east), Europe (AWS eu-central-1 + IBM Cloud eu-de/eu-gb), Japan (AWS ap-northeast-1 + IBM Cloud jp-tok). הלקוח מתחבר לאזור הקרוב — לשמירת data residency.", example: "לקוח אירופאי → endpoint EU → AWS eu-central-1 (Frankfurt) + IBM Cloud eu-de", pitfall: "להניח שהנתונים עוברים לארה\"ב כברירת מחדל — יש לבחור אזור מפורשות בהגדרות." },
      { term: "Bob Model Gateway", def: "שכבת routing בין ה-Client ל-LLMs. מטפל ב-AuthZ, Metering, feature flags ו-audit. הוא לא ה-LLM — הוא ה-broker שמנתב לכל מודל.", example: "Bob IDE → TLS → Bob Model Gateway (IBM Cloud) → Granite / Claude / Llama → completion → IDE", pitfall: "לבלבל בין Bob Model Gateway (IBM infra) לבין ה-LLM עצמו." },
      { term: "מה עובר על הקו", def: "Prompts + code snippets שנקראו + terminal output שצורף = inference payload. קוד שנשמר בדיסק, node_modules, .env = לא יוצא בלי @ מפורש.", example: "git diff שצורף ב-@ → יוצא ל-LLM. .env שב-.bobignore → לא יוצא לעולם", pitfall: "להניח שBob רואה את כל ה-repo — הוא רואה רק מה שנשלח בפועל." },
      { term: "AuthN + AuthZ", def: "AuthN = SSO / API key. AuthZ = הרשאות per-tool ב-Harness. Metering = מדידת token usage לחיוב ו-governance.", example: "SSO ארגוני → Bob IDE → Harness מחליט אילו כלים מותרים → LLM inference → audit log", pitfall: "לחשוב שRules ב-AGENTS.md = security enforcement. הם הכוונה — AuthZ ב-Harness היא האכיפה." },
      { term: "On-Prem / Air-Gap", def: "אותה ארכיטקטורה — endpoint inference הוא watsonx.ai פנימי (OpenShift) במקום inference בענן. תמונות קונטיינר מ-private registry. prompts לא יוצאים מהרשת.", example: "Bob IDE → enterprise Harness → watsonx.ai GPU nodes (OpenShift) — NO public egress", pitfall: "לחשוב ש-air-gap = פחות יכולות. אותה לולאה, endpoint פנימי בלבד." },
    ],
    analogy: { text: "Bob שולח רק מה שנמצא בinference payload — קבצים שצורפו ב-@, טקסט שנכתב בprompt, ו-terminal output שנוסף. קוד שיושב בדיסק אבל לא צורף לא יוצא. .bobignore הוא ההגדרה המפורשת של «לא לשלוח» — בלי .bobignore, מידע רגיש עלול להגיע ל-LLM בלי כוונה דרך @ רחב.", bridge: "עבור הפרויקט שלכם: איזה אזור נכון? איזה מודל? מה ב-.bobignore? מי מנהל את ה-AuthZ?" },
    diagram: `<div class="flow-diagram"><div class="flow-node primary">Bob IDE/Shell</div><span class="flow-arrow">TLS →</span><div class="flow-node secondary">Bob Model Gateway (IBM Cloud)</div><span class="flow-arrow">→</span><div class="flow-node">Granite · Claude · Llama · Mistral</div><span class="flow-arrow">→</span><div class="flow-node storage">Completion → IDE</div></div>
<div class="flow-diagram" style="margin-top:0.5rem"><div class="flow-node primary" style="text-align:center"><strong>US</strong><br><small style="font-weight:400;font-size:0.75rem">us-east-1 · us-west-1<br>IBM Cloud us-east</small></div><span class="flow-arrow">|</span><div class="flow-node secondary" style="text-align:center"><strong>EU</strong><br><small style="font-weight:400;font-size:0.75rem">eu-central-1 · eu-west-1<br>eu-west-3 · eu-north-1<br>IBM Cloud eu-de · eu-gb</small></div><span class="flow-arrow">|</span><div class="flow-node storage" style="text-align:center"><strong>JP</strong><br><small style="font-weight:400;font-size:0.75rem">ap-northeast-1 (Tokyo)<br>ap-northeast-3 (Osaka)<br>IBM Cloud jp-tok</small></div></div>
<p style="font-size:0.85rem;color:var(--ink-secondary);margin-top:0.25rem">Redis + IBM COS + Admin DB = תשתית אחסון. המודלים לא שומרים קוד.</p>`,
    bob: { modes: ["Ask"], workflow: "Ask לבדיקת data flow ו-.bobignore לפני כל עבודה עם קוד רגיש.", prompt: "In Ask mode: read .bobignore and AGENTS.md. Verify that .env, secrets/, and *.key are excluded. List what would be sent to the LLM if I attach @src/. Do not change files.", promptWhy: "Audit data flow לפני עבודה עם IP רגיש — מה Bob רואה = מה יוצא." },
    mistake: { bad: "להניח שBob רואה את כל ה-repo ושומר קוד בענן.", good: "רק מה שנשלח ב-@ או נקרא ע\"י tool יוצא לLLM. הגנה = .bobignore + AuthZ + data residency region." },
    lab: [
      "בדקו .bobignore — ודאו .env, secrets, *.pem חסומים.",
      "Ask: בקשו מBob לרשום מה יישלח ל-LLM אם תצרפו @src/.",
      "זהו את ה-region שהארגון שלכם משתמש בו — EU/US/JP.",
      "בדקו שה-AuthZ settings מגבילים כלים מסוכנים (rm, deploy).",
    ],
    exercise: "כתבו .bobignore מלא לפרויקט TaskFlow + AGENTS.md section על data residency ו-model choice.",
    quiz: [
      { q: "אילו LLMs זמינים ב-Bob?", a: "IBM Granite (granite-3-8b-instruct ועוד), Anthropic Claude 3.5 Sonnet / Claude 3 Haiku, Meta Llama 3, Mistral Large. הזמינות תלויה ב-entitlement ובאזור." },
      { q: "מה תפקיד Bob Model Gateway?", a: "Broker בין ה-IDE ל-LLMs — מנתב, מאמת (AuthZ), מודד (Metering) ומתעד (audit). הוא לא ה-LLM עצמו." },
      { q: "הבדל AuthN ל-AuthZ ב-Bob?", a: "AuthN = מי אתה (SSO/API key). AuthZ = מה מותר לך (Harness per-tool permissions)." },
      { q: "Air-gap vs SaaS?", a: "אותה לולאה. SaaS = endpoint inference בענן. Air-gap = watsonx.ai פנימי על OpenShift. prompts לא עוזבים הרשת." },
    ],
    summary: ["LLMs: Granite · Claude · Llama · Mistral — לפי entitlement.", "3 regions: US / EU / JP — data residency לפי צורך.", "Model Gateway = broker, לא LLM.", ".bobignore + AuthZ = הגנה אמיתית."],
    deep: { title: "IBM Bob — LLMs ו-Regional Endpoints", html: `<p style="margin-bottom:0.75rem"><strong>מודלים זמינים ב-Bob (SaaS):</strong></p>
<table style="width:100%;border-collapse:collapse;font-size:0.9rem;margin-bottom:1rem">
<thead><tr style="border-bottom:2px solid var(--line)"><th style="text-align:right;padding:6px 8px">משפחה</th><th style="text-align:right;padding:6px 8px">מודלים</th><th style="text-align:right;padding:6px 8px">שימוש מומלץ</th></tr></thead>
<tbody>
<tr style="border-bottom:1px solid var(--line)"><td style="padding:6px 8px"><strong>IBM Granite</strong></td><td style="padding:6px 8px">Granite</td><td style="padding:6px 8px">קוד IBM · enterprise · עברית</td></tr>
<tr style="border-bottom:1px solid var(--line)"><td style="padding:6px 8px"><strong>Anthropic Claude</strong></td><td style="padding:6px 8px">Claude</td><td style="padding:6px 8px">ניתוח · reasoning · טקסט ארוך</td></tr>
<tr style="border-bottom:1px solid var(--line)"><td style="padding:6px 8px"><strong>Meta Llama</strong></td><td style="padding:6px 8px">Llama</td><td style="padding:6px 8px">קוד כללי · open-weight</td></tr>
<tr><td style="padding:6px 8px"><strong>Mistral</strong></td><td style="padding:6px 8px">Mistral</td><td style="padding:6px 8px">ניתוח · code generation</td></tr>
</tbody>
</table>
<p style="margin-bottom:0.5rem"><strong>Regional Endpoints:</strong></p>
<table style="width:100%;border-collapse:collapse;font-size:0.9rem">
<thead><tr style="border-bottom:2px solid var(--line)"><th style="text-align:right;padding:6px 8px">Region</th><th style="text-align:right;padding:6px 8px">IBM Cloud</th><th style="text-align:right;padding:6px 8px">Inference (AWS)</th></tr></thead>
<tbody>
<tr style="border-bottom:1px solid var(--line)"><td style="padding:6px 8px"><strong>US</strong></td><td style="padding:6px 8px">us-east</td><td style="padding:6px 8px">us-east-1 · us-west-1</td></tr>
<tr style="border-bottom:1px solid var(--line)"><td style="padding:6px 8px"><strong>Europe</strong></td><td style="padding:6px 8px">eu-de · eu-gb</td><td style="padding:6px 8px">eu-central-1 (Frankfurt) · eu-south-2 (Spain) · eu-west-1 (Ireland) · eu-west-3 (Paris) · eu-north-1 (Stockholm) · eu-south-1 (Milan)</td></tr>
<tr><td style="padding:6px 8px"><strong>Japan</strong></td><td style="padding:6px 8px">jp-tok</td><td style="padding:6px 8px">ap-northeast-1 (Tokyo) · ap-northeast-3 (Osaka)</td></tr>
</tbody>
</table>
<p style="margin-top:0.75rem;font-size:0.85rem">Infrastructure משותפת לכל region: Redis · IBM COS · Admin DB (Master + Read Replica). AuthN/AuthZ + Metering = IBM Cloud layer.</p>` },
  },
  {
    num: 34,
    title: "ארכיטקטורת Bob On-Prem — פריסה פנים-ארגונית",
    subtitle: "CPD, watsonx.ai פנימי, Air-Gap ו-Private Model Registry",
    phase: "enterprise",
    time: "40 דק'",
    intro: "ארגונים רבים — ובפרט בתעשיות מוסדרות כמו פיננסים, בריאות, ממשל ותעשייה כבדה — אינם יכולים לשלוח קוד או נתונים רגישים לענן ציבורי. Bob On-Prem (מכונה גם «Self-Hosted» או «Air-Gapped») מאפשר אותה חוויית IDE בדיוק, אבל ה-inference רץ על תשתית פנימית: IBM Cloud Pak for Data (CPD) על OpenShift, עם watsonx.ai כ-inference engine. שום prompt לא עוזב את הרשת הארגונית. מקורות: <a href=\"https://www.ibm.com/docs/en/cloud-paks/cp-data\" target=\"_blank\" rel=\"noopener\">IBM Cloud Pak for Data Documentation</a> ו-<a href=\"https://www.ibm.com/docs/en/watsonx/saas\" target=\"_blank\" rel=\"noopener\">IBM watsonx.ai Documentation</a>.",
    concepts: [
      { term: "IBM Cloud Pak for Data (CPD)", def: "פלטפורמת AI ו-data של IBM לפריסה On-Prem או ב-private cloud. רצה על OpenShift. מספקת את שירותי watsonx.ai, governance ו-data fabric בתוך מרכז הנתונים הארגוני.", example: "CPD על RHOCP 4.14 → watsonx.ai service → Granite / Mistral / Llama on GPU nodes → Bob IDE", pitfall: "לבלבל בין CPD (הפלטפורמה) לבין watsonx.ai (שירות ה-inference). CPD היא הכלי — watsonx.ai הוא השירות שרץ עליה." },
      { term: "watsonx.ai On-Prem Inference", def: "שירות ה-inference של IBM שרץ בתוך CPD. מטפל ב-model loading, GPU scheduling, API, ו-rate limiting — בדיוק כמו ב-SaaS, אבל על hardware ארגוני.", example: "POST https://cpd.internal/ml/v1/text/generation → Granite model → completion חוזר ל-Bob IDE", pitfall: "להניח שכל המודלים מה-SaaS זמינים On-Prem — model availability תלוי ב-entitlement ובנפח ה-GPU." },
      { term: "Air-Gap Deployment", def: "סביבה ללא חיבור לאינטרנט ציבורי. Bob IDE, CPD ו-model images מגיעים דרך private registry (Artifactory, Quay, IBM ICR Mirror). אפס egress traffic.", example: "Bob IDE → internal proxy → CPD API (no TLS pinning to IBM Cloud) → watsonx.ai GPU → completion", pitfall: "לצפות לעדכוני מודלים אוטומטיים ב-air-gap — הם מגיעים רק דרך image pull מפורש מ-private registry." },
      { term: "Private Model Registry", def: "מאגר פנימי של model images ו-adapters. המודלים נמשכים פעם אחת מ-IBM ICR ומאוחסנים ב-Quay / Artifactory פנימי. כל deployment משתמש בעותק פנימי בלבד.", example: "ibm-granite-8b → pull לפעם אחת → push ל-registry.internal/ibm/granite-8b → CPD pull מ-registry.internal", pitfall: "לשכוח לעדכן את ה-registry הפנימי כשיוצאת גרסה חדשה — המודל פנימי לא מתעדכן לבד." },
      { term: "Bob Model Gateway (On-Prem)", def: "בסביבת On-Prem, Bob Model Gateway רץ כ-container על OpenShift. מנתב בין Bob IDE לבין watsonx.ai הפנימי. AuthN/AuthZ דרך LDAP / SAML ארגוני במקום IBM IAM.", example: "Bob IDE → Bob Gateway Pod (OpenShift) → AuthZ (LDAP) → watsonx.ai inference → completion", pitfall: "להשתמש ב-API key של IBM Cloud ב-On-Prem — AuthN On-Prem עובד מול IdP הארגוני, לא מול IBM IAM." },
      { term: "Data Residency ו-Compliance", def: "ב-On-Prem כל prompts, completions ו-audit logs נשארים בתוך הרשת הארגונית. אין שיתוף נתונים עם IBM Cloud. מתאים ל-GDPR, PCI-DSS, HIPAA, ISO 27001.", example: "מוסד פיננסי: קוד COBOL עם לוגיקת חישוב ריבית → prompt ל-CPD מקומי → completion מקומי → audit log מקומי", pitfall: "לחשוב שAir-Gap אוטומטי ב-On-Prem — נדרשת הגדרה מפורשת של network policies ו-egress rules." },
      { term: "GPU Requirements", def: "watsonx.ai On-Prem דורש NVIDIA GPU nodes על OpenShift. גודל המודל קובע את כמות ה-VRAM. Granite 8B: ~20GB VRAM. מודלים גדולים יותר — multi-GPU.", example: "NVIDIA A100 80GB × 2 → Granite 8B + Llama 70B בו-זמנית. H100 × 4 → מודלים גדולים יותר במקביל.", pitfall: "לתכנן On-Prem בלי GPU — CPD CPU-only מאוד איטי לinference ואינו מתאים לייצור." },
      { term: "Bob + CPD — Data Flow", def: "Bob IDE → TLS (internal CA) → Bob Gateway Pod → watsonx.ai API → model inference → completion → IDE. Metering ו-audit נשמרים ב-CPD. אין egress.", example: "מפתח RPG → Developer Mode → Bob Gateway (OpenShift) → Granite (CPD) → refactoring suggestion → IDE (ללא יציאה מהרשת)", pitfall: "להשתמש ב-self-signed certificate ללא internal CA — Bob IDE לא יאמין לendpoint." },
    ],
    analogy: { text: "ב-SaaS, prompt עובר TLS לinfrastructure של IBM Cloud — מחוץ לרשת הארגונית. ב-On-Prem, אותו prompt עובר TLS לGateway Pod שרץ בתוך OpenShift הארגוני — ולא יוצא. ההבדל הוא לא ביכולת, אלא היכן פועלת ה-inference ומי שולט בנתונים.", bridge: "ב-TaskFlow: אם הפרויקט נמצא בסביבת בנק — איזה מרכיב תדרשו לאמת ראשון? מה הצעד הראשון ב-On-Prem deployment?" },
    diagram: `<div class="flow-diagram"><div class="flow-node primary">Bob IDE</div><span class="flow-arrow">TLS (internal CA) →</span><div class="flow-node secondary">Bob Gateway Pod (OpenShift)</div><span class="flow-arrow">→</span><div class="flow-node">watsonx.ai (CPD)</div><span class="flow-arrow">→</span><div class="flow-node storage">GPU Nodes · Private Model Registry</div></div>
<div class="flow-diagram" style="margin-top:0.5rem"><div class="flow-node primary">AuthN: LDAP/SAML</div><span class="flow-arrow">→</span><div class="flow-node secondary">AuthZ: RBAC (OpenShift)</div><span class="flow-arrow">→</span><div class="flow-node">Metering + Audit Log (CPD)</div><span class="flow-arrow">→</span><div class="flow-node storage">SIEM פנימי</div></div>
<p style="font-size:0.85rem;color:var(--ink-secondary);margin-top:0.25rem">אפס egress לאינטרנט. כל model inference, audit ו-metering רצים בתוך הרשת הארגונית.</p>`,
    bob: { modes: ["Ask", "Plan"], workflow: "Ask לניתוח ארכיטקטורת On-Prem ובחינת דרישות GPU, network policy ו-model availability. Plan לתכנון deployment: CPD, network, registry, AuthN.", prompt: "In Ask mode: I am planning a Bob On-Prem deployment for a financial institution. What are the key components, GPU requirements, and network policies needed? What compliance risks should I document? Do not change files.", promptWhy: "Ask מתאים לתכנון ארכיטקטורה לפני כל implementation. Bob מזהה פערים ו-compliance gaps לפני שמתחילים." },
    mistake: { bad: "לפרוס Bob On-Prem עם self-signed certificates ובלי network egress policy — Bob IDE לא יתחבר, ו-prompts עלולים לדלוף.", good: "Internal CA → Bob Gateway → network policy: egress denied for all → watsonx.ai GPU nodes → audit to SIEM." },
    compare: { bad: "Deploy Bob with cloud API key pointing to IBM Cloud", good: "On-Prem deployment checklist:\n1. CPD on RHOCP 4.14+, watsonx.ai service installed\n2. GPU nodes with NVIDIA operator\n3. Private model registry (Quay/Artifactory) with approved models\n4. Bob Gateway Pod configured for internal LDAP/SAML\n5. Internal CA cert → Bob IDE trust store\n6. Network policy: no public egress from inference namespace\n7. Audit logs → SIEM\n8. .bobignore: secrets, .env, *.pem" },
    lab: [
      "ציירו Data Flow diagram: Bob IDE → Gateway → watsonx.ai → GPU → completion (ללא אינטרנט).",
      "זהו: איזה GPU nodes נדרשים למודל שבחרתם? (Granite 8B = ~20GB VRAM)",
      "בדקו: האם ל-RHOCP שלכם יש NVIDIA GPU operator מותקן?",
      "תכננו network policy: אילו namespaces מורשים לדבר עם watsonx.ai?",
      "הכינו רשימת מודלים לייבא ל-private registry (private model list).",
      "Plan mode: בקשו מBob לכתוב AGENTS.md ל-On-Prem project עם כל ה-compliance requirements.",
    ],
    exercise: "כתבו deployment checklist מלא ל-Bob On-Prem בארגון פיננסי: CPD, GPU, registry, AuthN, network policy, audit, .bobignore.",
    quiz: [
      { q: "מה ההבדל בין Bob SaaS ל-Bob On-Prem מבחינת Data Flow?", a: "SaaS: prompts עוברים TLS לIBM Cloud inference. On-Prem: prompts עוברים TLS לGateway Pod ב-OpenShift — אפס egress לאינטרנט." },
      { q: "מה תפקיד CPD ב-On-Prem?", a: "פלטפורמת האירוח — מריצה את watsonx.ai, מנהלת GPU scheduling, AuthZ ו-metering. לא ה-inference עצמו." },
      { q: "למה private model registry?", a: "Air-gap: אי אפשר לפנות ל-IBM ICR ישירות. מושכים מודלים פעם אחת → שומרים פנימי → CPD pull מהregistry הפנימי." },
      { q: "מה דרישות ה-GPU המינימליות?", a: "NVIDIA GPU nodes עם NVIDIA operator על RHOCP. Granite 8B ≈ 20GB VRAM. מודלים גדולים → multi-GPU. CPU-only = לא מתאים לייצור." },
      { q: "איך AuthN שונה ב-On-Prem?", a: "SaaS: IBM IAM + API key. On-Prem: LDAP / SAML ארגוני מול Bob Gateway Pod. אין שימוש ב-IBM Cloud IAM." },
    ],
    summary: [
      "Bob On-Prem = CPD + watsonx.ai + OpenShift — אפס egress.",
      "GPU nodes עם NVIDIA operator — דרישת חובה.",
      "Private model registry — pull פעם אחת, serve פנימי.",
      "AuthN/AuthZ: LDAP/SAML ארגוני, לא IBM IAM.",
      "Audit logs → SIEM פנימי — compliance מלא.",
      "Data residency מוחלט: כל prompt ו-completion נשאר ב-datacenter.",
    ],
    deep: { title: "On-Prem Deployment Architecture", html: `<p style="margin-bottom:0.5rem;font-size:0.85rem;color:var(--ink-secondary)">מקורות: <a href="https://www.ibm.com/docs/en/cloud-paks/cp-data" target="_blank" rel="noopener">IBM Cloud Pak for Data docs</a> · <a href="https://www.ibm.com/docs/en/watsonx/saas" target="_blank" rel="noopener">IBM watsonx.ai docs</a> · <a href="https://www.ibm.com/docs/en/cloud-paks/cp-data?topic=installing-openshift-container-platform" target="_blank" rel="noopener">CPD on OpenShift Installation Guide</a></p>
<p style="margin-bottom:0.75rem"><strong>שכבות ה-On-Prem Stack:</strong></p>
<table style="width:100%;border-collapse:collapse;font-size:0.9rem;margin-bottom:1rem">
<thead><tr style="border-bottom:2px solid var(--line)"><th style="text-align:right;padding:6px 8px">שכבה</th><th style="text-align:right;padding:6px 8px">רכיב</th><th style="text-align:right;padding:6px 8px">הערה</th></tr></thead>
<tbody>
<tr style="border-bottom:1px solid var(--line)"><td style="padding:6px 8px"><strong>IDE</strong></td><td style="padding:6px 8px">Bob IDE (VS Code extension)</td><td style="padding:6px 8px">מתחבר ל-Gateway Pod, לא ל-IBM Cloud</td></tr>
<tr style="border-bottom:1px solid var(--line)"><td style="padding:6px 8px"><strong>Gateway</strong></td><td style="padding:6px 8px">Bob Gateway Pod (OpenShift)</td><td style="padding:6px 8px">AuthN: LDAP/SAML; AuthZ: RBAC; Metering</td></tr>
<tr style="border-bottom:1px solid var(--line)"><td style="padding:6px 8px"><strong>Inference</strong></td><td style="padding:6px 8px">watsonx.ai (CPD service)</td><td style="padding:6px 8px">REST API; GPU scheduling; model serving</td></tr>
<tr style="border-bottom:1px solid var(--line)"><td style="padding:6px 8px"><strong>Models</strong></td><td style="padding:6px 8px">Private registry (Quay/Artifactory)</td><td style="padding:6px 8px">Granite, Llama, Mistral — pulled once from ICR</td></tr>
<tr style="border-bottom:1px solid var(--line)"><td style="padding:6px 8px"><strong>Compute</strong></td><td style="padding:6px 8px">NVIDIA GPU nodes (RHOCP)</td><td style="padding:6px 8px">NVIDIA operator required; A100/H100 recommended</td></tr>
<tr><td style="padding:6px 8px"><strong>Audit</strong></td><td style="padding:6px 8px">CPD Audit Log → SIEM</td><td style="padding:6px 8px">כל prompt + completion + tool action</td></tr>
</tbody>
</table>
<pre class="code-block"># AGENTS.md — Bob On-Prem Project
## Deployment: CPD on RHOCP 4.14+ · watsonx.ai service
## Inference endpoint: https://cpd.internal/ml/v1/text/generation
## AuthN: LDAP/SAML (NOT IBM Cloud API key)
## Model registry: registry.internal/ibm/ (Quay/Artifactory)
## GPU: NVIDIA A100/H100 nodes — NVIDIA operator required
## Network: NO public egress from inference namespace
## Audit: all prompts + completions → /var/log/cpd-audit → SIEM
## Compliance: GDPR / PCI-DSS / HIPAA — data stays in datacenter
## Rules:
- Never use IBM Cloud API key — use internal LDAP/SAML token
- All model pulls via registry.internal only
- .bobignore: .env, secrets/, *.pem, *.key, config/prod*
- Bob Gateway cert: signed by internal CA (add to IDE trust store)
- GPU node failure → inference degraded — monitor nvidia-smi on nodes</pre>` },
  },
];
