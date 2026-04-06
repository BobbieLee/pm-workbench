---
name: pm-workbench
description: "Structured workflow skill for product managers and product leaders. Use for scenario-driven PM work: clarify vague requests, evaluate whether a feature or initiative is worth doing, compare options, prioritize requests, draft PRDs or solution docs, build roadmaps, design metrics, prepare executive summaries, or write postmortems. Best when the user needs judgment, structure, and actionable outputs rather than framework lookup."
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

- `evaluate-feature-value` -> `references/templates/feature-evaluation-memo.md`
- `prepare-exec-summary` -> `references/templates/exec-summary.md`
- `draft-prd` -> `references/templates/prd-lite.md`
- `build-roadmap` -> `references/templates/roadmap-one-pager.md`
- `write-postmortem` -> `references/templates/postmortem-lite.md`

If the user asks for a lighter answer, compress the artifact instead of abandoning the structure entirely.
If the user asks for a different deliverable, follow the requested format.

## Compressed artifact rule

When the user wants a quick take, short version, verbal answer, chat reply, or one-screen summary:
- keep the artifact shape, but compress it
- lead with the recommendation or bottom line
- preserve only the highest-signal fields
- avoid filling every template section mechanically
- do not let template completeness override speed or readability

Minimum compressed artifact expectations:
- evaluation memo -> conclusion, why, main risk, next step
- exec summary -> bottom line, why it matters, ask
- PRD lite -> problem, goal, proposed solution, scope boundary
- roadmap one-pager -> stage goal, top priorities, what is not prioritized
- postmortem lite -> outcome, what worked, what did not work, key lesson, next action

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

- `references/templates/feature-evaluation-memo.md`
- `references/templates/exec-summary.md`
- `references/templates/prd-lite.md`
- `references/templates/roadmap-one-pager.md`
- `references/templates/postmortem-lite.md`

Do not load all references by default.

## MVP emphasis

Prioritize these workflows first because they best show differentiated PM value:
- `clarify-request`
- `evaluate-feature-value`
- `prepare-exec-summary`

## Success standard

This skill is working if it helps the user do at least one of these:
- turn a fuzzy ask into a clear problem statement
- make a structured go / hold / no-go judgment
- compare options or priorities with clear trade-offs
- create a draft that moves a decision or project forward
- turn scattered analysis into an executive-ready summary
- extract lessons and next actions from a completed effort
