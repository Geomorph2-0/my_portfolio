# Changelog

Version history and commit log for the portfolio project.
Follows [Semantic Versioning](https://semver.org/): `MAJOR.MINOR.PATCH`

- **PATCH** — bug fix or refactor, no visible new behaviour
- **MINOR** — new visible feature, section, or behaviour added
- **MAJOR** — full redesign or structural overhaul

---

## v1.1.1 — 2026-05-13

**Type:** Patch — UI improvement to existing content, no new features

### Changes
- Converted `description` fields in `experience` and `education` from plain strings to `string[]`
- `Timeline.tsx` updated to render descriptions as bullet lists (`<ul>` with `list-disc list-inside`)
- `Timeline` `Entry` type updated: `description: string` → `description: string[]`

### Commits
- `ce4c0a4` feat: itemize experience and education descriptions as bullet lists

---

## v1.1.0 — 2026-05-13

**Type:** Minor — new `lib/data.ts` data layer, codebase cleanup and style modernisation

### Changes
- **Nav scroll bug fixed:** replaced `lastY` state with `useRef` in `Nav.tsx` to prevent stale scroll listener re-registration on every scroll event
- **Data centralised:** created `lib/data.ts` as single source of truth for `skillGroups`, `skillTags`, `experience`, and `education`
- **Duplication eliminated:** removed inline skill arrays from `About.tsx` and `resume/page.tsx`; both now import from `lib/data.ts`
- **Tailwind v4 canonical classes:** migrated all `[var(--x)]` patterns to canonical syntax across 11 files
  - Mapped tokens (`--accent`, `--foreground`, `--background`): `text-[var(--accent)]` → `text-accent`
  - Unmapped tokens (`--muted`, `--border`, `--card`): `text-[var(--muted)]` → `text-(--muted)`
- **Workflow scaffolding:** added `CLAUDE.md`, `tasks/todo.md`, `tasks/lessons.md`

### Commits
- `5a0eab1` style: migrate to Tailwind v4 canonical class syntax
- `06d80ce` fix: extract shared data to lib/data.ts and fix nav scroll ref bug
- `53147ee` chore: record lesson — no co-author credits in commits
- `a755e50` chore: scaffold tasks/ directory with todo and lessons files
- `97e5183` chore: add CLAUDE.md with workflow and collaboration instructions

---

## v1.0 — 2026-05-12

**Type:** Major — initial release

### What shipped
- **Home page:** animated Hero section (name, tagline, CTA buttons) + About section (bio, skill category grid)
- **Projects listing:** MDX-driven project cards with client-side tag filtering (`ProjectFilter`)
- **Project detail pages:** statically generated per MDX file — renders frontmatter metadata, hero image, MDX body (with typography styles), and optional photo gallery with lightbox
- **Resume page:** experience timeline, education timeline, skills tag cloud, contact links (email, GitHub, LinkedIn), PDF download
- **Navigation:** hide-on-scroll nav bar with active link highlighting and mobile hamburger menu
- **Dark/light theme:** system preference detection, `localStorage` persistence, toggle button in nav
- **3 projects published:**
  - UAV Flight Controller
  - Smart Parking Lot (ESP32)
  - SoC Security via Logic Locking

### Commits
- `1f95949` feat: add photo gallery to Smart Parking Lot project
- `2e9fb0d` fix: suppress hydration warning caused by Grammarly extension
- `d9381f2` feat: initial portfolio v1.0
