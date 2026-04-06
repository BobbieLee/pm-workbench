# pm-workbench

**A scenario-driven PM workflow skill for product managers and product leaders.**

Turn vague asks into clear decisions, lightweight docs, leadership-ready summaries, and reusable PM artifacts.

---

## What it is

`pm-workbench` is not a generic PM prompt pack.

It is a structured workflow skill designed for real product work such as:
- clarifying vague requests
- evaluating whether a feature is worth building
- comparing options and trade-offs
- prioritizing under constraints
- drafting lightweight PRDs
- building roadmap one-pagers
- preparing executive summaries
- reviewing outcomes and writing postmortems

It asks for missing critical context when needed, and defaults to reusable PM artifacts when the task calls for them.

---

## Why this skill is different

- **Scenario-driven, not framework-driven**  
  Route by task, not by abstract PM theory.

- **Asks critical questions before making strong conclusions**  
  Especially when 1-2 missing premises would change the recommendation.

- **Produces PM artifacts, not just advice**  
  Includes evaluation memos, exec summaries, PRD Lite, roadmap one-pagers, and postmortem templates.

- **Designed for actual work, not demo conversations**  
  Outputs are meant to be taken into meetings, reviews, and decision-making.

- **Works for PMs and product leaders**  
  It supports not only feature thinking, but also prioritization, roadmap decisions, and upward communication.

---

## Installation

You can use `pm-workbench` in two common ways:

### Option 1 — Use the packaged skill file
- packaged file: `output/pm-workbench.skill`
- import it through your OpenClaw skill installation workflow

### Option 2 — Use the local skill source
- place or keep the source under your OpenClaw skills workspace
- current skill folder: `skills/pm-workbench/`

If you are working locally and iterating on the skill, the source folder is the best place to edit.
If you want to distribute or share the skill, use the packaged `.skill` file.

---

## How to use

Use `pm-workbench` in natural language.
It routes by intent and should choose the right workflow based on the task.

You can ask for help in broad PM language, such as:
- "Help me clarify this request before we jump to solutions."
- "Evaluate whether this feature is worth building now."
- "Compare these two product directions and recommend one."
- "Draft a lightweight PRD for this feature."
- "Turn this into an executive summary for leadership."
- "Help me write a postmortem for this launch."

You can also ask for a specific artifact directly, for example:
- "Write this as a Feature Evaluation Memo."
- "Turn this into an Executive Summary."
- "Draft this as a PRD Lite."
- "Summarize this as a Roadmap One-Pager."
- "Write a lightweight postmortem for this launch."

---

## Core workflows

- Clarify vague requests
- Evaluate feature value
- Compare solutions
- Prioritize competing requests
- Draft PRD / solution docs
- Build roadmap plans
- Design metrics
- Prepare executive summaries
- Write postmortems

---

## Built-in PM artifacts

- Feature Evaluation Memo
- Executive Summary
- PRD Lite
- Roadmap One-Pager
- Postmortem Lite

---

## Use cases

### 1. Clarify a vague request
**Input**
> "My boss said our AI product needs more of a wow factor. Help me think about what that actually means."

**What `pm-workbench` should do**
- treat this as a fuzzy strategic request, not a ready-made requirement
- separate the problem from possible solutions
- identify what kind of “wow factor” is actually being asked for
- guide the conversation toward a usable problem statement

### 2. Evaluate whether a feature is worth building
**Input**
> "Operations wants a daily AI fortune card feature to improve engagement. I’m worried it’s a gimmick. Help me evaluate it."

**What `pm-workbench` should do**
- ask about the critical missing premises if they affect the decision
- evaluate user value, business value, strategic fit, and opportunity cost
- produce a Feature Evaluation Memo
- give a usable recommendation such as build now / test first / not now

### 3. Prepare a leadership summary
**Input**
> "I need to explain to leadership why we should start the digital avatar + smart editing project. Help me turn this into an executive summary."

**What `pm-workbench` should do**
- lead with the bottom line
- explain why the topic matters now
- highlight risks and support needed
- produce a concise Executive Summary

### 4. Draft a lightweight PRD
**Input**
> "Help me draft a lightweight PRD for conversation history search."

**What `pm-workbench` should do**
- define the problem clearly before listing features
- keep the document lightweight and execution-ready
- make scope boundaries explicit
- produce a PRD Lite artifact

### 5. Write a postmortem
**Input**
> "We launched a feature last month and adoption was weaker than expected. Help me write a lightweight postmortem."

**What `pm-workbench` should do**
- compare expected vs actual
- identify root causes rather than only symptoms
- avoid blame-heavy wording
- produce lessons and concrete next actions

---

## Before vs after

### Before using `pm-workbench`
- vague requests turn into vague discussions
- feature evaluation becomes opinion trading
- PRDs are too long or too shallow
- roadmap conversations become wish lists
- executive summaries bury the conclusion
- postmortems become blameful or useless

### After using `pm-workbench`
- fuzzy asks become clear product questions
- decisions are supported by assumptions, trade-offs, and next steps
- outputs look like reusable PM artifacts
- roadmap discussions become focus decisions
- leadership summaries become scan-friendly and decision-ready
- reviews turn into lessons and follow-up actions

---

## Quick start

Use `pm-workbench` when you need help with real PM work such as:
- clarifying a vague request
- deciding whether something is worth building
- drafting a lightweight PRD
- preparing a leadership update
- writing a postmortem

### Example prompts
1. "Help me clarify this request before we jump to solutions."
2. "Evaluate whether this feature is worth building now."
3. "Compare these two product directions and recommend one."
4. "Draft a lightweight PRD for this feature."
5. "Turn this into an executive summary for leadership."
6. "Help me write a postmortem for this launch."

---

## Best for

`pm-workbench` works best for:
- vague requests that need problem framing
- early product judgments and feature evaluation
- lightweight PM artifacts that need to be usable quickly
- roadmap and prioritization discussions under constraints
- leadership communication and decision support
- postmortem and learning loops after launches or projects

## Not ideal for

`pm-workbench` is less ideal for:
- analytics-heavy SQL or dashboard building work
- full user research repository management
- highly specialized regulatory or compliance specs
- very long enterprise documentation processes with custom governance
- tasks that depend more on raw data processing than product judgment

---

## Current status

`pm-workbench` is currently a validated and packaged v0 workbench:
- core workflows implemented
- artifact templates added
- artifact mapping wired into the core skill
- compressed artifact behavior added for lightweight usage
- packaged and ready for testing / iteration

This is already useful in real PM work, but still evolving.

---

## Positioning keywords

- Scenario-driven
- Artifact-first
- Decision-ready

---

## Repository direction

Suggested next packaging steps:
- add screenshots or before/after samples
- keep improving artifact quality through real usage feedback
- continue expanding high-value examples only when they sharpen understanding
- evolve from a validated v0 into a stronger distribution-ready v1

---

## Who this is for

- PMs dealing with vague requests and messy decisions
- senior PMs who need stronger judgment artifacts
- product leaders who need roadmap and executive communication support
- builders who want a reusable PM workflow system instead of a prompt collection
