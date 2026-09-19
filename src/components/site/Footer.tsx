import { Mail, MapPin, Phone, Users, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home", end: true },
  { to: "/courses", label: "Courses" },
  {
    to: "https://drive.google.com/file/d/1TqaD4jHUqqFSqMgV5zePqF-uGg9rm4AE/view",
    label: "Calendar",
  },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/our-gallery", label: "Gallery" },
  { to: "/our-clients", label: "Our Clients" },
  { to: "/sitemap.xml", label: "Sitemap" },
];

export function Footer() {
  return (
    <>
      {/* Google reviews */}
      <section className="hidden max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div
          className="elfsight-app-1b1829b4-b00b-4885-97d1-83742fd255ee"
          data-elfsight-app-lazy
        ></div>
      </section>
      {/* CTA */}
      <section className="bg-hero">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 lg:py-16">
          <div className="relative overflow-hidden">
            <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                  Tell us what your{" "}
                  <span className="text-gradient">team needs</span>
                </h2>
                <p className="mt-3 text-muted-foreground max-w-xl">
                  We reply within one business day{" "}
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 h-12 rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-glow"
                >
                  <Users className="size-4" />
                  Talk to an advisor
                </Link>
                <a
                  href="https://wa.me/+254715113519"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 h-12 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] border border-[#25D366] font-medium text-white"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <footer className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src="/assets/bluestroninstitute-primary-logo.png"
                  alt="Bluestron Logo"
                  className="h-[150px] w-auto object-contain"
                />
              </Link>
            </div>
            <h3 className="mt-4 text-xl text-muted-foreground max-w-md">
              Corporate training trusted by 35+ organisations across Africa
            </h3>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              NITA-approved courses delivered in Nairobi, online, or in-house at
              your offices. 1,000+ professionals trained since 2020.{" "}
            </p>

            {/* Social handles */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/bluestron/"
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
                href="https://x.com/bluestronsoluti"
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
                href="https://www.linkedin.com/company/bluestroninstitute/?originalSubdomain=ke"
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
                href="https://www.instagram.com/bluestronsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@bluestronsolutions6488/null"
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
            <p className="text-sm font-semibold mb-3">Explore</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-primary">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold mb-3">Contact</p>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 text-primary" /> View Park
                Towers, Nairobi, Kenya
              </li>
              <li className="flex items-start gap-2">
                <Mail className="size-4 mt-0.5 text-primary" />{" "}
                info@bluestroninstitute.com
              </li>
              <li className="flex items-start gap-2">
                <Phone className="size-4 mt-0.5 text-primary" /> +254 715 113
                519
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Bluestron Institute. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/privacy-policy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="opacity-40">·</span>
              <Link
                to="/terms-and-conditions"
                className="hover:text-primary transition-colors"
              >
                Terms & Conditions
              </Link>
              <span className="opacity-40">·</span>
              <p>Content powered by Bluestron Digital Team.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
