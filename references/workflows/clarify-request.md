# clarify-request

## Purpose

Use this workflow to turn a vague, messy, or solution-biased request into a discussable problem definition.

The goal is not to jump straight into solution design. The goal is to clarify:

- what is being asked
- what the real problem may be
- who is affected
- why it matters now
- what information is still missing

## Trigger phrases

Prefer this workflow when the user says things like:

- Help me unpack this request.
- What is this requirement actually asking for?
- My boss proposed something; help me break it down.
- This request feels vague.
- Is this a problem or a pre-baked solution?
- Don’t write the PRD yet; help me sort it out first.
- Business wants this, but I haven’t thought it through.

## Routing rules

Choose this workflow when one or more of the following is true:

1. The input describes a phenomenon, demand, or idea, but not a clear problem definition.
2. The input contains an obvious proposed solution without explaining why.
3. The user explicitly says they have not figured it out yet.
4. Target user, scenario, or success criteria are obviously missing.
5. Clarification is the real prerequisite before evaluation or design.

Do **not** use this workflow as the primary one when:

- the user wants to compare two mature options -> use `compare-solutions`
- the user wants a go / hold / no-go judgment -> use `evaluate-feature-value`
- the user already wants a document draft -> use a requirements workflow

## Minimum input

Start once you have at least 3-4 of these:

- original request text
- request source
- target user or stakeholder
- current background
- current problem as understood so far
- urgency or deadline

If the user gives only one sentence, still accept it and ask the highest-value follow-ups.

## Follow-up policy

### Default number of follow-ups

- Standard mode: 3-5
- Hurry mode: 1-3

### Highest-priority follow-ups

1. Who raised this request?
2. What result are they actually trying to achieve?
3. Who is affected, and in what scenario?
4. What evidence exists today?
5. What happens if nothing is done?

### Secondary follow-ups

- Is this describing a problem or already assuming a solution?
- Is there a success criterion?
- Why does this matter now?
- Are there time, resource, or technical constraints?

### Stop asking and start outputting when

- you can separate problem / goal / solution at a basic level
- you understand who is affected and why it matters now
- the user explicitly asks for a first pass
- further questioning would have sharply diminishing returns

### When to produce a v0

Produce a clearly labeled v0 when:

- the user is in a hurry
- the user wants a discussion starter instead of a final answer
- available context is enough for an initial clarification
- extra questions would interrupt momentum more than improve quality

If producing v0, explicitly label:

- assumptions
- missing information
- unstable parts of the judgment

## Processing logic

Follow this sequence:

1. Restate the original ask in clearer language.
2. Split the content into problem / goal / proposed solution.
3. Identify likely target user and scenario.
4. Separate facts from assumptions.
5. Mark the most important information gaps.
6. Recommend the next best move.
7. When useful, shape the output as a **Request Clarification Brief**.

## Common failure modes

Weak output usually looks like this:

- merely repeating the vague ask in cleaner words
- jumping straight into solution ideas
- asking too many questions and stalling momentum
- treating leadership language as if it were already a product problem statement
- producing “nice structure” without a sharper reframed question

## What strong output looks like

Strong output should:

- identify the real decision bottleneck before solving anything
- separate problem, goal, and embedded solution assumption clearly
- ask only the 1-2 questions that would change the framing most
- make ambiguity explicit instead of pretending confidence
- turn the messy ask into a sharper, reusable product question or clarification brief

## Output structure

Use this structure when helpful:

1. Task understanding
2. Request restatement
3. What the real problem likely is
4. Target user / scenario
5. Known facts
6. Key gaps / questions to confirm
7. Initial judgment
8. Suggested next step

Default artifact when the user needs something reusable:

- `references/templates/request-clarification-brief.md`

## Output length control

### Short

Use for chat surfaces:

- 1 short conclusion paragraph
- 3-5 bullet points
- 1-2 next steps

### Standard

Use for normal PM collaboration:

- full output structure above
- or a compact **Request Clarification Brief**

### Long

Use when the output will feed later documentation:

- standard structure plus clearer assumptions, background, and open questions

## Success criteria

A good result should give the user at least two of these outcomes:

- the vague ask is translated into clearer language
- problem and solution are separated
- target user / scenario is identified
- missing information is exposed
- the next action becomes obvious
- the output is reusable as a brief for later evaluation or stakeholder clarification

## Failure cases

Treat these as failures:

1. merely repeating the user’s wording
2. jumping straight into solution design
3. asking too many questions and stalling momentum
4. treating a complaint as fact without labeling assumptions
5. giving no next step

## Notes

Do not over-index on completeness. The point is to make the request workable, not to interrogate the user.
