---
workflow: write-postmortem
category: learning
when_to_use: "review what happened and extract reusable lessons"
ask_intensity: low
default_output: "Postmortem Lite"
trigger_signals:
  - postmortem
  - retrospective
  - post-launch review
misuse_guard:
  - do not use when a more upstream problem is still unresolved
  - do not force this workflow if the user mainly needs a different artifact
---

# write-postmortem

## Purpose

Use this workflow to turn a launch, project, or experiment outcome into a useful postmortem.

The goal is not to write a ceremonial recap. The goal is to help the user answer:

- what happened
- how reality differed from expectation
- why that happened
- what should be repeated, changed, or avoided next time
- what concrete next actions follow from the review

## Why this workflow exists

Postmortems often fail in two opposite ways: blame theater or timeline theater.
They either point fingers, or they narrate events without extracting a better future decision.

This workflow exists to keep learning operational:

- compare expected versus actual clearly
- separate evidence from hindsight confidence
- turn lessons into concrete follow-through

## What good looks like

Good output should:

- make expected vs actual visible immediately
- identify likely contributors without fake certainty
- extract lessons that can actually change future behavior
- end with concrete next actions
- feel useful to future planning, not ceremonial for the archive

## Common bad pattern

Common failure looks like this:

- writing a timeline with no analysis
- blaming people instead of examining decisions and systems
- pretending to know root cause without evidence
- giving vague “lessons learned” that will not change anything
- ending without clear follow-through

## Trigger phrases

Prefer this workflow when the user says things like:

- Help me write a postmortem.
- We need a proper retrospective for this launch.
- Turn this outcome into a useful review.
- Help me summarize what worked and what didn’t.
- This underperformed; help me analyze it.
- I want a post-launch review we can actually use.

## Routing rules

Choose this workflow when one or more of the following is true:

1. The work has already launched, run, or completed.
2. The user wants to compare expected versus actual outcome.
3. The task is to capture lessons and next actions.
4. The user needs a reusable review artifact, not just a quick opinion.

Do **not** use this workflow as the primary one when:

- the work has not happened yet -> use planning or launch workflows
- the user mainly needs an executive summary of current status -> use `prepare-exec-summary`
- the task is deep diagnosis of ongoing growth problems -> use `diagnose-growth-problem`

## Minimum input

Try to gather:

- what was launched or completed
- original objective
- expected result
- actual result or current data
- major events or decisions during execution
- known issues or surprises
- audience for the postmortem

At minimum, start once you know:

- what happened
- what was expected
- what actually occurred

## Follow-up policy

### Default number of follow-ups

- Standard mode: 3-5
- Fast review mode: 2-3

### Highest-priority follow-ups

1. What was the original goal?
2. What did we expect to happen?
3. What actually happened?
4. What were the biggest contributing factors?
5. What lesson should change future behavior?

### Secondary follow-ups

- What went better than expected?
- What assumptions proved wrong?
- What process or coordination issues showed up?
- Which action items are most important now?
- Who needs this postmortem and for what decision?

### When to reduce questions

If the user already has a rich record of the project or launch, move into structuring and synthesis instead of replaying the full timeline.

### When to produce a first-pass postmortem

Do it when:

- the user needs a draft quickly
- enough facts exist to compare expected vs actual
- some causes remain uncertain but the review can still be useful

If producing a first pass, explicitly label:

- unresolved causes
- weak evidence areas
- lessons that are still provisional

## Processing logic

Follow this sequence:

1. Restate the initiative and its original objective.
2. Compare expected versus actual outcomes.
3. Identify major contributors to the result.
4. Separate facts, hypotheses, and hindsight bias where possible.
5. Extract reusable lessons.
6. Turn those lessons into concrete next actions.

## Output structure

Use this structure when helpful:

1. Task understanding
2. Initiative and original objective
3. Expected vs actual outcome
4. What worked
5. What did not work
6. Likely causes / contributing factors
7. Key lessons
8. Recommended next actions

## Output length control

### Short

For a fast team review:

- expected vs actual
- top lessons
- next actions

### Standard

For normal PM usage:

- full output structure above

### Long

For a more complete retrospective:

- standard structure plus assumptions, evidence quality, and ownership notes

## Success criteria

A good result should:

- compare expectation with reality clearly
- identify likely causes without fake certainty
- extract lessons that can change future behavior
- convert lessons into concrete next actions
- feel operationally useful rather than ceremonial

## Failure cases

Treat these as failures:

1. writing a timeline with no analysis
2. blaming people instead of examining decisions, assumptions, and systems
3. pretending to know root cause without evidence
4. giving lessons that are too vague to change future behavior
5. ending without concrete next actions

## Notes

A good postmortem should improve future judgment, planning, and execution. It should not become a ritualized document nobody uses.
