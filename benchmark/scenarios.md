# Benchmark scenarios

These scenarios are intentionally realistic, incomplete, and slightly messy.
That is where PM judgment actually matters.

For each scenario below:

- run the prompt as written first
- allow follow-up questions if the model chooses to ask them
- compare both outputs using [`rubric.md`](rubric.md)

---

## Scenario 1 — Vague leadership ask

### PM job

Clarify the real problem before solutioning.

### Prompt

> My CEO keeps saying our AI workspace product needs more of a “wow factor” because competitors feel more exciting in demos. Help me figure out what that actually means before we jump into building random features.

### Strong output should

- separate problem, goal, and embedded solution assumptions
- identify whether this is about activation, perceived intelligence, differentiation, or sales optics
- ask only the 1-2 missing premises that would change the framing
- convert the vague ask into a more decision-ready product question

### Weak-output pattern

- brainstorming “wow features” immediately
- repeating the CEO’s wording without clarification
- asking a long intake questionnaire

---

## Scenario 2 — Questionable engagement feature

### PM job

Make a go / hold / no-go / experiment judgment.

### Prompt

> Operations wants a daily AI fortune card feature because they believe it could improve engagement and create more shareable moments. I worry it is gimmicky and will distract us from core retention work. Help me evaluate whether we should do it.

### Strong output should

- evaluate user value, business value, strategic fit, and opportunity cost
- distinguish “attention-grabbing” from meaningful retention value
- offer a clear recommendation, not just pros and cons
- suggest an experiment path if full build confidence is weak

### Weak-output pattern

- mirroring stakeholder enthusiasm
- assuming engagement is automatically good
- ignoring what this work would displace

---

## Scenario 3 — Product-leader quarterly prioritization

### PM job

Prioritize a portfolio under real constraints.

### Prompt

> I lead product for an AI collaboration tool. We only have room for 3 priorities next quarter. Candidate items: AI answer quality tuning, enterprise audit logs, onboarding simplification, team workspace sharing, admin billing controls, conversation history search, and referral growth loop. Our CEO wants growth, sales wants enterprise readiness, and support keeps escalating onboarding confusion. Help me prioritize this quarter and explain what should wait.

### Strong output should

- anchor on a period objective before ranking items
- make the top set and below-the-line set explicit
- reflect business tension across growth, enterprise, and user friction
- explain trade-offs in a way leadership can defend

### Weak-output pattern

- scoring items mechanically without a point of view
- failing to state what is intentionally not prioritized
- treating leadership conflicts as irrelevant context

---

## Scenario 4 — Founder trade-off between speed and strategic fit

### PM job

Compare paths and recommend one.

### Prompt

> I’m the founder of an AI product. We can either ship a fast but shallow “AI assistant everywhere” layer in 4 weeks to create market buzz, or spend 8-10 weeks improving answer reliability and workspace memory so the product is materially better for existing teams. Cash runway is okay for now, but investor narrative pressure is real. Help me decide.

### Strong output should

- restate the real decision objective under current company conditions
- weigh narrative pressure against product compounding and user trust
- make the opportunity cost and sequencing logic explicit
- recommend one path or a staged path with clear conditions

### Weak-output pattern

- generic startup advice with no actual call
- discussing both sides forever without choosing
- ignoring investor pressure or product trust dynamics

---

## Scenario 5 — Executive summary with clear ask

### PM job

Turn messy analysis into leadership-ready communication.

### Prompt

> Help me write a one-page update for leadership. We tested a premium AI meeting summary workflow and user satisfaction was strong, but activation was low because setup friction is still too high. I want to recommend we do not scale marketing yet, focus on activation fixes for 6 weeks, and ask for one more frontend engineer temporarily.

### Strong output should

- lead with the conclusion immediately
- make the business and timing consequence obvious
- include a concrete recommendation and resource ask
- preserve only the evidence needed to support the ask

### Weak-output pattern

- turning into meeting notes
- burying the recommendation late
- forgetting the actual ask

---

## Scenario 6 — Launch postmortem with behavior change

### PM job

Extract lessons that change future decisions.

### Prompt

> We launched AI-generated follow-up suggestions after calls. Internal teams loved the idea, but external usage was weak and many users said they did not trust the suggestions enough to send them. Help me draft a lightweight postmortem that explains what happened, what we got wrong, and what we should change next time.

### Strong output should

- compare expected vs actual clearly
- separate likely causes from hindsight storytelling
- identify decision or assumption failures, not just outcome facts
- turn lessons into concrete next actions

### Weak-output pattern

- timeline recap with little analysis
- blamey language
- generic lessons like “do more user research” with no specificity

---

## Scenario 7 — Head of product roadmap framing

### PM job

Turn competing demands into a focused roadmap.

### Prompt

> I need a one-page roadmap for the next two quarters for our AI note-taking product. We need better activation, improved early retention, and enough enterprise credibility to unlock a few lighthouse deals, but we can’t do everything at once. Help me frame a roadmap leadership can align on.

### Strong output should

- define the stage goal clearly
- group work into a believable sequence or theme stack
- show which bets happen now versus later
- make capacity and dependency implications visible

### Weak-output pattern

- backlog dump with dates
- saying everything matters
- no sequencing logic

---

## Command-path benchmark tip

If you want to test whether `pm-workbench` behaves more like a true PM workbench than a strong single-shot assistant, do not stop at isolated scenarios.
Also run one short command path from:

- [command-benchmark-guide.md](command-benchmark-guide.md)

That gives you a better read on whether the system preserves PM logic across steps instead of producing one-off polished answers.

## Scenario selection tip

If you only test three scenarios, use:

1. Scenario 1
2. Scenario 3 or 4
3. Scenario 5

That combination usually reveals whether the skill is genuinely better than generic AI at PM work, not just better formatted.

## Want a harsher test?

If the baseline scenarios now feel too easy, use:

- [high-pressure-acceptance-suite.md](high-pressure-acceptance-suite.md)

That suite is intentionally closer to messy real-world PM work with leadership pressure, conflict, and incomplete evidence.
