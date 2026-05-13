"use client";

import { motion } from "framer-motion";

type Entry = {
  period: string;
  role: string;
  org: string;
  description: string;
};

export default function Timeline({ entries }: { entries: Entry[] }) {
  return (
    <div className="relative">
      <div className="absolute left-0 top-2 bottom-2 w-px bg-(--border)" />
      <div className="space-y-10 pl-8">
        {entries.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative"
          >
            <div className="absolute -left-8 top-1.5 w-2 h-2 rounded-full bg-accent ring-2 ring-background" />
            <p className="font-mono text-xs text-(--muted) mb-1">
              {entry.period}
            </p>
            <p className="font-semibold text-foreground">
              {entry.role}{" "}
              <span className="text-accent">· {entry.org}</span>
            </p>
            <p className="text-sm text-(--muted) mt-1 leading-relaxed">
              {entry.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
