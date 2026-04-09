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
- what can be decided now versus what still needs validation

## Processing logic

Follow this sequence:

1. Restate the planning period and primary objective.
2. Identify which scarce resource the roadmap is protecting: focus, trust, engineering bandwidth, market timing, or enterprise credibility.
3. Group candidate work into themes or strategic buckets.
4. Identify must-have items, enablers, and deferrable work.
5. Sequence initiatives by dependency, value, and capacity.
6. Define milestones or phase markers.
7. Call out what is intentionally excluded.
8. Recommend the next planning or alignment step.

## Non-decision language rule

Do not make roadmap exclusions sound like polite postponement.
When work is out of scope, explain it in one of these forms when relevant:

- not this period because it conflicts with the current stage goal
- not worth spending the current scarce resource on
- valuable later, but current-strategy no
- visible but below the line unless X changes

## Common failure modes

Weak output usually looks like this:

- turning the roadmap into a backlog dump with dates
- listing too many themes so the stage goal disappears
- sequencing work without showing dependency logic
- describing what is included without stating what is explicitly not the focus
- sounding strategic while dodging the real resource constraint
- giving a timeline with no real portfolio decision inside it

## What strong output looks like

Strong output should:

- make the stage goal obvious in the first screen
- show a believable sequence rather than a wish list
- make above-the-line focus and not-now decisions explicit
- connect the roadmap to resource reality, dependencies, and stage logic
- help leadership and teams understand what this period is actually for
- explain why this roadmap, and why not the alternatives, under current constraints

## Output structure

Use this structure when helpful:

1. Task understanding
2. Planning period and goal
3. What this roadmap is protecting
4. Recommended roadmap themes
5. Proposed sequence / phases
6. Key milestones and dependencies
7. Risks and capacity notes
8. Explicit non-focus / not-now items
9. Decide now vs validate next
10. Suggested next step

## Output length control

### Short

For quick planning sync:

- period goal
- 2-4 themes
- simple sequence
- main risk
- what is clearly not the focus

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
- make it easy to explain why this roadmap and not the alternatives

## Failure cases

Treat these as failures:

1. turning the roadmap into a backlog dump
2. including too many disconnected priorities
3. ignoring dependencies and sequencing logic
4. failing to state a primary period goal
5. producing a timeline with no real decision behind it

## Notes

A roadmap is a strategy expression under time and resource constraints. It should reveal focus, not hide lack of prioritization.

## Controlling-thesis rule

When the user makes clear that the demand load is impossible to satisfy across multiple fronts:

- state a **single controlling roadmap thesis** first
- make the roadmap answer the question: what are we really betting this period on?
- treat secondary themes as supporting moves, not equal co-headlines
- make the not-now list explicit enough that leadership can see the real cost of focus

If the roadmap reads like three equal priorities under severe resource pressure, it is probably still a backlog in disguise.

## Extra success criterion for severe resource pressure

- when resources are very tight, make the single controlling thesis unmistakable
