import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { AUTHOR, CAPSTONE, PHASES, CHAPTERS } from "./chapters-part1.mjs";
import { CHAPTERS_PART2 } from "./chapters-part2.mjs";
import { DETAILS } from "./concept-details.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const ALL = [...CHAPTERS, ...CHAPTERS_PART2];

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/«([^»]+)»/g, "<strong><em>$1</em></strong>");
}

function sidebar(current) {
  return PHASES.map((phase) => {
    const links = phase.chapters
      .map((n) => {
        const ch = ALL.find((c) => c.num === n);
        const href = `chapter-${String(n).padStart(2, "0")}.html`;
        const active = n === current ? " active" : "";
        return `<a class="nav-link${active}" href="${href}"><span class="nav-num">${n}</span>${esc(ch.title)}</a>`;
      })
      .join("\n");
    return `<div class="nav-phase">${esc(phase.label)}</div>\n${links}`;
  }).join("\n");
}

function phaseBadge(phase) {
  const map = {
    foundation: "badge-blue",
    bob: "badge-teal",
    product: "badge-purple",
    build: "badge-blue",
    ai: "badge-purple",
    quality: "badge-amber",
    enterprise: "badge-teal",
  };
  const label = PHASES.find((p) => p.id === phase)?.label || phase;
  return `<span class="badge ${map[phase] || ""}">${esc(label)}</span>`;
}

function conceptDetail(chNum, c) {
  return (
    DETAILS[`${chNum}:${c.term}`] ||
    DETAILS[c.term] || {
      intro: `המושג «${c.term}» הוא אחד מאבני הבניין של הפרק.`,
      meaning: c.def,
      intent: `הכוונה: להבין מתי להשתמש בו, ומה משתבש אם מתעלמים — ${c.pitfall}`,
    }
  );
}

function renderConcepts(chNum, concepts) {
  return `<p class="concept-hint">רחפו מעל שם המושג (או לחצו במסך מגע) לפירוט: מבוא, משמעות וכוונה.</p>
  <div class="concept-grid">${concepts
    .map((c, i) => {
      const d = conceptDetail(chNum, c);
      const id = `concept-pop-${chNum}-${i}`;
      return `<article class="concept-card">
      <button type="button" class="concept-term" aria-expanded="false" aria-controls="${id}">
        ${esc(c.term)}
        <span class="concept-info" aria-hidden="true">i</span>
      </button>
      <div class="concept-popup" id="${id}" role="tooltip" hidden>
        <p class="popup-kicker">${esc(c.term)}</p>
        <p class="popup-label">מבוא</p>
        <p>${esc(d.intro)}</p>
        <p class="popup-label">משמעות</p>
        <p>${esc(d.meaning)}</p>
        <p class="popup-label">כוונה</p>
        <p>${esc(d.intent)}</p>
      </div>
      <p>${esc(c.def)}</p>
      <div class="example"><strong>דוגמה:</strong> ${esc(c.example)}</div>
      <div class="pitfall"><strong>זהירות:</strong> ${esc(c.pitfall)}</div>
    </article>`;
    })
    .join("")}</div>`;
}

function renderQuiz(quiz) {
  return `<div class="quiz">${quiz
    .map(
      (q) => `<details>
      <summary>${esc(q.q)}</summary>
      <div class="answer"><strong>תשובה לדוגמה:</strong> ${esc(q.a)}</div>
    </details>`
    )
    .join("")}</div>`;
}

function renderJudgment(items) {
  return `<div class="judgment-list">${items
    .map(
      (j) => `<div class="judgment-item">
      <div class="judgment-scenario"><strong>תרחיש:</strong> ${esc(j.scenario)}</div>
      <details class="judgment-details">
        <summary class="judgment-q">עצור והחלט — ${esc(j.q)}</summary>
        <div class="judgment-a">${esc(j.a)}</div>
      </details>
    </div>`
    )
    .join("")}</div>`;
}

function renderPrinciple(p) {
  return `<section class="section">
    <div class="section-label label-principle"><span class="dot"></span>${esc(p.title)}</div>
    <div class="card card-principle">
      <p>${esc(p.text)}</p>
      <pre class="prompt">${esc(p.loop)}</pre>
    </div>
  </section>`;
}

function renderModes(modes) {
  const cls = { Ask: "mode-ask", Plan: "mode-plan", Agent: "mode-agent" };
  return `<div class="mode-row">${modes.map((m) => `<span class="mode-pill ${cls[m] || ""}">${esc(m)}</span>`).join("")}</div>`;
}

function chapterPage(ch) {
  const prev = ch.num > 1 ? ALL.find((c) => c.num === ch.num - 1) : null;
  const next = ch.num < ALL[ALL.length - 1].num ? ALL.find((c) => c.num === ch.num + 1) : null;
  const slug = (n) => `chapter-${String(n).padStart(2, "0")}.html`;

  const capstoneBlock = ch.capstone
    ? `<section class="section">
      <div class="section-label label-capstone"><span class="dot"></span>פרויקט Capstone — TaskFlow</div>
      <div class="card card-capstone"><p>${esc(ch.capstone)}</p></div>
    </section>`
    : "";

  const diagramBlock = ch.diagram
    ? `<section class="section"><h2>תרשים זרימה</h2>${ch.diagram}</section>`
    : "";

  const compareBlock = ch.compare
    ? `<div class="compare-grid">
        <div class="compare-bad"><div class="compare-label">Prompt חלש</div><pre class="prompt">${esc(ch.compare.bad)}</pre></div>
        <div class="compare-good"><div class="compare-label">Prompt חזק</div><pre class="prompt">${esc(ch.compare.good)}</pre></div>
      </div>`
    : "";

  const deepBlock = ch.deep
    ? `<section class="section">
      <div class="section-label label-deep"><span class="dot"></span>${esc(ch.deep.title)}</div>
      <div class="card card-deep">${ch.deep.html}</div>
    </section>`
    : "";

  const judgmentBlock = ch.judgment && ch.judgment.length > 0
    ? `<section class="section">
      <div class="section-label label-judgment"><span class="dot"></span>עצור והחלט</div>
      ${renderJudgment(ch.judgment)}
    </section>`
    : "";

  const principleBlock = ch.principle
    ? renderPrinciple(ch.principle)
    : "";

  const versionBlock = ch.verifiedAt || ch.sources
    ? `<section class="version-box">
        <div class="version-header"><strong>מידע תלוי גרסה ומוצר</strong></div>
        <div class="version-body">
          ${ch.verifiedAt ? `<p>נבדק ואומת מול תיעוד IBM בתאריך: <strong>${esc(ch.verifiedAt)}</strong></p>` : ""}
          ${ch.sources && ch.sources.length > 0 ? `
            <p class="sources-title">מקורות רשמיים:</p>
            <ul class="sources-list">
              ${ch.sources.map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)}</a></li>`).join("")}
            </ul>
          ` : ""}
        </div>
      </section>`
    : "";

  return `<!doctype html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>פרק ${ch.num}: ${esc(ch.title)} | קורס IBM Bob</title>
  <link rel="stylesheet" href="assets/css/guide.css">
</head>
<body data-chapter="${ch.num}">
  <div class="progress-track"><div class="progress-fill"></div></div>
  <div class="layout">
    <aside class="sidebar" aria-label="ניווט פרקים">
      <div class="sidebar-brand">
        <a href="index.html">מ־0 למוצר עם IBM Bob</a>
        <small>34 פרקים · ${esc(AUTHOR.name)}</small>
      </div>
      ${sidebar(ch.num)}
    </aside>
    <div class="main-column">
      <header class="chapter-header">
        <div class="chapter-meta">
          <span class="badge badge-blue">פרק ${ch.num} מתוך ${ALL[ALL.length - 1].num}</span>
          ${phaseBadge(ch.phase)}
          <span class="badge">${esc(ch.time)}</span>
        </div>
        <h1>${esc(ch.title)}</h1>
        <p class="subtitle">${esc(ch.subtitle)}</p>
      </header>
      <main class="content">
        ${versionBlock}
        <section class="section">
          <div class="section-label label-goal"><span class="dot"></span>מטרת הפרק</div>
          <div class="card card-goal"><p><strong>בסוף הפרק:</strong> ${esc(ch.subtitle)}</p></div>
        </section>

        <section class="section">
          <h2>מבוא</h2>
          <p>${esc(ch.intro)}</p>
        </section>

        ${capstoneBlock}

        <section class="section">
          <div class="section-label label-concepts"><span class="dot"></span>מושגי מפתח</div>
          ${renderConcepts(ch.num, ch.concepts)}
        </section>

        <section class="section">
          <div class="section-label label-analogy"><span class="dot"></span>משל מהעולם האמיתי</div>
          <div class="card card-analogy"><p>${esc(ch.analogy.text)}</p></div>
          <p><strong>שאלות לחשיבה:</strong> ${esc(ch.analogy.bridge)}</p>
        </section>

        ${diagramBlock}

        <section class="section">
          <div class="section-label label-bob"><span class="dot"></span>עבודה עם IBM Bob</div>
          ${renderModes(ch.bob.modes)}
          <p>${esc(ch.bob.workflow)}</p>
          <h3>Prompt לדוגמה</h3>
          <pre class="prompt">${esc(ch.bob.prompt)}</pre>
          <p><strong>למה זה עובד:</strong> ${esc(ch.bob.promptWhy)}</p>
        </section>

        <section class="section">
          <div class="section-label label-warning"><span class="dot"></span>טעות נפוצה</div>
          <div class="card card-warning">
            <p><strong>לא:</strong> ${esc(ch.mistake.bad)}</p>
            <p><strong>כן:</strong> ${esc(ch.mistake.good)}</p>
          </div>
          ${compareBlock}
        </section>

        ${deepBlock}

        ${judgmentBlock}

        ${principleBlock}

        <section class="section">
          <div class="section-label label-lab"><span class="dot"></span>מעבדה מודרכת</div>
          <ol class="steps">${ch.lab.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
        </section>

        <section class="section">
          <h2>תרגיל עצמאי</h2>
          <p>${esc(ch.exercise)}</p>
        </section>

        <section class="section">
          <div class="section-label label-quiz"><span class="dot"></span>בדקו את עצמכם</div>
          ${renderQuiz(ch.quiz)}
        </section>

        <section class="section">
          <h2>סיכום</h2>
          <div class="summary-box">
            <ul>${ch.summary.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
          </div>
        </section>
      </main>

      <nav class="chapter-nav" aria-label="ניווט בין פרקים">
        ${
          prev
            ? `<a class="prev" href="${slug(prev.num)}"><span class="nav-label">פרק קודם</span><span class="nav-title">${esc(prev.title)}</span></a>`
            : `<a class="prev disabled" href="index.html"><span class="nav-label">תוכן עניינים</span><span class="nav-title">ראשי</span></a>`
        }
        ${
          next
            ? `<a class="next" href="${slug(next.num)}"><span class="nav-label">פרק הבא</span><span class="nav-title">${esc(next.title)}</span></a>`
            : `<a class="next" href="index.html"><span class="nav-label">סיום</span><span class="nav-title">חזרה לראשי</span></a>`
        }
      </nav>

      <footer class="site-footer">
        <div class="footer-inner">
          <p><strong>${esc(AUTHOR.name)}</strong> · ${esc(AUTHOR.org)}</p>
          <p><a href="mailto:${esc(AUTHOR.email)}">${esc(AUTHOR.email)}</a> · ${esc(AUTHOR.phone)}</p>
          <p class="footer-meta">קורס IBM Bob · פרק ${ch.num} · ${esc(AUTHOR.year)}</p>
        </div>
      </footer>
    </div>
  </div>
  <script src="assets/js/guide.js"></script>
</body>
</html>`;
}

function indexPage() {
  const tocCards = ALL.map(
    (ch) => `<a class="toc-card" href="chapter-${String(ch.num).padStart(2, "0")}.html">
      <h3><span class="badge badge-blue">${ch.num}</span> ${esc(ch.title)}</h3>
      <p>${esc(ch.subtitle)} · ${esc(ch.time)}</p>
    </a>`
  ).join("");

  return `<!doctype html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>קורס IBM Bob — מדריך מלא</title>
  <link rel="stylesheet" href="assets/css/guide.css">
</head>
<body>
  <div class="progress-track"><div class="progress-fill"></div></div>
  <div class="layout">
    <aside class="sidebar" aria-label="ניווט פרקים">
      <div class="sidebar-brand">
        <a href="index.html">מ־0 למוצר עם IBM Bob</a>
        <small>34 פרקים · ${esc(AUTHOR.name)}</small>
      </div>
      ${sidebar(0)}
    </aside>
    <div class="main-column">
      <header class="hero">
        <div class="chapter-meta" style="justify-content:center;margin-bottom:1rem">
          <span class="badge badge-blue">מדריך מקצועי</span>
          <span class="badge badge-teal">34 פרקים</span>
        </div>
        <h1>מ־0 בפיתוח מבוסס AI למוצר Full-Stack עובד עם IBM Bob</h1>
        <p>לומדים לחשוב, לתכנן, לבנות, לבדוק ולהסביר תוכנה בעזרת Agentic AI — כאשר Bob הוא שותף העבודה, לא האוטוריטה.</p>
      </header>
      <main class="content">
        <section class="section">
          <div class="section-label label-goal"><span class="dot"></span>עיקרון הקורס</div>
          <div class="card card-goal">
            <p><strong>אל תאשרו פעולה שאינכם מסוגלים להסביר.</strong></p>
            <p>Bob הוא שותף מהיר — לא replacement. אתם מגדירים מטרה, Mode, הרשאות, קוראים Plan ו-Diff, ודורשים ראיות.</p>
            <p style="margin-bottom:0;color:var(--ink-secondary)">הזמנים המופיעים ליד הפרקים הם זמן לימוד/הסבר משוער. זמן תרגול עצמאי ומעבדות עשוי להוסיף זמן משמעותי.</p>
          </div>
        </section>

        <section class="section">
          <div class="section-label label-deep"><span class="dot"></span>דרישות קדם</div>
          <div class="prereq-grid">
            <div class="prereq-item"><strong>מחשב + דפדפן</strong><span>Chrome / Edge</span></div>
            <div class="prereq-item"><strong>IBM Bob</strong><span>סביבת העבודה של הקורס</span></div>
            <div class="prereq-item"><strong>Python 3.11+</strong><span>נדרש כשמריצים את ה-Capstone</span></div>
          </div>
          <div class="card" style="margin-top:1rem">
            <p><strong>אין צורך בידע קודם ב-Git, ב-Python או ב-HTML/CSS/JS.</strong></p>
            <p style="margin-bottom:0">הקורס מלמד את המודל המנטלי הדרוש לעבודה נכונה עם Bob ולבניית מוצר עובד — לא mastery מלא של כל שפה מהיום הראשון.</p>
          </div>
          <p style="margin-top:1rem;color:var(--ink-secondary)"><strong>Stack הקורס:</strong> ${esc(CAPSTONE.stack)}</p>
        </section>

        <section class="section">
          <div class="section-label label-summary"><span class="dot"></span>שלושה מסלולי לימוד</div>
          <div class="grid-2">
            <div class="card">
              <h3 style="margin-top:0">1. Core — לחשוב ולעבוד נכון עם AI</h3>
              <p><strong>פרקים 1–14</strong></p>
              <p>הבנת תוכנה, סביבת פיתוח, Git, Bob, Ask / Plan / Agent, Context, הרשאות, Product Intent, Acceptance Criteria, Planning ו-Controlled execution.</p>
              <p style="margin-bottom:0"><strong>Output:</strong> הלומד יודע להגדיר משימה ולנהל Agentic Development באופן אחראי.</p>
            </div>
            <div class="card">
              <h3 style="margin-top:0">2. Build — מרעיון למוצר עובד</h3>
              <p><strong>פרקים 15–28</strong></p>
              <p>Frontend, Backend, DB, Identity, AI, RAG, MCP, Debugging, Testing, Security, Deployment ו-Governance/Handover.</p>
              <p style="margin-bottom:0"><strong>Output:</strong> הלומד יודע לבנות ולהסביר vertical product slice מלא בעזרת Bob.</p>
            </div>
          </div>
          <div class="card" style="margin-top:1rem">
            <h3 style="margin-top:0">3. Enterprise Specializations</h3>
            <p><strong>פרקים 29–34</strong></p>
            <p>IBM i, IBM Z, watsonx Orchestrate, Java Modernization, Bob SaaS architecture ו-On-Prem / future deployment considerations.</p>
            <p style="margin-bottom:0"><strong>פרקים אלו הם הרחבות התמחות. הם אינם prerequisite לסיום מסלול Build.</strong></p>
          </div>
        </section>

        <section class="section">
          <div class="section-label label-capstone"><span class="dot"></span>פרויקט Capstone — ${esc(CAPSTONE.name)}</div>
          <div class="card card-capstone">
            <p>${esc(CAPSTONE.desc)}</p>
            <div class="flow-diagram" style="margin-top:1rem">
              <div class="flow-node">PRD</div><span class="flow-arrow">→</span>
              <div class="flow-node">Stories</div><span class="flow-arrow">→</span>
              <div class="flow-node secondary">Plan</div><span class="flow-arrow">→</span>
              <div class="flow-node">Build</div><span class="flow-arrow">→</span>
              <div class="flow-node storage">Handover</div>
            </div>
            <p style="margin-top:1rem;font-size:0.92rem">פרקים 11–28 מקשרים כל נושא ל-${esc(CAPSTONE.name)}. פרקים 29–34 הם הרחבות Enterprise והתמחויות.</p>
          </div>
        </section>

        <section class="section">
          <h2>תוכן העניינים</h2>
          <div class="toc-grid">${tocCards}</div>
        </section>

        <section class="section">
          <h2>מפת שלבי הקורס</h2>
          <div class="flow-diagram">
            ${PHASES.map((p, i) => `${i ? '<span class="flow-arrow">→</span>' : ""}<div class="flow-node ${i === 0 ? "primary" : i === PHASES.length - 1 ? "storage" : "secondary"}">${esc(p.label)}</div>`).join("")}
          </div>
        </section>

        <section class="section">
          <div class="section-label label-capstone"><span class="dot"></span>הערכה מסכמת</div>
          <div class="card card-capstone">
            <p><strong>סיימתם את כל הפרקים?</strong> בדקו אם אתם יודעים לנהל Bob בפרויקט לא מוכר.</p>
            <p style="margin-bottom:1rem">ה-Final Assessment מעמיד אתכם מול repository שלא ראיתם — ומבקש להוסיף feature אחד, עם RAVEN, Diff review, tests והסבר מלא.</p>
            <a href="final-assessment.html" class="badge badge-teal" style="text-decoration:none;padding:0.5rem 1.2rem;font-size:1rem">→ לדף ה-Final Assessment</a>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <div class="footer-inner">
          <p><strong>${esc(AUTHOR.name)}</strong> · ${esc(AUTHOR.org)}</p>
          <p><a href="mailto:${esc(AUTHOR.email)}">${esc(AUTHOR.email)}</a> · ${esc(AUTHOR.phone)}</p>
          <p class="footer-meta">קורס IBM Bob · מדריך מלא · ${esc(AUTHOR.year)}</p>
        </div>
      </footer>
    </div>
  </div>
  <script src="assets/js/guide.js"></script>
</body>
</html>`;
}

function finalAssessmentPage() {
  const rubric = [
    { topic: "הבנת repository ו-context", pts: 10 },
    { topic: "Intent ו-scope", pts: 10 },
    { topic: "Acceptance Criteria", pts: 10 },
    { topic: "RAVEN / assumptions", pts: 10 },
    { topic: "Plan quality", pts: 10 },
    { topic: "Controlled implementation", pts: 10 },
    { topic: "Diff review", pts: 10 },
    { topic: "Tests / evidence", pts: 10 },
    { topic: "Security / least privilege", pts: 10 },
    { topic: "Explanation / ownership", pts: 10 },
  ];
  const deliverables = [
    "Repository map — מיפוי הפרויקט: קבצים, stack, entry points",
    "Product intent — מה המוצר עושה ולמה Feature זה נחוץ",
    "Scope — מה בסקופ ומה מחוץ לסקופ (Out of Scope מפורש)",
    "Acceptance Criteria — Given/When/Then לכל תנאי הצלחה",
    "RAVEN review — Requirements, Assumptions, Verification, Effects, No-go",
    "Implementation plan — Plan Mode, שלבים, stop conditions",
    "Diff — קוד שנכתב עם Bob, מסומן ומוסבר",
    "Tests / evidence — unit + integration ירוקים, curl, log",
    "Security review — threat model mini, secrets, least privilege",
    "Handover note — README, Known Limitations, RAVEN summary",
  ];
  const criticalFails = [
    "secret נכנס ל-Git — fail מיידי",
    "destructive operation בוצעה ללא אישור מפורש",
    "הסטודנט אינו מסוגל להסביר שינוי מהותי בשיחת ה-defense",
    "tests לא הורצו אך נטען «הכל עובד»",
    "Bob ביצע scope expansion מהותי ללא אישור — ואושר בלי קריאת diff",
  ];

  return `<!doctype html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Final Assessment | קורס IBM Bob</title>
  <link rel="stylesheet" href="assets/css/guide.css">
</head>
<body>
  <div class="progress-track"><div class="progress-fill"></div></div>
  <div class="layout">
    <aside class="sidebar" aria-label="ניווט פרקים">
      <div class="sidebar-brand">
        <a href="index.html">מ־0 למוצר עם IBM Bob</a>
        <small>34 פרקים · ${esc(AUTHOR.name)}</small>
      </div>
      ${sidebar(0)}
    </aside>
    <div class="main-column">
      <header class="chapter-header">
        <div class="chapter-meta">
          <span class="badge badge-blue">Final Assessment</span>
          <span class="badge badge-teal">פרויקט מסיים</span>
        </div>
        <h1>הערכה מסכמת — Agentic Development בפרויקט לא מוכר</h1>
        <p class="subtitle">בודק process + judgment, לא רק output. 100 נקודות + oral defense.</p>
      </header>
      <main class="content">

        <section class="section">
          <div class="section-label label-goal"><span class="dot"></span>מטרת ההערכה</div>
          <div class="card card-goal">
            <p><strong>ההבדל בין «סיימתי את TaskFlow» לבין «אני יודע לנהל Bob בפרויקט חדש».</strong></p>
            <p style="margin-bottom:0">הסטודנט מקבל repository קטן שלא ראה קודם, ומתבקש להוסיף feature אחד מבלי לשנות behavior קיים שאינו קשור — תוך תיעוד מלא של התהליך.</p>
          </div>
        </section>

        <section class="section">
          <div class="section-label label-warning"><span class="dot"></span>התרחיש</div>
          <div class="card card-warning">
            <p><strong>Repository:</strong> פרויקט Python+Flask קטן שלא ראיתם קודם — task manager מינימלי עם שני endpoints.</p>
            <p><strong>המשימה:</strong> הוסיפו שדה <code>priority</code> (low / medium / high) למשימות — UI + API + DB.</p>
            <p style="margin-bottom:0"><strong>הכלל:</strong> אסור לשנות behavior קיים שאינו קשור לבקשה. כל שינוי מחוץ לסקופ — Diff rejection.</p>
          </div>
        </section>

        <section class="section">
          <div class="section-label label-lab"><span class="dot"></span>מה להגיש — 10 Deliverables</div>
          <ol class="steps">${deliverables.map((d) => `<li>${esc(d)}</li>`).join("")}</ol>
        </section>

        <section class="section">
          <div class="section-label label-bob"><span class="dot"></span>Oral Defense — 5 דקות</div>
          <div class="card card-capstone">
            <p><strong>Bob כתב חלק מהקוד. ענו על:</strong></p>
            <ol style="margin:0.5rem 0 0;padding-right:1.4rem">
              <li>מה השתנה בקוד — בשורות ספציפיות?</li>
              <li>למה בחרתם את הגישה הזו ולא אחרת?</li>
              <li>איך הוכחתם שזה עובד? (ראו evidence)</li>
              <li>מה הסיכון העיקרי שנשאר ב-codebase אחרי השינוי?</li>
              <li>מה היה ה-No-go ב-RAVEN שלכם — ומה היה קורה אם Bob היה מפר אותו?</li>
            </ol>
          </div>
        </section>

        <section class="section">
          <div class="section-label label-concepts"><span class="dot"></span>Rubric — 100 נקודות</div>
          <div class="card">
            <table style="width:100%;border-collapse:collapse;font-size:0.92rem">
              <thead><tr style="border-bottom:2px solid var(--line)">
                <th style="text-align:right;padding:6px 8px">נושא</th>
                <th style="text-align:left;padding:6px 8px;width:60px">נקודות</th>
              </tr></thead>
              <tbody>
                ${rubric.map((r) => `<tr style="border-bottom:1px solid var(--line)">
                  <td style="padding:6px 8px">${esc(r.topic)}</td>
                  <td style="padding:6px 8px;text-align:left;font-weight:600">${r.pts}</td>
                </tr>`).join("")}
                <tr style="border-top:2px solid var(--line)">
                  <td style="padding:6px 8px;font-weight:700">סה"כ</td>
                  <td style="padding:6px 8px;text-align:left;font-weight:700">100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="section">
          <div class="section-label label-warning"><span class="dot"></span>Critical Fail — גם עם ציון גבוה, נכשל אם:</div>
          <div class="card card-warning">
            <ul style="margin:0;padding-right:1.4rem">
              ${criticalFails.map((f) => `<li>${esc(f)}</li>`).join("")}
            </ul>
          </div>
        </section>

        <section class="section">
          <h2>הכנה מומלצת</h2>
          <div class="summary-box">
            <ul>
              <li>חיזרו על RAVEN (פרקים 13, 24, 25, 26, 28)</li>
              <li>חיזרו על CGCA + Out of Scope (פרק 7)</li>
              <li>חיזרו על Stop Conditions + Diff review (פרק 14)</li>
              <li>חיזרו על Security Basics: Validation, Parameterization, Secrets (פרק 26)</li>
              <li>חיזרו על Handover Checklist (פרק 28)</li>
              <li>זכרו: ביטחון בתשובה אינו הוכחה — tests ו-diff הם הראיות</li>
            </ul>
          </div>
        </section>

      </main>

      <nav class="chapter-nav" aria-label="ניווט">
        <a class="prev" href="chapter-34.html"><span class="nav-label">פרק אחרון</span><span class="nav-title">פרק 34</span></a>
        <a class="next" href="index.html"><span class="nav-label">ראשי</span><span class="nav-title">תוכן עניינים</span></a>
      </nav>

      <footer class="site-footer">
        <div class="footer-inner">
          <p><strong>${esc(AUTHOR.name)}</strong> · ${esc(AUTHOR.org)}</p>
          <p><a href="mailto:${esc(AUTHOR.email)}">${esc(AUTHOR.email)}</a> · ${esc(AUTHOR.phone)}</p>
          <p class="footer-meta">קורס IBM Bob · Final Assessment · ${esc(AUTHOR.year)}</p>
        </div>
      </footer>
    </div>
  </div>
  <script src="assets/js/guide.js"></script>
</body>
</html>`;
}

fs.writeFileSync(path.join(ROOT, "index.html"), indexPage(), "utf8");
ALL.forEach((ch) => {
  const file = path.join(ROOT, `chapter-${String(ch.num).padStart(2, "0")}.html`);
  fs.writeFileSync(file, chapterPage(ch), "utf8");
  console.log("✓", path.basename(file));
});
fs.writeFileSync(path.join(ROOT, "final-assessment.html"), finalAssessmentPage(), "utf8");
console.log("✓ final-assessment.html");
console.log("✓ index.html");
console.log(`\nGenerated ${ALL.length + 2} pages.`);
