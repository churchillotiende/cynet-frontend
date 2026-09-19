import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/sideHeader";

const clients = [
  {
    name: "Oasis Health Group",
    initials: "OHG",
    logo: "oasis-health-group.jpg",
  },
  {
    name: "Pharmacy and Poisons Board",
    initials: "PPB",
    logo: "pharmacy-and-poisons-board.jpg",
  },
  { name: "CRA", initials: "CRA", logo: "cra.jpg" },
  { name: "Maseno University", initials: "MU", logo: "maseno-university.jpg" },
  { name: "Amatsi", initials: "AMATSI", logo: "amatsi.jpg" },
  { name: "HEART", initials: "HEART", logo: "heart.jpg" },
  { name: "UN Sacco", initials: "UN", logo: "un-sacco.jpg" },
  { name: "Islamic Relief", initials: "IR", logo: "islamic-relief.jpg" },
  {
    name: "County Government of Kirinyaga",
    initials: "CGK",
    logo: "county-government-of-kirinyaga.jpg",
  },
  {
    name: "Migori County Government",
    initials: "MCG",
    logo: "migori-county-government.jpg",
  },
  {
    name: "Women Enterprise Fund",
    initials: "WEF",
    logo: "women-enterprise-fund.jpg",
  },
  {
    name: "Kenya Pipeline Company",
    initials: "KPC",
    logo: "kenya-pipeline-company.jpg",
  },
  { name: "aecf", initials: "aecf", logo: "aecf.jpg" },
  { name: "Lesna", initials: "L", logo: "lesna.jpg" },
  { name: "The Green Jewel", initials: "TGJ", logo: "the-green-jewel.jpg" },
  { name: "KIPPI", initials: "KIPPI", logo: "kippi.jpg" },
  { name: "Hass Petroleum", initials: "HP", logo: "hass-petroleum.jpg" },
  {
    name: "Niger State Government",
    initials: "NSG",
    logo: "niger-state-government.jpg",
  },
  {
    name: "National Construction Authority",
    initials: "NCA",
    logo: "national-construction-authority.jpg",
  },
  {
    name: "Turkana County Government",
    initials: "TCG",
    logo: "turkana-county-government.jpg",
  },
  { name: "KUCCPS", initials: "KUCCPS", logo: "kuccps.jpg" },
  {
    name: "Homa Bay County Assembly",
    initials: "HCA",
    logo: "homa-bay-county-assembly.jpg",
  },
  { name: "KNCCI", initials: "KNCCI", logo: "kncci.jpg" },
  {
    name: "Himilo Organization for Development",
    initials: "HOFD",
    logo: "himilo-organization-for-development.jpg",
  },
  {
    name: "Chancen International",
    initials: "CI",
    logo: "chancen-international.webp",
  },
  {
    name: "County Government Of Lamu",
    initials: "CGOL",
    logo: "county-government-of-lamu.webp",
  },
  {
    name: "Finnlemm Sacco Society",
    initials: "FSS",
    logo: "finnlemm-sacco-society.webp",
  },
  {
    name: "Eastern Produce Kenya Limited",
    initials: "EPKL",
    logo: "eastern-produce-kenya-limited.webp",
  },
  {
    name: "Hand In Hand Eastern Africa",
    initials: "HIEA",
    logo: "hand-in-hand-eastern-africa.webp",
  },
  { name: "KOAN", initials: "KOAN", logo: "koan.webp" },
  {
    name: "Lake Turkana Windpower Limited",
    initials: "LTWP",
    logo: "lake-turkana-windpower-limited.webp",
  },
  {
    name: "Ministry Of Foreign Affairs Nigeria",
    initials: "MOFAN",
    logo: "ministry-of-foreign-affairs-nigeria.webp",
  },
  { name: "Mutara Orchards", initials: "MO", logo: "mutara-orchards.webp" },
  {
    name: "Samburu County Government",
    initials: "SCG",
    logo: "samburu-county-government.webp",
  },
  {
    name: "Sameer Africa Limited",
    initials: "SAL",
    logo: "sameer-africa-limited.webp",
  },
  { name: "Zetech University", initials: "ZU", logo: "zetech-university.webp" },
];

export const Route = createFileRoute("/our-clients")({
  head: () => ({
    meta: [{ title: "Our Clients | Bluestron Institute" }],
  }),
  component: OurClients,
});
export function OurClients() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Our Clients
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Trusted by leading organisations across East Africa and beyond.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex aspect-[3/2] items-center justify-center rounded-2xl border border-border/50 bg-card p-2 transition-all duration-300 hover:border-primary/20 hover:bg-card/80 hover:shadow-sm"
            >
              <img
                src={`/client-logos/${client.logo}`}
                alt={client.name}
                className="h-full w-full object-fit rounded-sm opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />

              {/* <span className="text-lg font-semibold tracking-tight text-muted-foreground/40 transition-colors duration-300 group-hover:text-muted-foreground/70">
                {client.initials}
              </span> */}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
