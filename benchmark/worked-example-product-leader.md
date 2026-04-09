# Worked example — product leader portfolio trade-off

This is an **illustrative comparison artifact**, not a claimed scientific benchmark result.

Its purpose is to make the repo’s value obvious to a cold reader:

- what generic AI often does in this scenario
- what `pm-workbench` is aiming to do better
- how the benchmark rubric would judge the difference

---

## Original input

### Prompt

> I lead product for an AI collaboration tool. We only have room for 3 priorities next quarter. Candidate items: AI answer quality tuning, enterprise audit logs, onboarding simplification, team workspace sharing, admin billing controls, conversation history search, and referral growth loop. Our CEO wants growth, sales wants enterprise readiness, and support keeps escalating onboarding confusion. Help me prioritize this quarter and explain what should wait.

### Why this is a useful test case

This prompt matters because it compresses several real tensions at once:

- growth versus enterprise readiness
- support pain versus new demand
- limited capacity
- the need for a leadership-defendable call

A weak system will rank items.
A stronger system will choose a quarter objective and make a portfolio bet.

---

## Representative generic AI output

### Typical shape

- opens with a generic prioritization framework
- scores items across impact / effort / urgency
- gives a ranked list
- says trade-offs matter
- avoids a strong portfolio call

### Example excerpt

> Based on impact, urgency, and strategic importance, I would recommend prioritizing AI answer quality tuning, onboarding simplification, enterprise audit logs, and conversation history search. These items support growth, customer satisfaction, and enterprise readiness. Lower-priority items such as referral growth loop and billing controls can be reconsidered later. I recommend validating effort with engineering and then finalizing priorities with stakeholders.

### Why this feels weak

- top set is not actually constrained to 3 items
- the period objective is never clarified
- leadership tension is acknowledged but not resolved
- “reconsider later” is not the same as an explicit below-the-line decision
- the answer is easy to nod at, hard to defend in a real review

---

## Representative `pm-workbench` output pattern

### Typical shape

- anchors first on the period objective
- makes one portfolio bet explicit
- names the top 3 and the below-the-line set clearly
- explains why some stakeholder asks are not leading this quarter
- produces something reusable as a prioritization stack or roadmap input

### Example excerpt

> **Bottom line:** next quarter should optimize for activation and trust in the core product, while preserving the minimum enterprise credibility needed for active deals. I would prioritize **(1) onboarding simplification, (2) AI answer quality tuning, and (3) enterprise audit logs**.
>
> **Why this stack:**
>
> - **Onboarding simplification** is the fastest route to reducing current user friction and support pain, which is the most immediate drag on activation.
> - **AI answer quality tuning** strengthens the product’s core promise; growth on a weak core is expensive and fragile.
> - **Enterprise audit logs** stays in because it supports real sales momentum and prevents enterprise readiness from becoming a blocker.
>
> **Below the line this quarter:**
>
> - **Team workspace sharing** — strategically valuable, but less urgent than fixing first-use friction and core output trust.
> - **Conversation history search** — useful retention lever, but not as central as activation + answer quality right now.
> - **Admin billing controls** — important for maturity, but not the current quarter’s sharpest bottleneck.
> - **Referral growth loop** — growth-focused, but likely to amplify a leaky product before the core experience is stronger.
>
> **Leadership framing:** this is a deliberate choice to avoid growth theater. We are not ignoring growth; we are choosing to earn it through better activation and product trust first, while protecting one enterprise-critical lane.

### Why this feels stronger

- it chooses a real quarter objective
- it resolves the growth vs enterprise vs support tension with a point of view
- it makes the non-decisions easy to explain
- it sounds like something a head of product could use in review with light editing

---

## Why this is judgment advantage, not just format advantage

This is not mainly about prettier structure.
The real difference is that the stronger answer:

- chooses an explicit portfolio objective
- honors the hard top-3 constraint
- treats non-decisions as part of the work, not leftovers
- explains the business logic behind the trade-off

Even without headings, that is a better leadership decision artifact.

---

## Example rubric scoring

| Criterion                          | Generic AI | pm-workbench target | Why                                                                                                                                 |
| ---------------------------------- | ---------: | ------------------: | ----------------------------------------------------------------------------------------------------------------------------------- |
| Upstream problem framing           |          1 |                   3 | One lists items; the other defines the portfolio objective first                                                                    |
| Follow-up question quality         |          1 |                   2 | Generic AI often asks little or asks generic questions; `pm-workbench` should ask only if objective or hard constraints are missing |
| Recommendation quality             |          1 |                   3 | One hedges; the other makes a constrained top-3 call                                                                                |
| Trade-off and non-decision clarity |          1 |                   3 | The target answer makes the below-the-line explicit                                                                                 |
| Artifact reuse quality             |          1 |                   3 | The target answer reads like a real prioritization stack                                                                            |
| Product-leader relevance           |          1 |                   3 | The target answer is legible for leadership review                                                                                  |
| Honesty about uncertainty          |          2 |                   2 | Both can label assumptions if needed                                                                                                |
| **Total**                          |      **8** |              **19** | Clear practical differentiation                                                                                                     |

---

## Benchmark notes

### Fairness note

- same original prompt assumed for both sides
- no prompt rewriting is assumed in the comparison
- snippets are shortened for readability, but should preserve the logic of the response

### Limitation note

This example shows strength in **quarterly portfolio prioritization under cross-functional tension**.
It does not prove broader superiority in every prioritization method or every company context.

---

## Takeaway

This is the kind of gap `pm-workbench` is trying to create:
not just better wording, but better product judgment under real organizational constraints.
