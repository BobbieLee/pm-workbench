---
workflow: head-of-product-operating-review
category: leadership
when_to_use: "turn mixed product, growth, delivery, and support signals into a leadership operating diagnosis"
ask_intensity: medium
default_output: "Head of Product Operating Review"
trigger_signals:
  - operating review
  - mixed signals
  - product review
  - leadership product review
misuse_guard:
  - do not use for a plain status update with no decision or diagnosis needed
  - do not restate metrics one by one without a dominant operating diagnosis
---

# head-of-product-operating-review

## Purpose

Use this workflow when leadership needs a product operating view that explains mixed signals and turns them into a next-period focus.

The goal is to answer:

- what is actually going well
- what warning signals matter most
- what pattern explains the mixed signals
- what leadership should focus on next
- what should stay below the line despite noise

## Why this workflow exists

Operating reviews often become polished status recaps. They list product, growth, delivery, support, and sales signals without identifying the bottleneck that should shape the next period.

This workflow exists to force a dominant diagnosis:

- synthesize signals across functions
- identify the current operating bottleneck
- state what not to overreact to
- turn the diagnosis into leadership decisions

## What good looks like

Good output should:

- lead with the bottom line
- explain why positive and warning signals can both be true
- produce one dominant operating diagnosis
- make the next-period above-the-line focus explicit
- state the leadership ask or decision needed

## Common bad pattern

Common failure looks like this:

- reciting metrics one by one
- treating every signal as equally important
- using neutral status language instead of a diagnosis
- ignoring delivery or cross-functional constraints
- giving no leadership decision surface

## Trigger phrases

Prefer this workflow when the user says things like:

- Help me prepare a product operating review.
- Metrics are mixed and I need a clear diagnosis.
- Activation is up, retention is flat, support is still high.
- Leadership needs the real product read, not a status report.
- Help me decide what the next focus should be.

## Routing rules

Choose this workflow when one or more of the following is true:

1. The input contains mixed product, growth, delivery, support, sales, or quality signals.
2. The audience is leadership.
3. The user needs a diagnosis and next focus, not a recap.
4. The output should shape next-period operating decisions.

Do **not** use this workflow as the primary one when:

- the user only needs a short upward memo -> use `prepare-exec-summary`
- the work has completed and needs a lesson loop -> use `write-postmortem`
- the issue is one feature's value -> use `evaluate-feature-value`

## Minimum input

Try to gather:

- review period
- core product or business objective
- positive signals
- warning signals
- delivery or resource constraints
- leadership decision needed

At minimum, start once you know:

- at least two positive or promising signals
- at least two warning signals
- the leadership audience or decision context

## Follow-up policy

### Default number of follow-ups

- Standard mode: 1-2
- High-uncertainty mode: 3-4

### Highest-priority follow-ups

1. What was the period objective?
2. Which signal is most business-critical if ignored?
3. What decision does leadership need to make after this review?
4. Are delivery or cross-functional constraints limiting the next focus?

### When to produce a first-pass operating review

Do it when:

- the signal pattern is visible
- leadership needs a working diagnosis
- uncertainty can be labeled clearly

## Processing logic

Follow this sequence:

1. Restate the review period and objective.
2. Identify positive and warning signals.
3. Synthesize the signal pattern.
4. State the dominant operating diagnosis.
5. Identify what leadership should not overreact to.
6. Recommend the next-period above-the-line focus.
7. Name below-the-line distractions.
8. End with leadership decisions or ask.

## Output structure

Use this structure when helpful:

1. Period summary
2. Bottom line
3. Signal pattern
4. Dominant operating diagnosis
5. Product / growth / delivery / cross-functional view
6. Current call
7. Above the line / below the line
8. What would change this call
9. Leadership decisions needed
10. Ask to leadership

Default template when the user needs something reusable:

- `../templates/head-of-product-operating-review.md`

## Output length control

### Short

- bottom line
- dominant diagnosis
- above-the-line focus
- what not to overreact to
- leadership ask

### Standard

- compact **Head of Product Operating Review**

### Long

- standard output plus deeper signal evidence, assumptions, and review checkpoint

## Success criteria

A good result should:

- produce a dominant diagnosis
- explain mixed signals without flattening them
- identify next-period focus
- give leadership a clear decision or support ask

## Failure cases

Treat these as failures:

1. the output is only a status recap
2. no dominant diagnosis appears
3. every signal gets equal weight
4. below-the-line distractions are not named
5. leadership does not know what to decide
