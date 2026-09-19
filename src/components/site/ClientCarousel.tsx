import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import clientLogos from "@/lib/data/ClientLogos";
import { useHorizontalScroll } from "@/lib/use-horizontal-srcoll";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const clients = clientLogos;

function LogoCard({
  client,
}: {
  client: { name: string; initials: string; logo: string };
}) {
  return (
    <div
      className="group shrink-0 flex flex-col items-center justify-center gap-2 select-none"
      style={{ width: "160px" }}
    >
      <div className="group flex items-center justify-center rounded-md border border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-300 cursor-default overflow-hidden w-full h-auto">
        <img
          src={`/client-logos/${client.logo}`}
          alt={client.name}
          className="h-full w-full object-contain rounded-sm opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
        />
      </div>
      <span className="text-xs text-gray-400 font-medium truncate w-full text-center">
        {client.name}
      </span>
    </div>
  );
}

const Section = ({
  header,
  title,
  children,
  className,
}: {
  header?: React.ReactNode;
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn("flex flex-col", className)}>
      {header}
      {title && (
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          {title}
        </p>
      )}
      {children}
    </section>
  );
};

const HeaderForScrollableSection = ({
  title,
  to,
  canScrollLeft,
  canScrollRight,
  scrollBy,
}: {
  title: React.ReactNode;
  to?: string;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  scrollBy: (dir: 1 | -1) => void;
}) => {
  return (
    <div className="flex items-end justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Trusted by
        </p>

        <h2 className="text-2xl lg:text-3xl font-bold mt-2">{title}</h2>
      </div>
      <div className="flex items-center gap-1">
        {to && (
          <Link to={to}>
            <Button
              className={"mr-2 h-9 prose-sm font-semibold"}
              variant="secondary"
            >
              See More
            </Button>
          </Link>
        )}
        <Button
          type="button"
          aria-label="Scroll left"
          onClick={() => scrollBy(-1)}
          variant="secondary"
          size="icon"
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="size-4.5" />
        </Button>
        <Button
          type="button"
          aria-label="Scroll right"
          onClick={() => scrollBy(1)}
          variant="secondary"
          size="icon"
          disabled={!canScrollRight}
        >
          <ChevronRight className="size-4.5" />
        </Button>
      </div>
    </div>
  );
};

function ClientCarousel() {
  const { scrollerRef, canScrollLeft, canScrollRight, scrollBy } =
    useHorizontalScroll();

  return (
    <Section
      header={
        <HeaderForScrollableSection
          title="Our Clients"
          to="/our-clients"
          canScrollLeft={canScrollLeft}
          canScrollRight={canScrollRight}
          scrollBy={scrollBy}
        />
      }
      className="max-w-7xl mx-auto px-5 lg:px-8 py-8 lg:py-16"
    >
      <div className="scrollbar-none flex overflow-x-scroll" ref={scrollerRef}>
        <div className="grid auto-cols-[minmax(12.5rem,2fr)] grid-flow-col">
          {clients.map((client) => (
            <LogoCard key={client.name} client={client} />
          ))}
        </div>
      </div>
    </Section>
  );
}
export default ClientCarousel;
