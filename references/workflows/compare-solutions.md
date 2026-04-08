# compare-solutions

## Purpose

Use this workflow to compare two or more viable solution options and recommend the best path.

The goal is not to list abstract pros and cons. The goal is to help the user answer:
- which option best fits the real objective
- what each option optimizes for or sacrifices
- what the major trade-offs are
- which path should be recommended now

## Trigger phrases

Prefer this workflow when the user says things like:
- Help me compare these two options.
- Which solution should we choose?
- A and B both seem possible; how do we decide?
- Tech, design, and business all want different things.
- Help me explain the trade-offs.
- I need a recommendation, not just a list.

## Routing rules

Choose this workflow when one or more of the following is true:
1. There are already two or more concrete solution options.
2. The core task is choosing among alternatives, not defining the problem.
3. The user needs trade-off analysis and a recommendation.
4. The decision depends on balancing speed, impact, complexity, risk, or extensibility.

Do **not** use this workflow as the primary one when:
- the request itself is still fuzzy -> use `clarify-request`
- the question is whether to do the initiative at all -> use `evaluate-feature-value`
- there is only one option and the user needs it written up -> use a requirements workflow

## Minimum input

Try to gather:
- the target problem or objective
- option A / B / C descriptions
- evaluation criteria already known
- major constraints
- timeline pressure
- resource or dependency constraints

At minimum, start once you know:
- the decision objective
- at least two concrete options
- one or more meaningful constraints

## Follow-up policy

### Default number of follow-ups
- Standard mode: 3-5
- Fast decision mode: 2-3

### Highest-priority follow-ups
1. What is the primary objective of this decision?
2. What matters most right now: speed, impact, cost, risk, or long-term scalability?
3. What are the hard constraints?
4. What does each option clearly do better or worse?
5. Is a phased path possible, such as quick win first and scalable version later?

### Secondary follow-ups
- Which stakeholders prefer which option, and why?
- Which option is easiest to explain or align around?
- Which option creates the most downstream flexibility?
- Which option has the highest implementation risk?

### When to reduce questions
If the user already provided a structured comparison context, move quickly to analysis instead of re-interviewing them.

### Critical-premise rule
If the recommendation depends heavily on 1-2 missing facts, ask those before recommending a winner.
Typical examples:
- the true decision objective
- the primary constraint (speed, impact, cost, risk, long-term scalability)
- user maturity or audience profile

### When to produce a provisional recommendation
Do it when:
- the user is under time pressure
- the options are reasonably clear
- waiting for perfect information would delay the decision more than improve it

If the recommendation is provisional, label:
- decision assumptions
- major unknowns
- what could change the recommendation
- what can be decided now versus validated next

## Processing logic

Follow this sequence:
1. Restate the decision objective.
2. Identify what scarce resource or strategic advantage the decision should protect.
3. Define the evaluation criteria.
4. Summarize each option fairly.
5. Compare options against the most important criteria.
6. Highlight explicit trade-offs.
7. Recommend one path, or recommend a phased combination if appropriate.
8. State why not the other option now.
9. Give the next action.
10. When useful, shape the output as a **Decision Brief**.

## Common failure modes

Weak output usually looks like this:
- listing symmetrical pros and cons without choosing
- comparing options before stating the real decision objective
- using too many criteria and hiding the actual trade-off
- recommending a winner without explaining why not the others
- ignoring a staged path when that is clearly the highest-quality answer
- describing preferences instead of making a defendable decision

## What strong output looks like

Strong output should:
- define the real decision objective before comparing anything
- identify what the choice is protecting: trust, speed, focus, market window, or long-term leverage
- make the decisive trade-off explicit, not buried in a matrix
- choose a winner or staged path with a clear reason
- explain why the rejected option is not right now, not just why it is imperfect
- leave the team knowing what should happen next and what assumption carries the choice
- use condition-based language if uncertainty remains but a call is still needed

## Output structure

Use this structure when helpful:

1. Task understanding
2. Decision objective
3. What this decision is protecting
4. Evaluation criteria
5. Option-by-option summary
6. Comparison and trade-offs
7. Recommended option
8. Why not the others now
9. Decide now vs validate next
10. Suggested next step

Default artifact when the user needs something reusable:
- `references/templates/decision-brief.md`

## Output length control

### Short
For fast alignment:
- recommendation
- decisive trade-off
- why not the other option now
- next step

### Standard
For team discussion:
- full output structure above
- or a compact **Decision Brief**

### Long
For inclusion in a decision memo:
- standard structure plus assumptions, risks, and implementation implications

## Success criteria

A good result should:
- compare against decision criteria rather than personal preference
- make trade-offs explicit
- give a clear recommendation
- explain why other options are less suitable now
- leave the team knowing what to do next
- produce a reusable decision artifact when needed
- make the why-now / why-not-now logic visible

## Failure cases

Treat these as failures:
1. listing pros and cons without a recommendation
2. comparing options without a decision objective
3. using too many criteria and obscuring the real decision
4. favoring a solution without explaining the trade-off
5. ignoring the possibility of a phased path when that is clearly best

## Notes

Do not force a single winner if the best answer is a staged approach. The real job is decision quality, not artificial neatness.



## Forced-choice rule for company-stage calls

When the decision is really about where the company should spend a scarce period-level resource:
- default to a clear current-period choice
- do not let a staged path become a disguised non-decision
- if you recommend sequencing, explicitly state:
  - what we are choosing first
  - what we are not choosing first
  - why the non-chosen path is the wrong use of the current scarce resource now

A staged answer is only strong if the first-stage choice is unmistakable.

## Extra success criterion for company-level trade-offs
- when the trade-off is company-level, make the current-period primary call unmistakable
