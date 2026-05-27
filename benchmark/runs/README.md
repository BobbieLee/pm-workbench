# Benchmark run records

Use this folder to store benchmark runs that someone can inspect after the fact.

The worked examples in the benchmark kit explain the intended judgment difference. Run records are stricter: they should preserve the actual prompt, model/setup context, raw outputs, scoring, and evaluator notes.

## When to add a run record

Add a run record when you want to make a comparison reusable or auditable, especially before making public claims such as:

- `pm-workbench` outperformed a generic model on a scenario
- a workflow got stronger after a change
- a command path preserved PM logic better than a single-shot answer
- a new example or workflow deserves to be treated as validated

## How to create one

1. Copy [`run-template.md`](run-template.md).
2. Name the copy with date, scenario, and short setup label.
3. Keep the original prompt unchanged across both setups.
4. Paste raw outputs or clearly marked excerpts.
5. Score both outputs with [`../rubric.md`](../rubric.md).
6. State the main weakness found in `pm-workbench`, even if it won.

Suggested filename:

```text
YYYY-MM-DD-scenario-slug-setup.md
```

## Minimum evidence standard

A useful run record should include:

- date and evaluator
- scenario source
- exact prompt
- model or assistant setup for each side
- whether follow-ups were allowed
- raw output or faithful excerpt for each side
- rubric scores with short rationale
- interpretation and limitations

## What not to do

- Do not cherry-pick the best run without saying so.
- Do not rewrite the prompt for only one side.
- Do not report only totals without notes.
- Do not hide where `pm-workbench` was weak.

## Current status

This folder starts with a reusable template rather than fabricated run records. Add actual run records when you have captured real side-by-side outputs.
