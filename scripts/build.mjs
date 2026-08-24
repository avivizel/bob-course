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

fs.writeFileSync(path.join(ROOT, "index.html"), indexPage(), "utf8");
ALL.forEach((ch) => {
  const file = path.join(ROOT, `chapter-${String(ch.num).padStart(2, "0")}.html`);
  fs.writeFileSync(file, chapterPage(ch), "utf8");
  console.log("✓", path.basename(file));
});
console.log("✓ index.html");
console.log(`\nGenerated ${ALL.length + 1} pages.`);
