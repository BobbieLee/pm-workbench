---
workflow: draft-prd
category: artifact
when_to_use: "turn a clarified direction into a working PRD draft"
ask_intensity: medium
default_output: "PRD Lite"
trigger_signals:
  - draft PRD
  - write requirement
  - lightweight spec
misuse_guard:
  - do not use when a more upstream problem is still unresolved
  - do not force this workflow if the user mainly needs a different artifact
---

# draft-prd

## Purpose

Use this workflow to turn a reasonably clarified problem and proposed direction into a structured PRD or solution draft.

The goal is not to produce polished filler. The goal is to create a useful working draft that helps discussion, review, implementation, or iteration.

## Why this workflow exists

A PRD is where weak product thinking often hides behind structure.
Teams start writing because writing feels like progress, even when the problem, scope, or success logic is still soft.

This workflow exists to keep the document operational:

- define the problem before the feature bullets
- keep scope and non-goals explicit
- use the draft to reduce ambiguity, not to perform completeness

## What good looks like

Good output should:

- make problem, user, and goal legible in the first screen
- describe the simplest workable solution, not every imaginable feature
- state scope boundaries and open questions honestly
- be ready for review and execution discussion
- feel like a working draft, not a bloated pseudo-spec

## Common bad pattern

Common failure looks like this:

- jumping into requirements before stating the problem
- filling every section regardless of usefulness
- hiding uncertainty instead of marking TBDs
- writing a polished document that is not operationally usable
- expanding scope because the template made space for it

## Trigger phrases

Prefer this workflow when the user says things like:

- Help me draft a PRD.
- Turn this into a requirement document.
- Help me structure the solution.
- I have the idea; help me write it up.
- Give me a first draft for review.
- Help me map the user flow and edge cases.

## Routing rules

Choose this workflow when one or more of the following is true:

1. The problem and objective are already reasonably understood.
2. The user now needs a document or structured draft.
3. The task is to turn thinking into a usable artifact for collaboration.
4. The request is no longer mainly about whether to do it, but how to describe and structure it.

Do **not** use this workflow as the primary one when:

- the request is still fundamentally unclear -> use `clarify-request`
- the decision to proceed is still unresolved -> use `evaluate-feature-value`
- the key task is to choose among multiple solution options -> use `compare-solutions`

## Minimum input

Try to gather:

- background
- objective
- target user
- core scenario or use case
- proposed direction or feature scope
- success criteria
- constraints
- known dependencies

At minimum, start once you know:

- what problem is being solved
- for whom
- what direction is currently intended

## Follow-up policy

### Default number of follow-ups

- Standard mode: 3-5
- Fast draft mode: 2-3

### Highest-priority follow-ups

1. What core problem is this PRD solving?
2. Who is the target user or stakeholder?
3. What is the key user flow or scenario?
4. What counts as success after launch?
5. What constraints, dependencies, or edge cases must be respected?

### Secondary follow-ups

- What is in scope versus out of scope?
- What states, rules, or exceptions matter?
- What needs clarification before engineering or design review?
- Are there launch timing or compliance constraints?

### When to reduce questions

If the user already has a clear direction and mainly needs writing support, move into draft generation quickly.

### Critical-premise rule

If the document structure depends on 1-2 missing product facts, ask those first before drafting too confidently.
Typical examples:

- whether core supporting infrastructure already exists
- the main use case or product mode
- cross-platform or sync requirements

### When to produce a v0 draft

Do it when:

- the user wants a discussion draft
- enough information exists for a first structure
- unresolved items can be explicitly marked as TBD

When producing v0, clearly mark:

- assumptions
- TBD items
- decisions still pending

## Processing logic

Follow this sequence:

1. Restate the objective of the document.
2. Define the problem, user, and goal clearly.
3. Structure the core solution and user flow.
4. Add scope boundaries, rules, edge cases, and constraints.
5. Capture success metrics or acceptance signals if available.
6. Mark open questions and next actions.

## Output structure

Use this structure when helpful:

1. Document purpose
2. Background and problem statement
3. Target user / scenario
4. Goal and success criteria
5. Proposed solution
6. Core user flow
7. Scope and non-goals
8. Rules / edge cases / constraints
9. Risks / dependencies / open questions
10. Next step

## Output length control

### Short

For quick alignment:

- lightweight PRD skeleton with section headings and brief content

### Standard

For normal team review:

- full output structure above

### Long

For a more complete working draft:

- standard structure plus more detailed flows, edge cases, and decision notes

## Success criteria

A good result should:

- be structurally usable in a real team setting
- make the problem, user, and goal clear
- describe the proposed solution coherently
- call out missing decisions instead of hiding them
- help the user move toward review or implementation

## Failure cases

Treat these as failures:

1. writing generic filler with no real decision content
2. skipping problem / user / goal and jumping into feature bullets
3. hiding uncertainty instead of marking TBDs
4. producing a document that looks polished but is not operationally useful
5. ignoring scope boundaries or edge cases entirely

## Notes

A first PRD draft should reduce ambiguity, not pretend ambiguity no longer exists.
