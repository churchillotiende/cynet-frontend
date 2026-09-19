export const CardSkeleton = () => (
  <div className="rounded-2xl border border-border bg-card overflow-hidden">
    <div className="h-44 bg-secondary animate-pulse" />
    <div className="p-5 space-y-3">
      <div className="h-4 bg-secondary rounded animate-pulse w-3/4" />
      <div className="h-3 bg-secondary rounded animate-pulse" />
      <div className="h-3 bg-secondary rounded animate-pulse w-5/6" />
    </div>
  </div>
);

export const CardGridSkeleton = ({ count = 6 }: { count?: number }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {Array.from({ length: count }).map((_, i) => (
      <CardSkeleton key={i} />
    ))}
  </div>
);

export const ErrorState = ({ message }: { message?: string }) => (
  <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6 text-sm text-destructive">
    Failed to load content from WordPress. {message}
  </div>
);
