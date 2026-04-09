# prioritize-requests

## Purpose

Use this workflow to rank multiple requests, features, or initiatives under real resource constraints.

The point is not to generate a decorative score table. The point is to help the user decide:

- what should go first
- what can wait
- what should not be done now
- how to explain the prioritization logic clearly

## Trigger phrases

Prefer this workflow when the user says things like:

- Help me prioritize these requests.
- We only have room for some of these items.
- Which ones should go into the next version?
- Can you rank these by priority?
- I need a prioritization recommendation.
- Help me explain why not everything can be done.

## Routing rules

Choose this workflow when one or more of the following is true:

1. There are multiple candidate items competing for the same resources.
2. The user needs sequencing or ranking, not just individual evaluation.
3. Time, people, or engineering bandwidth is clearly constrained.
4. The output needs to be explainable to stakeholders.

Do **not** use this workflow as the primary one when:

- one item still needs basic value judgment -> first use `evaluate-feature-value`
- the real issue is choosing between two solution designs -> use `compare-solutions`
- the user needs a roadmap theme rather than item ranking -> use a planning workflow

## Minimum input

Try to gather:

- list of items to prioritize
- goal of the period or release
- expected impact of each item
- rough effort / complexity
- dependencies
- deadlines or commitments
- resource constraints

At minimum, start once you know:

- the item list
- the current objective
- some signal for impact or effort

## Follow-up policy

### Default number of follow-ups

- Standard mode: 3-5
- Fast triage mode: 2-3

### Highest-priority follow-ups

1. What is the main goal for this period: growth, retention, revenue, reliability, efficiency, strategic move?
2. Which items are must-do versus nice-to-have?
3. What are the rough impact and effort levels?
4. Are there dependency chains or commitments?
5. What happens if an item slips?

### Secondary follow-ups

- Are there politically sensitive items that still need visibility?
- Are any items foundational enablers for later work?
- Are there launch, customer, or executive commitments attached?
- Is there a hard capacity limit?

### When to reduce questions

If the user already provided enough ranking context, move to structuring the list and logic instead of asking for perfect numbers.

### Critical-premise rule

If the ranking would materially change based on 1-2 missing facts, ask for those first.
Typical examples:

- the true period objective
- impact scope of a reliability issue
- whether there are hard commitments or dependency chains

### When to output a first-pass priority stack

Do it when:

- the user needs a working stack quickly
- rough impact / effort signals are already available
- the main goal for the period is known

If doing a first pass, explicitly mark:

- rough judgments
- unknown effort or dependency areas
- items that need validation before final sequencing
- what can be decided now versus what still needs validation

## Processing logic

Follow this sequence:

1. Restate the release / period objective.
2. Identify the scarcest resource being spent in this priority call.
3. Group items by must-do, high-value, and deferrable candidates.
4. Compare items by impact, urgency, effort, dependency, and strategic importance.
5. Produce a ranked stack or tiered priority group.
6. Explain the prioritization logic clearly.
7. Call out what is intentionally not prioritized.
8. Recommend the next planning step.
9. When useful, shape the output as a **Prioritization Stack**.

## Non-decision language patterns

When something is below the line, prefer language like:

- not worth spending the current scarce resource on
- valuable, but not under this period objective
- not a forever no, but a current-strategy no
- visible, but below the line unless X changes
- strategically real, but displaced by a sharper bottleneck right now

Avoid turning non-decisions into vague politeness.

## Common failure modes

Weak output usually looks like this:

- ranking items without first stating the period objective
- giving a top 4 or top 5 when the real constraint is top 3
- showing a score table without a defendable portfolio call
- saying “can revisit later” instead of naming the below-the-line set explicitly
- ignoring sequencing, commitments, or what the organization can actually absorb

## What strong output looks like

Strong output should:

- anchor the stack to a clear period objective
- identify what scarce resource the top choices are consuming
- produce an explicit above-the-line / below-the-line call
- explain why lower-ranked items are not being prioritized now
- show the main trade-off and resource consequence clearly
- read like something leadership could review with minimal cleanup

## Output structure

Use this structure when helpful:

1. Task understanding
2. Current objective and constraints
3. Scarcest resource being spent
4. Prioritization criteria
5. Ranked or tiered list
6. Reasoning for top items
7. Deferred / lower-priority items
8. Decide now vs validate next
9. Risks or sequencing notes
10. Suggested next step

Default artifact when the user needs something reusable:

- `references/templates/prioritization-stack.md`

## Output length control

### Short

For quick team sync:

- P0 / P1 / P2 list
- short reason for top items
- what is clearly below the line
- next action

### Standard

For normal PM usage:

- full output structure above
- or a compact **Prioritization Stack**

### Long

For a decision memo or planning input:

- standard structure plus assumptions, dependencies, and explanation for trade-offs

## Success criteria

A good result should:

- rank items against a clear objective
- reflect real constraints rather than ideal wish lists
- show what is intentionally delayed
- make the top priorities easy to defend
- help the user move into planning or communication
- make the below-the-line trade-offs easy to explain

## Failure cases

Treat these as failures:

1. ranking without a clear objective
2. pretending all items are equally important
3. ignoring dependencies or delivery constraints
4. providing a score table without an actual priority recommendation
5. failing to explain why lower items are lower

## Notes

Prioritization is not only about value; it is also about timing, sequencing, and what the organization can actually absorb.
