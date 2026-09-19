import CompanyDetailsData from "@/lib/data/CompanyDetailsData";

function CompanyDetails() {
  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:pb-24">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Accreditation
        </p>
        <h2 className="text-2xl lg:text-3xl font-bold mt-2">Company Details</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 py-8">
        {CompanyDetailsData.map((detail) => {
          const Icon = detail.icon;
          return (
            <div
              key={detail.label}
              className="flex flex-col gap-2 rounded-2xl border border-border/50 bg-card p-4 transition-all duration-200 hover:border-primary/20 hover:shadow-sm"
            >
              <Icon
                className="h-4 w-4 text-muted-foreground"
                strokeWidth={1.5}
              />
              <p className="text-xs text-muted-foreground">{detail.label}</p>
              <p className="text-sm font-medium leading-snug text-foreground">
                {detail.value}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CompanyDetails;
