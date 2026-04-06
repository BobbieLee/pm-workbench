# evaluate-feature-value

## Purpose

Use this workflow to judge whether a feature, request, or initiative is worth doing and roughly how it should be prioritized.

The core questions are:
- is there real value here
- who benefits and how much
- what business or strategic upside exists
- what it costs to do
- whether the recommendation is go / hold / no-go

## Trigger phrases

Prefer this workflow when the user says things like:
- Is this requirement worth doing?
- Should we build this feature?
- Help me evaluate this request.
- Should this go into the next version?
- My boss wants this; help me assess it.
- Business keeps pushing, but I’m not sure it’s valuable.
- Is this direction worth investing in?

## Routing rules

Choose this workflow when one or more of the following is true:
1. The user’s main question is whether to do something.
2. The user asks about value, priority, or return on effort.
3. The user wants a recommendation, not just a framework.
4. The object being evaluated is already reasonably defined.

Do **not** use this workflow as the primary one when:
- the object itself is still too fuzzy -> use `clarify-request`
- the decision is already made and the user needs solution design -> use a requirements workflow
- the main task is comparing multiple mature options -> use `compare-solutions`

## Minimum input

Try to gather these:
- feature or request description
- source of the request
- target user
- current problem or opportunity
- expected upside
- rough resource cost or complexity
- current team / business objective

If you only have the first four, you can still produce an initial evaluation.

## Follow-up policy

### Default number of follow-ups
- Standard mode: 3-5
- Fast evaluation: 2-3

### Highest-priority follow-ups
1. Whose problem does this solve?
2. How painful or frequent is the problem?
3. What result does it affect: experience, retention, conversion, revenue, strategic position, efficiency?
4. What happens if we do not do it?
5. Roughly how much resource does it need?

### Secondary follow-ups
- Is there a lighter alternative?
- How large is the beneficiary group?
- Does this align with the current stage goal?
- What is the biggest risk?
- Are there obvious dependencies?

### When to avoid more questions
If the user already gave strong context on user, goal, upside, and constraints, do not ask extra questions just to fill a template.

### Critical-premise rule
If the recommendation would materially change based on 1-2 missing facts, ask about those facts first before giving a strong go / hold / no-go conclusion.
Typical examples:
- product positioning or target market
- current stage goal
- impact scope
- rough cost or operational constraint

### When to give only an initial evaluation
Limit confidence and label assumptions when major gaps remain, especially if:
- target user is unclear
- evidence of value is unclear
- cost is largely unknown
- current stage goal is unclear

In those cases, use language like:
- Based on current information, I lean toward...
- This currently looks more like...
- The judgment would be stronger if X were confirmed.

## Processing logic

Follow this sequence:
1. Confirm the object being evaluated.
2. Judge the importance of the problem.
3. Judge user value.
4. Judge business / strategic value.
5. Judge effort, complexity, and risk.
6. Produce a go / hold / no-go recommendation.
7. Add a rough priority and next step.

## Output structure

Use this structure when helpful:

1. Task understanding
2. Evaluation object
3. User value judgment
4. Business / strategic value judgment
5. Effort / risk judgment
6. Overall recommendation
7. Priority suggestion
8. Suggested next step

## Output length control

### Short
For fast decision support:
- conclusion
- top 3 reasons
- next step

### Standard
For team discussion:
- full output structure above

### Long
For inclusion in a formal document:
- standard structure plus more assumptions, supporting detail, and risk commentary

## Success criteria

A good result should:
- give a clear recommendation
- explain where the value comes from
- consider user value, business value, strategic fit, cost, and risk
- give a rough priority
- give the next action

## Failure cases

Treat these as failures:
1. talking only about upside and ignoring cost
2. assuming boss requests are automatically high value
3. giving vague language without a recommendation
4. failing to separate evidence from inference
5. giving no priority signal
6. treating a single user request as proof of strong demand

## Notes

Do not hide behind frameworks. Use them if helpful, but the user mainly needs a judgment they can act on.