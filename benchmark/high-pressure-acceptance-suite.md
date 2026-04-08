# pm-workbench high-pressure acceptance suite

This suite is designed to test `pm-workbench` under conditions that feel closer to real product work:
- messy inputs
- stakeholder conflict
- constrained capacity
- leadership pressure
- incomplete evidence
- the need to make a call anyway

It is **not** a polished benchmark for easy wins.
It is a pressure test for whether the skill still shows real PM judgment when the situation is ambiguous, political, or uncomfortable.

## What this suite is trying to reveal

A strong PM workbench should still be useful when:
- the prompt is under-specified
- the stakeholders want different things
- the user needs a recommendation before certainty exists
- there is no clean framework answer
- the real work is deciding what **not** to do
- the final output needs to survive leadership review

If the skill becomes generic, overly cautious, or structurally neat but judgment-soft in these scenarios, that is the signal to improve it.

---

## How to use this suite

### Recommended test flow
1. Run each prompt as written first.
2. Allow follow-up questions if the model chooses to ask them.
3. Score the output with [`rubric.md`](rubric.md).
4. Capture notes in [`scorecard.md`](scorecard.md).
5. Record where `pm-workbench` still feels weak.

### What to pay special attention to
In this suite, do **not** over-reward writing style.
Pay attention to whether the output:
- asks only the right questions
- finds the real decision bottleneck
- makes a real call
- explains what gets delayed or displaced
- sounds like something a PM or product leader could actually use

### Failure signal
A scenario is doing its job if it makes weak outputs obviously weak in under 2 minutes.

---

# Scenario 1 — Boss pressure, fuzzy ask, hidden solution gravity

## Pressure type
- vague leadership language
- competitor anxiety
- risk of random solutioning

## PM job
Clarify the real problem before the team starts building the wrong thing.

## Prompt
> My boss keeps saying our AI product needs to feel more premium and more “alive” because competitors look more exciting in demos. Design is already sketching animated ideas, and engineering is asking what to build. I’m not convinced we even know what problem we’re solving yet. Help me sort this out.

## What a strong answer should do
- separate vague leadership language from an actual product problem
- identify the likely hidden meanings behind “premium” and “alive”
- resist jumping into solution design
- ask only the 1-2 clarifications that materially change the framing
- convert the mess into a more decision-ready question

## What a weak answer usually does
- brainstorms visual features immediately
- treats the boss’s wording as product truth
- asks a long intake questionnaire

---

# Scenario 2 — Cross-functional push for an AI gimmick

## Pressure type
- internal stakeholder enthusiasm
- possible vanity metric trap
- opportunity cost hidden under “engagement” language

## PM job
Decide whether the feature deserves capacity at all.

## Prompt
> Ops wants us to build a daily “AI luck card” because they think it could create shareable moments and lift engagement. Growth likes it because it sounds viral. I think it’s a gimmick and we already have retention problems in the core workflow. Help me decide whether this deserves roadmap space.

## What a strong answer should do
- distinguish attention value from durable product value
- judge the request against current stage goal and opportunity cost
- avoid being socially captured by internal enthusiasm
- produce a go / hold / no-go / experiment recommendation
- explain what this work would displace

## What a weak answer usually does
- confuses engagement with meaningful value
- stays balanced but avoids a call
- ignores displacement cost

---

# Scenario 3 — Priority call under leadership tension

## Pressure type
- CEO pressure
- sales pressure
- support pressure
- hard top-3 capacity constraint

## PM job
Make a defendable portfolio call, not just a ranked list.

## Prompt
> Next quarter we can only really do 3 things well. Candidates are: onboarding simplification, answer quality tuning, enterprise audit logs, admin billing controls, team workspace sharing, conversation history search, and a referral loop. CEO wants growth, sales wants enterprise features, support is drowning in onboarding issues. Help me decide what goes above the line and what waits.

## What a strong answer should do
- define the quarter objective before choosing anything
- produce a true above-the-line / below-the-line call
- explain why the lower items are not now
- show the main trade-off clearly
- read like something leadership could review without major rewriting

## What a weak answer usually does
- uses a scoring matrix as a shield
- gives a soft top 4 or top 5
- never names the below-the-line set explicitly

---

# Scenario 4 — Founder trade-off: investor narrative vs product trust

## Pressure type
- investor pressure
- speed vs trust tension
- strategic sequencing

## PM job
Recommend a path when both options have real cost.

## Prompt
> I’m the founder of an AI product. We can ship a broad “AI copilot everywhere” layer in 4 weeks to create investor and market excitement, or spend 8-10 weeks improving answer reliability and workspace memory so the product becomes meaningfully better for current users. Runway is okay, but narrative pressure is real. Help me decide.

## What a strong answer should do
- name the real decision objective under current company conditions
- surface the cost of narrative-first versus trust-first choices
- make sequencing logic visible
- choose a path or a staged path with explicit conditions
- avoid generic startup cliché advice

## What a weak answer usually does
- talks forever about both sides without choosing
- ignores investor pressure or user-trust compounding
- offers motivational commentary instead of a decision

---

# Scenario 5 — Executive summary with a real ask

## Pressure type
- leadership communication
- evidence compression
- explicit resource ask

## PM job
Turn analysis into a decision-ready one-pager.

## Prompt
> We tested a premium AI meeting summary workflow. Users who activated loved it, but activation itself stayed weak because setup friction is still too high. I want to tell leadership we should not scale marketing yet, spend 6 weeks on activation fixes, and temporarily borrow one frontend engineer. Help me turn that into a one-page exec summary.

## What a strong answer should do
- lead with the conclusion immediately
- make the business consequence visible
- state the recommendation and ask explicitly
- keep only the evidence needed to support the decision
- read like something leadership can approve or challenge fast

## What a weak answer usually does
- sounds polished but vague
- buries the ask
- reads like meeting notes

---

# Scenario 6 — Roadmap framing under impossible demand load

## Pressure type
- too many important things
- enterprise + growth + retention tension
- need for staged focus

## PM job
Turn competing demands into a focused roadmap instead of a timeline dump.

## Prompt
> I need a one-page roadmap for the next two quarters for our AI note-taking product. We need better activation, stronger early retention, and enough enterprise credibility to unlock a few lighthouse deals, but we cannot do everything at once. Help me frame a roadmap leadership can align on.

## What a strong answer should do
- state the stage goal clearly
- group work into a believable sequence or theme stack
- show what happens now versus later
- make resource and dependency implications visible
- explicitly say what is not the focus yet

## What a weak answer usually does
- turns the roadmap into a backlog with dates
- says all three goals matter equally
- skips sequencing logic

---

# Scenario 7 — Product leader conflict: launch pressure vs readiness reality

## Pressure type
- boss wants launch date confidence
- product is not actually ready
- communication risk upward and cross-functionally

## PM job
Prepare a leadership recommendation that is honest but not panicky.

## Prompt
> Marketing wants to lock a launch date for our new AI workflow in 3 weeks because they need campaign lead time. Product and design think the core experience is promising, but activation is still patchy and support flows are not ready. My boss wants “a confident answer by tomorrow.” Help me decide what I should recommend and how I should frame it upward.

## What a strong answer should do
- identify that this is both a decision problem and a communication problem
- resist fake confidence while still making a recommendation
- frame the launch choice in terms of readiness, consequence, and acceptable risk
- make the upward recommendation and ask explicit

## What a weak answer usually does
- gives generic launch-risk language
- avoids making a recommendation
- acts confident without clarifying what confidence is based on

---

# Scenario 8 — Postmortem where the real miss was decision quality

## Pressure type
- internal excitement masked weak external value
- hindsight bias risk
- need to extract a decision-level lesson

## PM job
Write a postmortem that changes future product behavior.

## Prompt
> We launched AI-generated follow-up suggestions after calls. Internal teams loved the concept, but external usage was weak and many users said they did not trust the suggestions enough to send them. Help me write a lightweight postmortem that explains what happened, what we got wrong, and what should change next time.

## What a strong answer should do
- distinguish expected outcome from actual outcome
- identify where the team made a weak assumption or decision
- avoid blame language and hindsight theater
- produce concrete behavior changes for future launches

## What a weak answer usually does
- writes a timeline recap
- gives generic lessons like “do more research”
- treats the miss as execution-only when the issue was also judgment quality

---

# Scenario 9 — Stakeholder-heavy option choice with no clean winner

## Pressure type
- multiple stakeholders prefer different options
- no obviously dominant solution
- easy to hide behind neutrality

## PM job
Make a decisive recommendation anyway.

## Prompt
> We have two credible ways to improve onboarding for our AI workspace. Option A adds AI suggestions directly into first-run to create an immediate “magic moment.” Option B keeps onboarding simple and only introduces suggestions after the user completes a first task, which may reduce overload. Design prefers A, support prefers B, and growth likes whichever improves first-week retention fastest. Help me compare the two and recommend a path.

## What a strong answer should do
- define the real decision objective
- make the decisive trade-off explicit
- recommend one path or a staged path with clear logic
- explain why not the other option now

## What a weak answer usually does
- lists pros and cons symmetrically forever
- turns stakeholder preferences into the answer
- avoids the decisive trade-off

---

# Scenario 10 — Head of product operating review under mixed signals

## Pressure type
- some metrics are up, some are down
- multiple teams want their own story told
- need for leadership-level synthesis

## PM job
Turn mixed signals into a usable operating view.

## Prompt
> I need to prepare a monthly product operating review. New user activation is up, but early retention is flat. Team output looks busy, but support tickets on onboarding are still elevated. Sales is happy with enterprise interest, but product quality complaints on AI reliability have not really gone away. Help me turn this into a leadership-grade operating review with a clear bottom line and next focus.

## What a strong answer should do
- synthesize signal patterns instead of reciting metrics
- identify the real diagnosis underneath mixed signals
- state what leadership should focus on next
- avoid turning the review into neutral status reporting

## What a weak answer usually does
- reports each metric separately with no synthesis
- sounds balanced but says nothing
- avoids a bottom line

---

## Suggested scoring lens for this suite

In addition to the normal rubric, pay extra attention to three questions:
1. **Did the model keep its nerve under ambiguity?**
2. **Did it say what not to do, not just what to do?**
3. **Would this survive contact with a real boss, founder, or leadership meeting?**

If the answer is “not really,” the workflow probably still needs sharpening.

## Suggested minimum acceptance bar

For this suite, a strong `pm-workbench` result should usually:
- score at least **14/21** on the standard rubric in most scenarios
- clearly beat generic AI on recommendation quality and trade-off clarity
- rarely lose on artifact reuse quality
- stay honest about uncertainty without becoming indecisive

## What to do after the run

After testing 5-10 scenarios, summarize the findings in three buckets:
- **already strong**
- **usable but still soft**
- **still weak / needs redesign**

That output is usually more valuable than the raw scores alone.
