# Start here if you only have 3 minutes

If you are a cold GitHub visitor, do **not** start by reading the whole repo.
Do this instead.

## 1. Copy the skill into your skills directory

Place `pm-workbench/` under your OpenClaw skills workspace.

## 2. Run the quick install check

```bash
cd skills/pm-workbench
npm run validate
openclaw skills info pm-workbench
openclaw skills check
```

You want to see that the repo validation passes and `pm-workbench` is recognized and ready to use.

If you want the short checklist, use [`INSTALL-CHECKLIST.md`](INSTALL-CHECKLIST.md).

## 3. Run these 3 prompts

### Prompt 1 — vague ask

> My boss said our AI product needs more wow factor. Help me unpack what that actually means.

### Prompt 2 — feature value

> Ops wants a daily AI fortune card feature to improve engagement. I’m worried it’s a gimmick. Help me evaluate it.

### Prompt 3 — prioritization

> We only have room for 3 of these 8 requests next quarter. Help me prioritize them and explain what waits.

## 4. Look for these difference signals

A strong `pm-workbench` response should:

- solve the upstream PM problem first
- ask only the missing questions that change the decision
- make a real call instead of hiding in balanced language
- show trade-offs and explicit “not now” decisions
- look reusable with light editing

## 5. Red flags

Be skeptical if the output:

- jumps straight into feature ideas on a vague ask
- gives a soft scorecard without a conclusion
- sounds polished but still leaves the decision unclear
- fills structure mechanically without sharper judgment

## Bottom line

If these 3 prompts already feel more useful than generic AI for making a PM call, the skill is doing its job.
If not, the benchmark kit will show you where it is still weak.
