---
workflow: founder-business-review
category: leadership
when_to_use: "separate narrative momentum from business truth and turn product-business signals into a founder decision"
ask_intensity: medium
default_output: "Founder Business Review"
trigger_signals:
  - founder review
  - business reality check
  - growth quality
  - founder decision
misuse_guard:
  - do not use for motivational updates or generic business summaries
  - do not summarize signals without a founder-level business call
---

# founder-business-review

## Purpose

Use this workflow when a founder needs a clear product-business read that separates momentum from actual business quality.

The goal is to decide:

- what is truly improving
- what only looks good because of narrative or top-of-funnel motion
- what the product-business system still has to prove
- what the founder should double down on or delay next

## Why this workflow exists

Founder updates often become motivational summaries. They over-credit traffic, investor attention, or visible AI features while under-examining conversion, retention, monetization, and repeatability.

This workflow exists to protect business truth:

- separate narrative momentum from durable value
- connect product, growth, retention, monetization, and operating constraints
- force a founder-level decision ask

## What good looks like

Good output should:

- state the main business call early
- identify what is improving versus what looks better than it is
- connect signal pattern to strategic diagnosis
- define next-period focus
- name what to avoid or delay
- end with a founder decision

## Common bad pattern

Common failure looks like this:

- motivational recap instead of business read
- treating traffic or investor interest as business quality
- ignoring retention or conversion weakness
- adding more visible features without tying them to the economic loop
- ending without a founder decision

## Trigger phrases

Prefer this workflow when the user says things like:

- Help me prepare a founder business review.
- I need a business reality check.
- Growth looks better but conversion is weak.
- Investors want a stronger story, but I am not sure the product is ready.
- Help me decide what to double down on next.

## Routing rules

Choose this workflow when one or more of the following is true:

1. The audience or decision-maker is the founder.
2. Product and business signals are mixed.
3. Narrative pressure, investor pressure, or market optics could distort product choices.
4. The user needs a next-period founder decision, not a generic summary.

Do **not** use this workflow as the primary one when:

- the user needs a narrow feature go / no-go -> use `evaluate-feature-value`
- the task is only a founder-facing memo -> use `prepare-exec-summary`
- the core job is choosing between two product paths -> use `compare-solutions`

## Minimum input

Try to gather:

- company or product stage
- main business pressure
- growth signals
- retention or conversion signals
- monetization or sales signals
- operating constraint
- founder decision needed

At minimum, start once you know:

- the main positive signal
- the main warning signal
- the founder-level pressure or decision context

## Follow-up policy

### Default number of follow-ups

- Standard mode: 1-2
- High-uncertainty mode: 3-4

### Highest-priority follow-ups

1. What is the stage of the company or product?
2. Which signal is creating the strongest narrative pressure?
3. Which economic signal is weakest: activation, retention, conversion, revenue, or repeatability?
4. What founder decision needs to be made now?

### When to produce a first-pass founder review

Do it when:

- enough signal exists to separate narrative from business quality
- the founder needs a current call before perfect data
- assumptions can be labeled clearly

## Processing logic

Follow this sequence:

1. Restate the business situation.
2. Identify what is actually improving.
3. Identify what looks better than it really is.
4. Synthesize growth, retention, monetization, and operating truths.
5. Define founder decision choices.
6. Recommend next-period focus.
7. Name what to deliberately avoid or delay.
8. End with founder ask / decision.

## Output structure

Use this structure when helpful:

1. Current business situation
2. Bottom line
3. Growth / retention / monetization signal view
4. Strategic diagnosis
5. Decision choices for the founder
6. Recommended next-period focus
7. Main business risks
8. Founder ask / decision

Default template when the user needs something reusable:

- `../templates/founder-business-review.md`

## Output length control

### Short

- bottom line
- signal truth
- strategic diagnosis
- what to double down on
- founder decision ask

### Standard

- compact **Founder Business Review**

### Long

- standard output plus risk notes, leading indicators, and review checkpoint

## Success criteria

A good result should:

- separate narrative momentum from business truth
- connect product and commercial signals
- make the next-period founder decision explicit
- name what not to chase

## Failure cases

Treat these as failures:

1. motivational language replaces diagnosis
2. traffic or visibility is treated as durable business quality
3. retention, conversion, or monetization weakness is softened
4. the output ends without a founder decision
