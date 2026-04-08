# pm-workbench roadmap

This roadmap is not about adding endless PM content.
It is about making `pm-workbench` more indispensable for real product work.

## Product direction

The ambition is to make `pm-workbench` feel like the **default PM judgment layer** inside an agent workflow:
- research can gather evidence
- analytics can surface signals
- document / slide tools can polish outputs
- `pm-workbench` turns ambiguity into recommendations, artifacts, and next moves

## Current phase

### Phase 1 — strong local foundation
Status: largely in place

Focus:
- core routing across the PM lifecycle
- artifact-first behavior for key workflows
- GitHub-readable positioning and examples
- local validation as an OpenClaw-ready skill
- first benchmark and product-leader support layer

## Next priorities

### 1. Benchmark-grade evaluation set
Goal:
Create a compact but sharp benchmark pack that helps compare `pm-workbench` with generic AI behavior.

Why it matters:
This project will be more compelling if it can show where it wins, not just claim it.

Current state:
- benchmark pack added under `benchmark/`
- includes scenarios, rubric, scorecard, and three worked comparison artifacts
- includes a README-ready visual summary asset
- includes first contribution guidance for benchmark additions

Next upgrade ideas:
- add lightweight scoring summaries over time
- add one share-friendly benchmark card for external distribution
- strengthen validation coverage for benchmark assets

### 2. Stronger product-leader mode
Goal:
Improve support for PM leaders, heads of product, and founder-style decision environments.

Why it matters:
A lot of high-value PM work is not PRD writing. It is resource trade-offs, sequencing, leadership communication, portfolio thinking, and organization-aware judgment.

Current state:
- stronger leader-oriented guidance in `SKILL.md`
- product-leader guide added under `docs/PRODUCT-LEADER-PLAYBOOK.md`
- leader / founder examples added under `examples/`
- first portfolio review artifact added under `references/templates/portfolio-review-summary.md`
- first head-of-product operating review artifact added under `references/templates/head-of-product-operating-review.md`

Next upgrade ideas:
- route head-of-product operating review requests explicitly in `SKILL.md` or a later sub-workflow
- add a founder / leadership operating review variant
- deepen org trade-off and business-model decision scenarios

### 3. Better adoption loop for new users
Goal:
Make it easier for someone discovering the repo on GitHub to install, test, understand, and extend it quickly.

Why it matters:
Great skills often underperform publicly because onboarding is weak.

Current state:
- tighter getting-started flow
- benchmark pack wired into onboarding
- clearer leader-oriented reading paths
- dedicated `docs/TRY-3-PROMPTS.md` cold-start evaluation page
- visual benchmark summary asset ready for README and social proof use

Next upgrade ideas:
- add a single screenshot / visual decision flow for first-time visitors
- add contributor starter tasks tied to benchmark gaps
- add a one-minute video or GIF demo path later if distribution matters

## Later opportunities

### 4. Extended artifact system
Possible additions:
- launch recommendation note
- stakeholder alignment brief
- GTM handoff brief
- experiment review memo
- portfolio review summary
- head-of-product operating review

Bar for adding any of these:
They must improve reuse and decision quality, not just document count.

### 5. Better metric and roadmap depth
Possible focus:
- clearer causal-path metric design
- better stage-gate logic for roadmap decisions
- better “what not to do now” framing

### 6. Validation and maintenance ergonomics
Possible focus:
- lightweight consistency checks between workflows, templates, examples, and docs
- contributor-friendly QA checklist
- small internal tooling to prevent broken references or stale docs
- optional benchmark integrity checks
- validation coverage for newer docs and templates

## Non-goals for now

Not a priority yet:
- turning the repo into a giant PM theory library
- adding many narrow workflows before current ones are benchmarked well
- splitting into many sub-skills too early
- pretending to replace analytics, research, or delivery execution tools

## What “excellent” would look like

A future best-in-class version of `pm-workbench` would feel like this:
- a new visitor understands the value in under a minute
- a PM can get useful output from the first real prompt
- the outputs feel better than generic AI at judgment, not just wording
- product leaders can use it for strategy, prioritization, and upward communication
- contributors can improve it without making the repo messy or bloated
- the repo has enough internal validation that trust does not depend only on prose claims

## Current roadmap lens

If there is a trade-off, prefer work that improves one of these:
1. decision quality
2. artifact usefulness
3. onboarding and discoverability
4. product-leader relevance
5. proof and credibility
