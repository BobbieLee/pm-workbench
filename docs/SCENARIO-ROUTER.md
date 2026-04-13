# Scenario Router

Use this page when you know the situation, but you do **not** know which `pm-workbench` workflow to start with.

This is not a framework catalog.
It is a fast route map for using `pm-workbench` like an **OpenClaw-native PM workbench**.

## The shortest routing rule

If the problem is still fuzzy, start upstream.
If the problem is already clear, move to the workflow that produces the decision or artifact you need.

## 1. "This ask is still fuzzy. I need to figure out what we are actually solving."

### Start with

- `clarify-request`

### Typical signals

- the boss request sounds like a slogan
- someone jumped to a feature before explaining the problem
- the requirement is politically loaded but still unclear
- the team is already debating solutions too early

### What you should expect back

- a sharper problem statement
- separated problem / goal / embedded solution
- 1-2 missing questions that actually matter
- a reusable request clarification brief

### Good entry prompt

> My boss said our AI product needs more wow factor. Help me unpack what problem this is actually pointing to before we start proposing features.

---

## 2. "A stakeholder wants something. I need to decide if it is worth doing."

### Start with

- `evaluate-feature-value`

### Typical signals

- a stakeholder keeps pushing for something
- the feature sounds interesting but maybe gimmicky
- you need a go / hold / no-go view
- you need product judgment, not brainstorming

### What you should expect back

- user value judgment
- business / strategic value judgment
- effort / risk judgment
- a recommendation and next step

### Good entry prompt

> Ops wants a daily AI fortune card feature to improve engagement. I’m worried it is a gimmick. Help me evaluate whether it is worth doing now.

---

## 3. "We already have 2 or more directions. I need a recommendation."

### Start with

- `compare-solutions`

### Typical signals

- there are two plausible product paths
- tech, design, or business each prefer different directions
- the trade-off matters more than the descriptions
- you need a recommendation, not symmetric pros and cons

### What you should expect back

- decision objective
- explicit trade-off
- recommended option
- why not the others now

### Good entry prompt

> Compare these two paths for our AI product: a faster marketable AI layer versus a slower but more trust-building core product improvement. Recommend one current-period path and explain why not the other one now.

---

## 4. "We have too many requests and not enough room."

### Start with

- `prioritize-requests`

### Typical signals

- next quarter cannot fit everything
- several stakeholders all want different things
- leadership needs a defendable above-the-line / below-the-line call
- you need a real top group, not a soft score table

### What you should expect back

- period objective
- ranked or tiered stack
- what is above the line
- what is below the line and why

### Good entry prompt

> We only have room for 3 priorities next quarter. Help me rank these requests, make the trade-offs explicit, and say what is clearly below the line.

---

## 5. "The direction is mostly clear. I need a lightweight PRD draft."

### Start with

- `draft-prd`

### Typical signals

- the problem is already reasonably understood
- the team needs a working draft, not a polished full spec
- you want scope, flow, constraints, and open questions captured quickly

### What you should expect back

- problem and goal framing
- target user and scenario
- proposed solution shape
- scope boundaries and open questions

### Good entry prompt

> We have decided to simplify onboarding for new team admins. Draft a lightweight PRD with the problem, goal, user flow, scope boundaries, and main open questions.

---

## 6. "I need a roadmap or phase plan, not just a ranked list."

### Start with

- `build-roadmap`

### Typical signals

- you need a quarter story or phase story
- sequence and dependencies matter
- the team needs a stage goal, not just priorities
- leadership needs to see what this period is really about

### What you should expect back

- controlling roadmap thesis
- themes or phases
- sequencing logic
- explicit non-focus area

### Good entry prompt

> Help me turn these priorities into a roadmap for the next quarter. I need a stage goal, sequence, and a clear statement of what is not the focus this period.

---

## 7. "We know what we want to launch. We do not yet know how to judge success."

### Start with

- `design-metrics`

### Typical signals

- the team knows what it wants to launch but not how to judge success
- the current metric set is too loose or vanity-driven
- you need one core metric plus supporting and guardrail metrics

### What you should expect back

- core outcome metric
- leading or process metrics
- guardrail metrics
- review window and judgment rule

### Good entry prompt

> We are launching a premium AI meeting summary workflow. Help me design the success metrics, including one core metric, supporting signals, and guardrails.

---

## 8. "I need something leadership can read fast and react to."

### Start with

- `prepare-exec-summary`

### Typical signals

- you need a one-page update
- the audience is a boss, founder, or leadership team
- the output needs a conclusion and an explicit ask
- this is about upward communication, not more analysis

### What you should expect back

- conclusion first
- only the evidence that matters
- key risk
- explicit ask or decision point

### Good entry prompt

> Turn this into a one-page executive summary. My recommendation is to delay broader marketing, spend 6 weeks fixing activation friction, and request one temporary frontend engineer.

---

## 9. "The launch already happened. I need a useful review."

### Start with

- `write-postmortem`

### Typical signals

- the launch underperformed or surprised the team
- you need expected vs actual analysis
- the point is to learn and change behavior, not write ceremony

### What you should expect back

- expected vs actual comparison
- what worked and what did not
- likely causes
- lessons and concrete next actions

### Good entry prompt

> This launch underperformed. Help me write a postmortem that explains what actually happened, what we misread, and what we should change next time.

---

## If you are still unsure between two workflows

Use this tie-breaker:

- **Need clarity first?** -> `clarify-request`
- **Need a go / no-go judgment?** -> `evaluate-feature-value`
- **Need to choose among options?** -> `compare-solutions`
- **Need to rank multiple items?** -> `prioritize-requests`
- **Need a draft artifact?** -> `draft-prd`
- **Need a phased plan?** -> `build-roadmap`
- **Need success metrics?** -> `design-metrics`
- **Need upward communication?** -> `prepare-exec-summary`
- **Need a review of what already happened?** -> `write-postmortem`

## A practical habit

When in doubt, start one step earlier than feels comfortable.

That usually means:

- do **not** draft a PRD before the problem is stable
- do **not** build a roadmap before the period objective is clear
- do **not** write an exec summary before the decision call is real

## If you want a higher-level route, not just one workflow

Use:

- [COMMANDS.md](COMMANDS.md)

## Bottom line

`pm-workbench` works best when you route by the **actual PM job to be done**.
This page exists to make that first routing choice fast.
