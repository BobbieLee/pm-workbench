# Try 3 prompts in 10 minutes

If you only spend 10 minutes evaluating `pm-workbench`, do not read the whole repo first.
Run these 3 prompts.

They are chosen to reveal whether the skill is actually better than generic AI at product work, not just better at sounding structured.

---

## Prompt 1 — upstream framing

> My CEO keeps saying our AI workspace product needs more of a “wow factor” because competitors feel more exciting in demos. Help me figure out what that actually means before we jump into building random features.

### What good looks like
- it does **not** jump straight into feature ideas
- it separates problem, goal, and embedded solution assumptions
- it asks only the 1-2 missing questions that materially change the framing
- it turns the ask into a sharper product question

### Red flag
If the answer immediately brainstorms flashy AI features, the model is doing solution theater.

---

## Prompt 2 — portfolio prioritization

> I lead product for an AI collaboration tool. We only have room for 3 priorities next quarter. Candidate items: AI answer quality tuning, enterprise audit logs, onboarding simplification, team workspace sharing, admin billing controls, conversation history search, and referral growth loop. Our CEO wants growth, sales wants enterprise readiness, and support keeps escalating onboarding confusion. Help me prioritize this quarter and explain what should wait.

### What good looks like
- it defines the quarter objective before ranking items
- it picks a real top 3, not a fuzzy top 4-5
- it clearly states what is below the line
- it resolves the growth vs enterprise vs support tension with a point of view

### Red flag
If the answer gives a neutral scorecard without an explicit portfolio call, it is probably too generic.

---

## Prompt 3 — leadership communication

> Help me write a one-page update for leadership. We tested a premium AI meeting summary workflow and user satisfaction was strong, but activation was low because setup friction is still too high. I want to recommend we do not scale marketing yet, focus on activation fixes for 6 weeks, and ask for one more frontend engineer temporarily.

### What good looks like
- the bottom line appears immediately
- the recommendation is tied to business consequence
- the ask is explicit
- the output looks reusable in an actual leadership context

### Red flag
If the answer sounds polished but leadership still would not know what decision or support is being requested, it is not strong enough.

---

## Fast scoring checklist

After each prompt, ask:
1. Did it solve the right PM problem first?
2. Did it ask only useful questions?
3. Did it make a clear call?
4. Did it make trade-offs visible?
5. Would I reuse this with light editing?

If the answer is “yes” most of the time, `pm-workbench` is probably doing real work for you.

## If you want a sharper side-by-side test

Use the benchmark kit:
- [`../benchmark/README.md`](../benchmark/README.md)
- [`../benchmark/scenarios.md`](../benchmark/scenarios.md)
- [`../benchmark/rubric.md`](../benchmark/rubric.md)
- [`../benchmark/scorecard.md`](../benchmark/scorecard.md)

## Bottom line

These 3 prompts are enough to reveal whether `pm-workbench` gives you:
- better upstream framing
- better prioritization judgment
- better leadership-ready output

That is the real test.
