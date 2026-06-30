"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CurrentBuild, BuildStatus } from "@/lib/data";

const statusStyles: Record<BuildStatus, string> = {
  "In Progress": "bg-accent/10 text-accent",
  Experimenting: "bg-amber-500/10 text-amber-500",
  Planned: "bg-(--border) text-(--muted)",
  Stalled: "bg-rose-500/10 text-rose-500",
};

const allStatuses: BuildStatus[] = ["In Progress", "Experimenting", "Planned", "Stalled"];

export default function BuildList({ builds }: { builds: CurrentBuild[] }) {
  const [active, setActive] = useState<BuildStatus | null>(null);

  const filtered = active ? builds.filter((b) => b.status === active) : builds;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActive(null)}
          className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
            active === null
              ? "bg-accent text-white"
              : "bg-(--border) text-(--muted) hover:text-foreground"
          }`}
        >
          All
        </button>
        {allStatuses.map((s) => (
          <button
            key={s}
            onClick={() => setActive(s === active ? null : s)}
            className={`px-3 py-1.5 rounded-full text-sm font-mono transition-colors ${
              active === s
                ? "bg-accent text-white"
                : "bg-(--border) text-(--muted) hover:text-foreground"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-(--muted) text-sm">Nothing here yet.</p>
      ) : (
        <div className="space-y-px">
          {filtered.map((build) => (
            <div
              key={build.name}
              className="group py-6 border-b border-(--border) first:border-t"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-semibold text-foreground font-mono">
                    {build.name}
                  </h3>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-mono ${statusStyles[build.status]}`}
                  >
                    {build.status}
                  </span>
                </div>
                {build.link && (
                  <Link
                    href={build.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-(--muted) hover:text-accent transition-colors shrink-0"
                  >
                    GitHub <ArrowUpRight size={12} />
                  </Link>
                )}
              </div>

              {build.started && (
                <p className="font-mono text-xs text-(--muted) mb-2">
                  Started {build.started}
                </p>
              )}

              <p className="text-sm text-(--muted) leading-relaxed mb-3">
                {build.description}
              </p>

              {build.tags && build.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {build.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-xs font-mono bg-(--border) text-(--muted)"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <p className="text-xs text-(--muted) mt-10 font-mono">
        Stalled doesn&apos;t mean dead. Everything here is either waiting for time or resources.
      </p>
    </div>
  );
}
