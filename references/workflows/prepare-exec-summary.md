---
workflow: prepare-exec-summary
category: communication
when_to_use: "compress analysis into a leadership-ready recommendation"
ask_intensity: low
default_output: "Executive Summary"
trigger_signals:
  - exec summary
  - leadership update
  - one-page
misuse_guard:
  - do not use when a more upstream problem is still unresolved
  - do not force this workflow if the user mainly needs a different artifact
---

# prepare-exec-summary

## Purpose

Use this workflow to compress a complex topic into an executive-ready summary for a boss, leadership, or another decision-maker.

This is not just a summary. It is a short note meant to help a boss or leader make a decision.
It should quickly cover:

- the conclusion
- why it matters
- the few facts that support it
- the main risk
- the support or decision needed

## Why this workflow exists

A lot of “exec summaries” are just cleaned-up working notes.
They preserve too much process, bury the conclusion, and avoid the explicit ask.

This workflow exists to make upward communication actually decision-ready:

- lead with the call
- keep only the evidence needed to support it
- make the ask and the why-now logic unmissable

## What good looks like

Good output should:

- land the conclusion in the first screen
- tie the call to business consequence, timing, or resource logic
- state the ask explicitly
- distinguish decide-now from validate-next
- sound like something leadership can respond to immediately

## Common bad pattern

Common failure looks like this:

- leading with background instead of conclusion
- writing polished status notes instead of a decision memo
- mentioning risk without saying what should happen because of it
- implying the ask instead of stating it
- drowning the note in detail and draining out decision signal

## Trigger phrases

Prefer this workflow when the user says things like:

- Help me prepare a summary for my boss.
- Compress this into one page.
- How should I say this to leadership?
- Help me turn this into an executive summary.
- Make this sound like an upward report.
- Help me prepare what I should say in the meeting.

## Routing rules

Choose this workflow when one or more of the following is true:

1. The audience is a boss, leadership, or decision-maker.
2. The user wants to compress analysis into upward communication.
3. The user needs "how to say it," not more analysis.
4. The summary needs clear decisions, risks, or asks.

Do **not** use this workflow as the primary one when:

- the user still needs the actual analysis -> first run the relevant analysis workflow
- the user only needs meeting notes -> use a summary / notes path instead
- the user needs a PRD or product solution document -> use a requirements workflow

## Minimum input

Try to gather:

- summary topic
- current conclusion or judgment
- most important evidence
- current status or progress
- main risk or blocker
- desired decision / ask / support
- audience

At minimum, start once you know:

- the topic
- the current judgment
- the audience

## Follow-up policy

### Default number of follow-ups

- Standard mode: 2-4
- Fast mode: 1-2

### Highest-priority follow-ups

1. What do you want the audience to do after hearing this?
2. What does this audience care about most: outcome, risk, resource, or timing?
3. What is the single most important conclusion?
4. What is the strongest evidence behind it?
5. What is the biggest current risk?

### When not to ask much more

If the user already has sufficient analysis but needs sharper upward expression, shift quickly into restructuring. Do not turn the task back into a long diagnosis.

### Critical-premise rule

If the summary would materially change based on 1-2 missing facts, ask those first unless time is obviously tight.
Typical examples:

- the real purpose of the communication
- the audience's main concern
- whether the user needs a decision ask, a risk alert, or a status summary

### When to produce a fast version immediately

Do it when:

- the meeting is imminent
- the user explicitly wants a first version they can say out loud
- the conclusion and ask are already mostly clear

## Processing logic

Follow this sequence:

1. Clarify the purpose of this communication.
2. Distill 1-3 top conclusions.
3. Decide what needs to be decided now versus validated next.
4. Keep only the minimum evidence needed to support those conclusions.
5. Highlight the main risk or blocker.
6. Clarify the ask, decision point, or support needed.
7. Produce both a written summary and a spoken version when useful.

## Readiness / launch-call rule

When the real issue is launch timing, rollout confidence, or readiness under pressure:

- structure the answer as a decision call, not a risk memo
- make clear:
  - the current recommendation
  - the readiness gap
  - the consequence of pushing ahead anyway
  - what confidence is based on
  - what support or decision is needed now

Avoid fake confidence, but do not retreat into generic caution language.

## Output structure

Use this structure when helpful:

1. Summary topic
2. Conclusion first
3. Why this matters now
4. Current situation / key evidence
5. Main risks or issues
6. Recommendation and ask
7. Decide now vs validate next
8. Direct spoken version

## Output length control

### Fast meeting version

Use when the user needs something immediately:

- 1-3 conclusions
- 1-2 risks
- 1-2 asks
- one spoken paragraph

### Standard

Use for chat, memo, or message drafts:

- full output structure above

### One-page version

Use for a more formal exec brief:

- standard structure plus tighter status and timeline detail

## Success criteria

A good result should:

- make the conclusion visible immediately
- avoid reading like a meeting transcript
- surface meaningful risk
- include a clear ask or decision point
- be usable without a lot of extra explanation
- make it obvious why now, why not later, or why not the alternative

## Failure cases

Treat these as failures:

1. writing meeting notes instead of an executive summary
2. leading with process instead of conclusion
3. listing risks without a recommendation
4. giving recommendations without enough support
5. failing to state the ask clearly
6. drowning the summary in detail

## Notes

Executives usually do not need the full journey. Prioritize what matters for judgment, resourcing, timing, and risk.

## Launch-call type rule

When the real issue is launch timing, rollout confidence, or readiness under pressure, force the recommendation into one of these explicit call types unless the user clearly asked for a looser draft:

- **commit to launch**
- **commit to limited / gated launch**
- **delay launch**
- **do not lock the date yet; lock a decision checkpoint instead**

The output should make clear:

- the current recommendation
- the main readiness gap
- the consequence of pushing ahead anyway
- what support or decision is needed now
- why the other launch-call types are not the current recommendation

## Extra success criterion for launch-pressure communication

- in launch-pressure situations, land on an explicit launch-call type rather than vague "cautious progress" language
