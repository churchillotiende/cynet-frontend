import { useState, useEffect, useRef } from "react";
import type { ComponentType } from "react";
import { Button } from "../ui/button";
import { ChevronDown, GraduationCap, Menu, Search, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { navSections } from "@/lib/nav-data";

// ─── Static data ─────────────────────────────────────────────────────────────

type Item = {
  title: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

// ─── Component ────────────────────────────────────────────────────────────────

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <>
      {/* Trigger */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        aria-label="Open Menu"
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Backdrop */}
      {open && (
        <div
          aria-hidden="true"
          onClick={close}
          className="fixed inset-0 z-40 bg-black/80 transition-opacity"
        />
      )}

      {/* Panel */}
      <div
        id="mobile-menu-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm lg:hidden",
          "bg-background shadow-lg",
          "flex h-dvh flex-col overflow-hidden",
          "transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "hidden",
        ].join(" ")}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/60 p-4">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent text-primary-foreground">
              <GraduationCap className="h-4 w-4" />
            </span>
            <span className="text-lg font-semibold text-foreground">
              Bluestron Institute
            </span>
          </div>
          <button
            onClick={close}
            aria-label="Close menu"
            className="rounded-sm p-1 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-2">
          <Link
            to="/courses"
            onClick={close}
            className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-medium text-foreground no-underline hover:bg-accent"
          >
            <Search className="h-4 w-4 text-primary" />
            Course Finder
          </Link>

          <Accordion type="single" collapsible className="w-full">
            {navSections.map((section) => (
              <AccordionItem
                key={section.label}
                value={section.label}
                className="border-b border-border/60"
              >
                <AccordionTrigger className="flex w-full items-center justify-between px-3 py-3 text-sm font-medium hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  {section.label}
                  <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="overflow-hidden pb-2 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <ul className="flex flex-col">
                    {section.items.map((item) => (
                      <li key={item.title}>
                        <Link
                          to={item.href as never}
                          onClick={close}
                          className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-muted-foreground no-underline transition-colors hover:bg-accent hover:text-foreground"
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                            <item.icon className="h-3.5 w-3.5" />
                          </span>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-4 border-t border-border/60 p-3">
            <Button className="w-full rounded-full">Sign In</Button>
          </div>
        </div>
      </div>
    </>
  );
}
