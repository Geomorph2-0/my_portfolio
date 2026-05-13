# Codebase Documentation

Portfolio website for Joseph Kehinde Bolujo — hardware engineer and embedded systems developer.

---

## Stack

### Next.js 16 (App Router)
The framework driving the entire site. The App Router model means every file inside `app/` is either a page, a layout, or a route handler — no `pages/` directory. Static generation (`generateStaticParams`) is used for project detail pages, meaning the site builds to fully static HTML at deploy time with no runtime server needed.

**Why:** App Router enables per-route metadata, server components by default, and clean MDX integration via `next-mdx-remote/rsc`. The static output makes deployment trivial (Vercel, Netlify, or any static host).

### React 19
The UI layer. Components are server components by default in the App Router; client interactivity is opted into explicitly with `"use client"` at the top of a file.

**Why:** Comes bundled with Next.js 16. Server components reduce JavaScript sent to the browser for static content like the resume and project pages.

### TypeScript 5
All source files are `.tsx` or `.ts`. Types are defined inline where small (e.g. `GalleryImage`) and in dedicated files where shared (`lib/projects.ts`, `lib/data.ts`).

**Why:** Catches mismatches between data shapes and component props at build time rather than at runtime. Critical when the MDX frontmatter shape must match what the UI expects.

### Tailwind CSS v4
Utility-first CSS. The project uses Tailwind v4's canonical class syntax:
- Mapped theme tokens: `text-accent`, `text-foreground`, `bg-background`
- Unmapped CSS variables: `text-(--muted)`, `border-(--border)`, `bg-(--card)`

CSS custom properties (`--accent`, `--muted`, `--border`, `--card`) are defined in `app/globals.css` under `:root` and `.dark`. Only `--background`, `--foreground`, and `--accent` are mapped into Tailwind's `@theme inline` block; the rest are referenced directly.

**Why:** Eliminates the need for a separate CSS file per component. v4's canonical syntax removes the verbose `[var(--x)]` pattern in favour of `(--x)`.

### Framer Motion 12
Used for entrance animations across Hero, About, ProjectCard, and Timeline components. All animations are `opacity + y` fades triggered either on mount or `whileInView` with `once: true` so they don't replay on scroll-back.

**Why:** Adds perceived polish to the landing and project pages with minimal configuration. The `whileInView` + `once: true` pattern avoids layout thrash and repeated animation on scroll.

### next-mdx-remote
Renders MDX content server-side in the project detail page (`app/projects/[slug]/page.tsx`) using the `/rsc` import, which works natively with React Server Components.

**Why:** Allows project write-ups to be authored in Markdown with embedded JSX components if needed, without a separate CMS. Content lives in `content/projects/` as `.mdx` files.

### gray-matter
Parses YAML frontmatter from `.mdx` files at build time. Used exclusively in `lib/projects.ts`.

**Why:** Standard, lightweight frontmatter parser. Separates metadata (title, tags, date, gallery, github URL) from prose content cleanly.

### lucide-react
Icon library used across Nav, Hero, ProjectCard, ProjectGallery, and Resume for UI icons (arrows, mail, GitHub fork, calendar, download, close).

**Why:** Tree-shakeable, consistent stroke-width icons that match the minimal aesthetic. Each icon is imported individually.

### @tailwindcss/typography
Provides the `prose` classes used in the project detail article (`app/projects/[slug]/page.tsx`) to style raw MDX-rendered HTML.

**Why:** MDX renders to plain HTML elements (`<h2>`, `<p>`, `<code>`, `<pre>`). The typography plugin styles these automatically without writing per-element CSS.

---

## Project Structure

```
portfolio/
├── app/                        # Next.js App Router — pages and layouts
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles, CSS variables, Tailwind config
│   ├── favicon.ico
│   ├── projects/
│   │   ├── page.tsx            # Projects listing page
│   │   └── [slug]/
│   │       └── page.tsx        # Individual project detail page
│   └── resume/
│       └── page.tsx            # Resume page
│
├── components/                 # Reusable UI components
│   ├── Nav.tsx                 # Top navigation bar
│   ├── Hero.tsx                # Landing hero section
│   ├── About.tsx               # About + skills section (home page)
│   ├── ProjectCard.tsx         # Card used in the projects grid
│   ├── ProjectFilter.tsx       # Client-side tag filter for projects listing
│   ├── ProjectGallery.tsx      # Image grid with lightbox for project detail
│   ├── Timeline.tsx            # Reusable timeline for experience and education
│   └── ThemeProvider.tsx       # Dark/light theme context and toggle logic
│
├── lib/                        # Shared logic and data
│   ├── projects.ts             # File system MDX loader (getAllProjects, getProjectBySlug)
│   └── data.ts                 # Single source of truth for skills, experience, education
│
├── content/
│   └── projects/               # MDX files — one per project
│       ├── smart-parking-esp32.mdx
│       ├── soc-security-logic-locking.mdx
│       └── uav-flight-controller.mdx
│
├── public/                     # Static assets served at root URL
│   ├── Joseph_Bolujo_CV.pdf
│   └── projects/
│       └── smart-parking/      # Project image assets
│           ├── full-setup.jpg
│           ├── overview.jpg
│           └── side-view.jpg
│
├── docs/                       # Project documentation
│   ├── codebase.md             # This file — architecture and stack reference
│   └── changelog.md            # Version history and commit log
│
├── tasks/                      # Workflow tracking
│   ├── todo.md                 # Active task plans
│   └── lessons.md              # Rules and patterns from corrections
│
├── CLAUDE.md                   # AI collaboration instructions and workflow rules
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── eslint.config.mjs
```

---

## Pages

### `app/layout.tsx` — Root Layout
Wraps every page. Sets up:
- Google Fonts (`Geist Sans`, `Geist Mono`) as CSS variables
- Global `<Metadata>` for SEO and OpenGraph
- `<ThemeProvider>` context around the whole tree
- `<Nav>` fixed at the top
- `<main>` flex container for page content
- `<footer>` with a static attribution line

`suppressHydrationWarning` is set on `<html>` and `<body>` to suppress warnings caused by browser extensions (e.g. Grammarly) injecting attributes before React hydrates.

### `app/page.tsx` — Home
Renders `<Hero>` followed by `<About>`. No data fetching — both components are self-contained.

### `app/projects/page.tsx` — Projects Listing
Calls `getAllProjects()` at build time (server component), passes the result to `<ProjectFilter>` which handles client-side tag filtering. Renders a header section with a title and description above the filter.

### `app/projects/[slug]/page.tsx` — Project Detail
- `generateStaticParams` pre-builds a page for every MDX file at build time
- `generateMetadata` sets per-page title and description from frontmatter
- Renders: back link, tags, title, description, date, GitHub link, hero image, MDX article body, and optional `<ProjectGallery>` if `gallery` is defined in frontmatter

### `app/resume/page.tsx` — Resume
Fully static page. Imports `experience`, `education`, and `skillTags` from `lib/data.ts`. Renders three sections (Experience, Education, Skills) plus a Contact section with email, GitHub, and LinkedIn links. Includes a PDF download button linking to `/Joseph_Bolujo_CV.pdf`.

---

## Components

### `Nav.tsx`
Fixed top navigation with hide-on-scroll behaviour. Uses a `useRef` for tracking the last scroll position (not `useState`) to avoid re-registering the scroll listener on every scroll event. Supports a hamburger menu on mobile. Theme toggle button calls `useTheme().toggle()`.

### `Hero.tsx`
Full-viewport landing section. Staggered Framer Motion fade-in for the tagline, name, description, and CTA buttons. Links to `/projects` and `/resume#contact`.

### `About.tsx`
Two-column section: a bio paragraph on the left, a 2×2 skill category grid on the right. Skills are imported from `lib/data.ts` (`skillGroups`). Animated with a single `whileInView` wrapper.

### `ProjectCard.tsx`
Card component for the projects grid. Renders: cover image (if present), tags, title, truncated description, a "Read more" link, and an optional GitHub link. Hover effects: border colour change, image scale, title colour change.

### `ProjectFilter.tsx`
Client component. Derives the full tag list from the projects array, renders filter buttons, and locally filters `projects` by the active tag. Renders the filtered set into a responsive grid of `<ProjectCard>` components.

### `ProjectGallery.tsx`
Client component. Renders a responsive 2–3 column image grid. Clicking any image opens a fullscreen lightbox (`fixed inset-0`) with the image centred and a caption below. Clicking outside the image or the X button closes it.

### `Timeline.tsx`
Reusable vertical timeline. Renders a left-border line with dot markers for each entry. Each entry shows: period (monospace), role + org, and a bullet list of description items. Used on the resume page for both experience and education. `description` is typed as `string[]`.

### `ThemeProvider.tsx`
Creates a `ThemeContext` with `{ theme, toggle }`. On mount, reads `localStorage` for a saved preference, falls back to `prefers-color-scheme`. Applies or removes the `dark` class on `<html>` and persists the choice to `localStorage` on toggle.

---

## Data Layer

### `lib/projects.ts`
Two exported functions:
- `getAllProjects()` — reads all `.mdx` files from `content/projects/`, parses frontmatter with `gray-matter`, sorts by date descending
- `getProjectBySlug(slug)` — reads and parses a single `.mdx` file by slug

Both run at build time only (no `"use client"`). The `Project` type and `ProjectFrontmatter` type are exported and shared across pages and components.

### `lib/data.ts`
Single source of truth for all hardcoded content:
- `skillGroups` — array of `{ category, items[] }` used in `About.tsx`
- `skillTags` — flat array derived from `skillGroups` used in `resume/page.tsx`
- `experience` — array of timeline entries with `string[]` descriptions
- `education` — array of timeline entries with `string[]` descriptions

Editing any of this data updates both the About section and the Resume page simultaneously.

---

## Content Authoring

### Adding a project
1. Create `content/projects/<slug>.mdx`
2. Add frontmatter:
```yaml
---
title: "Project Title"
description: "One-line summary"
tags: ["ESP32", "C++"]
image: "/projects/<slug>/cover.jpg"   # optional
gallery:                               # optional
  - src: "/projects/<slug>/img1.jpg"
    alt: "Description"
github: "https://github.com/..."      # optional
date: "2025-01-01"
featured: true                         # optional
---
```
3. Write the body in Markdown below the frontmatter
4. Place images in `public/projects/<slug>/`

The page is automatically built and added to the projects listing on next build.

### Updating resume content
Edit `lib/data.ts` — changes propagate to both the About section and the Resume page.

---

## Theme System

CSS custom properties defined in `app/globals.css`:

| Variable | Light | Dark | Usage |
|---|---|---|---|
| `--background` | `#fafafa` | `#0d1117` | Page background |
| `--foreground` | `#111111` | `#e6edf3` | Body text |
| `--accent` | `#0f766e` | `#14b8a6` | Brand colour, links, active states |
| `--muted` | `#6b7280` | `#8b949e` | Secondary text, labels |
| `--border` | `#e5e7eb` | `#21262d` | Borders, dividers, image placeholders |
| `--card` | `#ffffff` | `#161b22` | Card backgrounds, code blocks |

`--background`, `--foreground`, and `--accent` are registered in Tailwind's `@theme inline` block, making `text-accent`, `bg-background`, etc. available as named utilities. The remaining variables are used with the `(--x)` CSS variable shorthand.
