# Failure regression checks

Use this file to guard against regressions that make `pm-workbench` sound polished but less useful.

These are not full benchmark runs. They are quick failure checks: if the output shows the weak pattern, the skill needs more work even if the response is well written.

## How to use

For each scenario:

1. Run the prompt with `pm-workbench`.
2. Inspect the output for the failure pattern.
3. Mark pass / fail.
4. If it fails, update the relevant workflow, template, example, or benchmark note.

## Regression 1 - Vague "wow factor" becomes feature brainstorming

### Prompt

> My boss said our AI product needs more wow factor because competitors look more exciting in demos. Help me think through what we should do.

### Must not do

- jump straight into feature ideas
- treat "wow factor" as a stable product requirement
- recommend visible AI features before clarifying the problem

### Must do

- clarify what "wow factor" could mean
- separate problem from implied solution
- ask at most 1-2 decision-changing questions
- recommend a clarification pass before build decisions

## Regression 2 - Top 4 disguised as top 3

### Prompt

> We only have capacity for 3 priorities next quarter. Candidate items are onboarding, AI quality, enterprise audit logs, referral growth, workspace sharing, search, and billing controls. Help me prioritize.

### Must not do

- recommend more than 3 top priorities
- say every item is important without a below-the-line call
- use a score table without a current-period recommendation

### Must do

- state the period objective
- name exactly 3 top priorities
- name below-the-line items
- explain the opportunity cost

## Regression 3 - Exec summary has no ask

### Prompt

> Help me write a leadership update. The feature test had strong satisfaction among activated users, but activation was low because setup friction is high.

### Must not do

- summarize the situation without a recommendation
- bury the decision
- omit support, decision, or next step needed from leadership

### Must do

- lead with the bottom line
- connect the issue to business consequence
- include an explicit ask or decision point
- separate decide-now from validate-next when useful

## Regression 4 - Roadmap becomes backlog with dates

### Prompt

> Help me turn next quarter's priorities into a roadmap. We need activation, retention, enterprise credibility, growth loops, search, and collaboration improvements.

### Must not do

- list every item as a roadmap lane
- give dates without a controlling thesis
- hide non-focus areas

### Must do

- state a single stage goal
- sequence work by dependency and capacity
- explain what is not the focus
- surface the main risk to focus

## Regression 5 - Mixed signals become status recap

### Prompt

> Activation is up, retention is flat, support tickets remain high, sales likes enterprise interest, and AI reliability complaints continue. Help me prepare a monthly product review.

### Must not do

- restate metrics one by one
- avoid a dominant diagnosis
- end without a next-period focus

### Must do

- synthesize the signal pattern
- produce a dominant operating diagnosis
- name above-the-line and below-the-line focus
- state the leadership ask

## Regression 6 - Founder review becomes motivational

### Prompt

> Traffic is up after a partnership push, but trial-to-paid conversion is weak and retention is uneven. Investors want a stronger story. Help me prepare a founder business review.

### Must not do

- treat traffic as business quality
- write a motivational update
- recommend more visible AI features without tying them to conversion, retention, or revenue

### Must do

- separate narrative momentum from business truth
- identify the main business call
- name what to double down on and what to avoid
- end with a founder decision ask

## Pass condition

The run passes only if the output avoids the weak pattern and satisfies the required behavior. Good formatting alone is not a pass.
