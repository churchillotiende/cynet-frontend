import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Award,
  Calendar,
  Clock,
  GraduationCap,
  Layers,
  Tag,
  Users,
} from "lucide-react";

import { stripHtml } from "@/lib/wp";
import { ErrorState } from "@/components/site/Loaders";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import {
  RegistrationModal,
  useRegistration,
} from "@/components/site/UserRegistration";
import { useCourse } from "@/hooks/use-courses";
import { FactCard } from "@/components/site/CourseDetail/FactCard";
import { Bullet } from "@/components/site/CourseDetail/Bullet";
import { Section } from "@/components/site/CourseDetail/Section";
import TrainingOptions from "@/components/site/CourseDetail/TrainingOptions";
import { api, Faq } from "@/lib/api-client";

type Maybe<T> = T | undefined | null;

const acf = (course) => course?.acf ?? course?.meta ?? {};

const asArray = <T,>(v: Maybe<T | T[]>): T[] =>
  Array.isArray(v) ? v : v ? [v] : [];

const splitLines = (v: Maybe<string | string[]>): string[] =>
  asArray(v)
    .flatMap((s) => String(s).split(/\r?\n|•|\u2022/))
    .map((s) => s.replace(/^[-*\d.)\s]+/, "").trim())
    .filter(Boolean);

export const Route = createFileRoute("/course/$slug")({
  head: async ({ params }) => {
    try {
      const course = await api.getCourse(params.slug);

      const seoTitle =
        course.seo_title || `${course.title} | Bluestron Institute`;
      console.log("The seo title is: ", course.seo_description);
      const seoDescription =
        course.seo_description ||
        (course.excerpt ? stripHtml(course.excerpt) : "");

      const canonicalUrl =
        course.seo_canonical ||
        `https://bluestroninstitute.com/course/${params.slug}`;

      return {
        meta: [
          { title: seoTitle },
          { name: "description", content: seoDescription },
          {
            name: "robots",
            content: course.seo_robots_noindex
              ? "noindex, nofollow"
              : "index, follow",
          },
          { property: "og:title", content: course.og_title || seoTitle },
          { property: "og:description", content: seoDescription },
          { property: "og:type", content: "article" },
          { name: "twitter:title", content: course.og_title },
          { name: "twitter:description", content: seoDescription },
          ...(course.featured_image
            ? [{ property: "og:image", content: `/${course.featured_image}` }]
            : []),
        ],
        links: [{ rel: "canonical", href: canonicalUrl }],
      };
    } catch (error) {
      console.error("Failed to load SEO data:", error);
      return {
        meta: [{ title: "Course Details | Bluestron Institute" }],
      };
    }
  },
  component: CourseDetail,
});

function CourseDetail() {
  const { slug = "" } = useParams({ from: "/course/$slug" });
  const reg = useRegistration();
  const { data: course, isLoading, isError } = useCourse(slug);

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-6xl space-y-6 px-4 py-12">
        <div className="h-6 w-32 animate-pulse rounded bg-muted" />
        <div className="h-12 w-3/4 animate-pulse rounded bg-muted" />
        <div className="h-64 w-full animate-pulse rounded-xl bg-muted" />
        <div className="h-40 w-full animate-pulse rounded-xl bg-muted" />
      </div>
    );
  }

  if (isError) return <ErrorState />;

  if (!course) {
    return (
      <div className="container mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="mb-3 text-3xl font-bold">Course not found</h1>
        <p className="mb-6 text-muted-foreground">
          We couldn't find a program with that slug.
        </p>
        <Button asChild>
          <Link to="/courses">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to courses
          </Link>
        </Button>
      </div>
    );
  }

  // --- Map Laravel course fields ---
  const title = course.title;
  const intro = course.excerpt ? stripHtml(course.excerpt) : "";
  const cats = course.categories ?? [];
  const firstCat = cats[0]?.name ?? "";
  const duration = course.duration ?? "5 Days";
  const certificate = "Included";
  const delivery = "Instructor-Led";
  const level = "Foundation to Intermediate";

  const curriculum: { title: string; items: string[] }[] = [];
  const objectives: string[] = [];
  const audience: string[] = [];
  const requirements: string[] = [];
  const personalImpact: string[] = [];
  const orgImpact: string[] = [];
  const methodology: string[] = [];

  const faqs: Faq[] = [];

  return (
    <article className="bg-background">
      {/* ============== HERO ============== */}
      <header className="border-b bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container mx-auto max-w-6xl px-4 pb-10 pt-6">
          <Button asChild variant="ghost" size="sm" className="mb-6 -ml-2">
            <Link to="/courses">
              <ArrowLeft className="mr-2 h-4 w-4" /> All courses
            </Link>
          </Button>

          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                {cats.map((c) => (
                  <Badge key={c.id ?? c.name} variant="secondary">
                    <Tag className="mr-1 h-3 w-3" /> {c.name}
                  </Badge>
                ))}
                {intro && (
                  <span className="text-sm font-medium text-primary">
                    {intro}
                  </span>
                )}
              </div>

              {/* title from Laravel, as plain text or HTML if you need */}
              <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                {title}
              </h1>

              {intro && (
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  {intro}
                </p>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                {course.published_at && (
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {new Date(course.published_at).toLocaleDateString(
                      undefined,
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    )}
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4" /> Training program
                </span>
              </div>

              {/* Anchor nav */}

              <nav className="mt-8 flex flex-wrap gap-2 border-t pt-6 text-sm">
                {[
                  ["#options", "Dates & Prices"],
                  ["#curriculum", "Curriculum"],
                  ["#about", "About"],
                  ["#audience", "Audience"],
                  ["#certification", "Certification"],
                  ["#faqs", "FAQs"],
                  ["#enquire", "Enquire"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="rounded-full border px-3 py-1.5 transition hover:border-primary hover:text-primary"
                  >
                    {label}
                  </a>
                ))}
              </nav>
              {/* ... */}
            </div>

            {/* Hero image / quick CTA card */}
            <aside className="space-y-4">
              {course.featured_image && (
                <div className="overflow-hidden rounded-2xl border shadow-sm">
                  <img
                    src={`/${course.featured_image}`}
                    alt={stripHtml(title)}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              {/* CTA card unchanged */}
            </aside>
          </div>

          {/* Key facts */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <FactCard icon={Clock} label="Duration" value={duration} />
            <FactCard icon={Award} label="Certificate" value={certificate} />
            <FactCard icon={Users} label="Delivery" value={delivery} />
            <FactCard icon={Layers} label="Level" value={level} />
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-6xl px-4">
        {/* ============== TRAINING OPTIONS ============== */}

        <TrainingOptions slug={slug} />
        <Separator />

        {/* ============== CURRICULUM ============== */}
        <Section
          id="curriculum"
          eyebrow="Curriculum"
          title="What you'll master in this training"
        >
          <p className="mb-6 max-w-2xl text-muted-foreground">
            Built by industry pros — practical insights, real-world examples,
            and strategies you can apply immediately.
          </p>

          {curriculum.length ? (
            <Accordion type="multiple" className="rounded-xl border">
              {curriculum.map((m, i) => (
                <AccordionItem key={i} value={`m-${i}`} className="px-4">
                  <AccordionTrigger className="text-left">
                    <span>
                      <span className="mr-2 text-xs font-semibold text-primary">
                        Module {i + 1}
                      </span>
                      {m.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pl-2">
                      {m.items.map((it, j) => (
                        <Bullet key={j}>{it}</Bullet>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : course.content ? (
            // FULL HTML content from Laravel, no omissions
            <div
              className="prose prose-neutral max-w-none dark:prose-invert text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: course.content }}
            />
          ) : (
            <p className="text-muted-foreground">
              Detailed curriculum available on request.
            </p>
          )}
        </Section>

        <Separator />
      </div>

      <RegistrationModal {...reg} />
    </article>
  );
}

export default CourseDetail;
