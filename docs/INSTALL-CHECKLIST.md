# Install Checklist

Use this checklist when you want the fastest path from "copied the folder" to "ready to try a real prompt."

## 3-step install check

If you are copying this repo to a fresh machine — including Windows — keep the first verification pass minimal.
The goal is not to prove every path. The goal is to confirm the skill is discoverable and basically healthy.

### 1. Copy the source folder

Place `pm-workbench/` under your OpenClaw skills workspace.

The expected result is that your skills directory now contains this folder directly:

```text
.../skills/pm-workbench/
```

Do not nest it one level deeper by accident.
For example, avoid:

```text
.../skills/pm-workbench/pm-workbench/
```

### 2. Run the local repo check

From inside the repo:

```bash
cd skills/pm-workbench
npm run validate
```

This confirms the repo structure is intact before you spend time debugging installation issues.

Expected result:

- validation passes
- no broken internal doc links
- workflow / template / command / example wiring is present
- release-facing version markers are aligned

### 3. Confirm OpenClaw can see the skill

Run:

```bash
openclaw skills check
```

If your setup supports direct skill inspection, you can also run:

```bash
openclaw skills info pm-workbench
```

Expected result:

- `pm-workbench` appears in the skill scan
- the skill is recognized without missing-file issues

## If validation passes but OpenClaw does not see the skill

Check these first:

- the folder is in the correct skills directory
- the folder is named `pm-workbench`
- you copied the repo root, not a parent or nested subfolder
- your local OpenClaw version and skill-path configuration match how your environment discovers workspace skills

## Before publishing or sharing

Do this quick pre-release pass:

1. run `npm run validate`
2. run `openclaw skills check`
3. try one real prompt

Recommended smoke-test prompts:

- vague ask
- prioritization
- executive summary

If all three are fine, the repo is in good shape for source-first distribution.

## Fastest Windows copy-and-check path

If you just copied the repo to a Windows machine and want the shortest sanity check, do only this:

1. put `pm-workbench/` under your OpenClaw `skills` folder
2. run `npm run validate`
3. run `openclaw skills check`
4. try one real PM prompt

If those four steps pass, you have enough confidence to keep tuning locally or prepare release packaging later.

If you are the maintainer rather than a first-time user, also keep this nearby:

- [Maintenance checklist](MAINTENANCE-CHECKLIST.md)
