import { BookOpen, Calendar, Sparkles } from "lucide-react";
import { HeroCarousel } from "./HeroCarousel";
import { Link } from "@tanstack/react-router";
import { useHeroSection } from "@/hooks/use-homepage";

function HeroSection() {
  const stats = [
    { value: "1,000+", label: "Professionals Trained" },
    { value: "300+", label: "Training Programs" },
    { value: "15+", label: "Industries Served" },
    { value: "5+", label: "Years of Excellence" },
  ];

  const { data: hero, isLoading } = useHeroSection();

  interface ClientLogo {
    name: string;
    logo: string;
  }

  function clientLogoMarquee({ clientLogos }: { clientLogos: ClientLogo[] }) {
    return (
      <div className="mt-16 overflow-hidden">
        <p className="text-center text-xs uppercase tracking-wide text-muted-foreground mb-6">
          Trusted by leading organizations accross Africa
        </p>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-6 motion-reduce:animate-none">
            {[...clientLogos, ...clientLogos].map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="rounded-xl bg-card/60 backdrop-blur border border-border p-5 flex items-center justify-center h-20 w-40 shrink-0"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-10 w-auto object-contain opacity-80 grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden border-b border-border min-h-[680px] lg:min-h-[760px] flex items-center">
      <HeroCarousel />
      <div className="absolute -right-40 -top-40 size-[28rem] rounded-full bg-primary/20 blur-3xl pointer-events-none z-0" />
      <div className="absolute -left-32 bottom-0 size-80 rounded-full bg-primary/15 blur-3xl pointer-events-none z-0" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 lg:px-8 pt-16 lg:pt-24 pb-24 lg:pb-28">
        {isLoading ? (
          <div className="h-6 w-40 rounded-full bg-muted animate-pulse" />
        ) : (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-medium">
            <Sparkles className="size-3" /> {hero?.badge_text}
          </span>
        )}
        {isLoading ? (
          <div className="mt-5 space-y-3">
            <div className="h-12 w-full max-w-3xl rounded-md bg-muted animate-pulse" />
            <div className="h-12 w-2/3 max-w-xl rounded-md bg-muted animate-pulse" />
          </div>
        ) : (
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-4xl">
            {hero?.headline}{" "}
            <span className="text-gradient">{hero?.headline_highlight} </span>
            <br className="hidden sm:block" />
            {hero?.second_headline}{" "}
          </h1>
        )}
        {isLoading ? (
          <div className="mt-6 space-y-2 max-w-2xl">
            <div className="h-4 w-full rounded bg-muted animate-pulse" />
            <div className="h-4 w-3/4 rounded bg-muted animate-pulse" />
          </div>
        ) : (
          <p className="mt-6 text-base lg:text-lg text-muted-foreground max-w-2xl">
            {hero?.subheadline}{" "}
          </p>
        )}
        {isLoading ? (
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="h-12 w-40 rounded-lg bg-muted animate-pulse" />
            <div className="h-12 w-40 rounded-lg bg-muted animate-pulse" />
          </div>
        ) : (
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={hero?.cta_url}
              className="inline-flex items-center gap-2 px-5 h-12 rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:opacity-95 transition"
            >
              <BookOpen className="size-4" />
              {hero?.cta_label}
            </Link>
            <Link
              to="https://drive.google.com/file/d/1TqaD4jHUqqFSqMgV5zePqF-uGg9rm4AE/view"
              className="inline-flex items-center gap-2 px-5 h-12 rounded-lg bg-secondary border border-border font-medium hover:bg-muted transition"
            >
              <Calendar className="size-4" /> 2026 calendar
            </Link>
          </div>
        )}
        <Link
          to="/courses"
          className="mt-6 inline-flex items-center gap-1 text-2xl text-primary hover:underline"
        >
          Booking a course for yourself? Find your course{" "}
          <span aria-hidden>→</span>
        </Link>{" "}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl bg-card/60 backdrop-blur border border-border p-5"
            >
              <p className="text-2xl lg:text-3xl font-bold text-gradient">
                {s.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
