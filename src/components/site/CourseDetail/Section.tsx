export const Section = ({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section
    id={id}
    className={`scroll-mt-24 py-12 md:py-16 text-primary ${className}`}
  >
    {(eyebrow || title) && (
      <div className="mb-8 max-w-3xl">
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-primary">
            {title}
          </h2>
        )}
      </div>
    )}
    {children}
  </section>
);
