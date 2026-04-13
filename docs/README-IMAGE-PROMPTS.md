# README Image Prompts for pm-workbench v1.1.3

This document defines the recommended README visual system for `pm-workbench`.

Goal:
- keep the English and Chinese README image structure aligned
- use the same composition for each image
- only swap the on-image copy language
- avoid fake screenshots or over-busy UI scenes
- make the repo look product-grade, benchmark-aware, and PM-focused

Recommended asset directories:

- English: `assets/readme/en/`
- Chinese: `assets/readme/zh-CN/`

Recommended image count for README:

1. Hero overview
2. Generic AI vs pm-workbench comparison
3. Benchmark snapshot summary
4. Workflow map
5. Optional share card / social preview asset

---

## Global style constraints

### Visual direction

- clean product-marketing editorial style
- sharp layout, high contrast, dark navy / graphite base with bright cyan-blue accents
- minimal but not empty
- premium, calm, intelligent, not hype-beast AI art
- strong typography hierarchy
- subtle grid, card, and diagram language
- no photorealistic humans
- no robot heads, no glowing brains, no cliché neon cityscapes
- no fake terminal overload
- no fake SaaS dashboard clutter

### Composition rules

- one core idea per image
- keep enough negative space so README remains readable on GitHub
- make center and left-to-right reading flow obvious
- on-image text should be short and headline-like
- reserve safe areas so later manual editing in Figma is easy
- all images should feel like one system, not five different campaigns

### Text handling rules

- English README uses English image copy only
- Chinese README uses Chinese image copy only
- composition should remain consistent between language versions
- text should be editable in Figma after generation
- avoid paragraphs inside images
- keep headline under 10 words when possible
- keep supporting line under 18 words when possible

### Size recommendations

- README hero: `1600 x 900`
- comparison visual: `1600 x 900`
- benchmark summary: `1600 x 900`
- workflow map: `1600 x 900`
- share card / social preview: `1200 x 630`

---

## Image 1 — Hero overview

### Purpose

Use near the top of the README to quickly communicate what `pm-workbench` is: a PM workflow skill that turns ambiguity into decision-grade outputs.

### Goal

Make visitors understand in 3 seconds that this is not a generic prompt pack. It is a structured PM workbench for messy real-world product work.

### Composition

- dark premium background
- central horizontal workflow line or layered cards
- left side starts from a fuzzy request card
- middle shows clarify / evaluate / prioritize motions
- right side lands on a decision-ready artifact card
- subtle arrows or directional motion across the canvas
- product-work card motifs, not literal UI screenshots

### English on-image copy

- Headline: `Turn vague asks into PM outputs`
- Supporting line: `Clarify, evaluate, prioritize, and communicate with sharper judgment.`

### Chinese on-image copy

- 标题：`把模糊需求变成 PM 输出`
- 副标题：`更清晰地澄清、评估、排序与向上沟通。`

### Figma prompt

Design a premium editorial-style hero graphic for an open-source product management skill called pm-workbench. Use a dark navy to graphite background with cyan-blue accent lighting, subtle grid structure, elegant cards, and a left-to-right workflow composition. Show a fuzzy incoming request on the left, a clearer product judgment flow in the center, and a reusable PM artifact on the right. The image should feel like a high-end product strategy toolkit, not a generic AI tool. No people, no robots, no photorealism, no cluttered dashboards. Keep the layout spacious and GitHub README friendly. Add strong editable headline and subheadline zones. English version text: “Turn vague asks into PM outputs” and “Clarify, evaluate, prioritize, and communicate with sharper judgment.” Chinese version should keep the exact same layout but replace the text with “把模糊需求变成 PM 输出” and “更清晰地澄清、评估、排序与向上沟通。”

### Style constraints

- premium, product-grade, editorial
- card-based visual metaphors
- no overly illustrative cartoon style
- no glowing AI orb clichés

### Suggested filenames

- English: `assets/readme/en/hero-overview.png`
- Chinese: `assets/readme/zh-CN/hero-overview.png`

---

## Image 2 — Generic AI vs pm-workbench

### Purpose

Show why the skill is different from a generic model: less rambling, better problem framing, clearer trade-offs, more reusable outputs.

### Goal

Give a fast visual contrast that makes the repo positioning credible and easy to scan.

### Composition

- split layout, left vs right
- left panel = generic AI
- right panel = pm-workbench
- use matching card frames so comparison feels fair
- left side shows vague paragraphs / diffuse outputs / unclear next step
- right side shows structured cards: clarified problem, trade-offs, recommendation, reusable artifact
- visually show “weak signal” vs “decision-grade signal”

### English on-image copy

- Left label: `Generic AI`
- Right label: `pm-workbench`
- Headline: `Less rambling. More decision signal.`

### Chinese on-image copy

- 左侧标签：`通用 AI`
- 右侧标签：`pm-workbench`
- 标题：`少一点空话，多一点决策信号`

### Figma prompt

Create a split-screen comparison graphic for a GitHub README. Left side represents a generic AI assistant and right side represents pm-workbench. Use the same visual frame on both sides for fairness. The left side should feel vague, verbose, and less actionable using diffuse text blocks and weak structure. The right side should feel sharper and more useful using clear cards for clarified problem, trade-offs, recommendation, and reusable artifact. Style should be premium, clean, strategic, and highly legible on GitHub. Dark background, cool blue accents, subtle contrast between the two sides, strong headline area. Avoid memes, cartoons, robots, or fake chat screenshots. English text: “Generic AI”, “pm-workbench”, “Less rambling. More decision signal.” Chinese version should keep the same layout and replace text with “通用 AI”, “pm-workbench”, “少一点空话，多一点决策信号”.

### Style constraints

- comparison must look fair, not gimmicky
- avoid making the left side absurdly bad
- keep right side stronger through clarity, not flashy effects

### Suggested filenames

- English: `assets/readme/en/generic-ai-vs-pm-workbench.png`
- Chinese: `assets/readme/zh-CN/generic-ai-vs-pm-workbench.png`

---

## Image 3 — Benchmark snapshot summary

### Purpose

Support the benchmark section with a visual summary that signals evidence, comparison rigor, and visible score gaps.

### Goal

Help visitors trust that the repo has a proof layer, not just positioning claims.

### Composition

- structured benchmark board or scorecard layout
- 3 scenario rows
- each row shows generic AI score vs pm-workbench score
- visually emphasize the gap without feeling like ad spam
- include tiny side notes for fairness / limitations / inspectability
- use clean numeric hierarchy

### English on-image copy

- Headline: `Benchmark snapshot`
- Row 1: `Clarify vague ask  —  3 vs 18`
- Row 2: `Leader prioritization  —  8 vs 19`
- Row 3: `Exec summary  —  10 vs 19`
- Footnote: `Visible rubric. Inspectable examples. Known limitations.`

### Chinese on-image copy

- 标题：`Benchmark 快照`
- 第 1 行：`澄清模糊需求  —  3 vs 18`
- 第 2 行：`负责人优先级判断  —  8 vs 19`
- 第 3 行：`高层摘要  —  10 vs 19`
- 脚注：`规则可见，案例可查，也明确写出已知限制。`

### Figma prompt

Design a benchmark summary graphic for a GitHub README about pm-workbench. Use a premium scorecard or benchmark board layout on a dark editorial background with blue accent highlights. Show three comparison rows with numeric scores: Clarify vague ask 3 vs 18, Leader prioritization 8 vs 19, Exec summary 10 vs 19. Make the design feel evidence-oriented, calm, and trustworthy rather than salesy. Include a small footer zone suggesting visible rubric, inspectable examples, and known limitations. Strong typography, elegant dividers, excellent readability at medium size. No fake charts with meaningless complexity, no exaggerated trophy visuals. Chinese version should preserve the exact same structure but replace all text with the provided Chinese copy.

### Style constraints

- score-first readability
- restrained, credible, inspectable feel
- should look like benchmark evidence, not a growth dashboard

### Suggested filenames

- English: `assets/readme/en/benchmark-snapshot.png`
- Chinese: `assets/readme/zh-CN/benchmark-snapshot.png`

---

## Image 4 — Workflow map

### Purpose

Explain the core working model of the skill in one glance.

### Goal

Make the repo structure and workflow logic easy to understand for new visitors.

### Composition

- a simple left-to-right process map
- 5 stages:
  1. fuzzy ask
  2. clarify
  3. evaluate / compare / prioritize
  4. artifact
  5. leadership communication / planning
- use rounded cards or nodes connected with elegant arrows
- emphasize that artifact creation is part of the flow, not a final afterthought

### English on-image copy

- Headline: `From fuzzy ask to reusable output`
- Stages:
  - `Fuzzy ask`
  - `Clarify`
  - `Evaluate / Compare / Prioritize`
  - `Artifact`
  - `Leadership communication / Planning`

### Chinese on-image copy

- 标题：`从模糊需求到可复用输出`
- 阶段：
  - `模糊需求`
  - `澄清`
  - `评估 / 比较 / 排序`
  - `交付物`
  - `向上沟通 / 规划`

### Figma prompt

Create a product-workflow map graphic for pm-workbench. The design should show a clean left-to-right sequence from fuzzy ask to reusable PM output. Use five connected stages: Fuzzy ask, Clarify, Evaluate/Compare/Prioritize, Artifact, Leadership communication/Planning. Style should be elegant, minimal, premium, and diagram-like, using rounded cards, subtle arrows, and high-contrast typography on a dark graphite background with blue accent details. The visual should feel like a strategy workflow map, not a generic process chart. Keep enough spacing for GitHub README display. Chinese version should use the same composition and swap only the labels with the provided Chinese text.

### Style constraints

- very clean diagram language
- avoid over-explaining
- no more than five visible stages

### Suggested filenames

- English: `assets/readme/en/workflow-map.png`
- Chinese: `assets/readme/zh-CN/workflow-map.png`

---

## Image 5 — Optional share card / social preview

### Purpose

Use as a repo social card, post cover, or external share asset.

### Goal

Make the project instantly legible when shared outside GitHub.

### Composition

- compact hero composition
- bold project name area
- one-line value proposition
- 2 to 4 small cue tags such as workflows, benchmarks, reusable outputs, product leadership
- optimized for social preview crop

### English on-image copy

- Title: `pm-workbench`
- Subtitle: `A PM skill for clearer product judgment`
- Tags:
  - `Workflow-first`
  - `Benchmark-backed`
  - `Reusable outputs`
  - `Leader-grade`

### Chinese on-image copy

- 标题：`pm-workbench`
- 副标题：`一个帮助产品判断更清晰的 PM skill`
- 标签：
  - `工作流优先`
  - `有 benchmark 证明层`
  - `输出物可复用`
  - `支持负责人级判断`

### Figma prompt

Design a social preview card for pm-workbench for use on GitHub, X, or other platforms. Use a premium dark editorial background, blue accent color system, strong central title area, short subtitle, and a row of compact benefit tags. The card should feel strategic, product-grade, and easy to scan in small preview size. No people, no robots, no fake screenshots, no visual noise. English text: “pm-workbench”, “A PM skill for clearer product judgment”, tags “Workflow-first”, “Benchmark-backed”, “Reusable outputs”, “Leader-grade”. Chinese version should keep the same composition and replace the text with the provided Chinese copy.

### Style constraints

- optimized for small preview size
- text must remain readable in thumbnail form
- avoid dense diagrams in this asset

### Suggested filenames

- English: `assets/readme/en/social-card.png`
- Chinese: `assets/readme/zh-CN/social-card.png`

---

## Recommended README usage mapping

### English README

- Hero overview → `assets/readme/en/hero-overview.png`
- Generic AI vs pm-workbench → `assets/readme/en/generic-ai-vs-pm-workbench.png`
- Benchmark snapshot → `assets/readme/en/benchmark-snapshot.png`
- Workflow map → `assets/readme/en/workflow-map.png`

### Chinese README

- Hero overview → `assets/readme/zh-CN/hero-overview.png`
- Generic AI vs pm-workbench → `assets/readme/zh-CN/generic-ai-vs-pm-workbench.png`
- Benchmark snapshot → `assets/readme/zh-CN/benchmark-snapshot.png`
- Workflow map → `assets/readme/zh-CN/workflow-map.png`

### Optional external asset

- Social preview → `assets/readme/en/social-card.png`
- Social preview → `assets/readme/zh-CN/social-card.png`

---

## Production notes

- Prefer generating the layout first, then replacing typography manually in Figma for pixel-level control.
- Keep English and Chinese versions in one shared Figma file with paired frames.
- Use the same grid, spacing, icon language, and card style in both languages.
- If Chinese copy appears crowded, reduce supporting text before changing the composition.
- Do not invent fake UI screenshots unless they are clearly marked conceptual.
- If only four README images are needed, cut the optional social card first.
