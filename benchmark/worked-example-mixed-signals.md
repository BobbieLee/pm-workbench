# Worked example — mixed signals operating review

This example looks at a leadership-grade operating review where multiple signals point in different directions.

---

## Original input

### Prompt

> I need to prepare a monthly product operating review. New user activation is up, but early retention is flat. Team output looks busy, but support tickets on onboarding are still elevated. Sales is happy with enterprise interest, but product quality complaints on AI reliability have not really gone away. Help me turn this into a leadership-grade operating review with a clear bottom line and next focus.

### Why this is a useful test case

This prompt matters because many AI systems can summarize metrics, but far fewer can diagnose what the mixed pattern actually means.

---

## Representative baseline output

### Typical shape

- lists positive and negative metrics separately
- notes that some areas improved while others need attention
- recommends continued monitoring and cross-functional alignment

### Why this feels weak

- it reports the signals but does not synthesize them
- it sounds balanced without identifying the dominant bottleneck
- leadership still would not know what to focus on next

---

## Representative `pm-workbench` output pattern

### Typical shape

- names the overall signal pattern first
- identifies the dominant diagnosis underneath the mixed data
- says what not to overreact to
- turns the review into a next-period focus call

### Why this feels stronger

- it behaves like an operating review, not a KPI recital
- it reduces signal noise into one leadership-usable judgment
- it makes above-the-line focus easier to align around

---

## What this scenario is really testing

- can the system synthesize rather than summarize?
- can it identify the core diagnosis underneath mixed signals?
- can it turn diagnosis into a clear next focus?

---

## Takeaway

This scenario tests whether `pm-workbench` can operate above the level of PM reporting and closer to product leadership diagnosis.
