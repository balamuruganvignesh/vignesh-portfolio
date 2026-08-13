import { Reveal } from "./Reveal";
import { profile, education } from "../data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <span className="font-mono text-sm text-accent">01 / About</span>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-4 max-w-3xl text-balance font-serif text-2xl leading-relaxed text-paper sm:text-3xl">
          {profile.blurb}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-16 rounded-2xl border border-line bg-white/[0.02] p-8 transition-colors hover:border-line/80 sm:p-10">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
            <h3 className="font-serif text-xl text-paper">{education.school}</h3>
            <span className="font-mono text-xs text-paper-dim">{education.date}</span>
          </div>
          <p className="mt-1 text-sm text-paper-dim">{education.location}</p>
          <p className="mt-4 text-paper-dim">{education.degree}</p>
          <p className="mt-2 text-sm text-accent-soft">{education.gpa}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {education.coursework.map((c) => (
              <span
                key={c}
                className="rounded-full border border-line px-3 py-1 text-xs text-paper-dim"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
