import { profile } from "../data";

export function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-3 border-t border-line pt-8 text-sm text-paper-dim sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href="#top" className="transition-colors hover:text-accent">
          Back to top
        </a>
      </div>
    </footer>
  );
}
