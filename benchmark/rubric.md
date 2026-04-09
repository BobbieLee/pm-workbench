# Benchmark rubric

Use this rubric to compare `pm-workbench` against generic AI outputs.

## Scoring scale

Score each criterion from **0 to 3**:

- **0 — Missed badly**
- **1 — Weak / partial**
- **2 — Solid**
- **3 — Strong / clearly better than average generic AI**

Suggested total range if using all 7 criteria:

- **0-7** -> weak PM support
- **8-13** -> mixed / unreliable
- **14-17** -> strong practical PM support
- **18-21** -> excellent and clearly differentiated

---

## 1. Upstream problem framing

### What to judge

Did the answer solve the right PM problem first?

### Strong signal

- clarifies before evaluating when needed
- identifies embedded solution assumptions
- reframes vague asks into a decision-ready problem

### Weak signal

- jumps straight into solutions
- accepts the prompt framing uncritically

---

## 2. Follow-up question quality

### What to judge

If the model asked questions, were they selective and decision-relevant?

### Strong signal

- asks only the 1-3 questions that would materially change the answer
- avoids questionnaire behavior
- skips unnecessary questioning when context is already sufficient

### Weak signal

- asks too many generic context questions
- asks none when the recommendation obviously depends on missing premises

---

## 3. Recommendation quality

### What to judge

Did the answer make a usable call?

### Strong signal

- gives a clear recommendation, decision, or next move
- labels confidence and assumptions honestly when needed
- avoids “it depends” as the final state

### Weak signal

- only lists considerations
- stays symmetrical and non-committal

---

## 4. Trade-off and non-decision clarity

### What to judge

Did the answer show what is gained, lost, delayed, or displaced?

### Strong signal

- explains opportunity cost
- says what should wait or what is below the line
- makes trade-offs legible for stakeholder discussion

### Weak signal

- only talks about upside
- avoids explicit trade-offs

---

## 5. Artifact reuse quality

### What to judge

Would a PM or product leader reuse this output with light editing?

### Strong signal

- naturally fits a memo, brief, scorecard, roadmap, or summary shape
- is structured for a real meeting, review, or decision flow
- feels operationally useful, not just polished

### Weak signal

- sounds smart but is hard to reuse
- lacks structure or a reusable artifact shape

---

## 6. Product-leader relevance

### What to judge

Does the answer help with leadership-grade product work, not just IC analysis?

### Strong signal

- surfaces business consequence, resourcing, sequencing, and stakeholder asks
- reflects portfolio or company-level constraints when relevant
- makes upward communication easier

### Weak signal

- stays at isolated feature level when the real issue is portfolio or leadership alignment
- ignores resource implications

---

## 7. Honesty about uncertainty

### What to judge

Did the answer distinguish facts, assumptions, and missing evidence?

### Strong signal

- labels missing premises clearly
- says what could change the recommendation
- avoids fake certainty

### Weak signal

- overstates confidence
- hides gaps behind polished language

---

## Practical comparison rule

A generic AI answer can still score well on writing style.
Ignore that as a primary criterion.

This rubric is designed to reward:

- PM judgment
- decisiveness
- artifact usefulness
- leader-grade framing
- honest handling of uncertainty

Those are the dimensions where `pm-workbench` should win.
