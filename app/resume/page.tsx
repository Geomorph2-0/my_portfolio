import Timeline from "@/components/Timeline";
import { Download, GitFork, ExternalLink, Mail } from "lucide-react";
import type { Metadata } from "next";
import { experience, education, skillTags as skills } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resume — Joseph Bolujo",
  description: "Experience, education, and skills of Joseph Kehinde Bolujo",
};


export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <div className="flex items-start justify-between mb-12 flex-wrap gap-4">
        <div>
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
            Resume
          </p>
          <h1 className="text-4xl font-bold tracking-tight">
            Joseph Bolujo
          </h1>
          <p className="text-(--muted) mt-1">
            Hardware Engineer · Embedded Systems Developer
          </p>
        </div>
        <a
          href="/Joseph_Bolujo_CV.pdf"
          download
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-(--border) text-sm hover:border-accent transition-colors text-foreground"
        >
          <Download size={14} /> Download PDF
        </a>
      </div>

      <section className="mb-14">
        <h2 className="text-xs font-semibold text-(--muted) uppercase tracking-widest mb-6">
          Experience
        </h2>
        <Timeline entries={experience} />
      </section>

      <section className="mb-14">
        <h2 className="text-xs font-semibold text-(--muted) uppercase tracking-widest mb-6">
          Education
        </h2>
        <Timeline entries={education} />
      </section>

      <section className="mb-16">
        <h2 className="text-xs font-semibold text-(--muted) uppercase tracking-widest mb-4">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-sm font-mono bg-(--border) text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-(--border) pt-12">
        <h2 className="text-xs font-semibold text-(--muted) uppercase tracking-widest mb-6">
          Contact
        </h2>
        <div className="flex flex-wrap gap-6">
          <a
            href="mailto:jkbolujo@gmail.com"
            className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
          >
            <Mail size={15} /> jkbolujo@gmail.com
          </a>
          <a
            href="https://github.com/Geomorph2-0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
          >
            <GitFork size={15} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/joseph-bolujo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
          >
            <ExternalLink size={15} /> LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
