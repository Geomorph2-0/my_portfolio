"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/projects";

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const allTags = Array.from(
    new Set(projects.flatMap((p) => p.frontmatter.tags))
  ).sort();

  const [active, setActive] = useState<string | null>(null);

  const filtered = active
    ? projects.filter((p) => p.frontmatter.tags.includes(active))
    : projects;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActive(null)}
          className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
            active === null
              ? "bg-[var(--accent)] text-white"
              : "bg-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)]"
          }`}
        >
          All
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActive(tag === active ? null : tag)}
            className={`px-3 py-1.5 rounded-full text-sm font-mono transition-colors ${
              active === tag
                ? "bg-[var(--accent)] text-white"
                : "bg-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-[var(--muted)] text-sm">No projects match this filter.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
