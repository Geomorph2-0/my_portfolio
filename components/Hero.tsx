"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

const baseAnim = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-5xl mx-auto px-6 py-24 w-full">
        <motion.p
          {...baseAnim}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-sm text-[var(--accent)] mb-4 tracking-wide"
        >
          Hardware Engineer · Embedded Systems Developer
        </motion.p>

        <motion.h1
          {...baseAnim}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          Joseph Kehinde,
          <br />
          <span className="text-[var(--accent)]">Bolujo.</span>
        </motion.h1>

        <motion.p
          {...baseAnim}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl text-[var(--muted)] max-w-2xl leading-relaxed mb-10"
        >
          Computer Engineering student specializing in embedded systems and UAV
          architecture. I design flight controllers from the ground up —
          bridging low-level firmware and complex hardware integration, building
          world-class solutions on African soil.
        </motion.p>

        <motion.div
          {...baseAnim}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View Projects <ArrowRight size={15} />
          </Link>
          <Link
            href="/resume#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] text-sm font-medium text-[var(--foreground)] hover:border-[var(--accent)] transition-colors"
          >
            Get in Touch <Mail size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
