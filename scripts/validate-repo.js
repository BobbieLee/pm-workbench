#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

function exists(rel) {
  return fs.existsSync(path.resolve(root, rel));
}

function listMdFiles(relDir) {
  const dir = path.join(root, relDir);
  return fs.readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .sort();
}

function listMdFilesRecursive(relDir = '.') {
  const base = path.join(root, relDir);
  const result = [];

  for (const entry of fs.readdirSync(base, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const rel = path.join(relDir, entry.name);
    if (entry.isDirectory()) {
      result.push(...listMdFilesRecursive(rel));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      result.push(path.relative(root, path.join(root, rel)).split(path.sep).join('/'));
    }
  }

  return result.sort();
}

const linkableExtensions = ['md', 'svg', 'png', 'jpg', 'jpeg', 'gif', 'html'];
const linkableExtensionPattern = linkableExtensions.join('|');

function extractInlineCodeRefs(text) {
  const refs = [];
  const regex = new RegExp('`([^`]+\\.(' + linkableExtensionPattern + '))`', 'gi');
  let match;
  while ((match = regex.exec(text)) !== null) {
    const ref = match[1];
    if (ref.includes('/')) refs.push(ref);
  }
  return refs;
}

function extractMarkdownLinks(text) {
  const refs = [];
  const regex = /\[[^\]]+\]\(([^)]+)\)/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const ref = match[1].trim().split(/\s+/)[0];
    if (/^(https?:|mailto:|#)/i.test(ref)) continue;
    const withoutAnchor = ref.split('#')[0].split('?')[0];
    if (new RegExp('\\.(' + linkableExtensionPattern + ')$', 'i').test(withoutAnchor)) {
      refs.push(withoutAnchor);
    }
  }
  return refs;
}

function normalizeRef(fromFileRel, ref) {
  const baseDir = path.dirname(path.resolve(root, fromFileRel));
  const absolute = path.resolve(baseDir, ref);
  return path.relative(root, absolute);
}

function extractWorkflowChain(text) {
  const lines = text.split('\n');
  const chain = [];
  let inWorkflowChain = false;

  for (const line of lines) {
    if (/^## Workflow chain\s*$/.test(line.trim())) {
      inWorkflowChain = true;
      continue;
    }

    if (inWorkflowChain && /^##\s+/.test(line)) break;

    if (inWorkflowChain) {
      const match = line.match(/^\d+\.\s+`([^`]+)`/);
      if (match) chain.push(match[1]);
    }
  }

  return chain;
}

function extractMarkdownFileLinks(text) {
  return extractMarkdownLinks(text)
    .filter((ref) => ref.endsWith('.md'));
}

function extractCodeTokens(text) {
  const tokens = [];
  const regex = /`([^`]+)`/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    tokens.push(match[1]);
  }
  return tokens;
}

function extractVersion(text) {
  const match = text.match(/v(\d+\.\d+\.\d+)/);
  return match ? match[1] : null;
}

const workflowFiles = listMdFiles('references/workflows');
const templateFiles = listMdFiles('references/templates');
const commandFiles = listMdFiles('references/commands');
const exampleFiles = listMdFiles('examples').filter((f) => f !== 'README.md');
const exampleZhFiles = listMdFiles('examples.zh-CN').filter((f) => f !== 'README.md');
const coreWorkflowExampleFiles = exampleFiles.filter((file) => /^0[1-9]-/.test(file));

const workflowNames = new Set(workflowFiles.map((file) => file.replace(/\.md$/, '')));
const templateNames = new Set(templateFiles.map((file) => file.replace(/\.md$/, '')));
const commandNames = new Set(commandFiles.map((file) => file.replace(/\.md$/, '')));
const knownCodeTokens = new Set([
  ...workflowNames,
  ...templateNames,
  ...commandNames,
  'pm-workbench',
  'pm-workbench-local'
]);

const docsToCheck = [
  'SKILL.md',
  'README.md',
  'README.zh-CN.md',
  'docs/GETTING-STARTED.md',
  'docs/TRY-3-PROMPTS.md',
  'docs/TRY-IN-3-MINUTES.md',
  'docs/INSTALL-CHECKLIST.md',
  'docs/MAINTENANCE-CHECKLIST.md',
  'docs/SCENARIO-ROUTER.md',
  'docs/10-REAL-ENTRY-PROMPTS.md',
  'docs/COMMANDS.md',
  'docs/COMMANDS.zh-CN.md',
  'START_HERE.md',
  'examples/README.md',
  'examples.zh-CN/README.md',
  'ROADMAP.md',
  'CONTRIBUTING.md',
  'CHANGELOG.md',
  'docs/PRODUCT-LEADER-PLAYBOOK.md',
  'benchmark/README.md',
  'benchmark/CONTRIBUTING-BENCHMARKS.md',
  'benchmark/scenarios.md',
  'benchmark/failure-regression.md',
  'benchmark/rubric.md',
  'benchmark/scorecard.md',
  'benchmark/runs/README.md',
  'benchmark/runs/run-template.md',
  'benchmark/worked-example-product-leader.md',
  'benchmark/worked-example-clarify-request.md',
  'benchmark/worked-example-exec-summary.md',
  'benchmark/worked-example-launch-readiness.md',
  'benchmark/worked-example-mixed-signals.md',
  'benchmark/command-benchmark-guide.md',
  'benchmark/worked-example-command-mini.md'
];

const allMarkdownDocs = listMdFilesRecursive();
const docsForContentChecks = [...new Set([...docsToCheck, ...allMarkdownDocs])].sort();

const docContents = Object.fromEntries(docsForContentChecks.map((rel) => [rel, read(path.join(root, rel))]));
const skill = docContents['SKILL.md'];
const readme = docContents['README.md'];
const readmeZh = docContents['README.zh-CN.md'];
const startHere = docContents['START_HERE.md'];
const installChecklist = docContents['docs/INSTALL-CHECKLIST.md'];
const examplesReadme = docContents['examples/README.md'];
const examplesZhReadme = docContents['examples.zh-CN/README.md'];
const benchmarkReadme = docContents['benchmark/README.md'];
const changelog = docContents['CHANGELOG.md'];
const packageJson = JSON.parse(read(path.join(root, 'package.json')));

const errors = [];
const warnings = [];

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function warn(condition, message) {
  if (!condition) warnings.push(message);
}

for (const [file, text] of Object.entries(docContents)) {
  const refs = [...extractInlineCodeRefs(text), ...extractMarkdownLinks(text)];
  for (const ref of refs) {
    const normalized = normalizeRef(file, ref);
    if (!exists(normalized)) {
      errors.push(`Broken doc reference in ${file}: ${ref} -> ${normalized}`);
    }
  }

  for (const token of extractCodeTokens(text)) {
    if (token.includes('/') || token.includes('\\') || token.includes('.') || token.includes(' ')) continue;
    if (!/^[a-z][a-z0-9]+(?:-[a-z0-9]+)+$/.test(token)) continue;
    assert(knownCodeTokens.has(token), `${file} references unknown code token or workflow: ${token}`);
  }
}

for (const file of workflowFiles) {
  const workflowName = file.replace(/\.md$/, '');
  assert(skill.includes('`' + workflowName + '`'), `SKILL.md missing workflow mention: ${workflowName}`);
}

for (const file of templateFiles) {
  const rel = `references/templates/${file}`;
  const text = read(path.join(root, rel));
  assert(skill.includes(file), `SKILL.md missing template mapping/reference: ${file}`);
  assert(text.includes('## When to use'), `${rel} missing "When to use" guidance`);
  assert(text.includes('## Output goal'), `${rel} missing "Output goal" guidance`);
  assert(text.includes('## Required core'), `${rel} missing "Required core" guidance`);
  assert(text.includes('## Optional expansion'), `${rel} missing "Optional expansion" guidance`);
}

for (const file of commandFiles) {
  assert(skill.includes(file), `SKILL.md missing command reference: ${file}`);
}

for (const file of commandFiles) {
  const rel = `references/commands/${file}`;
  const text = read(path.join(root, rel));
  const chain = extractWorkflowChain(text);
  assert(chain.length > 0, `${rel} missing workflow chain entries`);
  for (const workflowName of chain) {
    assert(workflowNames.has(workflowName), `${rel} references missing workflow: ${workflowName}`);
  }
}

for (const file of exampleFiles) {
  const rel = `examples/${file}`;
  const text = read(path.join(root, rel));
  assert(examplesReadme.includes(file), `examples/README.md missing example link: ${file}`);
  assert(/## Input|## Raw input|## Raw messy input/.test(text), `${rel} missing input section`);
  assert(/## What good output looks like|## What .*should do better|## Step 1/.test(text), `${rel} missing expected behavior section`);
  assert(!text.includes('## Example response shape'), `${rel} still uses abstract example response shape instead of target output`);
}

for (const file of coreWorkflowExampleFiles) {
  const rel = `examples/${file}`;
  const text = read(path.join(root, rel));
  assert(text.includes('## Example target output'), `${rel} missing complete target output section`);
}

for (const file of exampleZhFiles) {
  const rel = `examples.zh-CN/${file}`;
  const text = read(path.join(root, rel));
  assert(examplesZhReadme.includes(file), `examples.zh-CN/README.md missing Chinese example link: ${file}`);
  assert(text.includes('## Input'), `${rel} missing input section`);
  assert(text.includes('## What good output looks like'), `${rel} missing expected behavior section`);
  assert(text.includes('## Example target output'), `${rel} missing target output section`);
}

assert(exampleZhFiles.length >= 9, `examples.zh-CN should cover at least the 9 core workflows, found ${exampleZhFiles.length}`);

for (const ref of extractMarkdownFileLinks(examplesReadme)) {
  const normalized = normalizeRef('examples/README.md', ref);
  assert(exists(normalized), `examples/README.md links to missing file: ${ref}`);
}

const benchmarkFiles = [
  'benchmark/README.md',
  'benchmark/CONTRIBUTING-BENCHMARKS.md',
  'benchmark/scenarios.md',
  'benchmark/failure-regression.md',
  'benchmark/rubric.md',
  'benchmark/scorecard.md',
  'benchmark/runs/README.md',
  'benchmark/runs/run-template.md',
  'benchmark/worked-example-product-leader.md',
  'benchmark/worked-example-clarify-request.md',
  'benchmark/worked-example-exec-summary.md',
  'benchmark/worked-example-launch-readiness.md',
  'benchmark/worked-example-mixed-signals.md',
  'benchmark/command-benchmark-guide.md',
  'benchmark/worked-example-command-mini.md',
  'docs/PRODUCT-LEADER-PLAYBOOK.md',
  'docs/images/pm-workbench-benchmark-summary.svg',
  'docs/images/pm-workbench-benchmark-card.svg'
];

for (const file of benchmarkFiles) {
  assert(exists(file), `Expected file missing: ${file}`);
}

for (const ref of extractMarkdownFileLinks(benchmarkReadme)) {
  const normalized = normalizeRef('benchmark/README.md', ref);
  assert(exists(normalized), `benchmark/README.md links to missing file: ${ref}`);
}

const expectedReadmeLinks = [
  'START_HERE.md',
  'docs/GETTING-STARTED.md',
  'docs/TRY-3-PROMPTS.md',
  'docs/INSTALL-CHECKLIST.md',
  'docs/SCENARIO-ROUTER.md',
  'docs/10-REAL-ENTRY-PROMPTS.md',
  'docs/COMMANDS.md',
  'examples/README.md',
  'benchmark/README.md',
  'benchmark/CONTRIBUTING-BENCHMARKS.md',
  'docs/PRODUCT-LEADER-PLAYBOOK.md',
  'CONTRIBUTING.md',
  'ROADMAP.md'
];

for (const file of expectedReadmeLinks) {
  assert(readme.includes(file), `README.md missing important link: ${file}`);
}

const expectedStartHereLinks = [
  'docs/TRY-IN-3-MINUTES.md',
  'docs/SCENARIO-ROUTER.md',
  'docs/10-REAL-ENTRY-PROMPTS.md',
  'docs/INSTALL-CHECKLIST.md',
  'benchmark/README.md',
  'examples/README.md'
];

for (const file of expectedStartHereLinks) {
  assert(startHere.includes(file), `START_HERE.md missing important link: ${file}`);
}

const expectedInstallLinks = [
  'npm run validate',
  'openclaw skills check'
];

for (const phrase of expectedInstallLinks) {
  assert(installChecklist.includes(phrase), `docs/INSTALL-CHECKLIST.md missing important install step: ${phrase}`);
}

const readmeVersion = extractVersion(readme);
const readmeZhVersion = extractVersion(readmeZh);
const latestChangelogVersionMatch = changelog.match(/^## v(\d+\.\d+\.\d+)/m);
const latestChangelogVersion = latestChangelogVersionMatch ? latestChangelogVersionMatch[1] : null;

assert(readmeVersion === packageJson.version, `README.md release target version mismatch: ${readmeVersion} vs package.json ${packageJson.version}`);
assert(readmeZhVersion === packageJson.version, `README.zh-CN.md release target version mismatch: ${readmeZhVersion} vs package.json ${packageJson.version}`);
assert(latestChangelogVersion === packageJson.version, `CHANGELOG.md latest version mismatch: ${latestChangelogVersion} vs package.json ${packageJson.version}`);
assert(changelog.includes('## v1.0.0'), 'CHANGELOG.md missing v1.0.0 section');

warn(readme.includes('product leader') || readme.includes('Product leader'), 'README.md may under-emphasize product-leader positioning');
warn(readme.includes('benchmark') || readme.includes('Benchmark'), 'README.md may under-emphasize benchmark layer');
warn(
  readme.includes('pm-workbench-benchmark-summary.svg') || readme.includes('assets/readme/en/benchmark-snapshot.png'),
  'README.md may not surface the benchmark summary visual yet'
);
warn(readme.includes('pm-workbench-benchmark-card.svg'), 'README.md may not surface the share-friendly benchmark card yet');
warn(readmeZh.includes('docs/COMMANDS.zh-CN.md'), 'README.zh-CN.md may not surface the Chinese commands entry explicitly enough');

if (errors.length) {
  console.error('pm-workbench repo validation FAILED\n');
  for (const error of errors) console.error('- ' + error);
  if (warnings.length) {
    console.error('\nWarnings:');
    for (const warning of warnings) console.error('- ' + warning);
  }
  process.exit(1);
}

console.log('pm-workbench repo validation passed.');
console.log(`- version: ${packageJson.version}`);
console.log(`- workflows: ${workflowFiles.length}`);
console.log(`- templates: ${templateFiles.length}`);
console.log(`- commands: ${commandFiles.length}`);
console.log(`- examples: ${exampleFiles.length}`);
console.log(`- Chinese examples: ${exampleZhFiles.length}`);
console.log('- checks: doc and asset links, unknown workflow-like tokens, workflow/template/command wiring, template contracts, example index, target-output examples, Chinese examples, benchmark assets, release version alignment');
if (warnings.length) {
  console.log('Warnings:');
  for (const warning of warnings) console.log('- ' + warning);
}
