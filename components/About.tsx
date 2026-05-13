"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { skillGroups as skills } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-(--border)">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid md:grid-cols-2 gap-16"
        >
          <div>
            <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
              About
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              I&apos;m a Computer Engineering student at Redeemer&apos;s University,
              specializing in embedded systems and UAV architecture. My work spans
              designing flight controllers from scratch, implementing real-time
              firmware, and integrating complex hardware systems.
            </p>
            <p className="text-(--muted) leading-relaxed mb-6">
              I&apos;m passionate about building world-class hardware on African soil —
              closing the gap between low-level firmware and the kind of hardware
              complexity that shapes the future of autonomous systems and IoT.
            </p>
            <Link
              href="/resume"
              className="text-sm text-accent font-medium hover:underline underline-offset-4"
            >
              View full resume →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="text-xs font-semibold text-(--muted) uppercase tracking-widest mb-2">
                  {group.category}
                </p>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
