import { currentBuilds } from "@/lib/data";
import BuildList from "@/components/BuildList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building",
  description: "What Joseph Bolujo is currently working on — active builds, experiments, and what's next on the bench.",
};

export default function BuildingPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
        The Bench
      </p>
      <h1 className="text-4xl font-bold tracking-tight mb-3">What I&apos;m Building</h1>
      <p className="text-(--muted) mb-12 max-w-xl">
        Here&apos;s what&apos;s on my bench right now — active builds, things I&apos;m experimenting
        with, ideas in the pipeline, and the ones that are stalled but not dead.
      </p>

      <BuildList builds={currentBuilds} />
    </div>
  );
}
