# Example 05 — Postmortem Lite

## Scenario

A launch or feature underperformed, and the team needs a lightweight but useful review.

## Input

> "We launched a feature last month and adoption was weaker than expected. Help me write a lightweight postmortem."

## What good output looks like

A strong `pm-workbench` response should:

- compare expected vs actual clearly
- identify root causes, not just symptoms
- avoid blame-heavy language
- extract specific lessons and next actions
- produce a review format the team can reuse

## Expected output shape

**Postmortem Lite**

## Example target output

# Postmortem Lite

## 1. What was reviewed

The launch of a new feature last month. Adoption was weaker than expected during the first review window.

## 2. Original goal

The feature was expected to increase repeat usage by giving existing users a more useful reason to return to the product.

## 3. Outcome summary

Adoption was below expectation. The feature reached users, but not enough users tried it repeatedly for it to become a meaningful retention lever.

## 4. Expected vs actual

### Expected

Users would discover the feature, understand its value, and use it in recurring workflows.

### Actual

Initial exposure happened, but repeat usage stayed weak.

### Gap

The plan overestimated how obvious the feature value would be without stronger onboarding, placement, or workflow integration.

## 5. What worked

- The feature shipped without major delivery delay.
- Early qualitative feedback from a small group was positive.
- The team learned quickly that awareness and repeat value were weaker than expected.

## 6. What did not work

- Discovery was not strong enough.
- The feature was not tied clearly enough to a high-frequency user job.
- Success measurement focused too much on launch exposure and not enough on repeat use.

## 7. Likely causes

The main issue appears to be weak product integration, not only launch communication. Users did not see a strong enough reason to make the feature part of their normal workflow.

## 8. Key lessons

- Do not treat interest in the idea as proof of repeat behavior.
- Define the repeat-use scenario before launch.
- Measure adoption quality, not only exposure.

## 9. Action items

- Identify the highest-frequency scenario this feature should support.
- Improve entry points or contextual placement.
- Add a repeat-usage metric to the launch scorecard.
- Re-review in 4 weeks before expanding scope.

## 10. Reusable takeaway

For future launches, require a clear repeat-use path before treating a feature as a retention lever.

## Why this is useful

Postmortems are often either too shallow or too blameful. This template helps teams learn in a way that improves future product decisions.
