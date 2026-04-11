# Changelog

All notable changes to `pm-workbench` will be documented in this file.

---

## v1.1.0 — Workflow judgment sharpening

### Improved

- sharpened the 4 highest-signal core workflows with lighter framing / judgment cues:
  - `references/workflows/clarify-request.md`
  - `references/workflows/prioritize-requests.md`
  - `references/workflows/design-metrics.md`
  - `references/workflows/evaluate-feature-value.md`
- strengthened `SKILL.md` so the skill can briefly suggest the right angle when the ask is still fuzzy, while staying workflow-first and artifact-first
- tightened `README.md` language so the added judgment behavior is clearer without turning the repo into a framework library

### Guardrails

- kept the repo structure unchanged for this release
- did not add new workflow paths, templates, examples, benchmark layers, or navigation surfaces
- kept the upgrade focused on sharper early judgment rather than broader framework coverage

### Validated

- `npm run validate` passes locally after the workflow judgment upgrade

### Notes

This version is about making `pm-workbench` less likely to jump into the wrong next step when the ask is still fuzzy, while keeping the repo tight, workflow-led, and reusable in real PM work.

---

## v1.0.6 — Install and pre-release check polish

### Added

- new short install checklist:
  - `docs/INSTALL-CHECKLIST.md`

### Improved

- made the source-first install path more explicit in:
  - `README.md`
  - `docs/GETTING-STARTED.md`
  - `docs/TRY-IN-3-MINUTES.md`
- clarified the default path as **copy → validate → skills check** before first use or release
- strengthened repo validation coverage so the install-check doc is also guarded by local validation

### Validated

- `npm run validate` passes locally after the install-check polish

### Notes

This version is aimed at making `pm-workbench` easier to try, easier to verify after copying, and easier to sanity-check before source-first distribution.

---

## v1.0.5 — Decision-under-uncertainty hardening

### Added

- new higher-pressure examples:
  - `examples/20-launch-readiness-call.md`
  - `examples/21-mixed-signals-operating-review.md`
- new benchmark worked examples:
  - `benchmark/worked-example-launch-readiness.md`
  - `benchmark/worked-example-mixed-signals.md`

### Improved

- strengthened `SKILL.md` with a cross-workflow **conditional recommendation rule** so the skill is more likely to make a usable call under uncertainty instead of stopping at “needs more information”
- strengthened `SKILL.md` with a **leader-grade decision rule** focused on period objective, scarce-resource protection, and explicit non-decisions
- sharpened `compare-solutions` around decisive trade-offs, what the choice is protecting, why-not-the-other-option-now logic, and decide-now vs validate-next framing
- sharpened `prepare-exec-summary` around launch / readiness recommendation framing, decision-now vs validation-next, and clearer upward decision asks
- sharpened `build-roadmap` around scarce-resource protection, stronger not-now language, and clearer stage-goal defense
- sharpened `prioritize-requests` around scarce-resource framing, non-decision language patterns, and more explicit below-the-line logic
- strengthened the matching templates:
  - `references/templates/decision-brief.md`
  - `references/templates/exec-summary.md`
  - `references/templates/roadmap-one-pager.md`
  - `references/templates/head-of-product-operating-review.md`
- updated example and benchmark indexes so the new higher-pressure scenarios are discoverable from the repo surface

### Validated

- `npm run validate` passes locally after the decision-under-uncertainty upgrade

### Notes

This version is aimed at making `pm-workbench` feel less like a strong PM analyst and more like a stronger product-leadership workbench under uncertainty, conflict, and pressure.

---

## v1.0.3 — High-pressure acceptance suite

### Added

- new benchmark pressure-test asset:
  - `benchmark/high-pressure-acceptance-suite.md`

### Improved

- extended the benchmark layer from baseline comparison scenarios to harsher real-world acceptance testing
- added more conflict-heavy, ambiguity-heavy, leadership-heavy scenarios designed to reveal whether `pm-workbench` still holds judgment quality under pressure
- connected the pressure-test suite back into `benchmark/README.md` and `benchmark/scenarios.md` so it works as part of the repo’s visible evaluation path

### Notes

This version is about shifting from “looks strong in curated examples” toward “can survive messier real PM conditions.”

---

## v1.0.2 — Core judgment sharpening

### Improved

- sharpened `prepare-exec-summary` with clearer failure modes, stronger-output standards, and more explicit emphasis on decision ask, business consequence, and why-now logic
- sharpened `compare-solutions` with stronger standards for decisive trade-off framing, why-not-the-other-option reasoning, and staged-path judgment
- sharpened `build-roadmap` with clearer standards for sequencing logic, explicit non-focus calls, and resource-constrained stage framing
- strengthened the matching templates:
  - `references/templates/exec-summary.md`
  - `references/templates/decision-brief.md`
  - `references/templates/roadmap-one-pager.md`
- updated core examples so the repo’s visible examples better reflect the newer judgment bar:
  - `examples/03-exec-summary.md`
  - `examples/06-decision-brief.md`
  - `examples/08-roadmap-one-pager.md`

### Validated

- `npm run validate` passes locally after the workflow and template upgrades

### Notes

This version is focused on making the core workflow layer feel less like “good structure” and more like “stronger PM judgment under real constraints.”

---

## v1.0.1 — Proof and onboarding hardening

### Added

- new ultra-fast onboarding asset:
  - `docs/TRY-IN-3-MINUTES.md`
- new workflow-map visual:
  - `docs/images/pm-workbench-workflow-map.svg`
- new high-tension case-study examples:
  - `examples/15-case-study-boss-wow-factor.md`
  - `examples/16-case-study-gimmick-feature.md`
  - `examples/17-case-study-quarterly-priority-conflict.md`
- new bad-input correction examples:
  - `examples/18-bad-input-reframed.md`
  - `examples/19-bad-priority-input-corrected.md`

### Improved

- tightened README first screen around value proposition, fit, fastest trial path, and differentiation from generic AI
- added clearer in-scope / out-of-scope boundary so the repo reads like a focused product, not a drifting strategy dump
- upgraded benchmark README with fairness-control notes and explicit benchmark limitations
- upgraded benchmark worked examples so they more clearly show original input, representative generic AI pattern, representative `pm-workbench` pattern, judgment-vs-format distinction, and benchmark caveats
- sharpened the 3 highest-signal workflows:
  - `clarify-request`
  - `evaluate-feature-value`
  - `prioritize-requests`
- added clearer failure-mode and strong-output standards to the most important workflows
- strengthened `SKILL.md` with an explicit anti-template rule so artifact quality does not replace judgment quality
- improved `docs/GETTING-STARTED.md` and `CONTRIBUTING.md` to make adoption and extension paths faster and more coherent
- rewrote `ROADMAP.md` around product evolution logic: trust -> core judgment -> expansion

### Validated

- `npm run validate` passes locally after the upgrade

### Notes

This version is mainly about making `pm-workbench` easier to trust, easier to try quickly, and more obviously differentiated on core PM judgment.

---

## v1.0.0 — Release-ready PM judgment layer

### Added

- benchmark proof layer:
  - `benchmark/README.md`
  - `benchmark/CONTRIBUTING-BENCHMARKS.md`
  - `benchmark/scenarios.md`
  - `benchmark/rubric.md`
  - `benchmark/scorecard.md`
  - `benchmark/worked-example-product-leader.md`
  - `benchmark/worked-example-clarify-request.md`
  - `benchmark/worked-example-exec-summary.md`
- cold-start evaluation assets:
  - `docs/GETTING-STARTED.md`
  - `docs/TRY-3-PROMPTS.md`
- product-leader / founder support assets:
  - `docs/PRODUCT-LEADER-PLAYBOOK.md`
  - `references/templates/portfolio-review-summary.md`
  - `references/templates/head-of-product-operating-review.md`
  - `references/templates/founder-business-review.md`
- share-friendly benchmark visuals:
  - `docs/images/pm-workbench-benchmark-summary.svg`
  - `docs/images/pm-workbench-benchmark-card.svg`
- expanded examples:
  - `10-product-leader-quarterly-priority-call.md`
  - `11-founder-strategy-decision.md`
  - `12-portfolio-review-summary.md`
  - `13-head-of-product-operating-review.md`
  - `14-founder-business-review.md`
- lightweight repo validation tooling:
  - `scripts/validate-repo.js`
  - `package.json` with `npm run validate`

### Improved

- strengthened the repo from a GitHub-packaged skill into a more complete PM judgment layer with clearer differentiation from generic AI
- expanded reusable artifact coverage across workflow, leadership, and operating-review scenarios
- improved onboarding, first-use evaluation, and GitHub discovery flow
- made benchmark evidence and proof-of-value much more visible in the README and repo structure
- improved support for heads of product, product leaders, and founders in higher-altitude decision scenarios

### Validated

- `npm run validate` passes locally
- repo structure validated for source-first local use
- OpenClaw skill recognition may depend on local version and skill-path configuration

### Notes

This is the first version that feels like a coherent 1.0 release point: clear product thesis, reusable artifact system, initial proof layer, stronger leadership scenarios, and enough validation to publish with confidence.

---

## v0.5.0 — GitHub packaging layer

### Added

- `README.md` with positioning, workflows, built-in artifacts, use cases, quick start, and current status
- initial `examples/` directory with example cases for:
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
