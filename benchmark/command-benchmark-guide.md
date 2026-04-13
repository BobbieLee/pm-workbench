# Command benchmark guide

This guide exists for one specific reason:

**to make it easier to inspect whether `pm-workbench` preserves PM decision logic better than a general-purpose model when the job spans multiple PM steps.**

The normal benchmark already shows workflow-level differences.
This guide adds a second proof angle:

- where a general-purpose model may answer only the visible question
- where `pm-workbench` may perform better because it follows a more reliable PM sequence

## Why command-style benchmarking matters

A lot of real PM work is not one prompt deep.
The stronger pattern is often:

- clarify, then evaluate
- clarify, then compare
- prioritize, then roadmap, then summarize upward
- define the work, then define the metrics, then prepare the launch call

A generic model can still produce decent writing on each step.
But in some cases it may lose the thread across the sequence:

- it evaluates before the object is stable
- it compares before the decision objective is clear
- it writes a roadmap before the above-the-line call is real
- it writes an exec summary that sounds polished but is no longer anchored in the original product judgment

That is exactly the kind of difference this guide is trying to make easier to inspect.

## What to compare

When you benchmark command paths, do not only compare sentence quality.
Compare whether the system preserves decision logic **across the chain**.

## Recommended command-path test set

### 1. Clarify -> evaluate

Use when the visible ask is still unstable, but the real downstream job is a go / hold / no-go call.

Best repo companion example:

- [../examples/22-command-clarify-then-evaluate.md](../examples/22-command-clarify-then-evaluate.md)

What strong `pm-workbench` behavior should preserve across the chain:

- the evaluation object gets sharper after clarification
- the final recommendation is about the clarified problem, not the original slogan
- the opportunity cost is judged against a more stable frame

### 2. Prioritize -> roadmap -> exec summary

Use when the real job is not just ranking items, but turning a portfolio call into leadership-ready alignment.

Best repo companion example:

- [../examples/23-command-prioritize-roadmap-exec.md](../examples/23-command-prioritize-roadmap-exec.md)

What strong `pm-workbench` behavior should preserve across the chain:

- the period objective is visible in the ranking step
- the roadmap reflects the actual above-the-line decision
- the executive summary preserves the original trade-off instead of flattening it into status language

## Extra command-path scoring questions

Use the normal [rubric.md](rubric.md), then add these questions:

### 1. Did the logic survive across steps?

- did the clarified frame carry into evaluation
- did the priority call carry into roadmap and exec summary
- did later outputs stay anchored in the earlier decision, or drift into generic polish

### 2. Did the sequence solve the right PM job in the right order?

- clarification before evaluation when needed
- real prioritization before roadmap storytelling
- real decision before upward communication

### 3. Did the final artifact still reflect the original trade-off?

- is the final summary or recommendation visibly rooted in the earlier PM judgment
- or does it feel like a fresh standalone answer that forgot the chain

## What this guide is trying to prove

The point is not that `pm-workbench` can do more steps.
The point is that it may be better at preserving **PM decision integrity across steps**.

That is a more meaningful workbench advantage than just:

- cleaner formatting
- more headings
- longer answers

## Bottom line

If a generic model and `pm-workbench` look similar on one isolated answer, the next fair question is:

**Which one holds up better when the work becomes a real PM chain instead of a single prompt?**

This guide exists to help the repo examine that question with visible evidence.
