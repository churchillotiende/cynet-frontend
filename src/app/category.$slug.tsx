import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, MapPin, Quote, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ErrorState } from "@/components/site/Loaders";
import { Section } from "@/components/site/CourseDetail/Section";
import { useCategoryCourses } from "@/hooks/use-courses";
import { stripHtml } from "@/lib/wp";
import { api } from "@/lib/api-client";

// Marketing copy not yet modeled in the backend — see note below.
const intakes = [
  { date: "14 Sep", mode: "Nairobi" },
  { date: "5 Oct", mode: "virtual" },
  { date: "9 Nov", mode: "Mombasa" },
];

const testimonial = {
  quote:
    "The hands-on exercises made it immediately useful in our county reporting.",
  name: "Jane Doe",
  role: "M&E Officer",
  organisation: "County Government",
};

export const Route = createFileRoute("/category/$slug")({
  head: async ({ params }) => {
    try {
      const { category } = await api.getCategoryCourses(params.slug);

      const title = `${category.name} Courses in Nairobi | Bluestron Institute`;
      const description = category.description
        ? stripHtml(category.description)
        : `Browse ${category.name.toLowerCase()} training programs at Bluestron Institute. Classroom, virtual, or in-house delivery in Nairobi.`;

      return {
        meta: [
          { title },
          { name: "description", content: description },
          { name: "robots", content: "index, follow" },
          { property: "og:title", content: title },
          { property: "og:description", content: description },
          { property: "og:type", content: "website" },
          { name: "twitter:title", content: title },
          { name: "twitter:description", content: description },
        ],
        links: [
          {
            rel: "canonical",
            href: `https://bluestroninstitute.com/category/${params.slug}`,
          },
        ],
      };
    } catch (error) {
      console.error("Failed to load SEO data:", error);
      return {
        meta: [{ title: "Course Category | Bluestron Institute" }],
      };
    }
  },
  component: CategoryPage,
});
function CategoryPage() {
  const { slug } = useParams({ from: "/category/$slug" });
  const { data, isLoading, isError } = useCategoryCourses(slug);

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-6xl space-y-6 px-4 py-12">
        <div className="h-6 w-32 animate-pulse rounded bg-muted" />
        <div className="h-12 w-3/4 animate-pulse rounded bg-muted" />
        <div className="h-40 w-full animate-pulse rounded-xl bg-muted" />
      </div>
    );
  }

  if (isError || !data) return <ErrorState />;

  const { category, courses } = data;

  return (
    <article className="bg-background">
      {/* ============== BLOCK 1 — Headline ============== */}
      <header className="border-b bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto max-w-6xl px-4 pb-10 pt-6">
          <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2">
            <Link to="/courses">
              <ArrowLeft className="mr-2 h-4 w-4" /> All courses
            </Link>
          </Button>

          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Courses → {category?.name}
          </p>
          <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            NITA-approved {category?.name.toLowerCase()} in Nairobi
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Classroom, virtual, or in-house at your offices. Certificates issued
            on completion.
          </p>

          {/* ============== BLOCK 2 — Next intakes ============== */}
          <div className="mt-8 flex flex-wrap gap-3">
            {intakes.map((intake) => (
              <Badge
                key={`${intake.date}-${intake.mode}`}
                variant="secondary"
                className="gap-1.5 px-3 py-1.5 text-sm"
              >
                <Calendar className="h-3.5 w-3.5" />
                {intake.date} · {intake.mode}
              </Badge>
            ))}
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-6xl px-4">
        {/* ============== BLOCK 3 — Course cards ============== */}
        <Section
          id="courses"
          eyebrow="Programs"
          title={`${category?.name} programs`}
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <div
                key={c.id}
                className="flex flex-col justify-between rounded-2xl border bg-card p-5 shadow-sm transition hover:border-primary/40"
              >
                <div>
                  <h4 className="font-semibold leading-snug text-foreground">
                    {c.title}
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {c.duration ?? "5 days"}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" /> Nairobi or virtual
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-medium text-foreground">
                    from KES {Number(c.price).toLocaleString()}
                  </p>
                </div>
                <Button asChild size="sm" className="mt-4 w-full">
                  <Link to="/course/$slug" params={{ slug: c.slug }}>
                    See dates
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </Section>

        <Separator />

        {/* ============== BLOCK 4 — Testimonial ============== */}
        <Section id="testimonial" eyebrow="From the field" title="">
          <div className="rounded-2xl border bg-card p-6 md:p-8">
            <Quote className="h-6 w-6 text-primary" />
            <p className="mt-4 text-lg font-medium leading-relaxed">
              "{testimonial.quote}"
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              — {testimonial.name}, {testimonial.role},{" "}
              {testimonial.organisation}
            </p>
          </div>
        </Section>

        <Separator />

        {/* ============== TEAM CTA + CALENDAR DOWNLOAD ============== */}
        <Section
          id="teams"
          eyebrow="For teams"
          title="Training a group of 5 or more?"
        >
          <p className="max-w-xl text-muted-foreground">
            In-house delivery is usually cheaper per person.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/contact">
                <Users className="mr-2 h-4 w-4" /> Request a team proposal
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://drive.google.com/file/d/1TqaD4jHUqqFSqMgV5zePqF-uGg9rm4AE/view"
                download
              >
                Download 2026 calendar
              </a>
            </Button>
          </div>
        </Section>
      </div>
    </article>
  );
}

export default CategoryPage;
