# Worked example — executive summary with a real ask

This is an **illustrative comparison artifact**, not a scientific benchmark result.

It exists to show a practical difference:

- generic AI often summarizes information
- `pm-workbench` should help shape a leadership-ready decision artifact

---

## Original input

### Prompt

> Help me write a one-page update for leadership. We tested a premium AI meeting summary workflow and user satisfaction was strong, but activation was low because setup friction is still too high. I want to recommend we do not scale marketing yet, focus on activation fixes for 6 weeks, and ask for one more frontend engineer temporarily.

### Why this is a useful test case

This prompt is not just “summarize this.”
It already contains:

- a decision recommendation
- a business timing implication
- a resource ask
- evidence that must support a leadership call

A weak system will summarize the situation.
A stronger system will turn it into a decision-grade exec artifact.

---

## Representative generic AI output

### Typical shape

- restates the situation in polished prose
- mentions the positive and negative findings
- sounds balanced
- does not make the recommendation and ask sharp enough

### Example excerpt

> We recently tested a premium AI meeting summary workflow and observed encouraging user satisfaction among those who used it. However, activation remains below expectations, likely due to setup friction in the onboarding flow. We recommend continuing to improve the experience before broader go-to-market expansion. Additional frontend support may help accelerate improvements.

### Why this feels weak

- the recommendation is softened into a general observation
- the timing and resource ask are vague
- leadership can read it and still not know what decision is being requested
- it sounds acceptable but does not really move anything forward

---

## Representative `pm-workbench` output pattern

### Typical shape

- leads with the bottom line immediately
- keeps only the evidence needed to support the recommendation
- states the ask in a way leadership can approve or reject
- reads like a one-page executive summary, not meeting notes

### Example excerpt

> **Bottom line:** do **not** scale marketing for the premium AI meeting summary workflow yet. For the next **6 weeks**, we should focus on reducing setup friction because current user feedback suggests the product experience is strong **after activation**, but too many users fail to reach that point.
>
> **Why this matters now:** increasing acquisition before fixing activation would amplify waste. We would spend more to bring users into a flow that is currently under-converting for fixable UX reasons.
>
> **What we learned from the test:**
>
> - satisfaction was strong among activated users, which supports the core product value
> - activation stayed weak, with setup friction as the clearest bottleneck
> - this means the current problem is less about demand quality and more about first-use conversion
>
> **Recommendation:** hold marketing expansion, run a focused 6-week activation fix sprint, and reassess scale readiness at the end of that window.
>
> **Ask:** temporarily assign **1 additional frontend engineer** to accelerate activation fixes and reduce time-to-learning.

### Why this feels stronger

- the decision is visible in the first screen
- the recommendation is tied to business consequence
- the ask is explicit instead of implied
- it is easy for leadership to respond with approve / challenge / modify

---

## Why this is judgment advantage, not just format advantage

This is not mainly about better formatting.
The real difference is that the stronger answer:

- understands the real job is **decision support**, not recap
- treats the evidence as support for the recommendation, not as content to summarize evenly
- translates “we learned X” into “therefore do Y, not Z, and give us W”
- produces something leadership can act on immediately

Even as plain text with no headings, that would still be the better exec artifact.

---

## Example rubric scoring

| Criterion                          | Generic AI | pm-workbench target | Why                                                                                |
| ---------------------------------- | ---------: | ------------------: | ---------------------------------------------------------------------------------- |
| Upstream problem framing           |          2 |                   3 | Both understand the situation, but the target frames it as a scale-timing decision |
| Follow-up question quality         |          2 |                   2 | Both may be acceptable without follow-ups in this scenario                         |
| Recommendation quality             |          1 |                   3 | The target makes a clear no-scale-yet and 6-week recommendation                    |
| Trade-off and non-decision clarity |          1 |                   3 | The target explains why not to scale marketing now                                 |
| Artifact reuse quality             |          1 |                   3 | The target reads like an exec summary a leader could actually send upward          |
| Product-leader relevance           |          1 |                   3 | The target includes timing, business consequence, and a real ask                   |
| Honesty about uncertainty          |          2 |                   2 | Both can remain honest if assumptions are labeled                                  |
| **Total**                          |     **10** |              **19** | Strong difference in decision-readiness                                            |

---

## Benchmark notes

### Fairness note

- same original prompt assumed for both sides
- no prompt rewriting is assumed in the comparison
- snippets are shortened for readability, but should preserve the logic of the response

### Limitation note

This example shows strength in **leadership-ready summary writing when a decision and ask already exist in rough form**.
It does not prove superiority in every writing task or every executive communication style.

---

## Takeaway

Good executive communication is not “summary, but polished.”
It is:

- conclusion first
- evidence in service of the conclusion
- a visible trade-off
- a decision or resource ask

That is the gap `pm-workbench` should consistently create.
