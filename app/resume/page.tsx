import Timeline from "@/components/Timeline";
import { Download, GitFork, ExternalLink, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Joseph Bolujo",
  description: "Experience, education, and skills of Joseph Kehinde Bolujo",
};

const experience = [
  {
    period: "Sep 2025 – Present",
    role: "Vice President",
    org: "Redeemer's University Technology Space",
    description:
      "Leading technical initiatives and community building at the university's technology hub, driving hardware and embedded systems projects.",
  },
  {
    period: "Aug 2025 – Sep 2025",
    role: "Network Intern",
    org: "MTN Nigeria",
    description:
      "Assisted in monitoring network infrastructure and troubleshooting telecommunications hardware. Carried out site audits as part of maintenance and troubleshooting activities.",
  },
  {
    period: "Apr 2025 – Jul 2025",
    role: "Hardware Engineering Intern",
    org: "Constantlink Technologies Limited",
    description:
      "Diagnosed and repaired complex PCB-level issues for smartphones (Samsung, Infinix, Oppo). Engineered solar power solutions including load calculation and panel/inverter installation. Maintained industrial-grade hardware including inverters, UPS systems, and printers.",
  },
];

const education = [
  {
    period: "Jan 2021 – Oct 2026 (Expected)",
    role: "B.Eng. Computer Engineering",
    org: "Redeemer's University",
    description:
      "Key Coursework: Computer Architecture, Microprocessor Systems, Digital Logic Design, Embedded Systems, Control Systems, Cryptography Principles and Applications.",
  },
];

const skills = [
  "C / C++",
  "Python",
  "ESP32 (ESP-IDF)",
  "STM32",
  "Arduino",
  "PlatformIO",
  "STM32Cube Suite",
  "KiCad",
  "Proteus",
  "Vivado (FPGA)",
  "PID Control",
  "Sensor Fusion",
  "IoT Protocols",
  "PCB Design",
  "Power Electronics",
  "UAV / Drone Systems",
];

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <div className="flex items-start justify-between mb-12 flex-wrap gap-4">
        <div>
          <p className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest mb-3">
            Resume
          </p>
          <h1 className="text-4xl font-bold tracking-tight">
            Joseph Kehinde Bolujo
          </h1>
          <p className="text-[var(--muted)] mt-1">
            Hardware Engineer · Embedded Systems Developer
          </p>
        </div>
        <a
          href="/Joseph_Bolujo_CV.pdf"
          download
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-sm hover:border-[var(--accent)] transition-colors text-[var(--foreground)]"
        >
          <Download size={14} /> Download PDF
        </a>
      </div>

      <section className="mb-14">
        <h2 className="text-xs font-semibold text-[var(--muted)] uppercase tracking-widest mb-6">
          Experience
        </h2>
        <Timeline entries={experience} />
      </section>

      <section className="mb-14">
        <h2 className="text-xs font-semibold text-[var(--muted)] uppercase tracking-widest mb-6">
          Education
        </h2>
        <Timeline entries={education} />
      </section>

      <section className="mb-16">
        <h2 className="text-xs font-semibold text-[var(--muted)] uppercase tracking-widest mb-4">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-sm font-mono bg-[var(--border)] text-[var(--foreground)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-[var(--border)] pt-12">
        <h2 className="text-xs font-semibold text-[var(--muted)] uppercase tracking-widest mb-6">
          Contact
        </h2>
        <div className="flex flex-wrap gap-6">
          <a
            href="mailto:jkbolujo@gmail.com"
            className="flex items-center gap-2 text-sm text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
          >
            <Mail size={15} /> jkbolujo@gmail.com
          </a>
          <a
            href="https://github.com/Geomorph2-0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
          >
            <GitFork size={15} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/joseph-bolujo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
          >
            <ExternalLink size={15} /> LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
