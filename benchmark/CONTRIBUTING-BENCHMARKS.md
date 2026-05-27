# Contributing benchmark comparisons

If you want to improve `pm-workbench`, do not only add new claims.
Add better comparisons.

## What a useful benchmark contribution looks like

A strong benchmark contribution usually includes:

- one realistic PM scenario
- the exact prompt used
- a side-by-side comparison between generic AI and `pm-workbench`
- short scoring notes using the repo rubric
- one honest takeaway about where `pm-workbench` won, tied, or still felt weak

If you captured actual side-by-side outputs, add a run record under [`runs/`](runs/README.md) using [`runs/run-template.md`](runs/run-template.md).

If your change affects workflow behavior, also run the relevant failure checks in [`failure-regression.md`](failure-regression.md).

## Good benchmark scenarios

Prefer scenarios that are:

- realistic
- slightly incomplete
- decision-shaped
- high-stakes enough that trade-offs matter

Great examples:

- vague leadership ask
- questionable engagement feature
- quarterly prioritization under pressure
- roadmap focus with capacity constraints
- executive summary with a real ask
- founder trade-off between speed and trust

## Weak benchmark scenarios

Avoid scenarios that are:

- too toy-like
- fully specified to the point that no judgment is needed
- mostly about formatting instead of decision quality
- so domain-specialized that only insider facts matter

## Submission pattern

When adding a benchmark artifact, try to include:

1. the scenario prompt
2. a representative generic AI pattern
3. a representative `pm-workbench` target pattern
4. a short rubric score table
5. a takeaway in plain language

When adding a run record, preserve:

1. exact prompt
2. model / assistant setup for both sides
3. raw output or faithful excerpt
4. rubric scoring rationale
5. what `pm-workbench` should improve next

## Honesty rule

If `pm-workbench` loses on:

- recommendation clarity
- trade-off framing
- artifact reuse
- product-leader relevance

that is not embarrassing.
That is useful.
Document it and improve the repo.

## Quality bar

A benchmark contribution is good if a cold reader can answer this quickly:
**“Do I now understand more clearly why `pm-workbench` should outperform generic AI here?”**
