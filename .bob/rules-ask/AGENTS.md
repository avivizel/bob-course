# Ask Mode Rules

## Source of truth
All course content (text, concepts, prompts, quiz questions) lives exclusively in `scripts/chapters-part1.mjs`, `scripts/chapters-part2.mjs`, and `scripts/concept-details.mjs`. The HTML files at the project root are machine-generated and should not be read for content accuracy.

## Two-layer popup text
Concept cards show a short `def` (from the chapter data) and a richer 3-part popup (intro / meaning / intent) from `concept-details.mjs`. When answering questions about what a concept page says, check both sources.

## Phases and chapter mapping
The 34 chapters are grouped into 7 phases defined in `PHASES` in `chapters-part1.mjs`:
- `foundation` (1–4), `bob` (5–10), `product` (11–14), `build` (15–19), `ai` (20–23), `quality` (24–28), `enterprise` (29–34)

Enterprise chapters: IBM i Premium Package (29), IBM Z (30), watsonx Orchestrate/ADK (31), Java Modernization (32), SaaS Architecture (33), On-Prem/Air-Gap (34).

## IBM i chapter (ch. 29) — authoritative facts
Source: `source and documentation/IBM_Bob_Office_Hours_IBM_i_Premium_Package.md` (structured transcript, June 2026 Office Hours with Tim Rowe, IBM).

- Native Connection is SSH — **not** the open-source MCP server (Tim Rowe: "Stop it. Don't do it.")
- `/erd schema-name` is a slash-command (DB Mode) that runs multi-threaded SQL Services queries and produces a Mermaid ERD
- RPG Modernization Workflow is 3-phase: OPM→ILE (compile) → scan I/O-specs → free-form (compile) → Modernization Summary Report
- Bob auto-detects related DDS + DB + RPG files when a field-add request is made across all three
- Bob auto-corrects DDS/RPG compile errors — detects from *EVENTF, patches, recompiles
- Job log analysis: Bob can receive a job log and find root causes (e.g., spool storage, Job Watcher jobs)
- Custom Workflows, Skills, and Tools can be created; built-in ones cannot be edited directly
- Reports (modernization, ERD, business rules, security) should be saved to IFS and committed to source control — Bob uses them as context in subsequent sessions
