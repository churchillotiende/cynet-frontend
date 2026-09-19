import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { wp } from "@/lib/wp";
import { ErrorState } from "@/components/site/Loaders";
import { Calendar as CalIcon } from "lucide-react";

export const Route = createFileRoute("/Calendar")({
  head: () => ({
    meta: [{ title: "Calendar | Bluestron Institute" }],
  }),
  component: Calendar,
});

function Calendar() {
  const page = useQuery({
    queryKey: ["page", "training-calendar-2026"],
    queryFn: () => wp.getPage("training-calendar-2026"),
  });

  return (
    <div className="max-w-5xl mx-auto px-5 lg:px-8 py-12 lg:py-16">
      <div className="flex items-center gap-3">
        <div className="size-12 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
          <CalIcon className="size-6 text-primary-foreground" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Schedule
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold">
            Training Calendar 2026
          </h1>
        </div>
      </div>
      <p className="mt-4 text-muted-foreground max-w-2xl">
        Plan ahead. Our 2026 training calendar is published and synchronized
        live from WordPress.
      </p>

      <div className="mt-10">
        {page.isLoading && (
          <div className="space-y-3">
            <div className="h-6 bg-secondary rounded animate-pulse w-2/3" />
            <div className="h-4 bg-secondary rounded animate-pulse" />
            <div className="h-4 bg-secondary rounded animate-pulse w-5/6" />
            <div className="h-64 bg-secondary rounded-xl animate-pulse mt-6" />
          </div>
        )}
        {page.isError && <ErrorState message={(page.error as Error).message} />}
        {page.data?.content?.rendered ? (
          <div
            className="prose prose-invert max-w-none prose-headings:font-semibold prose-a:text-primary prose-strong:text-foreground prose-table:text-sm prose-th:bg-secondary prose-th:text-foreground prose-td:border-border prose-th:border-border"
            dangerouslySetInnerHTML={{ __html: page.data.content.rendered }}
          />
        ) : (
          page.data && (
            <div className="rounded-xl border border-border bg-card p-10 text-center text-muted-foreground">
              The calendar page is currently empty in WordPress.
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Calendar;
