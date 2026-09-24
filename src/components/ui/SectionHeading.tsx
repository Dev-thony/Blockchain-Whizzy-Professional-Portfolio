type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:gap-12">
      {/* Small Section Label */}
      <div>
        <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
          {eyebrow}
        </p>
      </div>

      {/* Main Heading */}
      <div className="space-y-8">
        <h2 className="font-heading text-4xl leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h2>

        {description && (
          <p className="max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
            {description}
          </p>
        )}

        {/* Editorial divider */}
        <div className="h-px w-full bg-white/10" />
      </div>
    </div>
  );
}
