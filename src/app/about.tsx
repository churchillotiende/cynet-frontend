import Pillars from "@/components/site/Pillars";
import { createFileRoute } from "@tanstack/react-router";
import {
  Award,
  BarChart3,
  Building2,
  Globe2,
  LayoutGrid,
  Medal,
  ShieldCheck,
  SlidersHorizontal,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Medal,
    title: "Excellence, Integrity, and Honesty",
    text: "We uphold the highest standards of professionalism and accountability in every engagement, supporting organizations with ethical, reliable guidance.",
  },
  {
    icon: SlidersHorizontal,
    title: "Client-Focused Solutions",
    text: "Our programs and advisory services are designed with relevance, contextual fit, and measurable impact in mind for each client and sector.",
  },
  {
    icon: ShieldCheck,
    title: "Practical Capacity Building",
    text: "We focus on developing real-world skills, systems, and leadership capabilities that improve performance and sustainable growth.",
  },
  {
    icon: BarChart3,
    title: "Evidence-Based Practice",
    text: "Our work is informed by research, business realities, and measurable results that strengthen decision-making and organizational outcomes.",
  },
  {
    icon: LayoutGrid,
    title: "Diverse Training Portfolio",
    text: "We offer professional training across project management, finance, governance, ICT, monitoring and evaluation, procurement, agriculture, and more.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ title: "About Us | Cynet East Africa" }],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="relative overflow-hidden bg-hero border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute -right-40 -top-32 size-96 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-5 lg:px-8 py-20 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            About Cynet East Africa
          </p>
          <h1 className="mt-3 text-4xl lg:text-5xl font-bold leading-tight">
            Empowering organizations to build{" "}
            <span className="text-gradient">capacity</span> and improve
            performance.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl">
            Cynet East Africa Consultancy is a professional training and
            advisory firm supporting organizations across Africa to build
            capacity, strengthen systems, and improve performance. We work with
            public sector institutions, private sector organizations, NGOs, and
            development partners that require practical skills development and
            reliable advisory support.
          </p>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl">
            Our primary focus is the design and delivery of professional
            training programs. We offer short courses, executive programs, and
            customized in-house trainings across a wide range of disciplines
            including project management, accounting and finance, human
            resources, lean six sigma and strategy, ICT, customer service,
            agriculture and environmental management, GIS, child protection,
            governance and leadership, monitoring and evaluation, data analysis,
            management and administration, and procurement. All programs are
            competency-based and aligned to current industry, regulatory, and
            development sector needs.
          </p>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl">
            In addition to training, we provide team building services,
            research, business strategy development, and tax and financial
            advisory services. These offerings support organizations to improve
            internal alignment, strengthen decision-making, enhance compliance,
            and achieve sustainable growth.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold">Our Mission</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            To deliver cost-effective and best-fit consulting services in
            research, business transformation, and improvement.
          </p>

          <h2 className="text-2xl lg:text-3xl font-bold mt-10">Our Vision</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            To be a leading consultancy firm in research, training, and employee
            development.
          </p>

          <h2 className="text-2xl lg:text-3xl font-bold mt-10">
            Our Delivery Approach
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our delivery approach is practical and client-focused. Services are
            offered through in-person, virtual, and blended formats, both
            locally and internationally. We work closely with our clients to
            ensure relevance, contextual fit, and measurable outcomes from every
            engagement.
          </p>

          <h2 className="text-2xl lg:text-3xl font-bold mt-10">What we do</h2>
          <ul className="mt-4 space-y-2.5 text-muted-foreground">
            <li>• Short courses, executive programs, and in-house training</li>
            <li>
              • Business strategy and organizational transformation support
            </li>
            <li>• Team building, research, and advisory services</li>
            <li>
              • Tax, finance, governance, and performance improvement consulting
            </li>
          </ul>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-border bg-gradient-card p-6"
            >
              <div className="size-11 rounded-lg bg-gradient-primary grid place-items-center shadow-glow mb-4">
                <v.icon className="size-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">{v.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
      <Pillars />
    </div>
  );
}

export default About;
