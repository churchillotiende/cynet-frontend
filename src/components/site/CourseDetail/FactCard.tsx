import { LucideIcon } from "lucide-react";

export const FactCard = ({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) => (
  <div className="flex items-start gap-3 rounded-xl border bg-card p-4">
    <div className="rounded-lg bg-primary/10 p-2 text-primary">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <p className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
);
