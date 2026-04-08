# Product leader playbook

`pm-workbench` is not only for IC PM artifact drafting.
It is especially useful when the job is closer to:
- head of product portfolio trade-offs
- founder product decision support
- leadership communication
- roadmap focus under cross-functional pressure
- deciding what **not** to do

## What changes in leader-grade PM work

Compared with narrower feature PM work, leader-grade PM work usually has more of these:
- conflicting stakeholder pressure
- portfolio-level resource trade-offs
- heavier business consequence
- upward communication needs
- sequencing and resourcing implications
- higher cost of vague recommendations

A good output in these cases should make five things easy to scan:
1. the actual decision
2. why it matters now
3. what gets prioritized vs delayed
4. what resource or alignment implication follows
5. what ask goes to leadership or founder

## The leader-mode standard

When the audience is a product leader, founder, GM, or exec stakeholder, the output should usually do more of this:
- lead with the bottom line
- connect the recommendation to business consequence
- show the portfolio trade-off or opportunity cost
- make sequencing and resourcing visible
- state what is intentionally below the line
- end with an explicit ask, decision, or next step

If it does not do those things, it may still be a decent PM answer, but it is probably not a strong product-leader answer.

---

## High-value leader use cases

## 1. Convert a vague founder ask into a real product question
### Typical input
> We need more AI magic. Competitors feel more exciting.

### Best workflow
- `clarify-request`

### What good looks like
- reframes the ask into a clearer problem or objective
- separates demo optics, activation, retention, and differentiation
- prevents random feature-chasing

---

## 2. Decide whether a proposed initiative deserves scarce capacity
### Typical input
> Sales wants enterprise controls, growth wants referral loops, support wants onboarding fixes. What should actually get the slot?

### Best workflows
- `evaluate-feature-value`
- `prioritize-requests`

### What good looks like
- not just whether each idea has value
- but which one deserves the slot **now**
- and what gets displaced if it is chosen

---

## 3. Turn a messy priority set into a quarter story
### Typical input
> Help me turn these competing priorities into a roadmap leadership can align on.

### Best workflows
- `prioritize-requests`
- `build-roadmap`

### What good looks like
- a stage goal, not just a ranked list
- believable sequence
- explicit non-focus areas
- clear capacity and dependency notes

---

## 4. Prepare a leadership update with a real ask
### Typical input
> Help me turn this into a one-page update for leadership.

### Best workflow
- `prepare-exec-summary`

### What good looks like
- conclusion first
- only the evidence that matters
- visible risk
- concrete ask for decision, resource, or alignment

---

## 5. Review a strategic miss without turning it into ceremony
### Typical input
> This launch underperformed. Help me write the postmortem and explain what we should change next time.

### Best workflow
- `write-postmortem`

### What good looks like
- compares expectation vs reality clearly
- extracts decision-level lessons, not only execution complaints
- turns learning into concrete follow-up actions

---

## Prompt patterns that work well for leaders

If you want `pm-workbench` to operate at the right altitude, prompts like these tend to work well:

### Portfolio prioritization
> Act like my product leadership workbench. We have limited capacity next quarter. Help me decide what goes above and below the line, and make the trade-offs explicit.

### Founder decision support
> I need a recommendation, not just options. Compare these two paths in terms of strategic fit, speed, product trust, and opportunity cost.

### Leadership update
> Turn this into a one-page executive summary with bottom line, why it matters, key risk, and explicit ask.

### Roadmap framing
> Help me turn these competing asks into a roadmap leadership can align on. Emphasize stage goal, sequencing, and what we are not doing now.

## What to look for in strong outputs

A strong leader-grade output usually contains most of these:
- a clear period or decision objective
- a constrained recommendation
- explicit below-the-line decisions
- resource, sequencing, or dependency implications
- business consequence, not only product mechanics
- a leadership-ready ask or next move

## Common failure modes to avoid

These are the exact failure modes that make product-leader outputs feel generic:
- listing priorities without stating the period objective
- talking about upside without opportunity cost
- giving a roadmap with no explicit non-focus area
- summarizing status without a recommendation or ask
- pretending all stakeholder demands can fit at once
- sounding balanced while avoiding a real call

## Fast self-check for leader outputs

Before reusing an answer with leadership, ask:
1. Is the bottom line obvious in the first screen?
2. Can I tell what we are *not* doing?
3. Does this show the business or resource consequence?
4. Would a founder or head of product know what decision or support is needed?

If the answer to 2 or 3 is “no,” the output probably still needs work.

## Suggested path through the repo

If you are evaluating `pm-workbench` mainly for product-leader work, start here:
1. [`../README.md`](../README.md)
2. [`../benchmark/worked-example-product-leader.md`](../benchmark/worked-example-product-leader.md)
3. [`../benchmark/scenarios.md`](../benchmark/scenarios.md) — especially scenarios 3, 4, 5, and 7
4. [`../examples/03-exec-summary.md`](../examples/03-exec-summary.md)
5. [`../examples/07-prioritization-stack.md`](../examples/07-prioritization-stack.md)
6. [`../examples/08-roadmap-one-pager.md`](../examples/08-roadmap-one-pager.md)

## Bottom line

The leader-grade value of `pm-workbench` is not that it can talk about PM frameworks.
It is that it can help turn messy cross-functional pressure into:
- a sharper recommendation
- a cleaner portfolio call
- a roadmap with actual focus
- an executive summary with a real ask
