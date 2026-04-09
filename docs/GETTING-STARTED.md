# Getting Started with pm-workbench

This guide is for someone discovering `pm-workbench` cold and wanting to know, fast, whether it is worth adopting.

## Fastest path

If you only have a few minutes:

1. read [`TRY-IN-3-MINUTES.md`](TRY-IN-3-MINUTES.md)
2. run the 3 prompts in [`TRY-3-PROMPTS.md`](TRY-3-PROMPTS.md)
3. compare the outputs against the benchmark rubric in [`../benchmark/rubric.md`](../benchmark/rubric.md)

If the skill feels more decision-grade than generic AI after that, keep going.

## What success looks like

After 10-15 minutes with this skill, you should know:

- whether it improves the quality of your PM judgment flow
- whether the outputs feel reusable in real work
- whether the follow-up behavior is appropriately selective instead of annoying
- whether the artifact shapes match how you actually work
- whether it helps not only IC PM work, but product-leader / founder work too

## Step 1 — verify the skill is recognized

If you are using the source folder in an OpenClaw workspace:

```bash
openclaw skills info pm-workbench
openclaw skills check
```

You want to see `pm-workbench` recognized as ready.

## Step 2 — start with real prompts, not synthetic demos

Use one prompt from each category below.

### A. Clarification test

Use a real vague request from your work.

Example:

> “My boss said our AI product needs more wow factor. Help me sort out what that actually means before we jump to solutions.”

Good sign:

- the skill sharpens the request instead of pretending it is already a requirement

### B. Evaluation test

Use a feature or initiative you are genuinely unsure about.

Example:

> “Operations wants a daily AI fortune card feature to improve engagement. I’m worried it’s a gimmick. Help me evaluate it.”

Good sign:

- the skill gives a recommendation with trade-offs, not just balanced sounding paragraphs

### C. Product-leader / founder test

Use something that has actual portfolio or executive consequences.

Example:

> “We only have room for 3 of these 8 requests next quarter. Help me prioritize them and explain what should wait.”

or

> “I’m the founder of an AI product. Help me choose between a fast marketable launch and a slower but more trust-building product improvement path.”

Good sign:

- the output is easy to reuse in a planning conversation, leadership sync, or founder decision discussion

### D. Executive communication test

Use a case that needs a recommendation and an ask.

Example:

> “Turn this into a one-page exec summary for leadership.”

Good sign:

- the output leads with the bottom line, not the narrative journey

## Step 3 — judge the output with this rubric

Ask:

### 1. Did it solve the right upstream problem?

- Did it clarify before evaluating when needed?
- Did it avoid premature solutioning?

### 2. Did it ask only useful questions?

- Did it ask for the one or two facts that actually matter?
- Did it avoid turning the session into an intake form?

### 3. Did it make a call?

- Did it recommend something?
- Did it say what should wait, or what should happen next?

### 4. Did it produce a usable artifact?

- Would you reuse this output in a meeting, memo, planning doc, or leadership sync with light editing?

### 5. Did it show product judgment?

- Did it surface trade-offs, assumptions, risks, and opportunity cost?

### 6. Did it hold up for leader-grade work?

- Did it make business consequence, resourcing, sequencing, or asks easy to scan?

For a sharper side-by-side test, use the benchmark pack:

- [benchmark/README.md](../benchmark/README.md)
- [benchmark/scenarios.md](../benchmark/scenarios.md)
- [benchmark/rubric.md](../benchmark/rubric.md)
- [benchmark/scorecard.md](../benchmark/scorecard.md)

## Step 4 — try both fast mode and fuller mode

`pm-workbench` is designed to work in both:

- **fast mode** -> compressed artifact / quick take
- **fuller mode** -> decision-grade artifact with more structure

A good quick comparison:

### Fast mode

> “Give me the short version. I need a first take in chat.”

### Fuller mode

> “Now expand that into a reusable artifact I can take into review.”

Good sign:

- the second response should feel like a clean expansion of the first, not a full rewrite from scratch

## Step 5 — test the product-leader path explicitly

If you are a head of product, founder, or senior PM, do not stop at feature evaluation.
Also test:

- prioritization under conflicting stakeholder pressure
- roadmap framing under capacity constraints
- executive summary with a concrete ask
- founder-style decision trade-offs between speed, signal, and product trust

Helpful repo entry points:

- [Try 3 prompts](TRY-3-PROMPTS.md)
- [Product leader playbook](PRODUCT-LEADER-PLAYBOOK.md)
- [Worked product-leader comparison](../benchmark/worked-example-product-leader.md)
- [Examples index](../examples/README.md)

## Step 6 — run a lightweight local trust check

This repo now includes a simple validation script for structural consistency:

```bash
cd skills/pm-workbench
npm run validate
```

What it checks:

- core workflow and template references exist
- example files are indexed in `../examples/README.md`
- benchmark and leader-playbook files are present
- important README links are not silently broken
- new onboarding assets are present

This is not a full test suite.
It is a lightweight trust check to reduce repo drift.

## Step 7 — adapt it to your style of PM work

You may prefer different default shapes depending on your role:

- IC PM -> more clarification, evaluation, PRD Lite
- senior PM -> more comparison, prioritization, metrics
- product leader -> more roadmap, exec summary, portfolio trade-offs, resourcing implications
- founder -> more speed-vs-trust decisions, strategic sequencing, explicit “not now” calls

If you customize the skill, keep the core principle intact:
**judgment + structure + reusable artifacts > framework theater**

## Common first-use mistakes

### Mistake 1: testing only toy prompts

Synthetic prompts are okay for smoke tests, but real value appears on messy, politically loaded, incomplete inputs.

### Mistake 2: expecting zero follow-ups always

The skill is supposed to ask when missing premises would change the answer.
The goal is not “never ask,” but “ask only when worth it.”

### Mistake 3: judging only by writing style

A polished answer is not enough.
Judge whether the output helps a real PM decision move forward.

### Mistake 4: testing only IC PM cases

A lot of the skill’s differentiated value appears in prioritization, roadmap, and leadership communication scenarios.

### Mistake 5: treating every output as final

For many uses, the best path is:

- fast first pass
- confirm the missing premise
- expand into the final artifact

## What to explore next

- browse the examples in `examples/`
- inspect reusable artifact shapes in `references/templates/`
- use the benchmark pack in `benchmark/`
- read the product-leader guide in [`PRODUCT-LEADER-PLAYBOOK.md`](PRODUCT-LEADER-PLAYBOOK.md)
- read [`TRY-IN-3-MINUTES.md`](TRY-IN-3-MINUTES.md) for the fastest cold-start test
- read [`TRY-3-PROMPTS.md`](TRY-3-PROMPTS.md) for a quick comparison set
- read [`../ROADMAP.md`](../ROADMAP.md) if you want to contribute or extend the repo
- read [`../CONTRIBUTING.md`](../CONTRIBUTING.md) if you want to improve workflow coverage or quality

## Short adoption recommendation

Adopt `pm-workbench` if you repeatedly run into this pattern:

- lots of product conversation
- not enough product-quality decision output

That is exactly the gap this skill is trying to close.
