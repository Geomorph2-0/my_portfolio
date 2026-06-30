"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GitFork, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { slug, frontmatter: f } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group rounded-xl border border-(--border) bg-(--card) overflow-hidden hover:border-accent transition-colors"
    >
      {f.image && (
        <Link href={`/projects/${slug}`}>
          <div className="relative h-48 w-full overflow-hidden bg-(--border)">
            <Image
              src={f.image}
              alt={f.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>
      )}

      <div className="p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {f.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-xs font-mono bg-(--border) text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link href={`/projects/${slug}`}>
          <h3 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
            {f.title}
          </h3>
        </Link>
        <p className="text-sm text-foreground/70 leading-relaxed line-clamp-2 mb-4">
          {f.description}
        </p>

        <div className="flex items-center gap-3">
          <Link
            href={`/projects/${slug}`}
            className="inline-flex items-center gap-1 text-xs text-accent font-medium hover:underline underline-offset-4"
          >
            Read more <ArrowUpRight size={12} />
          </Link>
          {f.github && (
            <a
              href={f.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-(--muted) hover:text-foreground transition-colors"
            >
              <GitFork size={13} /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
