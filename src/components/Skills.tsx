import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { skills } from "../data";

function SkillGroup({
  title,
  items,
  delay,
}: {
  title: string;
  items: string[];
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <h3 className="mb-4 font-mono text-xs tracking-wide text-paper-dim uppercase">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            whileHover={{ y: -2, borderColor: "var(--color-accent)" }}
            className="rounded-lg border border-line bg-white/[0.02] px-4 py-2 text-sm text-paper"
          >
            {s}
          </motion.span>
        ))}
      </div>
    </Reveal>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <span className="font-mono text-sm text-accent">04 / Skills</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-serif text-3xl text-paper sm:text-4xl">Tools I reach for</h2>
      </Reveal>

      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        <SkillGroup title="Data & Analytics" items={skills.data} delay={0.1} />
        <SkillGroup title="Web Development" items={skills.web} delay={0.13} />
        <SkillGroup title="Languages" items={skills.languages} delay={0.16} />
      </div>
    </section>
  );
}
