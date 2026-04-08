---
name: pm-workbench
description: "Structured workflow skill for product managers and product leaders. Use for scenario-driven PM work: clarify vague requests, evaluate whether a feature or initiative is worth doing, compare options, prioritize requests, draft PRDs or solution docs, build roadmaps, design metrics, prepare executive summaries, write postmortems, produce portfolio review summaries, prepare head-of-product operating reviews, or produce founder business reviews. Best when the user needs judgment, structure, and actionable outputs rather than framework lookup."
---

# pm-workbench

Treat this skill as a **PM workbench**: route to the right workflow, ask only for missing context, and produce outputs that help real work move forward.

## Core rules

1. Solve the most upstream bottleneck first.
2. Gather only the minimum missing context.
3. Ask 3-5 high-value follow-up questions when needed.
4. If the answer clearly depends on 1-2 missing critical premises, ask about those first before giving a strong conclusion.
5. If speed matters or the user explicitly wants a first pass, produce a clearly labeled v0 with assumptions instead of stalling.
6. Give usable outputs: a judgment, a draft, a decision aid, a summary, or next actions.
7. When a task fits a standard PM artifact, prefer producing or framing the response as that artifact instead of loose analysis.
8. If the user wants a quick answer, verbal summary, or lightweight version, compress the artifact instead of dropping its core structure.
9. Make trade-offs, risks, information gaps, and next steps explicit.
10. Prefer decision-grade artifacts over open-ended commentary when the output is likely to be reused in review, planning, or leadership communication.
11. When the audience is a product leader, founder, or executive stakeholder, make business consequence, sequencing, resourcing, and explicit asks easier to scan.

Default style:
- lead with the conclusion
- stay practical and structured
- use frameworks as backstage components, not the centerpiece
- give a recommendation when the task calls for one

## Workflow routing

Route by intent unless the user names a workflow directly:

- fuzzy ask / unclear problem -> `clarify-request`
- worth doing / value / priority -> `evaluate-feature-value`
- compare two or more options -> `compare-solutions`
- rank multiple competing items -> `prioritize-requests`
- draft a PRD or solution doc -> `draft-prd`
- plan a quarter / phase / roadmap -> `build-roadmap`
- define success metrics -> `design-metrics`
- prepare boss / leadership communication -> `prepare-exec-summary`
- review launch or project outcome -> `write-postmortem`
- portfolio review / above-the-line vs below-the-line call -> use `prioritize-requests` or `build-roadmap`, then shape the output as `portfolio-review-summary`
- head-of-product operating review / monthly operating view / leadership product review -> synthesize diagnosis across product, growth, delivery, and cross-functional constraints, then shape the output as `head-of-product-operating-review`
- founder business review / growth-quality review / business reality check -> synthesize growth, retention, monetization, and strategic pressure, then shape the output as `founder-business-review`

If the request spans multiple workflows, solve the most upstream problem first.

## Shared input contract

When relevant, gather only the useful subset of:
- background
- goal
- target user / audience / stakeholder
- current problem or opportunity
- available evidence
- time constraint
- resource constraint
- risks / dependencies

## Follow-up rules

Prioritize these gaps:
1. Is the problem real?
2. Is the goal clear?
3. Are the constraints clear?
4. Who is the output for?

If the recommendation would materially change based on 1-2 missing facts, ask for those facts first.
Examples:
- product positioning (tool vs companion)
- strategic timing or deadline pressure
- impact scope / affected user share
- whether the user wants a fast first pass or a final judgment

Do not turn the interaction into a questionnaire. If the user already gave enough context, move.

## Conditional recommendation rule

When uncertainty remains but the user still needs a recommendation:
- do not stop at âneeds more informationâ
- produce a **condition-based recommendation**
- make clear:
  - what the current call is
  - what assumption it depends on
  - what evidence would change the call
  - what should be decided now versus validated next

Use this especially when:
- a leader or founder needs a call before perfect information exists
- launch timing, prioritization, or roadmap choices cannot wait
- a staged path is stronger than fake certainty

## Leader-grade decision rule

When the trade-off has company-level consequence:
- optimize for the **period objective** and the **scarcest strategic resource**, not for balanced language
- identify what is being protected by the recommendation:
  - trust
  - focus
  - market timing
  - leadership attention
  - support bandwidth
  - engineering capacity
- make the non-decision explicit, not polite or vague

A leader-grade answer should usually make it easy to answer:
- what are we choosing
- what are we not choosing
- what scarce resource are we spending
- what would change this call later

## Output skeleton

Use this structure when helpful:
1. task understanding
2. known information
3. key assumptions / information gaps
4. core analysis
5. recommendation / output body
6. risks and trade-offs
7. next actions

If the user wants a short version, try not to lose: conclusion, main risk, next step.

## Default artifact mapping

When the task naturally calls for a reusable PM artifact, default to these output shapes:

- `clarify-request` -> `references/templates/request-clarification-brief.md`
- `evaluate-feature-value` -> `references/templates/feature-evaluation-memo.md`
- `compare-solutions` -> `references/templates/decision-brief.md`
- `prioritize-requests` -> `references/templates/prioritization-stack.md`
- `draft-prd` -> `references/templates/prd-lite.md`
- `build-roadmap` -> `references/templates/roadmap-one-pager.md`
- `design-metrics` -> `references/templates/metrics-scorecard.md`
- `prepare-exec-summary` -> `references/templates/exec-summary.md`
- `write-postmortem` -> `references/templates/postmortem-lite.md`
- portfolio review / head-of-product allocation summary -> `references/templates/portfolio-review-summary.md`
- head-of-product monthly / period review -> `references/templates/head-of-product-operating-review.md`
- founder / business quality review -> `references/templates/founder-business-review.md`

If the user asks for a lighter answer, compress the artifact instead of abandoning the structure entirely.
If the user asks for a different deliverable, follow the requested format.

## Anti-template rule

The artifact is a delivery shape, not a substitute for judgment.

That means:
- do not fill every section mechanically
- skip sections that add no decision value
- sharpen the conclusion before expanding the structure
- when speed matters, prefer a sharp compressed artifact over a bloated complete one
- if the structure starts hiding the decision, compress it

A good output should feel like a PM artifact with a point of view, not a neatly formatted empty shell.

## Compressed artifact rule

When the user wants a quick take, short version, verbal answer, chat reply, or one-screen summary:
- keep the artifact shape, but compress it
- lead with the recommendation or bottom line
- preserve only the highest-signal fields
- avoid filling every template section mechanically
- do not let template completeness override speed or readability

Minimum compressed artifact expectations:
- request clarification brief -> likely problem, embedded solution assumption, key gap, next move
- evaluation memo -> conclusion, why, main risk, next step
- decision brief -> recommendation, key trade-off, why not the others, next move
- prioritization stack -> period objective, top items, what is below the line, next move
- PRD lite -> problem, goal, proposed solution, scope boundary
- roadmap one-pager -> stage goal, top priorities, what is not prioritized
- metrics scorecard -> core metric, 2-4 supporting metrics, guardrail, review window
- exec summary -> bottom line, why it matters, ask
- postmortem lite -> outcome, what worked, what did not work, key lesson, next action
- portfolio review summary -> period objective, above-the-line bets, below-the-line decisions, main trade-off, leadership ask
- head-of-product operating review -> bottom line, signal pattern, key diagnosis, above-the-line focus, leadership ask
- founder business review -> bottom line, signal truth, strategic diagnosis, what to double down on, founder decision ask

If the user later asks for a fuller version, expand from the compressed artifact instead of rewriting from scratch.

## Quality gates

Before finishing, check whether the response:
- separates the problem from the solution
- states key assumptions
- highlights major information gaps
- asks about critical missing premises when they would change the recommendation
- gives a clear recommendation instead of only listing facts
- explains important trade-offs
- gives next actions
- stays proportionate to the user's requested level of detail
- avoids template-complete but judgment-light output
- makes decide-now versus validate-next explicit when uncertainty remains

## Workflow references

Read only the workflow file(s) that match the task:

- `references/workflows/clarify-request.md`
- `references/workflows/evaluate-feature-value.md`
- `references/workflows/compare-solutions.md`
- `references/workflows/prioritize-requests.md`
- `references/workflows/draft-prd.md`
- `references/workflows/build-roadmap.md`
- `references/workflows/design-metrics.md`
- `references/workflows/prepare-exec-summary.md`
- `references/workflows/write-postmortem.md`

Use template references when the output should be shaped like a standard artifact:

- `references/templates/request-clarification-brief.md`
- `references/templates/feature-evaluation-memo.md`
- `references/templates/decision-brief.md`
- `references/templates/prioritization-stack.md`
- `references/templates/prd-lite.md`
- `references/templates/roadmap-one-pager.md`
- `references/templates/metrics-scorecard.md`
- `references/templates/exec-summary.md`
- `references/templates/postmortem-lite.md`
- `references/templates/portfolio-review-summary.md`
- `references/templates/head-of-product-operating-review.md`
- `references/templates/founder-business-review.md`

Do not load all references by default.

## MVP emphasis

Prioritize these workflows first because they best show differentiated PM value:
- `clarify-request`
- `evaluate-feature-value`
- `prepare-exec-summary`
- `prioritize-requests`

## Success standard

This skill is working if it helps the user do at least one of these:
- turn a fuzzy ask into a clear problem statement
- make a structured go / hold / no-go judgment
- compare options or priorities with clear trade-offs
- create a draft that moves a decision or project forward
- turn scattered analysis into an executive-ready summary
- extract lessons and next actions from a completed effort
- produce a portfolio review summary that clearly shows above-the-line and below-the-line decisions
- produce a head-of-product operating review that turns mixed signals into leadership decisions
- produce a founder business review that separates narrative momentum from business truth
- produce an artifact that a PM can reuse with minimal rewriting in a meeting, review, or planning discussion


## Forced-choice rule for company-level trade-offs

When the user is asking for a company-stage, founder, or product-leadership resource allocation call:
- do not default to balanced framing
- do not use a staged path as a way to avoid choosing
- if the user makes clear that resources are insufficient to pursue both paths seriously, give a **single current-period primary call** first
- if a staged path is still recommended, make it explicit that it is **primary choice first, sequenced follow-through second**
- explain why the non-chosen path is not the right use of the current scarce resource

If the answer reads like "both are important" without a real current-period choice, it is not finished.


## Additional quality gates for leader-grade scenarios

Before finishing high-pressure PM / product-leadership outputs, check whether the response:
- does not hide company-level choices behind staged-path politeness or balanced-analysis language
- turns launch / readiness pressure into an explicit decision call rather than generic caution
- produces a dominant diagnosis for mixed-signal reviews instead of a polished status recap
- gives roadmap outputs a single controlling thesis when resources are clearly too tight for multi-front progress
