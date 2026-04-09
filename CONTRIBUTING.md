# Contributing to pm-workbench

Thanks for improving `pm-workbench`.

This project is trying to become more than “a pile of PM prompts.”
The bar is higher:

- sharper PM judgment
- stronger reusable artifacts
- cleaner GitHub discovery and adoption
- better support for real product work under ambiguity and constraints

## What good contributions look like

The best contributions usually do one of these:

- improve routing quality between workflows
- improve judgment quality inside a workflow
- add a genuinely reusable PM artifact
- add a realistic example that helps cold readers understand value fast
- reduce adoption friction in docs or onboarding
- strengthen product-leader usefulness, not just IC PM usefulness
- make the benchmark layer more inspectable, fair, or honest

## What to avoid

Please avoid contributions that mainly:

- add frameworks without improving decisions
- add long prompt-y filler that sounds smart but changes little
- add heavy templates no one would really use
- expand scope without improving clarity
- make README claims that cannot be verified from the repo
- improve structure while weakening judgment sharpness

## Project principles

### 1. Upstream first

If a request is still unclear, the skill should clarify before pretending evaluation or drafting is the real next step.

### 2. Artifact-first where it matters

Strong outputs should be reusable with light editing.
If a new workflow deserves to exist, think about its natural artifact too.

### 3. Ask less, but ask better

Follow-up questions should exist to improve judgment, not to satisfy form completeness.

### 4. Trade-offs over theatrics

Good PM work is rarely just “pros and cons.”
Prefer explicit recommendation, downside, assumption, and next move.

### 5. Honest docs

If the repo does not yet support something clearly, do not imply it does.
Trust compounds. So does README fluff.

### 6. The artifact is not the judgment

A cleaner template is useful only if it helps sharper PM output.
If a change makes the repo look more complete but the decision quality gets softer, it is not a good trade.

## Typical contribution types

## A. Improve an existing workflow

Touch:

- `SKILL.md` only if the change affects global behavior
- matching file in `references/workflows/`
- matching example(s) if the output shape changed
- `CHANGELOG.md`

Questions to ask:

- did the workflow become more decisive?
- did it become more reusable in real PM work?
- did it reduce ambiguity or just add more words?
- did it become sharper on why now / why not now / what waits?

## B. Add a new artifact template

Touch:

- new file under `references/templates/`
- relevant workflow reference
- `SKILL.md` artifact mapping if needed
- at least one example showing when and why it matters
- `README.md` only if the new artifact materially changes the repo story

Questions to ask:

- is this a real PM artifact or just formatted commentary?
- does it make the output easier to reuse?
- does it strengthen judgment, or only structure?

## C. Improve onboarding / GitHub conversion

Touch:

- `README.md`
- `docs/GETTING-STARTED.md`
- `docs/TRY-IN-3-MINUTES.md`
- `examples/README.md`
- image or diagram assets only when they help understanding quickly

Questions to ask:

- would a new visitor understand what this project does in under 60 seconds?
- can they verify value without guessing?
- can they get to a meaningful first trial in under 3-10 minutes?

## D. Improve benchmark credibility

Touch:

- `benchmark/README.md`
- benchmark worked examples
- rubric / scorecard / scenarios if needed
- `README.md` only if the benchmark story changes materially

Questions to ask:

- does this make the comparison chain easier to audit?
- does it reduce self-serving ambiguity?
- does it state limitations honestly?

## Suggested quality checklist

Before submitting a contribution, check:

- the change improves actual PM usefulness, not just surface polish
- docs and examples stay consistent
- file references are not broken
- `npm run validate` passes from `skills/pm-workbench`
- the project still reads like one coherent product, not disconnected additions
- `openclaw skills info pm-workbench` still works in a local workspace
- `openclaw skills check` still recognizes the skill as ready

## Example contribution ideas

High-value areas:

- better product-leader / VP / founder communication patterns
- stronger roadmap and sequencing support
- better metric design outputs for ambiguous launches
- clearer prioritization and “below the line” explanation patterns
- benchmark scenarios for evaluating the skill against generic AI behavior
- contributor tooling or lightweight validation guidance
- more “bad input corrected” examples

## If you add something substantial

Please also update:

- `CHANGELOG.md`
- `ROADMAP.md` if the roadmap should change
- example coverage if the user-visible output changed materially

## Final taste check

A good addition should make someone say:

> “Yep, this would actually help me do PM work better.”

If it only makes the repo look busier, it probably should not be merged.
