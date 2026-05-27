# Example 06 — Decision Brief

## Scenario

A team has two credible product directions and needs a recommendation with explicit trade-offs.

## Input

> "We can either add AI-generated onboarding suggestions directly into first-run or keep onboarding simple and add suggestions only after the user finishes their first task. Help me compare the two and recommend one."

## What good output looks like

A strong `pm-workbench` response should:

- restate the real decision objective
- compare the options against the criteria that actually matter
- make trade-offs explicit instead of hiding behind symmetry
- recommend one path, or a phased path, with clear reasoning
- explain why not the other option **now**, not just why it is imperfect

## Expected output shape

**Decision Brief**

## Example target output

# Decision Brief

## 1. Decision to be made

Should AI-generated onboarding suggestions appear during first-run, or only after the user completes their first task?

## 2. Decision objective

Improve user activation without overwhelming users before they understand the product's core value.

## 3. What this decision is protecting

The decision should protect first-use clarity. The user needs to reach value quickly; extra intelligence is helpful only if it reduces confusion rather than adding noise.

## 4. Options under consideration

### Option A - AI suggestions during first-run

Shows AI-generated guidance immediately during onboarding.

### Option B - AI suggestions after first task

Keeps onboarding simple, then introduces suggestions once the user has completed one meaningful action.

## 5. Comparison and trade-offs

Option A may create a stronger AI impression earlier, but it risks adding cognitive load when the user is still trying to understand the product.

Option B is less flashy, but it protects the core activation path and introduces AI assistance when the user has more context.

The decisive trade-off is first-use impressiveness versus first-use clarity.

## 6. Current call

Recommend **Option B: introduce AI suggestions after the first task**.

This is the better current-period choice because the activation goal depends more on helping users reach first value than on showing AI capability immediately.

## 7. Why not Option A now

Option A may be useful later if onboarding data shows users understand the basics but want more guidance. Right now, it is more likely to make the first-run experience feel heavier.

## 8. What would change this call

The call could change if user testing shows that first-run suggestions reduce time-to-value without increasing drop-off or confusion.

## 9. Next action

Prototype Option B and test whether post-task suggestions increase second action rate, next-session return, and perceived usefulness.

## Why this is useful

Teams often have multiple “reasonable” options and get stuck in circular debate. A decision brief helps move from comparison theater to an actual recommendation.
