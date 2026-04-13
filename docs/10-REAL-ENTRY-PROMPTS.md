# 10 real entry prompts

Use this page when you do **not** want theory first.
You just want a realistic starting prompt that fits how `pm-workbench` is meant to be used.

These are not generic productivity prompts.
They are written to show `pm-workbench` as an **OpenClaw-native PM workbench** for messy real product work.

## 1. Boss request is vague

> My boss said our AI product needs more wow factor. Help me unpack what that actually means, separate the real problem from the implied solution, and tell me what we should clarify before proposing features.

**Best fit:** `clarify-request`

---

## 2. Stakeholder wants a feature that may be a gimmick

> Ops wants a daily AI fortune card feature because they think it will improve engagement. I’m not convinced this is a meaningful product move. Help me evaluate whether this is worth doing now, what value it would really create, and whether the right answer is go, hold, no-go, or small experiment.

**Best fit:** `evaluate-feature-value`

---

## 3. Founder needs a real trade-off call

> I need a recommendation, not just options. Compare these two paths for our AI product: a faster marketable AI layer that demos well now, versus a slower path that improves trust and core product quality. Make a single current-period recommendation and explain why the other path should not get the main focus right now.

**Best fit:** `compare-solutions`

---

## 4. Quarter is overloaded

> I lead product for an AI collaboration tool. We only have room for 3 priorities next quarter. Candidate items are AI answer quality tuning, enterprise audit logs, onboarding simplification, workspace sharing, admin billing controls, search, and referral growth loop. CEO wants growth, sales wants enterprise readiness, and support keeps escalating onboarding confusion. Help me prioritize this quarter and say what is clearly below the line.

**Best fit:** `prioritize-requests`

---

## 5. Need a lightweight PRD, not a giant spec

> We have already decided to simplify onboarding for new team admins because setup friction is suppressing activation. Draft a lightweight PRD with the problem, goal, target user, core flow, in-scope and out-of-scope areas, edge cases, and open questions we should resolve before engineering review.

**Best fit:** `draft-prd`

---

## 6. Need a roadmap story leadership can align on

> Help me turn this quarter’s priorities into a roadmap leadership can align on. I need a single stage goal, a believable sequence, and a clear statement of what is intentionally not the focus this period.

**Best fit:** `build-roadmap`

---

## 7. Launch metrics are still fuzzy

> We are about to launch a premium AI meeting summary workflow. Help me define how success should be measured. I want one core metric, a few supporting metrics, at least one guardrail, and a practical review window so we know whether the launch is actually working.

**Best fit:** `design-metrics`

---

## 8. Need an executive summary with an ask

> Help me write a one-page update for leadership. User satisfaction with our premium AI summary workflow is strong, but activation is low because setup friction is still too high. I want to recommend that we do not scale marketing yet, spend 6 weeks fixing activation, and request one temporary frontend engineer.

**Best fit:** `prepare-exec-summary`

---

## 9. Launch underperformed and we need a real postmortem

> This launch underperformed versus expectations. Help me write a postmortem that compares expected versus actual results, identifies the most likely causes, separates what we know from what we are inferring, and ends with concrete changes for the next launch.

**Best fit:** `write-postmortem`

---

## 10. Leadership review is full of mixed signals

> I need help making sense of a messy product review. Revenue is up, retention is flat, support load is rising, and the team is split on whether we should keep pushing growth or slow down to fix quality. Help me turn this into a leadership-ready product judgment with the main diagnosis, the current-period focus, and the explicit ask.

**Best fit:** `prepare-exec-summary` or `prioritize-requests`

## How to use these prompts well

### Replace the placeholders with your real context

Swap in your:

- product
- users
- stakeholders
- deadlines
- constraints
- actual candidate priorities

### Keep the decision pressure

These prompts work because they preserve the real tension:

- unclear problem
- limited capacity
- political pressure
- business consequence
- need for a reusable output

If you remove all tension, you also remove most of the value of the workbench.

### Ask for a v0 when speed matters

If you are in a rush, add a line like:

> Give me a v0 first with assumptions called out.

That usually works better than waiting for perfect context.

## If you want the next step after this page

- not sure which workflow fits -> [SCENARIO-ROUTER.md](SCENARIO-ROUTER.md)
- want a higher-level route -> [COMMANDS.md](COMMANDS.md)
- want the 10-minute test set -> [TRY-3-PROMPTS.md](TRY-3-PROMPTS.md)
- want full repo orientation -> [../START_HERE.md](../START_HERE.md)

## Bottom line

These prompts are meant to get you into real PM work fast.
That is the point of `pm-workbench`.
