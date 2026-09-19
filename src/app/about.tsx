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
    title: "Proven Expertise and Experience",
    text: "With years of experience and a deep understanding of diverse industries, we bring unparalleled insights to every training program that meets each company’s specific needs.",
  },
  {
    icon: SlidersHorizontal,
    title: "Customized Solutions",
    text: "We don’t believe in one-size-fits-all approaches. Our programs are meticulously designed to meet the unique needs of each client. We prioritize our client's goals, working collaboratively to achieve desired outcomes..",
  },
  {
    icon: ShieldCheck,
    title: "Certified Trainers",
    text: "Our team comprises highly qualified professionals with certifications from recognized institutions. They are seasoned professionals with extensive experience in training, capacity building, and research..",
  },
  {
    icon: BarChart3,
    title: "Measurable Results",
    text: "We focus on outcomes, using data-driven methodologies to ensure tangible improvements in employee performance and organizational productivity..",
  },
  {
    icon: LayoutGrid,
    title: "Diverse Training Portfolio",
    text: "We offer a wide range of courses that cover essential areas such as Project Management, Data Analysis, Governance, and many more to choose from.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ title: "About Us | Bluestron Institute" }],
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
            About Us
          </p>
          <h1 className="mt-3 text-4xl lg:text-5xl font-bold leading-tight">
            Building <span className="text-gradient">capacity</span> across
            industries since 2020.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl">
            At Bluestron Solutions Ltd, we believe that learning is the
            cornerstone of organizational success. Established in 2020, we are a
            premier provider of corporate training solutions designed to empower
            businesses, enhance employee performance, and drive sustainable
            growth. Headquartered in Nairobi, Kenya, we serve clients across
            East Africa and beyond, delivering transformative learning
            experiences that align with global best practices. Bluestron is
            registered in Kenya under the Company Act registration number
            PVT-9XUGZ293. The company is approved by the National Industrial
            Training Authority under registration number NITA/
            TRN/1515/VOL.1[8b].
          </p>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl">
            Our primary goal is to equip organizations with the
            skills,knowledge, and tools they need to thrive in an ever-evolving
            business landscape. Guided by our core values of excellence,
            innovation, and collaboration, we have helped countless businesses
            unlock their full potential through tailored training programs. We
            have a team of 10 permanent trainers and a roster of over 20
            experienced professionals who are engaged on a needs basis. With a
            team of certified trainers and industry experts, we are committed to
            delivering impactful learning solutions that address real-world
            challenges. Whether you are looking to upskill your workforce,
            foster leadership, or improve operational efficiency, Bluestron is
            your trusted partner in growth.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold">Our mission</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Deliver high-quality, reliable, and timely supply solutions that
            empower organizations to operate efficiently and focus on their core
            objectives
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold mt-10">Our Vision</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            To be the leading provider of timely and reliable supplies, enabling
            organizations to focus on their core business by ensuring seamless
            access to the resources they need.
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold mt-10">What we do</h2>
          <ul className="mt-4 space-y-2.5 text-muted-foreground">
            <li>• 300+ training programs across 17+ specializations</li>
            <li>• Tailored in-house corporate training</li>
            <li>• Strategic consultancy and advisory services</li>
            <li>• Applied research and evaluation studies</li>
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
