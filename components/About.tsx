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
        >
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
            About
          </p>

          <div className="max-w-2xl space-y-4 text-foreground leading-relaxed mb-10">
            <p>
              Like most builders, sci-fi movies, animations, anime, and comics presented
              the possibilities that exist — and those that could. They weakened the
              barriers between what is and what could be, and granted me a level of
              perception I have come to appreciate.
            </p>
            <p>
              I&apos;ve always loved keeping things: cartons, used-up junk, spoilt remotes,
              phones, toy cars, radios. The list is extensive. I&apos;ve always loved taking
              things apart (putting them back together was never the point) and marvelling
              at what makes up the things we use every day.
            </p>
            <p>
              My mum wanted me to study medicine. I had other plans. From wanting to be a
              scientist, to understanding what scientists actually were, to dreaming of
              being an astronaut, a pilot. I eventually settled on mathematics. Mathematics
              spoke to my soul in a way nothing else had — the way it shaped how I viewed
              life, introduced a logical mindset, the way I could get lost in it for hours
              without feeling time pass.
            </p>
            <p>
              Then life happened. Against my wishes, I ended up studying Computer
              Engineering. It didn&apos;t feel too far from mathematics, and I planned to major
              in maths afterward, but somewhere along the way, I learned what it meant to
              pick up a computer and code. To literally be a &apos;god&apos; of your own choosing.
              To bend things to your will and create something from almost nothing.
            </p>
            <p>
              I started where most do — HTML, CSS, JS, then Python. From coding I dabbled
              in graphics design (definitely not my thing), AR/VR (there&apos;s a project
              loading on that), AI and ML. I really thought that was it. My final
              destination. Little did I know a deeper calling was waiting, but I couldn&apos;t
              hear it until all the noise faded.
            </p>
            <p>
              Then came hardware engineering. It felt right, like a glove that finally fit.
              I had a domain. But no direction within it, until Terra Industries and drones
              changed that. Learning drone tech was the turning point.
            </p>
            <p className="text-(--muted)">
              My goal right now is simple: bring my ideas to life, have fun doing it, and
              build not just myself but everyone who walks this path of engineering and
              innovation. There&apos;s no other option but greatness.
            </p>
          </div>

          <Link
            href="/resume"
            className="text-sm text-accent font-medium hover:underline underline-offset-4 mb-16 inline-block"
          >
            View full resume →
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 border-t border-(--border) pt-10">
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
