# pm-workbench benchmark kit

This benchmark kit exists to answer a practical question:

**Does `pm-workbench` produce better PM judgment than a general-purpose model in realistic product scenarios?**

It is not pretending to be a scientific benchmark.
It is a repo-native evaluation pack for side-by-side testing that a PM, contributor, or curious GitHub visitor can actually inspect and run.

## What this kit includes

- [Scenarios](scenarios.md) — realistic prompts across IC PM and product-leader work
- [High-pressure acceptance suite](high-pressure-acceptance-suite.md) — harder, more leadership-realistic scenarios for testing judgment under ambiguity and pressure
- [Rubric](rubric.md) — a scoring frame focused on PM judgment quality, not writing polish
- [Scorecard](scorecard.md) — a copyable worksheet for comparing outputs across models or prompts
- [Worked example — product leader](worked-example-product-leader.md) — illustrative side-by-side comparison for quarterly prioritization
- [Worked example — clarify request](worked-example-clarify-request.md) — illustrative comparison for upstream framing quality
- [Worked example — executive summary](worked-example-exec-summary.md) — illustrative comparison for leadership-ready communication
- [Worked example — launch readiness](worked-example-launch-readiness.md) — illustrative comparison for high-pressure launch recommendation quality
- [Worked example — mixed signals](worked-example-mixed-signals.md) — illustrative comparison for leadership-grade operating diagnosis

## How fairness is controlled

This benchmark is only useful if people can see how the comparison was produced.
So the repo tries to make the comparison chain inspectable.

### Baseline comparison rules

- the **same original prompt** should be used for both runs
- prompt rewriting between runs is discouraged unless prompt sensitivity is the thing being tested
- if a multi-turn comparison is used, the same follow-up opportunity should be given to both sides
- outputs should not be cherry-picked from many runs without saying so
- worked examples should preserve the original shape of the response as much as possible

### What the worked examples should include

Each worked example should make it easy to inspect:

- original input
- representative generic AI output
- representative `pm-workbench` output or target pattern
- rubric scoring rationale
- why the advantage is about judgment, not only formatting

### What this does **not** guarantee

This does **not** make the benchmark fully objective.
It only makes the repo’s evidence layer easier to audit than a README that says “trust me, it’s better.”

## Recommended evaluation flow

### 1. Pick 3-5 scenarios

Start with:

- one ambiguous request
- one feature / initiative evaluation
- one prioritization or roadmap scenario
- one executive / product-leader communication scenario

### 2. Run the same prompt twice

- once with a generic AI setup
- once with `pm-workbench`

Do not rewrite the prompt between runs unless the goal is explicitly to test prompt sensitivity.

### 3. Score both outputs with the rubric

Focus on whether the answer:

- solved the right upstream PM problem
- asked only useful follow-up questions
- produced a recommendation
- made trade-offs and non-decisions visible
- created something reusable in real PM work

### 4. Save comparison notes

If you are contributing to the repo, keep short notes about where `pm-workbench` won, tied, or lost.
That is better than vague claims.

## What this benchmark is designed to reveal

A general-purpose model often sounds competent on PM topics.
But in practice it frequently:

- accepts the request framing too quickly
- asks either too many or too few questions
- gives balanced-sounding analysis without a real recommendation
- ignores resource trade-offs or below-the-line decisions
- produces text that sounds polished but is hard to reuse in review or leadership communication

`pm-workbench` should do better on those exact failure modes.

## Known benchmark limitations

This benchmark layer has real limitations.
It is better to state them plainly.

- it is still a **repo-native internal evaluation system**, not an external benchmark standard
- sample count is still limited
- some scenarios naturally favor structured workflow skills more than free-form chatting
- worked examples are illustrative and cannot stand in for broad user testing
- rubric-based scoring still contains human judgment
- the benchmark currently says more about **how the repo behaves in chosen PM scenarios** than about universal model superiority

That is fine.
The point is to create a proof layer that is more inspectable, more honest, and more useful than self-promotional copy.

## Interpretation rule

If `pm-workbench` does **not** consistently beat a general-purpose model on:

- upstream problem framing
- recommendation quality
- trade-off clarity
- reuse in real PM outputs

then the skill still has work to do.

That is the point of keeping this benchmark kit in the repo.
