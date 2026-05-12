import { getAllProjects } from "@/lib/projects";
import ProjectFilter from "@/components/ProjectFilter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Hardware and embedded systems projects",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      <p className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest mb-3">
        Work
      </p>
      <h1 className="text-4xl font-bold tracking-tight mb-3">Projects</h1>
      <p className="text-[var(--muted)] mb-12 max-w-xl">
        A selection of hardware and embedded systems projects — from PCB design
        through firmware to full system integration.
      </p>

      {projects.length === 0 ? (
        <p className="text-[var(--muted)] text-sm">
          Projects coming soon. Check back later.
        </p>
      ) : (
        <ProjectFilter projects={projects} />
      )}
    </div>
  );
}
