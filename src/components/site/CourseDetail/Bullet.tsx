import { CheckCircle2 } from "lucide-react";

export const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
    <span className="text-foreground/90">{children}</span>
  </li>
);
