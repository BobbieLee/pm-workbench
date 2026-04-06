# Changelog

All notable changes to `pm-workbench` will be documented in this file.

---

## v0.1.0 — Initial workflow foundation

### Added
- initial `pm-workbench` skill scaffold
- core `SKILL.md` positioning and routing logic
- first batch of workflow references:
  - `clarify-request`
  - `evaluate-feature-value`
  - `prepare-exec-summary`
- second batch of workflow references:
  - `compare-solutions`
  - `prioritize-requests`
  - `draft-prd`
- third batch of workflow references:
  - `build-roadmap`
  - `design-metrics`
  - `write-postmortem`

### Notes
This version established the core idea of `pm-workbench` as a scenario-driven PM workflow skill instead of a framework lookup or generic PM prompt pack.

---

## v0.2.0 — Validation and packaging

### Improved
- compressed the main `SKILL.md` into a more trigger-friendly and packaging-friendly core file
- kept workflow detail in `references/workflows/`
- standardized workflow structure for consistency across all core workflows

### Validated
- completed workflow consistency checks across the first 9 workflow files
- fixed YAML frontmatter validation issue in `SKILL.md`
- successfully packaged the first working `.skill` bundle

### Notes
This version made `pm-workbench` testable, packageable, and easier to maintain.

---

## v0.3.0 — Stronger follow-up behavior

### Added
- critical-premise rule to the main `SKILL.md`
- critical-premise rule added into high-frequency workflows:
  - `evaluate-feature-value`
  - `compare-solutions`
  - `prioritize-requests`
  - `draft-prd`
  - `prepare-exec-summary`

### Improved
- stronger behavior for asking 1-2 missing premises before giving strong conclusions
- clearer support for assumption-labeled `v0` outputs when speed matters

### Notes
This version improved judgment stability in low-context and high-pressure PM scenarios.

---

## v0.4.0 — Artifact-first output layer

### Added
- first template batch:
  - `feature-evaluation-memo.md`
  - `exec-summary.md`
- second template batch:
  - `prd-lite.md`
  - `roadmap-one-pager.md`
- closing template batch:
  - `postmortem-lite.md`

### Improved
- wired templates back into the main `SKILL.md`
- added default artifact mapping from workflows to PM artifacts
- added compressed artifact rule for fast / lightweight usage
- added minimum compressed artifact expectations for each mapped artifact

### Notes
This version shifted `pm-workbench` from "strong analysis skill" toward "artifact-producing PM workbench."

---

## v0.5.0 — GitHub packaging layer

### Added
- `README.md` with positioning, workflows, built-in artifacts, use cases, before/after framing, quick start, and current status
- `examples/` directory with example cases for:
  - vague request clarification
  - feature evaluation memo
  - executive summary
  - PRD Lite
  - Postmortem Lite

### Improved
- clearer GitHub-facing product story
- easier first-use understanding for external users
- stronger demonstration of scenario-driven and artifact-first behavior

### Notes
This version made `pm-workbench` more ready for open distribution, GitHub discovery, and external testing.

---

## Current state

`pm-workbench` is currently:
- validated
- packaged
- structured around 9 core workflows
- extended with 5 PM artifact templates
- equipped with critical-premise behavior
- equipped with compressed artifact behavior
- documented for GitHub-facing distribution

It is already useful for real PM work, but still evolving through testing and iteration.
