# Commands

These are **command-style combinations** for recurring PM jobs.

They are not new workflows.
They are practical ways to chain existing `pm-workbench` workflows when the real task is bigger than one step.

Use them when you already know you need more than a single answer.
Use the [Scenario Router](SCENARIO-ROUTER.md) when you still need to choose the first workflow.

## How to read this page

These commands are not there to teach a method.
They exist to preserve a better work sequence when one PM job naturally spans multiple steps.

Each command answers four questions:

- when to use it
- which workflows it combines
- what the sequence is doing
- what kind of output you should expect at the end

The goal is not to make the repo look bigger.
The goal is to make repeated PM work easier to run in a clean, dependable way.

---

## 1. Clarify -> Evaluate -> Recommend

### Use when

A stakeholder or leader asks for something, but the request is still fuzzy and you suspect the real question is whether it is worth doing.

### Typical situation

- “The CEO wants an AI feature and I’m not sure it solves a real problem.”
- “This request came in hot, but it still sounds half-baked.”

### Workflow chain

1. `clarify-request`
2. `evaluate-feature-value`

### Why this chain exists

A lot of bad PM work happens when teams evaluate a request that was never properly clarified.
This chain forces the problem statement to stabilize before value judgment starts.

### End result

You should end with:

- a cleaner problem statement
- a go / hold / no-go judgment
- a short rationale the PM can reuse with the requester

### Example command-style prompt

> First help me clarify this ask, then evaluate whether it is worth doing now. I want a final go / hold / no-go recommendation, not just analysis.

---

## 2. Clarify -> Compare -> Decide

### Use when

The team is arguing about directions, but the decision frame is still unstable.

### Typical situation

- “Two paths are on the table, but I’m not sure we are even solving the same problem.”
- “Founder and team are talking past each other about what this choice is really optimizing for.”

### Workflow chain

1. `clarify-request`
2. `compare-solutions`

### Why this chain exists

Comparing options too early usually produces polished pros-and-cons theater.
This chain makes the decision objective explicit first, then compares the paths against that objective.

### End result

You should end with:

- a clarified decision objective
- one current-period recommendation
- an explicit why-not-the-other-path-now explanation

### Example command-style prompt

> First help me clarify what decision we are actually making, then compare these two options and recommend one current-period path.

---

## 3. Prioritize -> Roadmap -> Exec summary

### Use when

You need to turn too many requests into a quarter story leadership can approve.

### Typical situation

- “We have more demand than capacity and I need a roadmap leadership can align on.”
- “I already know the items. I need the top calls, the sequence, and the leadership narrative.”

### Workflow chain

1. `prioritize-requests`
2. `build-roadmap`
3. `prepare-exec-summary`

### Why this chain exists

A ranked list is not the same as a roadmap.
And a roadmap is not the same as a leadership-ready recommendation.
This chain turns backlog pressure into a portfolio call, then into a staged plan, then into an upward communication artifact.

### End result

You should end with:

- an above-the-line / below-the-line decision
- a roadmap with a clear stage goal
- a one-page leadership-ready summary with the ask

### Example command-style prompt

> Help me turn this overloaded quarter into something leadership can approve. First prioritize the work, then shape it into a roadmap, then compress it into a one-page exec summary with the main ask.

---

## 4. Draft PRD -> Design metrics -> Prep launch summary

### Use when

The team already knows the direction and needs to move from working draft to measurable launch communication.

### Typical situation

- “We have the feature direction. Now I need a usable PRD, launch metrics, and a short leadership update.”
- “I want the team and leadership looking at the same launch logic.”

### Workflow chain

1. `draft-prd`
2. `design-metrics`
3. `prepare-exec-summary`

### Why this chain exists

A lightweight PRD without success logic is incomplete.
And a launch recommendation without a crisp summary is hard to align around.
This chain keeps product definition, measurement, and communication connected.

### End result

You should end with:

- a lightweight working PRD
- a success metric set with guardrails
- a short launch / leadership summary with the current ask

### Example command-style prompt

> Draft the working PRD first, then define how we should measure success, then turn the whole thing into a short leadership-ready launch summary.

---

## 5. Exec summary -> Postmortem follow-through

### Use when

A launch or initiative is under pressure and you need both the current leadership call and the learning loop after the outcome lands.

### Typical situation

- “I need to explain the current launch call now, and I know we will need a usable review after the result.”
- “This is not just status reporting. I need decision communication now and a learning artifact later.”

### Workflow chain

1. `prepare-exec-summary`
2. `write-postmortem`

### Why this chain exists

Teams often separate launch communication from learning, which makes the postmortem weaker later.
This chain keeps the decision logic and the eventual review closer together.

### End result

You should end with:

- a clear current leadership call
- a reusable structure for comparing expectation vs reality later
- a cleaner learning loop after the launch or initiative completes

### Example command-style prompt

> Help me write the leadership call we need to make now, and structure it so we can turn the result into a useful postmortem afterward.

---

## Which command should I start with?

- fuzzy ask that may not be worth doing -> **Clarify -> Evaluate -> Recommend**
- two directions but unclear decision frame -> **Clarify -> Compare -> Decide**
- overloaded quarter / leadership alignment -> **Prioritize -> Roadmap -> Exec summary**
- feature definition through launch logic -> **Draft PRD -> Design metrics -> Prep launch summary**
- launch pressure with follow-through -> **Exec summary -> Postmortem follow-through**

## Bottom line

These commands are here to reflect how PM work actually happens:

- not as isolated prompts
- not as a giant menu
- but as a few repeatable paths through messy product work
