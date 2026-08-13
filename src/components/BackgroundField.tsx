export function BackgroundField() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f4f1ea 1px, transparent 1px), linear-gradient(to bottom, #f4f1ea 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="animate-drift absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-[120px]" />
      <div className="animate-drift-slow absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-accent-soft/10 blur-[120px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
    </div>
  );
}
