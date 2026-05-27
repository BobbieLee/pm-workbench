# Example 02 — Feature Evaluation Memo

## Scenario

A team proposes a feature that may be a gimmick, and the PM needs a clear recommendation.

## Input

> "Operations wants a daily AI fortune card feature to improve engagement. I’m worried it’s a gimmick. Help me evaluate it."

## What good output looks like

A strong `pm-workbench` response should:

- ask about the minimum critical premises if they affect the recommendation
- evaluate user value, business value, strategic fit, and opportunity cost
- avoid jumping straight from enthusiasm to shipping
- produce a decision-ready memo

## Expected output shape

**Feature Evaluation Memo**

## Example target output

# Feature Evaluation Memo

## 1. Request summary

Operations wants a daily AI fortune card to increase engagement and create a more shareable product moment.

## 2. Problem behind the request

The real problem is not yet "users need fortune cards." The likely underlying concern is that users do not return often enough or do not feel enough lightweight delight inside the product.

That is a retention / habit question, not a feature-format question.

## 3. Target user and scenario

The assumed user is an existing user who might open the product more often if there is a daily AI-generated prompt. The scenario is weakly defined because we do not yet know whether users want a motivational card, a work summary, a task nudge, or anything daily at all.

## 4. Expected value

### User value

Potential value is low to medium. The feature may create a moment of novelty, but it does not clearly solve a recurring work need.

### Business value

Possible value is engagement lift, sharing, or retention support. Current confidence is low because "daily engagement" can become empty activity if it does not connect to core product value.

### Strategic value

Weak unless the product positioning is explicitly playful or consumer-like. For a productivity or collaboration product, this risks feeling like a gimmick beside more important retention work.

## 5. Evidence and confidence

### Existing evidence

- Ops believes engagement could improve.
- No user evidence is provided.
- No retention or usage data is provided.

### Missing evidence

- Whether users want daily AI prompts inside this product.
- Whether low engagement is caused by lack of delight or by weak core workflow value.
- Whether this would improve meaningful retention rather than notification clicks.

### Confidence level

Low. The idea is vivid, but the value hypothesis is not proven.

## 6. Cost, complexity, and risk

Build cost may be moderate if it needs content generation, personalization, notification logic, abuse controls, and UX polish.

Main risks:

- novelty wears off quickly
- product feels less serious or less useful
- roadmap attention shifts away from core retention work
- engagement metrics improve superficially without durable value

## 7. Trade-offs

If this gets a roadmap slot, it likely displaces work that improves the actual reason users return. That is a poor trade unless there is evidence that delight is the current retention bottleneck.

## 8. Recommendation

**Recommended decision:** do not build this as a full feature now.

If stakeholders feel strongly, run a lightweight experiment instead.

**Why this is the right call:**

- The feature format is clearer than the problem it solves.
- The expected retention value is unproven.
- It may create attention without strengthening core product value.
- A small test can answer the engagement hypothesis without committing roadmap capacity.

## 9. Conditions that may change the decision

This could move up if:

- user research shows users want a daily reflective or summary moment
- the card connects directly to a core workflow, not generic motivation
- a no-code or low-code experiment shows repeat usage lift beyond novelty

## 10. Next actions

Run a small test framed as a retention hypothesis:

- define the target segment
- test one lightweight version for 1-2 weeks
- measure repeat engagement, downstream core action, and user sentiment
- do not commit full build until the test shows durable behavior change

## Why this is useful

Many PM decisions fail because evaluation stays verbal and vague. A structured memo makes the recommendation easier to discuss, challenge, and act on.
