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

function extractInlineCodeRefs(text) {
  const refs = [];
  const regex = /`([^`]+\.md)`/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const ref = match[1];
    if (ref.includes('/')) refs.push(ref);
  }
  return refs;
}

function extractMarkdownLinks(text) {
  const refs = [];
  const regex = /\[[^\]]+\]\(([^)]+\.(md|svg))\)/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    refs.push(match[1]);
  }
  return refs;
}

function normalizeRef(fromFileRel, ref) {
  const baseDir = path.dirname(path.resolve(root, fromFileRel));
  const absolute = path.resolve(baseDir, ref);
  return path.relative(root, absolute);
}

const workflowFiles = listMdFiles('references/workflows');
const templateFiles = listMdFiles('references/templates');
const exampleFiles = listMdFiles('examples').filter((f) => f !== 'README.md');

const docsToCheck = [
  'SKILL.md',
  'README.md',
  'docs/GETTING-STARTED.md',
  'docs/TRY-3-PROMPTS.md',
  'examples/README.md',
  'ROADMAP.md',
  'CONTRIBUTING.md',
  'CHANGELOG.md',
  'docs/PRODUCT-LEADER-PLAYBOOK.md',
  'benchmark/README.md',
  'benchmark/CONTRIBUTING-BENCHMARKS.md',
  'benchmark/scenarios.md',
  'benchmark/rubric.md',
  'benchmark/scorecard.md',
  'benchmark/worked-example-product-leader.md',
  'benchmark/worked-example-clarify-request.md',
  'benchmark/worked-example-exec-summary.md'
];

const docContents = Object.fromEntries(docsToCheck.map((rel) => [rel, read(path.join(root, rel))]));
const skill = docContents['SKILL.md'];
const readme = docContents['README.md'];
const examplesReadme = docContents['examples/README.md'];
const changelog = docContents['CHANGELOG.md'];

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
}

for (const file of workflowFiles) {
  const workflowName = file.replace(/\.md$/, '');
  assert(skill.includes('`' + workflowName + '`'), `SKILL.md missing workflow mention: ${workflowName}`);
}

for (const file of templateFiles) {
  assert(skill.includes(file), `SKILL.md missing template mapping/reference: ${file}`);
}

for (const file of exampleFiles) {
  assert(examplesReadme.includes(file), `examples/README.md missing example link: ${file}`);
}

const benchmarkFiles = [
  'benchmark/README.md',
  'benchmark/CONTRIBUTING-BENCHMARKS.md',
  'benchmark/scenarios.md',
  'benchmark/rubric.md',
  'benchmark/scorecard.md',
  'benchmark/worked-example-product-leader.md',
  'benchmark/worked-example-clarify-request.md',
  'benchmark/worked-example-exec-summary.md',
  'docs/PRODUCT-LEADER-PLAYBOOK.md',
  'docs/images/pm-workbench-benchmark-summary.svg',
  'docs/images/pm-workbench-benchmark-card.svg'
];

for (const file of benchmarkFiles) {
  assert(exists(file), `Expected file missing: ${file}`);
}

const expectedReadmeLinks = [
  'docs/GETTING-STARTED.md',
  'docs/TRY-3-PROMPTS.md',
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

assert(changelog.includes('## v1.0.0'), 'CHANGELOG.md missing v1.0.0 section');

warn(readme.includes('product leader') || readme.includes('Product leader'), 'README.md may under-emphasize product-leader positioning');
warn(readme.includes('benchmark') || readme.includes('Benchmark'), 'README.md may under-emphasize benchmark layer');
warn(readme.includes('pm-workbench-benchmark-summary.svg'), 'README.md may not surface the benchmark summary visual yet');
warn(readme.includes('pm-workbench-benchmark-card.svg'), 'README.md may not surface the share-friendly benchmark card yet');
warn(readme.includes('v1.0.0') || changelog.includes('v1.0.0'), 'Release version may not be surfaced clearly enough');

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
console.log(`- workflows: ${workflowFiles.length}`);
console.log(`- templates: ${templateFiles.length}`);
console.log(`- examples: ${exampleFiles.length}`);
if (warnings.length) {
  console.log('Warnings:');
  for (const warning of warnings) console.log('- ' + warning);
}
