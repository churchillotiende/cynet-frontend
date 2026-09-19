import {
  BookOpen,
  Briefcase,
  Building2,
  ChartBar,
  GraduationCap,
  Globe,
  LayoutGrid,
  Lightbulb,
  BarChart2,
  MonitorPlay,
  Plane,
  Rocket,
  ScrollText,
  Package,
  Users,
  Wallet,
  Award,
  Image,
} from "lucide-react";
import type { ComponentType } from "react";

export type NavItem = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  href: string;
};

export type NavSection = {
  label: string;
  items: NavItem[];
  feature: { title: string; description: string; href: string };
};

export const navSections: NavSection[] = [
  {
    label: "Training Courses",
    feature: {
      title: "Browse the full catalogue",
      description: "Hundreds of courses across every business discipline.",
      href: "/courses",
    },
    items: [
      {
        title: "Governance & Leadership",
        description: "Lead teams with confidence and clarity.",
        icon: Users,
        href: "/courses?category=27",
      },
      {
        title: "Accounting & Finance",
        description: "Budgeting to advanced financial analysis.",
        icon: Wallet,
        href: "/courses?category=57",
      },
      {
        title: "Project Management",
        description: "PMP, Agile, and modern delivery.",
        icon: ChartBar,
        href: "/courses?category=51",
      },
      {
        title: "Data Analysis & Management",
        description: "Turn data into decisions.",
        icon: LayoutGrid,
        href: "/courses?category=55",
      },
      {
        title: "Monitoring & Evaluation Training",
        description:
          "Build skills to track, assess, and improve program performance.",
        icon: BarChart2,
        href: "/courses?category=53",
      },
      {
        title: "Procurement & Logistics Training",
        description: "Master supply chain management and procurement ethics.",
        icon: Package,
        href: "/courses?category=60",
      },
    ],
  },
  {
    label: "Training Formats",
    feature: {
      title: "Learn the way that fits",
      description: "On-site, virtual, classroom, or self-paced.",
      href: "/courses",
    },
    items: [
      {
        title: "Classroom",
        description: "In-person at our regional venues.",
        icon: GraduationCap,
        href: "/courses?format=classroom",
      },
      {
        title: "Live Virtual",
        description: "Instructor-led, online from anywhere.",
        icon: MonitorPlay,
        href: "/courses?format=virtual",
      },
      {
        title: "On-site Corporate",
        description: "We come to your office.",
        icon: Building2,
        href: "/courses?format=onsite",
      },
      {
        title: "Self-Paced",
        description: "Learn at your own rhythm.",
        icon: BookOpen,
        href: "/courses?format=self-paced",
      },
    ],
  },
  {
    label: "Destinations",
    feature: {
      title: "Train where the world meets",
      description: "World-class learning across four continents.",
      href: "https://drive.google.com/file/d/1TqaD4jHUqqFSqMgV5zePqF-uGg9rm4AE/view",
    },
    items: [
      {
        title: "Nairobi",
        description: "Our flagship East Africa hub.",
        icon: Globe,
        href: "/courses?city=nairobi",
      },
      {
        title: "Dubai",
        description: "Premier Middle East centre.",
        icon: Globe,
        href: "/courses?city=dubai",
      },
      {
        title: "London",
        description: "European HQ for executive programs.",
        icon: Globe,
        href: "/courses?city=london",
      },
      {
        title: "Singapore",
        description: "Asia-Pacific destination.",
        icon: Globe,
        href: "/courses?city=singapore",
      },
      {
        title: "Cape Town",
        description: "Southern Africa centre.",
        icon: Globe,
        href: "/courses?city=cape-town",
      },
      {
        title: "All cities",
        description: "Browse the full Bluestron map.",
        icon: Plane,
        href: "https://drive.google.com/file/d/1TqaD4jHUqqFSqMgV5zePqF-uGg9rm4AE/view",
      },
    ],
  },
  {
    label: "For Teams",
    feature: {
      title: "Upskill your whole team",
      description: "Custom corporate training built around your strategy.",
      href: "/contact",
    },
    items: [
      {
        title: "Corporate Training",
        description: "Custom programs for entire teams.",
        icon: Briefcase,
        href: "/contact?topic=corporate",
      },
      {
        title: "Bespoke Curriculum",
        description: "Designed around your goals.",
        icon: Lightbulb,
        href: "/contact?topic=bespoke",
      },
      {
        title: "Government & NGO",
        description: "Capacity building for public sector.",
        icon: ScrollText,
        href: "/contact?topic=public-sector",
      },
      {
        title: "Talk to our team",
        description: "Tailored proposal in 24 hours.",
        icon: Rocket,
        href: "/contact",
      },
    ],
  },
  {
    label: "Why Bluestron",
    feature: {
      title: "Why Bluestron Institute",
      description:
        "Delivering high-quality training solutions that empower organizations to operate efficiently.",
      href: "/about",
    },
    items: [
      {
        title: "Who We Are",
        description: "Our story, mission, and the team behind it.",
        icon: Users,
        href: "/about",
      },
      {
        title: "Our Gallery",
        description: "A visual look at our work and experiences.",
        icon: Image,
        href: "/our-gallery",
      },
      {
        title: "Accreditation",
        description: "Our certifications and industry recognition.",
        icon: Award,
        href: "/accreditation",
      },
      {
        title: "Our Clients",
        description: "Trusted by organisations across the region.",
        icon: Building2,
        href: "/our-clients",
      },
    ],
  },
];
