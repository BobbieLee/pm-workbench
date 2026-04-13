# Maintenance checklist

Use this when you change the repo structure, not for every tiny wording edit.
The goal is simple: keep `pm-workbench` coherent without turning it into a process machine.

## If you add or rename a workflow

Also check:

- `SKILL.md`
- `references/templates/` mapping still makes sense
- `README.md` workflow table if the visible set changed
- `README.zh-CN.md` workflow table if the visible set changed
- at least one example still demonstrates the workflow well
- any command that references the workflow still reads correctly

## If you add or rename a command

Also check:

- `references/commands/`
- `COMMANDS.md`
- `COMMANDS.zh-CN.md`
- `README.md` command section if the visible examples changed
- `README.zh-CN.md` command section if the visible examples changed
- `../examples/README.md`
- at least one command-path example or benchmark proof still makes the command visible

## If you add or rename an example

Also check:

- `../examples/README.md`
- any README / START_HERE link that points to that example
- benchmark or docs references if the example is used as proof

## If you add or rename a benchmark asset

Also check:

- `../benchmark/README.md`
- any proof-chain link from `README.md` or `README.zh-CN.md`
- `scripts/validate-repo.js`

## Before release or sharing

Do this short pass:

1. check `package.json` version
2. check release target in `README.md` and `README.zh-CN.md`
3. add or update the `CHANGELOG.md` entry
4. run `npm run validate`
5. run `openclaw skills check`
6. try one real PM prompt

If those pass, the repo is usually in good enough shape for source-first distribution.
