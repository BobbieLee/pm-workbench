# design-metrics

## Purpose

Use this workflow to define how success will be measured for a product, feature, initiative, or period of work.

The goal is not to generate a random metric list. The goal is to help the user decide:

- what outcome actually matters
- what leading and lagging signals to watch
- what guardrail metrics are needed
- how and when success should be judged

## Trigger phrases

Prefer this workflow when the user says things like:

- What metrics should we use here?
- How should we measure success?
- Help me design the KPI set.
- What should we watch after launch?
- I need north-star / core metrics for this effort.
- How do we know whether this worked?

## Routing rules

Choose this workflow when one or more of the following is true:

1. The user needs a success measurement framework for a defined effort.
2. The main task is turning a goal into measurable signals.
3. The user needs result metrics, process metrics, or guardrails.
4. The question is not "why did growth stall" but "what should we measure and how".

Do **not** use this workflow as the primary one when:

- the underlying problem or goal is still unclear -> use `clarify-request`
- the user needs diagnosis of poor results -> use `diagnose-growth-problem`
- the user mainly needs a roadmap or prioritization judgment -> use planning/evaluation workflows

## Minimum input

Try to gather:

- initiative or feature
- target outcome
- target user or business area
- expected impact path
- baseline or current state if known
- observation window
- known risks or side effects

At minimum, start once you know:

- what is being measured
- what success is supposed to mean
- what audience will use the metrics

## Follow-up policy

### Default number of follow-ups

- Standard mode: 3-5
- Fast setup mode: 2-3

### Highest-priority follow-ups

1. What is the most important outcome this effort is supposed to drive?
2. Through what mechanism is that outcome expected to improve?
3. Who or what segment does this apply to?
4. What baseline or current signal do we already have?
5. What side effects do we need to watch?

### Secondary follow-ups

- What is the observation window?
- Which metrics are good for early warning versus final judgment?
- What metric would be easiest to game or misread?
- Who will read these metrics: PM, leadership, ops, growth, engineering?

### When to reduce questions

If the user mainly wants a usable metric set quickly, avoid over-theorizing and move to a practical structure.

### When to produce a first-pass metric design

Do it when:

- the goal and initiative are reasonably clear
- baseline data is incomplete but the measurement logic is still designable
- the user needs a working set for launch or review planning

If producing a first pass, explicitly label:

- missing baseline data
- provisional thresholds
- metrics that need final owner confirmation

## Processing logic

Follow this sequence:

1. Restate the business or product goal.
2. Identify the core outcome metric.
3. Identify leading / process metrics that connect to the outcome.
4. Add guardrail metrics to catch harmful side effects.
5. Define observation window and interpretation notes.
6. Recommend how to use the metric set in decision-making.
7. When useful, shape the output as a **Metrics Scorecard**.

## Output structure

Use this structure when helpful:

1. Task understanding
2. Measurement objective
3. Core success metric
4. Leading / process metrics
5. Guardrail metrics
6. Observation window and judgment rule
7. Notes on interpretation or risk
8. Suggested next step

Default artifact when the user needs something reusable:

- `references/templates/metrics-scorecard.md`

## Output length control

### Short

For immediate setup:

- 1 core metric
- 2-4 supporting metrics
- 1-2 guardrails
- observation note

### Standard

For normal PM usage:

- full output structure above
- or a compact **Metrics Scorecard**

### Long

For launch docs or leadership review:

- standard structure plus metric definitions, caveats, and ownership notes

## Success criteria

A good result should:

- tie metrics to a clear goal
- distinguish outcome from process signals
- include at least one meaningful guardrail when relevant
- explain how success will be judged, not just what will be watched
- reduce later ambiguity around evaluation
- make the metric set easy to reuse in launch or review discussions

## Failure cases

Treat these as failures:

1. listing too many metrics with no hierarchy
2. using only vanity metrics
3. ignoring guardrails when side effects are plausible
4. failing to connect metrics to the causal path of the feature or initiative
5. forgetting to define when judgment should happen

## Notes

A metric set is only useful if it helps a future decision. Design for judgment, not dashboard decoration.
