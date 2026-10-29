# DSA by Doing — Stage 1

A beginner-first Java learning website, built with **HTML + CSS + modular JavaScript**. No bundler or framework required. Inspired by the separation of pages, scripts and lesson data in Android by Doing.

## What works
- 42 navigable Stage 1 lessons in 10 modules
- Individual lesson explanations, analogies, runnable Java examples, predicted output, multiple-choice checks, hints, practice and independent prompts
- Array indexing visualizer
- Progress and practice notes saved with localStorage
- Dashboard with module progress and JSON export
- Responsive pages; works on GitHub Pages

## Important limitations
- **No Java compiler:** output is a precomputed worked example, not the result of running arbitrary Java code. Students must use a Java IDE or a trusted Java runner to verify edits.
- Coding exercises are **self-assessed**, not automatically graded. Quiz answers are automatically checked.
- Content is a substantive first-pass curriculum, not a fully authored textbook. Many lessons share the same instructional structure; deepen explanations and add exercises as you test with beginners.
- Stage 2–6 cards are placeholders, not released courses.

## Run locally
ES modules require HTTP rather than `file://`. From the repository root run:

```bash
python3 -m http.server 8000
```

Visit http://localhost:8000. For GitHub Pages, push files to the repository root and enable Pages from `main` `/ (root)`. Relative links support project sites.

## Deploy to existing repository
Unzip and copy the **contents** of this folder into your local `dsa-by-doing` Git repository. Remove the old root-level `script.js`, `styles.css` and `lessons.json` after verifying the new pages. Then:

```bash
git add -A
git commit -m "feat: rebuild stage 1 as modular Java learning site"
git push origin main
```

## Suggested next increments
1. Expand each lesson's analogies and add step-through diagrams.
2. Add Java compiler integration with isolated execution and strict resource limits.
3. Add automated browser tests and accessibility checks.
4. Add Stage 2 modules through meaningful weekly releases.
