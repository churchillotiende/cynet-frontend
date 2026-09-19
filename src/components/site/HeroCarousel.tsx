import { useEffect, useState } from "react";
import hero1 from "/assets/hero-1.webp";
import hero2 from "/assets/hero-2.webp";
import hero3 from "/assets/hero-3.webp";
import hero4 from "/assets/hero-4.webp";

const slides = [
  { src: hero1, alt: "Professional training classroom" },
  { src: hero2, alt: "Strategy session with charts" },
  { src: hero3, alt: "Team collaborating on data" },
  { src: hero4, alt: "Seminars" },
];

interface Props {
  intervalMs?: number;
}

export const HeroCarousel = ({ intervalMs = 5500 }: Props) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      intervalMs,
    );
    return () => clearInterval(id);
  }, [intervalMs]);

  return (
    <>
      {/* Slides */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            width={1920}
            height={1080}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 size-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
              i === active ? "opacity-100 scale-105" : "opacity-0"
            }`}
            style={{
              transitionProperty: "opacity, transform",
              transitionDuration:
                i === active ? "1400ms, 8000ms" : "1400ms, 0ms",
            }}
          />
        ))}
        {/* Brand color overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/30" />
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === active
                ? "w-8 bg-primary shadow-glow"
                : "w-4 bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>
    </>
  );
};
