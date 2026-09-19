import { createFileRoute } from "@tanstack/react-router";
import React, { useState } from "react";

const galleryItems = [
  {
    id: 1,
    title: "Monitoring and Evalution",
    category: "Training",
    image: "bluestron-training-monitoring-and-evalution.webp",
  },
  {
    id: 2,
    title: "Child Protection ",
    category: "Training",
    image: "bluestron-child-protection (1).webp",
  },
  {
    id: 3,
    title: "Human Resource",
    category: "Training",
    image: "bluestron-human-resource.webp",
  },
  {
    id: 4,
    title: "Humanitarian",
    category: "Training",
    image: "bluestron-humanitarian (1).webp",
  },
  {
    id: 5,
    title: "Accounting and Finance  ",
    category: "Training",
    image: "bluestron-accounting-finance (1).webp",
  },
  {
    id: 6,
    title: "Project Management",
    category: "Training",
    image: "bluestron-project-management.webp",
  },
  {
    id: 7,
    title: "Stragetic Learn Six",
    category: "Training",
    image: "bluestron-strategy-learn-six.webp",
  },
  {
    id: 8,
    title: "Accounting and Finance  ",
    category: "Training",
    image: "bluestron-accounting-finance.webp",
  },
  {
    id: 9,
    title: "Project Management",
    category: "Training",
    image: "bluestron-project-management-traning.webp",
  },
  {
    id: 10,
    title: "Child Protection ",
    category: "Workshop",
    image: "bluestron-child-protection.webp",
  },
  {
    id: 11,
    title: "Mobile Data Management  ",
    category: "Workshop",
    image: "bluestron-mobile-data-management.webp",
  },
  {
    id: 12,
    title: "Strategy and Learn Six  ",
    category: "Workshop",
    image: "bluestron-strategy-and-learn-six.webp",
  },
  {
    id: 13,
    title: "Customer Experience  ",
    category: "Workshop",
    image: "bluestron-customer-expirence.webp",
  },
  {
    id: 14,
    title: "Customer Experience  ",
    category: "Workshop",
    image: "bluestron-customer-experience.webp",
  },
  {
    id: 15,
    title: "Customer Experience  ",
    category: "Workshop",
    image: "bluestron-customer-expirence (1).webp",
  },
  {
    id: 16,
    title: "Project Management  ",
    category: "Workshop",
    image: "bluestron-project-management.webp",
  },
  {
    id: 17,
    title: "Customer Experience  ",
    category: "Workshop",
    image: "bluestron-customer-experience.webp",
  },
  {
    id: 18,
    title: "Monitoring and Evalution  ",
    category: "Workshop",
    image: "bluestron-monitoring-evalution.webp",
  },
  {
    id: 19,
    title: "Data Management  ",
    category: "Workshop",
    image: "bluestron-data-management (1).webp",
  },
  {
    id: 20,
    title: "Mobile Data Collection  ",
    category: "Workshop",
    image: "bluestron-mobile-data-collection.webp",
  },
  {
    id: 21,
    title: "Monitoring and Evalution  ",
    category: "Engagement",
    image: "bluestron-monitoring-evalution (1).webp",
  },
  {
    id: 22,
    title: "Customer Experience  ",
    category: "Engagement",
    image: "bluestron-customer-experience (1).webp",
  },
  {
    id: 23,
    title: "GIS and Information Technology  ",
    category: "Engagement",
    image: "bluestron-gis-information-technology.webp",
  },
  {
    id: 24,
    title: "Humanitarian Course ",
    category: "Engagement",
    image: "bluestron-humanitarian-courses.webp",
  },
  {
    id: 25,
    title: "GIS and Technology ",
    category: "Engagement",
    image: "blustrone-gis-technology.webp",
  },
  {
    id: 26,
    title: "Data Management ",
    category: "Engagement",
    image: "bluestron-data-management (2).webp",
  },
  {
    id: 27,
    title: "Governance and Leadership ",
    category: "Engagement",
    image: "bluestron-governance-leardership.webp",
  },
  {
    id: 28,
    title: "Strategic Learn Six ",
    category: "Engagement",
    image: "bluestron-learn-six.webp",
  },
  {
    id: 29,
    title: "Climate Change Management ",
    category: "Engagement",
    image: "bluesstron-environment-climate-change.webp",
  },
  {
    id: 30,
    title: "Data Management  ",
    category: "Engagement",
    image: "bluestrone-data-management.webp",
  },
  {
    id: 31,
    title: "GIS and Information Technology ",
    category: "Engagement",
    image: "bluestron-gif-technology.webp",
  },
  {
    id: 32,
    title: "GIS and Information Technology ",
    category: "Seminar",
    image: "bluestron-management.webp ",
  },
  {
    id: 33,
    title: "Environment Management ",
    category: "Seminar",
    image: "bluestron-environment-management.webp ",
  },
  {
    id: 34,
    title: "Environmet and Climate Management ",
    category: "Seminar",
    image: "bluestron-environment (3).webp ",
  },
  {
    id: 35,
    title: "Children Protection ",
    category: "Seminar",
    image: "bluestron-children-protection.webp ",
  },
  {
    id: 36,
    title: "Monitoring and Evalution",
    category: "Seminar",
    image: "bluestron-monitoring-evalution.webp ",
  },
  {
    id: 37,
    title: "Strategic Learn Six",
    category: "Seminar",
    image: "blustron-learn-six.webp",
  },
  {
    id: 38,
    title: "Customer Experience",
    category: "Seminar",
    image: "bluestron-customer-experience.webp",
  },
  {
    id: 39,
    title: "Project Management",
    category: "Training",
    image: "bluestron-project-management-training.webp",
  },
  {
    id: 40,
    title: "GIS and Information Technology",
    category: "Seminar",
    image: "bluestron-gif-technology-training.webp",
  },
  {
    id: 41,
    title: "Project and Procurement",
    category: "Seminar",
    image: "bluestron-project-procurement.webp",
  },
  {
    id: 42,
    title: "Monitoring and Evalution",
    category: "Bootcamp",
    image: "bluestron-monitoring.webp",
  },
  {
    id: 43,
    title: "Children Protection",
    category: "Bootcamp",
    image: "bluestron-children-training.webp",
  },
  {
    id: 44,
    title: "Strategic Learn Six",
    category: "Bootcamp",
    image: "bluestron-learn-six-training.webp",
  },
  {
    id: 45,
    title: "Monitoring and Evalution",
    category: "Bootcamp",
    image: "bluestron-logistics.webp",
  },
  {
    id: 46,
    title: "Project Monitoring and Evalution",
    category: "Bootcamp",
    image: "bluestron-project.webp",
  },
  {
    id: 47,
    title: "Data Management",
    category: "Bootcamp",
    image: "bluestron-data-mange.webp",
  },
  {
    id: 48,
    title: "Data Management",
    category: "Bootcamp",
    image: "bluestron-data.webp",
  },
  {
    id: 49,
    title: "Children Protection",
    category: "Bootcamp",
    image: "bluestron-child.webp",
  },
  {
    id: 50,
    title: "Leadership and Management",
    category: "Bootcamp",
    image: "bluestron-leadership.webp",
  },
  {
    id: 51,
    title: "Monitoring and Evalution",
    category: "Retreat",
    image: "bluestron-evaluation.webp",
  },
  {
    id: 52,
    title: "Management and Leadership",
    category: "Retreat",
    image: "bluestron-leader.webp",
  },
  {
    id: 53,
    title: "Humanitarian Course",
    category: "Retreat",
    image: "bluestron-humanitarian-courses.webp",
  },
  {
    id: 54,
    title: "Human Resource",
    category: "Retreat",
    image: "bluestron-human-manage.webp",
  },
  {
    id: 55,
    title: "Children Training ",
    category: "Retreat",
    image: "bluestron-children-course.webp",
  },
  {
    id: 56,
    title: "Mobile Data Management ",
    category: "Retreat",
    image: "bluestron-mobile.webp",
  },
  {
    id: 57,
    title: "Human Resource ",
    category: "Retreat",
    image: "bluestron-humanity.webp",
  },
  {
    id: 58,
    title: "Climate and Agriculture ",
    category: "Retreat",
    image: "bluestron-climate.webp",
  },
  {
    id: 59,
    title: "Monitoring and Evaluation ",
    category: "Forum",
    image: "bluestron-monitoring.webp",
  },
  {
    id: 60,
    title: "Management and Administration ",
    category: "Forum",
    image: "bluestron-administration.webp",
  },
  {
    id: 61,
    title: "Mobile Data Collection ",
    category: "Forum",
    image: "bluestron-data-collection.webp",
  },
  {
    id: 62,
    title: "Monitoring and Evalution ",
    category: "Forum",
    image: "bluestron-monitor.webp",
  },
  {
    id: 63,
    title: "Customer Experience",
    category: "Forum",
    image: "bluestron-evalu.webp",
  },
  {
    id: 64,
    title: "Project Management",
    category: "Forum",
    image: "bluestron-accounting.webp",
  },
  {
    id: 65,
    title: "Human Resource",
    category: "Forum",
    image: "bluestron-serve.webp",
  },
  {
    id: 66,
    title: "Strategic Learn Six",
    category: "Forum",
    image: "bluestron-six.webp",
  },
  {
    id: 67,
    title: "Management and Leadership",
    category: "Forum",
    image: "bluestron-manage.webp",
  },
  {
    id: 68,
    title: "Humanitarian",
    category: "Forum",
    image: "bluestron-rate.webp",
  },
];

const categories = [
  "All",
  ...Array.from(new Set(galleryItems.map((item) => item.category))),
];

export const Route = createFileRoute("/our-gallery")({
  head: () => ({
    meta: [{ title: "Our Gallery | Bluestron Institute" }],
  }),
  component: OurGallery,
});
export function OurGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Our Gallery
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            A visual look at our work, workshops, and experiences across the
            region.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border/50 bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:border-primary/20 hover:shadow-md"
            >
              {/* Image */}
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={`/our-gallery/${item.image}`}
                  alt={item.title}
                  className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="mb-1 text-xs font-medium uppercase tracking-widest text-white/70">
                  {item.category}
                </span>
                <p className="text-sm font-semibold leading-snug text-white">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
