# Example 04 — PRD Lite

## Scenario

A feature needs enough written structure for review and execution alignment, but not a heavyweight PRD.

## Input

> "Help me draft a lightweight PRD for conversation history search."

## What good output looks like

A strong `pm-workbench` response should:

- define the problem clearly before listing features
- keep the document lightweight and execution-ready
- make scope boundaries explicit
- identify risks, dependencies, and open questions

## Expected output shape

**PRD Lite**

## Example target output

# PRD Lite

## 1. Background

Users are accumulating more conversations and need a reliable way to find prior answers, decisions, and generated content. Without search, valuable context becomes hard to retrieve as usage grows.

## 2. Problem statement

Users cannot efficiently find useful prior conversations. This creates repeated work, weakens trust in the workspace as a long-term knowledge surface, and makes the product feel less useful after the first few sessions.

## 3. Goal and success criteria

### Goal

Help users quickly retrieve relevant conversation history without leaving the workspace.

### Success criteria

- users can find a known prior conversation or answer faster than manual scrolling
- search is used by repeat users after launch
- search results are relevant enough that users refine less over time

## 4. Target users and core scenarios

### Target users

Repeat users with multiple saved conversations, especially users who rely on the product for ongoing research, writing, planning, or team work.

### Core scenarios

- finding a previous AI answer
- returning to an old project thread
- locating generated content for reuse

## 5. Proposed solution

Add conversation history search with keyword query, result list, date/context preview, and direct open action.

## 6. Scope

### In scope

- search across conversation title and message content
- result previews with matched context
- filters for recent / older conversations if simple to support
- empty state and no-result state

### Out of scope

- semantic search ranking
- team-wide cross-user search
- advanced saved search
- search inside deleted or archived content unless already supported

## 7. Key requirements

- Search input is accessible from conversation history.
- Results show enough context to choose the right conversation.
- Opening a result returns the user to the relevant conversation.
- Private or restricted conversations must respect existing permissions.

## 8. Risks and open questions

- Relevance may be weak if title and keyword matching are not enough.
- Large history volumes may create performance issues.
- Permission rules need confirmation before team search is considered.

Open questions:

- Should v1 include message-level jump or only conversation-level open?
- What is the minimum result latency target?
- Does search include archived conversations?

## 9. Rollout and validation plan

Ship to repeat users first, monitor search usage, result click-through, repeated query rate, and support feedback. Decide whether semantic ranking is needed after observing v1 behavior.

## 10. Next steps

Confirm search scope with engineering, define permission constraints, and produce a small design review for result layout and empty states.

## Why this is useful

Many teams either skip documentation or over-document too early. A lightweight PRD is often the most practical middle ground.
