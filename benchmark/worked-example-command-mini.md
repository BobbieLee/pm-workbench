# Worked example — command mini proof

This is a deliberately small proof asset.
Its job is not to be a full benchmark pack.
Its job is to show one visible comparison point:

**`pm-workbench` may be better at preserving PM logic across a short work chain, not just inside one isolated answer.**

## Command path used

- `clarify -> evaluate`

## Original input

> Growth wants us to ship a daily AI momentum card that summarizes each user’s workday and gives them a motivational nudge. They think it could improve daily engagement and make the product feel more alive. I’m not sure whether this solves a real problem or just sounds fun. Help me think through it.

## Typical generic AI pattern

A representative general-purpose response may do something like this:

- immediately discusses feature upside and downside
- treats the feature concept as a stable object
- recommends a pilot because the idea sounds engaging enough
- mentions risks, but without first clarifying what kind of behavior change actually matters

### Why that pattern is often weaker

The core weakness is sequence.
It starts evaluating before the PM has clarified what problem is being solved.
So the recommendation may sound balanced, but the evaluation target is still unstable.

## Typical pm-workbench pattern

A representative `pm-workbench` response may do this instead:

### Step 1 — clarify

- restate the ask as a hypothesis, not a validated need
- separate possible goals: delight, habit formation, reactivation, sharing, retention support
- identify the most important missing premise: whether this is solving a user need or inventing ambient engagement

### Step 2 — evaluate

- judge the clarified object rather than the original slogan
- make the likely call: hold or small experiment, not a roadmap commitment
- explain the opportunity cost against stronger core retention work

### Why that pattern is often stronger

The advantage is not prettier formatting.
The advantage is that the recommendation is made **after** the object has been clarified.
That makes the go / hold / experiment judgment more trustworthy.

## What this mini proof is meant to show

This is a tiny worked example, but it highlights one important difference to inspect:

- a general-purpose model can still give a decent-looking answer to the visible ask
- `pm-workbench` may be more likely to follow the stronger PM sequence

That is a more useful test of "PM workbench" behavior than sentence polish alone.
