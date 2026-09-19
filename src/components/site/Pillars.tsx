import { GraduationCap, Lightbulb, Microscope } from "lucide-react";

function Pillars() {
  const pillars = [
    {
      icon: GraduationCap,
      title: "Expert Training",
      text: "Industry-leading courses designed for professional excellence and lasting career growth.",
    },
    {
      icon: Lightbulb,
      title: "Consultancy",
      text: "Strategic guidance from seasoned professionals across a wide range of industries.",
    },
    {
      icon: Microscope,
      title: "Research",
      text: "Evidence-based insights powering informed business decisions and bold innovation.",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-24">
      <div className="grid md:grid-cols-3 gap-5">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-border bg-gradient-card p-7"
          >
            <div className="size-12 rounded-xl bg-gradient-primary grid place-items-center shadow-glow mb-5">
              <p.icon className="size-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pillars;
