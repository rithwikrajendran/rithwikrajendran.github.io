# Plan: Rithwik Rajendran — Personal Website (MVP)

## Context

Rithwik is a Lead Data Scientist / ML & AI Engineer (6+ yrs, currently at ASDA) who wants a
personal homepage to (a) attract career opportunities, (b) showcase public-safe work (talks,
publications, open source, newsletters) **without** exposing his private/confidential CV work, and
(c) give visitors a clean way to reach him via LinkedIn and find his two Substacks. Goal: ship a
real, live site quickly as an MVP to iterate on later.

**Environment reality check:** `git` and `gh` (authenticated as `rithwikrajendran`, full `repo`
scope) are available. **No Hugo, no Node, and only system Ruby 2.6** (too old for modern Jekyll).
Installing a static-site generator would consume most of the time budget for zero MVP benefit.
**Decision: a hand-built static HTML/CSS site (no build step)** — fastest, most reliable, deploys
instantly to GitHub Pages, and is trivial to evolve later.

## Confirmed decisions (from interview)

| Topic | Decision |
|---|---|
| Stack | Plain static HTML + CSS (+ tiny vanilla JS for smooth-scroll / mobile nav). No build step. |
| Hosting | GitHub Pages, **user site** repo `rithwikrajendran.github.io` (public), served from `main` root. |
| Domain | `rithwikrajendran.github.io` for now; custom domain later (zero rework). |
| Theme | Dark / modern tech, cyan-green accent. |
| Layout | Single page, anchored sticky nav (About · Writing · Talks · Skills). |
| CV | **No public CV.** The PDF in this folder must NEVER be committed (`.gitignore`). |
| Photo | `website_photo.jpeg` (768×1024) → cropped/optimised to a square avatar. |
| Contact | LinkedIn only (no email shown). |
| Social links | LinkedIn, GitHub, both Substacks. |
| Employer | Hero shows "Lead Data Scientist at ASDA" (no confidential details / £ figures). |
| Education | Both degrees (MSc Data Science, University of Bristol; BTech CSE). |
| Location | "United Kingdom". |

**Links:**
- LinkedIn: https://linkedin.com/in/rithwikrajendran
- GitHub: https://github.com/rithwikrajendran
- Did You Say Data!? → https://didyousaydata.substack.com/
- Rithwicked Deflection → https://rithwickeddeflection.substack.com/

## Files to create (in `/Users/rithwikrajendran/Brand/Website/`)

```
index.html          # single-page site, semantic HTML, SEO + OpenGraph meta
style.css           # dark theme, responsive, CSS variables for easy re-theming
script.js           # smooth scroll + mobile nav toggle (small, optional)
assets/profile.jpg  # square-cropped, ~800px optimised copy of website_photo.jpeg
favicon.svg         # simple "RR" monogram favicon
.gitignore          # excludes 'Why Hire Rithwik.pdf' AND original website_photo.jpeg
README.md           # short note on how to edit/redeploy
```

### Page sections (single scroll)
1. **Sticky nav** — name/monogram left; anchor links (About · Writing · Talks · Skills) right; collapses to a toggle on mobile.
2. **Hero / About** — square photo, "Rithwik Rajendran", "Lead Data Scientist at ASDA · ML & AI Engineer", "United Kingdom", a 2–3 sentence public-safe bio (6+ yrs shipping production ML & AI at scale; LLMs, vector search, MLOps on Databricks/Azure — **no confidential project specifics**), one education line, and a social-icon row (LinkedIn, GitHub, Did You Say Data!?, Rithwicked Deflection).
3. **Writing** — two newsletter cards linking out (open in new tab): *Did You Say Data!?* (ML systems, AI engineering, applied DS) and *Rithwicked Deflection* (football analytics, xG, data storytelling).
4. **Talks & Publications** — Talks: Leeds Digital Festival, Databricks Meetup Leeds, Leeds Data Science Meetup. Publications/OSS: "Battery Charts" Matplotblog tutorial; ggShakeR open-source contributor. (Talk entries as text; pub/OSS entries link out where a confirmed URL exists, otherwise rendered as plain text to be linked in a later pass.)
5. **Skills** — compact tag cloud, public-safe only: Python, PySpark, SQL, Spark, Databricks, Azure, LLMs, DSPy, FAISS, Vector Search, GraphFrames, MLflow, XGBoost, MLOps, CI/CD.
6. **Footer** — "Connect on LinkedIn" CTA + small © line.

### Quality / technical details
- Responsive (mobile-first), semantic landmarks, `alt` text, keyboard-focusable links.
- SEO `<title>`, meta description, and Open Graph / Twitter tags (so LinkedIn shares render a card with name, title, and photo).
- Self-contained: system font stack + one web font (Inter) with graceful fallback; no JS framework.
- Photo optimised with macOS `sips` (crop to square, resize ~800px, recompress) to keep payload small.

## Implementation steps
1. Create `assets/` and generate optimised square `assets/profile.jpg` from `website_photo.jpeg` via `sips`.
2. Write `.gitignore` first (exclude `Why Hire Rithwik.pdf` and `website_photo.jpeg`) — privacy guardrail before any `git add`.
3. Write `index.html`, `style.css`, `script.js`, `favicon.svg`, `README.md`.
4. `git init`, add **only** the site files, commit.
5. Create public repo `rithwikrajendran.github.io` via `gh repo create` and push `main`.
6. Enable GitHub Pages (source: `main` / root) via `gh api` if not auto-enabled for user sites.

## Verification
- **Local:** `open index.html` and visually confirm hero/photo, all four sections, working nav, all outbound links, and mobile layout (narrow window).
- **Privacy check:** `git ls-files` must NOT list `Why Hire Rithwik.pdf` or `website_photo.jpeg`.
- **Live:** after push, poll `https://rithwikrajendran.github.io` for HTTP 200 (Pages can take 1–3 min on first build), then load in browser to confirm it renders and the OpenGraph image resolves.

## Out of scope (future iterations)
Custom domain + DNS; blog/CMS or SSG migration; analytics; contact form backend; per-talk slide
links; light/dark toggle; richer project case studies (only if/when made public-safe).
