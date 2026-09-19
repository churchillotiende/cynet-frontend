import { Mail, MapPin, Phone, Users, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/our-clients", label: "Our Clients" },
  { to: "/portfolio", label: "Portfolio" },
  {
    to: "https://cyneteastafrica.com/training-calendar-2026/",
    label: "Training Calendar",
  },
  { to: "/contact", label: "Contact Us" },
];

const categories = [
  { to: "/courses", label: "Project Management Training" },
  { to: "/courses", label: "Strategy and Lean Six Sigma Training" },
  { to: "/courses", label: "Climate Change and Agriculture Training" },
  { to: "/courses", label: "Governance and Leadership" },
];

export function Footer() {
  return (
    <>
      <section className="bg-hero">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 lg:py-16">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr] items-center">
            <div className="lg:col-span-2">
              <a
                href="https://cyneteastafrica.com/courses/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 h-12 rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-glow"
              >
                Start Learning, Choose a course
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Link
                to="/about"
                className="font-medium text-foreground hover:text-primary"
              >
                Our Mission
              </Link>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Link
                to="/about"
                className="font-medium text-foreground hover:text-primary"
              >
                Our Vision
              </Link>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Link
                to="/about"
                className="font-medium text-foreground hover:text-primary"
              >
                Our Values
              </Link>
            </div>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Link
                to="/about"
                className="font-medium text-foreground hover:text-primary"
              >
                Our Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_0.9fr_0.9fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 text-primary border border-primary/20 px-3 py-2 text-sm font-semibold tracking-[0.18em] uppercase">
                Cynet
              </div>
              <div>
                <div className="text-lg font-bold leading-none">
                  East Africa
                </div>
              </div>
            </div>

            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-primary font-semibold">
              Professional Training Excellence
            </p>
            <p className="mt-4 max-w-md text-sm text-muted-foreground leading-6">
              Leading international professional training service provider
              specializing in training, consultancy, and research services
              across East Africa.
            </p>
            <p className="mt-5 text-sm font-medium text-foreground">
              NITA APPROVED
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://web.facebook.com/cyneteastafricaconsultancy/?_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://x.com/CynetA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://ke.linkedin.com/company/cynet-east-africa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@cyneteastafricaconsultancy6360"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground mb-4">
              Quick Links
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {quickLinks.map((item) =>
                item.to.startsWith("http") ? (
                  <li key={item.label}>
                    <a
                      href={item.to}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground mb-4">
              Training Categories
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {categories.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground mb-4">
              Get In Touch
            </p>

            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="size-4 mt-0.5 text-primary" />
                <span>View Park Towers, Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="size-4 mt-0.5 text-primary" />
                <a
                  href="tel:+254792972525"
                  className="hover:text-primary transition-colors"
                >
                  +254 792 972 525
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="size-4 mt-0.5 text-primary" />
                <a
                  href="mailto:info@cyneteastafrica.com"
                  className="hover:text-primary transition-colors"
                >
                  info@cyneteastafrica.com
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="h-11 flex-1 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground outline-none ring-0 focus:border-primary"
              />
              <button className="inline-flex h-11 items-center justify-center rounded-lg bg-gradient-primary px-4 text-sm font-medium text-primary-foreground shadow-glow">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border bg-background/50">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Cynet East Africa. All rights
              reserved.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/privacy-policy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <span>·</span>
              <Link
                to="/terms-and-conditions"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <span>·</span>
              <a
                href="https://cyneteastafrica.com/cookies"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
