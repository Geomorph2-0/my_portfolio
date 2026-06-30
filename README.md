# Joseph Bolujo — Portfolio

Personal portfolio site for Joseph Bolujo, hardware engineer and embedded systems developer. Built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4.

Live at **[bolujojoseph.vercel.app](https://bolujojoseph.vercel.app)**

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, static export) |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion 12 |
| Content | MDX via `next-mdx-remote/rsc` |
| Icons | lucide-react |
| Fonts | Geist Sans + Geist Mono |

---

## Structure

```
app/
  page.tsx              # Home (Hero + About)
  projects/
    page.tsx            # Projects listing with tag filter
    [slug]/page.tsx     # Individual project detail + gallery
  building/page.tsx     # What I'm currently building
  resume/page.tsx       # Resume — experience, education, skills
components/
  Hero.tsx
  About.tsx
  Nav.tsx
  ProjectCard.tsx
  ProjectFilter.tsx
  ProjectGallery.tsx    # Lightbox with keyboard nav (arrows + Escape)
  BuildList.tsx
  Timeline.tsx
  ThemeProvider.tsx
content/projects/       # MDX files — one per project
lib/
  projects.ts           # MDX parsing and project data helpers
  data.ts               # Experience, education, skills, current builds
public/
  projects/             # Project images
  Joseph_Bolujo_CV.pdf  # Downloadable CV
```

---

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Adding a project

1. Create `content/projects/<slug>.mdx`
2. Add frontmatter:

```yaml
---
title: "Project Title"
description: "One-line description"
tags: ["Firmware", "Hardware", "System"]
date: "2025-01-01"
image: "/projects/<slug>/cover.jpg"   # optional
github: "https://github.com/..."      # optional
gallery:                              # optional
  - src: "/projects/<slug>/img.jpg"
    alt: "Caption"
featured: true                        # shows on homepage
---
```

3. Place images in `public/projects/<slug>/`

The page is automatically built and added to the listing on next build.

---

## Updating resume content

Edit `lib/data.ts` — changes propagate to the About section and the Resume page simultaneously.
