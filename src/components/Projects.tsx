import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { projects } from "../data";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <span className="font-mono text-sm text-accent">03 / Projects</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-serif text-3xl text-paper sm:text-4xl">Selected work</h2>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.1} className="h-full">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group flex h-full flex-col rounded-2xl border border-line bg-white/[0.02] p-8 transition-colors hover:border-accent/50"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-serif text-xl text-paper">{project.title}</h3>
                {project.badge && (
                  <span className="shrink-0 rounded-full border border-accent/30 px-2.5 py-1 text-[11px] tracking-wide text-accent-soft uppercase">
                    {project.badge}
                  </span>
                )}
              </div>
              <p className="mt-3 text-paper-dim">{project.description}</p>

              <ul className="mt-5 flex-1 space-y-2">
                {project.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-paper-dim">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.links && (
                <div className="mt-6 flex flex-wrap gap-4 border-t border-line pt-5">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex items-center gap-1.5 text-sm text-paper transition-colors hover:text-accent"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
