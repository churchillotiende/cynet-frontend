import { useCategories } from "@/hooks/use-courses";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen } from "lucide-react";

function CategoriesSection() {
  const categories = useCategories();

  return (
    <section className="border-t border-border bg-card/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Specializations
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold mt-2">
            Training Programs by Category
          </h2>
          <p className="mt-3 text-muted-foreground">
            Explore our comprehensive curriculum spanning leadership, data,
            governance, and more.
          </p>
        </div>
        {categories.isLoading && (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="h-20 rounded-xl bg-secondary animate-pulse"
              />
            ))}
          </div>
        )}
        {categories.data && (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {categories.data.map((c) => (
              <Link
                key={c.id}
                to={`/courses?category=${c.id}`}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:border-primary/40 hover:bg-secondary transition"
              >
                <div className="size-11 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">
                  <BookOpen className="size-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm leading-snug group-hover:text-primary transition-colors">
                    {c.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {c.courses_count} courses
                  </p>
                </div>
                <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default CategoriesSection;
