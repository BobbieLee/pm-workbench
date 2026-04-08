# pm-workbench benchmark kit

This benchmark kit exists to answer a practical question:

**Does `pm-workbench` produce better PM judgment than generic AI in realistic product scenarios?**

It is not pretending to be a scientific benchmark.
It is a repo-native evaluation pack for side-by-side testing that a PM, contributor, or curious GitHub visitor can actually run.

## What this kit includes

- [Scenarios](scenarios.md) — realistic prompts across IC PM and product-leader work
- [Rubric](rubric.md) — a scoring frame focused on PM judgment quality, not writing polish
- [Scorecard](scorecard.md) — a copyable worksheet for comparing outputs across models or prompts
- [Worked example — product leader](worked-example-product-leader.md) — illustrative generic-AI-vs-`pm-workbench` comparison for quarterly prioritization
- [Worked example — clarify request](worked-example-clarify-request.md) — illustrative comparison for upstream framing quality
- [Worked example — executive summary](worked-example-exec-summary.md) — illustrative comparison for leadership-ready communication

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

Generic AI often sounds competent on PM topics.
But in practice it frequently:
- accepts the request framing too quickly
- asks either too many or too few questions
- gives balanced-sounding analysis without a real recommendation
- ignores resource trade-offs or below-the-line decisions
- produces text that sounds polished but is hard to reuse in review or leadership communication

`pm-workbench` should outperform generic AI on those exact failure modes.

## Interpretation rule

If `pm-workbench` does **not** consistently beat generic AI on:
- upstream problem framing
- recommendation quality
- trade-off clarity
- artifact reuse

then the skill still has work to do.

That is the point of keeping this benchmark kit in the repo.
