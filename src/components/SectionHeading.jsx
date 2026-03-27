function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-2xl text-center"
      : "max-w-2xl text-left";
  const titleClass = invert ? "text-white" : "text-ink";
  const descriptionClass = invert ? "text-white/68" : "text-slate";

  return (
    <div className={alignment}>
      <span className="inline-flex items-center rounded-full border border-sand/25 bg-sand/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.28em] text-amber">
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl ${titleClass}`}
      >
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 sm:text-lg ${descriptionClass}`}>
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;
