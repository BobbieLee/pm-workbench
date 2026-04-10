# Worked example — launch readiness under pressure

This example looks at a high-pressure scenario where leadership wants a confident answer before the product is fully ready.

---

## Original input

### Prompt

> Marketing wants to lock a launch date for our new AI workflow in 3 weeks because they need campaign lead time. Product and design think the core experience is promising, but activation is still patchy and support flows are not ready. My boss wants a confident answer by tomorrow. Help me decide what to recommend and how to frame it upward.

### Why this is a useful test case

This prompt compresses a real PM pressure pattern:

- launch pressure
- incomplete readiness
- leadership demand for confidence
- no perfect answer available

A weak system will either sound falsely confident or retreat into generic caution.
A stronger system should make a condition-based recommendation.

---

## Representative baseline output

### Typical shape

- acknowledges that there are risks
- suggests aligning stakeholders
- recommends cautious consideration before launch
- does not make the actual decision boundary explicit

### Why this feels weak

- it avoids making a usable launch call
- it sounds reasonable but not leadership-ready
- it does not separate decide-now from validate-next

---

## Representative `pm-workbench` output pattern

### Typical shape

- leads with the launch recommendation clearly
- states the readiness gap
- explains the consequence of launching anyway
- clarifies what should be decided now versus what still needs validation
- frames the upward ask explicitly

### Why this feels stronger

- it is honest without becoming indecisive
- it gives leadership a real decision surface
- it makes risk operational, not decorative

---

## What this scenario is really testing

- can the system keep its nerve under uncertainty?
- can it make a recommendation before all evidence is in?
- can it turn uncertainty into a conditional decision instead of a stall?

---

## Takeaway

This scenario is less about launch mechanics and more about whether the skill can act like a responsible product leader under pressure.
