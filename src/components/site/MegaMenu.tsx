import { Link } from "@tanstack/react-router";
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
  Search,
  Package,
  Users,
  Wallet,
  Award,
  Image,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

type Item = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
};

const courses: Item[] = [
  {
    title: "Governance & Leadership",
    description: "Lead teams with confidence and clarity.",
    icon: Users,
    href: "/courses?category=4",
  },
  {
    title: "Accounting & Finance",
    description: "Budgeting to advanced financial analysis.",
    icon: Wallet,
    href: "/courses?category=12",
  },
  {
    title: "Project Management",
    description: "PMP, Agile, and modern delivery.",
    icon: ChartBar,
    href: "/courses?category=1",
  },
  {
    title: "Data Analysis & Management",
    description: "Turn data into decisions.",
    icon: LayoutGrid,
    href: "/courses?category=9",
  },
  {
    title: "Monitoring & Evaluation Training",
    description:
      "Build skills to track, assess, and improve program performance with industry-recognized M&E frameworks.",
    icon: BarChart2,
    href: "/courses?category=14",
  },
  {
    title: "Procurement & Logistics Training",
    description:
      "Master supply chain management, procurement ethics, and logistics frameworks for operational excellence.",
    icon: Package,
    href: "/courses?category=6",
  },
];
const formats: Item[] = [
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
];
const destinations: Item[] = [
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
];
const teams: Item[] = [
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
];

const aboutUs: Item[] = [
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
];

function MenuGrid({
  items,
  feature,
}: {
  items: Item[];
  feature?: { title: string; description: string; href: string };
}) {
  return (
    <div className="grid gap-3 p-4 md:w-[640px] lg:w-[760px] md:grid-cols-[1fr_1.4fr]">
      {feature && (
        <Link
          to={feature.href}
          className="relative flex h-full flex-col justify-end overflow-hidden rounded-lg bg-gradient-primary p-6 text-primary-foreground no-underline shadow-glow transition-transform hover:-translate-y-0.5"
        >
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_top_right,white,transparent_60%)]" />
          <GraduationCap className="mb-4 h-8 w-8" />
          <div className="text-lg font-semibold">{feature.title}</div>
          <p className="mt-2 text-sm leading-snug opacity-90">
            {feature.description}
          </p>
        </Link>
      )}
      <ul className={cn("grid gap-2 grid-cols-2")}>
        {items.map((item) => (
          <li key={item.title}>
            <NavigationMenuLink asChild>
              <Link
                to={item.href}
                className="group flex select-none gap-3 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary focus:bg-secondary"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-4 w-4" />
                </span>
                <span className="space-y-1">
                  <span className="block text-sm font-medium leading-none text-foreground">
                    {item.title}
                  </span>
                  <span className="line-clamp-2 block text-xs leading-snug text-muted-foreground">
                    {item.description}
                  </span>
                </span>
              </Link>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:text-primary"
            >
              <Search className="h-4 w-4" /> Course Finder
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
          <NavigationMenuContent>
            <MenuGrid
              items={courses}
              feature={{
                title: "Browse the full catalogue",
                description:
                  "Hundreds of courses across every business discipline.",
                href: "/courses",
              }}
            />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>For Organizations</NavigationMenuTrigger>
          <NavigationMenuContent>
            <MenuGrid
              items={teams}
              feature={{
                title: "Upskill your whole team",
                description:
                  "Custom corporate training built around your strategy.",
                href: "/contact",
              }}
            />
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Training Formats</NavigationMenuTrigger>
          <NavigationMenuContent>
            <MenuGrid
              items={formats}
              feature={{
                title: "Learn the way that fits",
                description: "On-site, virtual, classroom, or self-paced.",
                href: "/courses",
              }}
            />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Destinations</NavigationMenuTrigger>
          <NavigationMenuContent>
            <MenuGrid
              items={destinations}
              feature={{
                title: "Train where the world meets",
                description: "World-class learning across four continents.",
                href: "https://drive.google.com/file/d/1TqaD4jHUqqFSqMgV5zePqF-uGg9rm4AE/view",
              }}
            />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Why Bluestron</NavigationMenuTrigger>
          <NavigationMenuContent>
            <MenuGrid
              items={aboutUs}
              feature={{
                title: "Why Bluestron Institute",
                description:
                  "Deliver high-quality, reliable, and timely supply solutions that empower organizations to operate efficiently and focus on their core objectives..",
                href: "/contact",
              }}
            />
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
