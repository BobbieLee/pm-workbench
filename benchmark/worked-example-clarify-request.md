# Worked example — vague leadership ask clarification

This is an **illustrative comparison artifact**, not a scientific benchmark claim.

Its job is simple:

- show how a generic AI answer often fails on upstream PM framing
- show what `pm-workbench` should do better
- make the difference legible to a cold GitHub visitor in under 2 minutes

---

## Original input

### Prompt

> My CEO keeps saying our AI workspace product needs more of a “wow factor” because competitors feel more exciting in demos. Help me figure out what that actually means before we jump into building random features.

### Why this is a useful test case

This prompt is intentionally dangerous.
It contains:

- executive pressure
- solution gravity
- a vague success word
- competitor anxiety

A weak system will jump straight into feature ideation.
A stronger PM workflow should notice that the real problem is still framing.

---

## Representative generic AI output

### Typical shape

- immediately brainstorms “wow” features
- lists ideas like avatars, auto-magic actions, AI insights, or animated UI
- interprets the ask as a feature brief instead of a framing problem

### Example excerpt

> To create more wow factor, you could add proactive AI suggestions, beautiful auto-generated visuals, voice interaction, and one-click content transformation. Competitors often win in demos by feeling more magical, so you may want to prioritize highly visible AI features that create delight and surprise.

### Why this feels weak

- it treats “wow factor” as a solved concept
- it jumps straight into solutions before clarifying whether the issue is demo optics, activation, trust, differentiation, or sales theater
- it increases the risk of building attractive nonsense

---

## Representative `pm-workbench` output pattern

### Typical shape

- names the ambiguity explicitly
- separates the possible meanings of “wow factor”
- asks only the 1-2 missing questions that would actually change the framing
- converts the CEO’s statement into a better product question

### Example excerpt

> **Bottom line:** “wow factor” is still too vague to turn into a build decision. Right now it could mean at least four different things: **demo impressiveness, first-use activation, perceived model intelligence, or differentiated product value**. Those lead to very different product bets.
>
> Before solutioning, I would clarify two things:
>
> 1. **Where are we currently losing?** Demos, signup-to-first-value, retention, or sales conversations?
> 2. **What specifically looks stronger in competitors?** Flashy presentation, better outputs, faster time-to-value, or a more ownable workflow?
>
> **Working reframed product question:**
> “What product gap is making our AI workspace feel less compelling in the moments that matter most for adoption or sales, and what kind of improvement would close that gap without turning into random feature-chasing?”

### Why this feels stronger

- it solves the framing problem before the feature problem
- it asks very little, but the right little
- it protects the team from solution theater
- it produces a reusable clarification brief, not just PM-sounding advice

---

## Why this is judgment advantage, not just format advantage

This is not mainly about better formatting.
The real difference is:

- generic AI assumes the executive wording already points at the right problem
- `pm-workbench` treats the wording itself as something to debug

Even in plain text without headings, the stronger answer would still be stronger because it:

- delays solutioning until the decision target is clearer
- identifies the real ambiguity
- asks the smallest number of high-value questions
- creates a more defensible next move

---

## Example rubric scoring

| Criterion                          | Generic AI | pm-workbench target | Why                                                                                  |
| ---------------------------------- | ---------: | ------------------: | ------------------------------------------------------------------------------------ |
| Upstream problem framing           |          0 |                   3 | One brainstorms features; the other reframes the ask into a decision-ready question  |
| Follow-up question quality         |          0 |                   3 | One asks none; the other asks only the two questions that matter most                |
| Recommendation quality             |          1 |                   2 | Generic AI recommends “more wow”; the target recommends how to frame before deciding |
| Trade-off and non-decision clarity |          0 |                   2 | The target makes it clear why not to jump straight into visible features             |
| Artifact reuse quality             |          0 |                   3 | The target can be reused as a request clarification brief                            |
| Product-leader relevance           |          1 |                   2 | The target helps a leader guide the discussion instead of multiplying noise          |
| Honesty about uncertainty          |          1 |                   3 | The target labels ambiguity instead of pretending confidence                         |
| **Total**                          |      **3** |              **18** | Clear gap in upstream PM judgment                                                    |

---

## Benchmark notes

### Fairness note

- same original prompt assumed for both comparison sides
- this worked example is illustrative, not a claim of statistically stable performance
- the output snippets are intentionally short enough to inspect quickly, not full transcripts

### Limitation note

This example proves only one thing well:
`pm-workbench` is designed to be stronger at **upstream clarification under executive ambiguity**.
It does not prove universal superiority in every PM task.

---

## Takeaway

A lot of generic AI answers fail before they even start: they solve the imagined feature problem instead of the real framing problem.

This example shows one of the most important jobs of `pm-workbench`:
**stop random solutioning before it starts.**
