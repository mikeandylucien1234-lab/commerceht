export function PageHero({
  kicker,
  title,
  compact = false,
}: {
  kicker?: string;
  title: string;
  compact?: boolean;
}) {
  return (
    <section
      className={`relative flex items-center overflow-hidden bg-gradient-to-br from-navy to-navy-dark ${
        compact ? "h-[240px]" : "h-[280px]"
      }`}
    >
      <div
        className="absolute right-0 top-0 h-full w-[38%] bg-red opacity-90"
        style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
      />
      <div className="relative z-10 px-8 md:px-14">
        {kicker && (
          <div className="mb-3.5 text-xs font-semibold uppercase tracking-widest text-red">
            {kicker}
          </div>
        )}
        <h1 className="font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
