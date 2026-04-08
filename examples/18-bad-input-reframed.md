# Example 18 — Bad input reframed into a better product question

## Why this example exists

`pm-workbench` should not only work on clean prompts.
One of its core jobs is to repair bad framing.

## Bad input
> “Users don’t like the onboarding. We should probably add an AI assistant walkthrough with tips, animations, and voice guidance. Can you help me write the PRD?”

## Why this input is bad
- it jumps to solution before proving the problem
- “users don’t like the onboarding” is too vague
- no evidence, no target user segment, no specific drop-off point
- it asks for a PRD before the framing work is done

## What `pm-workbench` should do
- stop the flow before PRD-writing
- separate observed problem, assumed cause, and proposed solution
- ask what evidence exists and where the onboarding failure actually occurs
- reframe the task into a clearer product question first

## Better reframed question
> “Where exactly is onboarding breaking for which user segment, and what intervention would reduce that friction most effectively without overbuilding?”

## Better next move
- clarify the drop-off point
- identify the affected segment
- decide whether the issue is comprehension, motivation, setup friction, or time-to-value
- only then evaluate possible fixes

## Why this is valuable
This is the difference between turning bad input into better thinking versus obediently turning bad input into a bad document.
