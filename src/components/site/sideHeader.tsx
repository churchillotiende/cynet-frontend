import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { MegaMenu } from "./MegaMenu";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import SearchBar from "./SearchBar";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          {/* Logo */}
          <img
            src="/assets/bluestroninstitute-primary-logo.png"
            alt="Bluestron Logo"
            className="h-[80px] w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:block">
          <MegaMenu />
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="default"
            size="sm"
            className="hidden rounded-full px-4 sm:inline-flex"
          >
            Sign In
          </Button>
          <MobileMenu />
        </div>
      </div>

      <SearchBar />
    </header>
  );
}
