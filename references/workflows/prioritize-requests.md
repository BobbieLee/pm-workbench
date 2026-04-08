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

## Processing logic

Follow this sequence:
1. Restate the release / period objective.
2. Group items by must-do, high-value, and deferrable candidates.
3. Compare items by impact, urgency, effort, dependency, and strategic importance.
4. Produce a ranked stack or tiered priority group.
5. Explain the prioritization logic clearly.
6. Call out what is intentionally not prioritized.
7. Recommend the next planning step.
8. When useful, shape the output as a **Prioritization Stack**.

## Output structure

Use this structure when helpful:

1. Task understanding
2. Current objective and constraints
3. Prioritization criteria
4. Ranked or tiered list
5. Reasoning for top items
6. Deferred / lower-priority items
7. Risks or sequencing notes
8. Suggested next step

Default artifact when the user needs something reusable:
- `references/templates/prioritization-stack.md`

## Output length control

### Short
For quick team sync:
- P0 / P1 / P2 list
- short reason for top items
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
