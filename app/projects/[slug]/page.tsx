import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, GitFork, Calendar } from "lucide-react";
import ProjectGallery from "@/components/ProjectGallery";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { frontmatter: f, content } = project;

  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] mb-10 transition-colors"
      >
        <ArrowLeft size={14} /> Back to projects
      </Link>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {f.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-full text-xs font-mono bg-[var(--border)] text-[var(--muted)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <h1 className="text-4xl font-bold tracking-tight mb-3">{f.title}</h1>
      <p className="text-[var(--muted)] mb-6 text-lg leading-relaxed">
        {f.description}
      </p>

      <div className="flex items-center gap-4 mb-10 text-sm text-[var(--muted)]">
        <span className="flex items-center gap-1.5">
          <Calendar size={13} />
          {new Date(f.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
          })}
        </span>
        {f.github && (
          <a
            href={f.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[var(--foreground)] transition-colors"
          >
            <GitFork size={13} /> View on GitHub
          </a>
        )}
      </div>

      {f.image && (
        <div className="relative w-full h-72 rounded-xl overflow-hidden mb-12 bg-[var(--border)]">
          <Image src={f.image} alt={f.title} fill className="object-cover" />
        </div>
      )}

      <article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-[var(--accent)] prose-code:font-mono prose-pre:bg-[var(--card)] prose-pre:border prose-pre:border-[var(--border)]">
        <MDXRemote source={content} />
      </article>

      {f.gallery && f.gallery.length > 0 && (
        <div className="mt-12 border-t border-[var(--border)] pt-10">
          <p className="text-xs font-semibold text-[var(--muted)] uppercase tracking-widest mb-4">
            Gallery
          </p>
          <ProjectGallery images={f.gallery} />
        </div>
      )}
    </div>
  );
}
