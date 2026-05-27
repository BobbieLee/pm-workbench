# Example 09 — Metrics Scorecard

## Scenario

A PM needs a practical measurement design for a feature or initiative, not just a random KPI list.

## Input

> "We’re about to launch conversation history search. Help me define the success metrics and guardrails we should use for launch review."

## What good output looks like

A strong `pm-workbench` response should:

- tie metrics to the real product goal
- separate the core success metric from leading indicators
- include meaningful guardrails
- define when judgment should happen
- note where interpretation could be noisy or misleading

## Expected output shape

**Metrics Scorecard**

## Example target output

# Metrics Scorecard

## 1. Measurement objective

Judge whether conversation history search helps repeat users retrieve prior work faster and return to valuable past context.

## 2. Core success metric

**Successful search-to-open rate:** percentage of searches that lead to opening a conversation result.

This is the best core metric because it connects search behavior to actual retrieval, not just query volume.

## 3. Leading indicators

- search adoption among users with multiple conversations
- searches per repeat user
- result click-through rate
- query refinement rate

## 4. Guardrail metrics

- no-result rate
- search latency
- support tickets or feedback about missing / wrong results
- permission or privacy-related issues

## 5. Baseline and target

Baseline may be unavailable before launch. Use the first week to establish baseline, then compare week 2-4 behavior by repeat-user segment.

Directional target: search should produce enough successful opens to show retrieval value beyond curiosity clicks.

## 6. Observation window

Review early usability signals after 1 week. Make the first product judgment after 4 weeks, once repeat users have enough history to search.

## 7. Interpretation notes

High search volume with low open rate may mean users want retrieval but results are weak. Low search volume may mean the entry point is hidden or the need is less frequent than assumed.

## 8. Recommendation for use

Use this scorecard to decide whether v1 keyword search is enough or whether the next investment should be semantic ranking, better filters, or improved entry placement.

## Why this is useful

Teams often confuse dashboard activity with product success. A scorecard helps define what actually counts and when to make a call.
