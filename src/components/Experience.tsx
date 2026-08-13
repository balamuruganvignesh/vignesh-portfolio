import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { experience } from "../data";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <span className="font-mono text-sm text-accent">02 / Experience</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-serif text-3xl text-paper sm:text-4xl">Where I've worked</h2>
      </Reveal>

      <div className="relative mt-16">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
          className="absolute top-1 left-[7px] hidden h-full w-px bg-line sm:block"
        />

        <div className="space-y-14">
          {experience.map((job, i) => (
            <Reveal key={job.org} delay={i * 0.08}>
              <div className="relative sm:pl-12">
                <span className="absolute top-1.5 left-0 hidden h-[15px] w-[15px] rounded-full border-2 border-accent bg-ink sm:block" />

                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="font-serif text-xl text-paper">{job.role}</h3>
                  <span className="font-mono text-xs text-paper-dim">{job.date}</span>
                </div>
                <p className="mt-1 text-sm text-accent-soft">
                  {job.org} · {job.location}
                </p>

                <ul className="mt-4 space-y-2">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-paper-dim">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-paper-dim/60" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
