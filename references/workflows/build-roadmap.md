# build-roadmap

## Purpose

Use this workflow to turn a set of goals, initiatives, and constraints into a stage-based roadmap.

The goal is not to create a decorative timeline. The goal is to help the user decide:
- what this period is really about
- which themes or initiatives deserve focus
- what sequence makes sense
- what should explicitly wait
- what milestones, dependencies, and risks matter most

## Trigger phrases

Prefer this workflow when the user says things like:
- Help me build a roadmap.
- How should we plan the next quarter?
- What should this stage focus on?
- Turn these priorities into a roadmap.
- Help me sequence the next phase.
- We have a lot of requests; what should this period actually focus on?

## Routing rules

Choose this workflow when one or more of the following is true:
1. The user needs a time-based or stage-based plan rather than a raw priority stack.
2. The task is to organize work into themes, milestones, or phases.
3. The user needs to explain what will happen over a period, not just which items matter.
4. Dependencies, sequencing, and focus are central to the decision.

Do **not** use this workflow as the primary one when:
- the real issue is ranking items -> use `prioritize-requests`
- the direction itself is still unclear -> use `clarify-request` or `evaluate-feature-value`
- the user mainly needs an executive summary -> use `prepare-exec-summary`

## Minimum input

Try to gather:
- planning horizon
- stage or period goal
- candidate initiatives or themes
- resource envelope
- dependencies
- major deadlines or external commitments
- known risks

At minimum, start once you know:
- the planning period
- the main objective
- a candidate set of initiatives

## Follow-up policy

### Default number of follow-ups
- Standard mode: 3-5
- Fast planning mode: 2-3

### Highest-priority follow-ups
1. What is the single most important outcome for this period?
2. What are the candidate initiatives or themes?
3. What are the major resource constraints?
4. Which items are dependent on earlier work?
5. What must happen in this period versus what is simply desirable?

### Secondary follow-ups
- Are there external launch, customer, or leadership commitments?
- Is a theme-based roadmap better than an item-by-item roadmap?
- What are the biggest execution risks?
- What can explicitly wait until the next phase?

### When to reduce questions
If the user already has a clear planning frame and needs synthesis, move quickly into structure and sequencing.

### When to produce a first-pass roadmap
Do it when:
- the user needs a planning draft for discussion
- major objectives and initiatives are already visible
- some uncertainty remains but blocking on it would delay useful planning

If producing a first pass, explicitly label:
- assumptions
- capacity-sensitive areas
- sequencing risks

## Processing logic

Follow this sequence:
1. Restate the planning period and primary objective.
2. Group candidate work into themes or strategic buckets.
3. Identify must-have items, enablers, and deferrable work.
4. Sequence initiatives by dependency, value, and capacity.
5. Define milestones or phase markers.
6. Call out what is intentionally excluded.
7. Recommend the next planning or alignment step.

## Output structure

Use this structure when helpful:

1. Task understanding
2. Planning period and goal
3. Recommended roadmap themes
4. Proposed sequence / phases
5. Key milestones and dependencies
6. Risks and capacity notes
7. Explicit non-focus / not-now items
8. Suggested next step

## Output length control

### Short
For quick planning sync:
- period goal
- 2-4 themes
- simple sequence
- main risk

### Standard
For normal PM planning:
- full output structure above

### Long
For roadmap review or leadership planning input:
- standard structure plus rationale, assumptions, and resource commentary

## Success criteria

A good result should:
- create focus instead of listing everything
- sequence work in a believable order
- reflect dependencies and capacity constraints
- state what is out of scope for the period
- help the user move toward alignment or execution planning

## Failure cases

Treat these as failures:
1. turning the roadmap into a backlog dump
2. including too many disconnected priorities
3. ignoring dependencies and sequencing logic
4. failing to state a primary period goal
5. producing a timeline with no real decision behind it

## Notes

A roadmap is a strategy expression under time and resource constraints. It should reveal focus, not hide lack of prioritization.
