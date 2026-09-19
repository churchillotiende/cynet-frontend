import { documents } from "@/lib/data/CompanyDocuments";
import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/Accreditation")({
  head: () => ({
    meta: [{ title: "Accreditation | Bluestron Institute" }],
  }),
  component: Accreditation,
});

export function Accreditation() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Accreditation
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Certified, compliant, and committed to the highest standards of
            professional training.
          </p>
        </div>

        {/* Documents */}
        <div className="mt-16">
          <h2 className="mb-6 text-lg font-semibold tracking-tight text-foreground">
            Certificates & Compliance
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className={`group relative overflow-hidden rounded-2xl border ${doc.border} bg-gradient-to-br ${doc.color} p-6 transition-all duration-300 hover:shadow-md`}
              >
                {/* Badge */}
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${doc.badge_color}`}
                >
                  {doc.badge}
                </span>

                {/* Logos row */}
                <div className="mt-5 flex items-center gap-3">
                  {/* Company Logo */}
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-card p-1.5">
                    <img
                      src={doc.companyLogo}
                      alt="Company logo"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Divider */}
                  <div className="h-px flex-1 border-t border-dashed border-border/60" />

                  {/* Verified icon */}
                  <BadgeCheck
                    className="h-5 w-5 shrink-0 text-primary"
                    strokeWidth={1.5}
                  />

                  {/* Divider */}
                  <div className="h-px flex-1 border-t border-dashed border-border/60" />

                  {/* Gov / Issuing Logo */}
                  <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-card p-1.5">
                    <img
                      src={doc.logo}
                      alt="Issuing authority logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>

                {/* Title & Description */}
                <div className="mt-5">
                  <h3 className="text-sm font-semibold text-foreground">
                    {doc.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {doc.description}
                  </p>
                </div>

                {/* Footer meta */}
                <div className="mt-4 flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="text-xs text-muted-foreground">
                    {doc.meta}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
