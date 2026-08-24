/**
 * scripts/validate.mjs
 * Post-build validation for the IBM Bob course site.
 * Run: node scripts/validate.mjs
 * Exits non-zero if any check fails.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const TOTAL_CHAPTERS = 34;

let errors = 0;
let warnings = 0;

function fail(msg) {
  console.error(`  ✗ FAIL  ${msg}`);
  errors++;
}
function warn(msg) {
  console.warn(`  ⚠ WARN  ${msg}`);
  warnings++;
}
function ok(msg) {
  console.log(`  ✓       ${msg}`);
}

// ── 1. File existence ─────────────────────────────────────────────────────────
console.log("\n[1] File existence");

if (fs.existsSync(path.join(ROOT, "index.html"))) {
  ok("index.html exists");
} else {
  fail("index.html missing");
}

if (fs.existsSync(path.join(ROOT, "final-assessment.html"))) {
  ok("final-assessment.html exists");
} else {
  fail("final-assessment.html missing");
}

const missingChapters = [];
for (let n = 1; n <= TOTAL_CHAPTERS; n++) {
  const file = `chapter-${String(n).padStart(2, "0")}.html`;
  if (!fs.existsSync(path.join(ROOT, file))) missingChapters.push(file);
}
if (missingChapters.length === 0) {
  ok(`All ${TOTAL_CHAPTERS} chapter files exist`);
} else {
  fail(`Missing chapter files: ${missingChapters.join(", ")}`);
}

// ── 2. HTML sanity (no external parser) ──────────────────────────────────────
console.log("\n[2] HTML sanity");

const htmlFiles = [
  "index.html",
  "final-assessment.html",
  ...Array.from({ length: TOTAL_CHAPTERS }, (_, i) =>
    `chapter-${String(i + 1).padStart(2, "0")}.html`
  ),
];

let htmlOk = true;
for (const file of htmlFiles) {
  const fullPath = path.join(ROOT, file);
  if (!fs.existsSync(fullPath)) continue;
  const src = fs.readFileSync(fullPath, "utf8");
  for (const marker of ["<html", "<head", "<body", "</body>", "</html>"]) {
    if (!src.includes(marker)) {
      fail(`${file}: missing ${marker}`);
      htmlOk = false;
    }
  }
}
if (htmlOk) ok("All HTML files contain required structural markers");

// ── 3. Navigation links ───────────────────────────────────────────────────────
console.log("\n[3] Navigation links");

let navOk = true;
for (let n = 1; n <= TOTAL_CHAPTERS; n++) {
  const file = `chapter-${String(n).padStart(2, "0")}.html`;
  const fullPath = path.join(ROOT, file);
  if (!fs.existsSync(fullPath)) continue;
  const src = fs.readFileSync(fullPath, "utf8");

  if (n > 1) {
    const prevFile = `chapter-${String(n - 1).padStart(2, "0")}.html`;
    if (!src.includes(prevFile)) {
      fail(`${file}: missing link to previous chapter (${prevFile})`);
      navOk = false;
    }
  }
  if (n < TOTAL_CHAPTERS) {
    const nextFile = `chapter-${String(n + 1).padStart(2, "0")}.html`;
    if (!src.includes(nextFile)) {
      fail(`${file}: missing link to next chapter (${nextFile})`);
      navOk = false;
    }
  }
}
if (navOk) ok("All chapter navigation links are present");

// ── 4. Forbidden phrases (content regressions) ───────────────────────────────
console.log("\n[4] Forbidden phrases");

const DENYLIST = [
  "השורה הראשונה = הגורם",
  "No hallucination policy",
  "wxo agent test",
  "wxo agent deploy",
  "מתאים ל-GDPR, PCI-DSS, HIPAA, ISO 27001",
];

let denyOk = true;
for (const file of htmlFiles) {
  const fullPath = path.join(ROOT, file);
  if (!fs.existsSync(fullPath)) continue;
  const src = fs.readFileSync(fullPath, "utf8");
  for (const phrase of DENYLIST) {
    if (src.includes(phrase)) {
      fail(`${file}: contains forbidden phrase: "${phrase}"`);
      denyOk = false;
    }
  }
}
if (denyOk) ok("No forbidden phrases found");

// ── 5. Course metadata (from source data) ────────────────────────────────────
console.log("\n[5] Course metadata");

const { CHAPTERS } = await import("./chapters-part1.mjs");
const { CHAPTERS_PART2 } = await import("./chapters-part2.mjs");
const ALL = [...CHAPTERS, ...CHAPTERS_PART2];
const VALID_PHASES = new Set(["foundation", "bob", "product", "build", "ai", "quality", "enterprise"]);

if (ALL.length === TOTAL_CHAPTERS) {
  ok(`${TOTAL_CHAPTERS} chapters defined`);
} else {
  fail(`Expected ${TOTAL_CHAPTERS} chapters, got ${ALL.length}`);
}

const nums = ALL.map((c) => c.num);
const dupNums = nums.filter((n, i) => nums.indexOf(n) !== i);
if (dupNums.length === 0) ok("All chapter numbers are unique");
else fail(`Duplicate chapter numbers: ${dupNums.join(", ")}`);

const titles = ALL.map((c) => c.title);
const dupTitles = titles.filter((t, i) => titles.indexOf(t) !== i);
if (dupTitles.length === 0) ok("All chapter titles are unique");
else fail(`Duplicate chapter titles: ${dupTitles.join(", ")}`);

for (const ch of ALL) {
  if (!VALID_PHASES.has(ch.phase)) {
    fail(`Chapter ${ch.num}: invalid phase "${ch.phase}"`);
  }
  if (ch.num <= 28 && ch.lab) {
    const last = ch.lab[ch.lab.length - 1];
    if (!last || !last.includes("הצלחה =")) {
      warn(`Chapter ${ch.num}: lab last step does not contain "הצלחה ="`);
    }
  }
}
ok("Phase and lab success-criterion checks complete");

// ── Summary ───────────────────────────────────────────────────────────────────
console.log(`\n${"─".repeat(50)}`);
if (errors === 0 && warnings === 0) {
  console.log("✅ All checks passed.");
} else if (errors === 0) {
  console.log(`⚠️  Passed with ${warnings} warning(s). No failures.`);
} else {
  console.log(`❌ ${errors} failure(s), ${warnings} warning(s).`);
  process.exit(1);
}
