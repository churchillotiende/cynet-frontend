import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/site/HeroSection";
import FeaturedCourses from "@/components/site/FeaturedCourses";
import CategoriesSection from "@/components/site/CategoriesSection";
import CompanyDetails from "@/components/site/CompanyDetails";
import ClientCarousel from "@/components/site/ClientCarousel";
import { api } from "@/lib/api-client";

export const Route = createFileRoute("/")({
  head: async () => {
    try {
      const hero = await api.getHeroSection();

      const title = hero?.headline
        ? `${hero.headline} ${hero.headline_highlight ?? ""} ${hero.second_headline ?? ""} | Bluestron Institute`
            .replace(/\s+/g, " ")
            .trim()
        : "Bluestron Institute — Igniting Careers with Elite Training & Strategic Insights";

      const description =
        hero?.subheadline ||
        "Corporate training trusted by 35+ organisations across Africa.";

      return {
        meta: [
          { title },
          { name: "description", content: description },
          { property: "og:title", content: title },
          { property: "og:description", content: description },
        ],
      };
    } catch (error) {
      console.error("Failed to load homepage SEO data:", error);
      return { meta: [] }; // falls back to root __root.tsx defaults
    }
  },
  component: Home,
});

function Home() {
  return (
    <div>
      <HeroSection />
      <ClientCarousel />
      <CompanyDetails />
      <FeaturedCourses />
      <CategoriesSection />
    </div>
  );
}

export default Home;
