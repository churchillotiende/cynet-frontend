import { Link } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen } from "lucide-react";
import type { Course } from "@/lib/api-client";

const fallbackGradients = [
  "from-orange-500 to-rose-500",
  "from-indigo-500 to-violet-500",
  "from-amber-500 to-orange-600",
  "from-blue-600 to-indigo-700",
  "from-fuchsia-500 to-pink-600",
  "from-emerald-500 to-teal-600",
];

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

export const CourseCard = ({
  course,
  index = 0,
}: {
  course: Course;
  index?: number;
}) => {
  const grad = fallbackGradients[index % fallbackGradients.length];
  const excerpt = stripHtml(course.excerpt ?? "");
  const category = course.categories?.[0];

  return (
    <Link
      to={`/course/${course.slug}`}
      className="group rounded-2xl border border-border bg-card overflow-hidden shadow-card hover:border-primary/40 hover:-translate-y-0.5 transition-all flex flex-col"
    >
      <div
        className={`relative h-44 overflow-hidden bg-gradient-to-br ${grad}`}
      >
        {course.featured_image ? (
          <img
            src={course.featured_image}
            alt={course.title}
            loading="lazy"
            className="absolute inset-0 size-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 grid-bg opacity-30" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        {category && (
          <span className="absolute top-3 left-3 text-[11px] font-medium px-2.5 py-1 rounded-full bg-background/70 backdrop-blur border border-border text-foreground">
            {category.name}
          </span>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        {excerpt && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
            {excerpt}
          </p>
        )}
        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs">
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <BookOpen className="size-3.5" /> Training Program
          </span>
          <span className="inline-flex items-center gap-1 text-primary font-medium">
            View details <ArrowUpRight className="size-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};
