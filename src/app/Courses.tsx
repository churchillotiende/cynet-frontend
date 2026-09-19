import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { z } from "zod";
import { api } from "@/lib/api-client";
import { CourseCard } from "@/components/site/CourseCard";
import { CardGridSkeleton, ErrorState } from "@/components/site/Loaders";
import { cn } from "@/lib/utils";

const searchSchema = z.object({
  category: z.number().optional(),
  page: z.number().optional().default(1),
  q: z.string().optional().default(""),
});

export const Route = createFileRoute("/Courses")({
  head: () => ({
    meta: [{ title: "Courses | Bluestron Institute" }],
  }),
  validateSearch: searchSchema,
  component: Courses,
});

function Courses() {
  const navigate = useNavigate({ from: "/Courses" });
  const { category, page = 1, q = "" } = Route.useSearch();

  const [search, setSearch] = useState(q);
  const [debouncedSearch, setDebouncedSearch] = useState(q);

  const [prevQ, setPrevQ] = useState(q);
  if (q !== prevQ) {
    setPrevQ(q);
    setSearch(q);
    setDebouncedSearch(q);
  }

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search), 350);
    return () => clearTimeout(t);
  }, [search]);

  const setParam = (
    key: keyof typeof searchSchema.shape,
    value?: string | number,
  ) => {
    navigate({
      search: (prev) => {
        const next = { ...prev };

        if (value === undefined || value === "" || value === null) {
          delete next[key];
        } else {
          next[key] =
            typeof value === "string" && key !== "q" ? Number(value) : value;
        }

        if (key !== "page") {
          delete next.page;
        }

        return next;
      },
      replace: true,
    });
  };

  const categories = useQuery({
    queryKey: ["categories"],
    queryFn: api.listCategories,
  });

  const courses = useQuery({
    queryKey: ["courses", { page, category, search: debouncedSearch }],
    queryFn: () =>
      api.listPaginatedCourses({
        page,
        per_page: 12,
        category,
        search: debouncedSearch || undefined,
      }),
    placeholderData: keepPreviousData,
  });

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 lg:py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Course Catalog
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold mt-2">
          All Training Programs
        </h1>
        <p className="mt-3 text-muted-foreground">
          Browse our complete catalog of expert-led training programs.
        </p>
      </div>

      <div className="mt-8 grid lg:grid-cols-[260px_1fr] gap-8">
        <aside className="space-y-5">
          <div className="relative">
            <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search courses…"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setParam("q", e.target.value);
              }}
              className="w-full h-11 pl-10 pr-3 rounded-lg bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
            />
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Categories
            </p>
            <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
              <button
                onClick={() => setParam("category")}
                className={cn(
                  "w-full text-left px-3 py-2 rounded-lg text-sm transition",
                  !category
                    ? "bg-primary/10 text-primary font-medium"
                    : "hover:bg-secondary text-muted-foreground",
                )}
              >
                All categories
              </button>
              {categories.data?.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setParam("category", c.id)}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between gap-2 transition",
                    category === c.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-secondary text-muted-foreground",
                  )}
                >
                  <span className="truncate">{c.name}</span>
                  {typeof c.courses_count === "number" && (
                    <span className="text-[11px] tabular-nums opacity-70">
                      {c.courses_count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div>
          {courses.isLoading && <CardGridSkeleton />}
          {courses.isError && (
            <ErrorState message={(courses.error as Error).message} />
          )}
          {courses.data?.data.length === 0 && (
            <div className="rounded-xl border border-border bg-card p-10 text-center text-muted-foreground">
              No courses found. Try clearing filters.
            </div>
          )}
          {courses.data && courses.data.data.length > 0 && (
            <>
              <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                <p>
                  Showing {courses.data.data.length} of{" "}
                  <span className="text-foreground font-medium">
                    {courses.data.total}
                  </span>{" "}
                  programs
                </p>
                <p>
                  Page {page} / {courses.data.last_page}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {courses.data.data.map((c, i) => (
                  <CourseCard key={c.id} course={c} index={i} />
                ))}
              </div>

              <div className="mt-8 flex items-center justify-center gap-2">
                <button
                  disabled={page <= 1}
                  onClick={() => setParam("page", page - 1)}
                  className="inline-flex items-center gap-1 px-4 h-10 rounded-lg bg-secondary border border-border text-sm disabled:opacity-40 hover:bg-muted transition"
                >
                  <ChevronLeft className="size-4" /> Prev
                </button>
                <span className="px-4 text-sm text-muted-foreground">
                  Page {page} of {courses.data.last_page}
                </span>
                <button
                  disabled={page >= courses.data.last_page}
                  onClick={() => setParam("page", page + 1)}
                  className="inline-flex items-center gap-1 px-4 h-10 rounded-lg bg-secondary border border-border text-sm disabled:opacity-40 hover:bg-muted transition"
                >
                  Next <ChevronRight className="size-4" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;
