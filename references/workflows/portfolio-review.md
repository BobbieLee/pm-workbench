---
workflow: portfolio-review
category: leadership
when_to_use: "turn competing initiatives into an above-the-line / below-the-line portfolio call"
ask_intensity: medium
default_output: "Portfolio Review Summary"
trigger_signals:
  - portfolio review
  - above the line
  - below the line
  - resource allocation
misuse_guard:
  - do not use when the user only needs a ranked list without leadership framing
  - do not preserve every initiative as important without naming the current-period no
---

# portfolio-review

## Purpose

Use this workflow when a PM, product lead, or founder needs to turn multiple valid initiatives into a leadership-ready portfolio call.

The core job is to decide:

- what is above the line for this period
- what is below the line even if it is still valuable
- which scarce resource the portfolio is spending
- what leadership needs to approve, protect, or stop asking for

## Why this workflow exists

Portfolio reviews often fail because they become polite summaries of every stakeholder request. That creates alignment theater, not a resource decision.

This workflow exists to force a visible current-period choice:

- anchor on the period objective
- separate the top bets from the visible but unfunded work
- explain the opportunity cost in business language
- make the leadership ask explicit

## What good looks like

Good output should:

- state the portfolio objective before listing initiatives
- make the above-the-line and below-the-line sets easy to scan
- explain why below-the-line work is not funded now
- show resource, dependency, and business consequences
- end with a decision or alignment ask

## Common bad pattern

Common failure looks like this:

- keeping every initiative as a "priority"
- giving a diplomatic list that does not constrain capacity
- hiding the real opportunity cost
- saying "revisit later" instead of explaining the current-period no
- producing a status summary instead of a leadership decision surface

## Trigger phrases

Prefer this workflow when the user says things like:

- Help me prepare a portfolio review.
- We need an above-the-line / below-the-line call.
- Leadership needs to approve what we are funding this period.
- We cannot do everything, but every stakeholder has a valid request.
- Help me explain what is not getting resourced now.

## Routing rules

Choose this workflow when one or more of the following is true:

1. Multiple initiatives compete for the same period-level resource.
2. The user needs a leadership-ready allocation call, not only item ranking.
3. The output must make unfunded work visible.
4. Business consequence, resourcing, or stakeholder alignment matters.

Do **not** use this workflow as the primary one when:

- the user only needs initial item ranking -> use `prioritize-requests`
- the user needs time sequencing after the portfolio call -> use `build-roadmap`
- the user needs a short upward memo after the call -> use `prepare-exec-summary`

## Minimum input

Try to gather:

- planning period
- portfolio objective
- candidate initiatives
- capacity or resource constraint
- stakeholder pressures
- known commitments or dependencies
- business risk if top bets are wrong

At minimum, start once you know:

- the candidate set
- the period objective or leadership pressure
- the resource constraint

## Follow-up policy

### Default number of follow-ups

- Standard mode: 1-2
- High-uncertainty mode: 3-4

### Highest-priority follow-ups

1. What is the main objective for this period?
2. What is the hard capacity or resource boundary?
3. Are any items true commitments rather than preferences?
4. What business risk matters most if the portfolio choice is wrong?

### When to produce a first-pass portfolio call

Do it when:

- leadership needs a working view quickly
- the candidate initiatives and broad pressure are clear
- unknowns can be labeled as assumptions

Mark:

- current-period assumptions
- confidence-sensitive items
- what would move a below-the-line item above the line

## Processing logic

Follow this sequence:

1. Restate the portfolio objective.
2. Identify the scarcest resource or advantage being protected.
3. Group initiatives into above-the-line, visible-but-waiting, and not-now.
4. Explain the top bets and what they displace.
5. Identify resourcing and dependency implications.
6. State business consequence and leading signals.
7. End with a leadership ask.

## Output structure

Use this structure when helpful:

1. Review objective
2. Recommended focus
3. Above-the-line bets
4. Below-the-line decisions
5. Main opportunity cost
6. Resourcing / dependency implications
7. Business consequence
8. Leadership ask

Default template when the user needs something reusable:

- `../templates/portfolio-review-summary.md`

## Output length control

### Short

- period objective
- above-the-line bets
- below-the-line decisions
- main trade-off
- leadership ask

### Standard

- compact **Portfolio Review Summary**

### Long

- standard output plus assumptions, resourcing notes, risks, and review checkpoint

## Success criteria

A good result should:

- make the current-period funding decision explicit
- show what is intentionally not resourced
- explain the opportunity cost
- give leadership a concrete decision surface

## Failure cases

Treat these as failures:

1. every initiative remains a priority
2. below-the-line decisions are vague or hidden
3. resource implications are absent
4. leadership has no clear ask to approve or challenge
