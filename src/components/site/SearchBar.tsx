import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCapIcon,
  SearchIcon,
  XIcon,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import CategoriesSheet from "./CategoriesSheet";
import { useHorizontalScroll } from "@/lib/use-horizontal-srcoll";
import {
  useCategories,
  useSearchCourses,
  useTrendingCourses,
} from "@/hooks/use-courses";
import { Link, useNavigate } from "@tanstack/react-router";
import { FactCard } from "./CourseDetail/FactCard";

export default function SearchBar() {
  return (
    <div className="flex flex-row items-center gap-3 px-4  sm:px-6 mx-auto max-w-7xl lg:px-8 pb-4">
      <CategoriesSheet />

      <SearchInput />
    </div>
  );
}

const categoryStylePresets = [
  { color: "#FF6537", className: "size-18" },
  { color: "#646273", className: "size-13.5" },
  { color: "#F69587", className: "h-14.5" },
  { color: "#F3BA4E", className: "h-18" },
  { color: "#F78C2A", className: "h-22 translate-y-5 rotate-5" },
  { color: "#F78C2A", className: "size-17" },
  { color: "#26BDF5", className: "h-22 translate-y-5.5 translate-x-2" },
  { color: "#E04B77", className: "size-18 translate-y-5" },
];

function SearchInput() {
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current === null) {
        return;
      }

      const hasClickedWithinSearchArea = searchRef.current.contains(
        e.target as Node,
      );

      if (!hasClickedWithinSearchArea) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return (): void => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchSubmit = () => {
    const trimmed = searchTerm.trim();
    if (!trimmed) return;

    setIsDropdownVisible(false);
    inputRef.current?.blur();
    setSearchTerm("");

    navigate({
      to: "/courses",
      search: { q: trimmed },
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearchSubmit();
    }
  };

  return (
    <div className="relative w-full" ref={searchRef}>
      <InputGroup>
        <InputGroupInput
          placeholder="Search Bluestron Institute"
          className="py-2 border-0"
          value={searchTerm}
          onClick={() => setIsDropdownVisible(true)}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
          ref={inputRef}
          onKeyDown={handleKeyDown}
        />
        <InputGroupAddon className="pl-5">
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>

      {isDropdownVisible && searchTerm.trim().length ? (
        <button
          className="absolute top-0 right-0 flex h-full items-center px-3 py-2.5 ring-0 outline-none"
          onClick={() => {
            setIsDropdownVisible(false);
            setSearchTerm("");
          }}
        >
          <div className="flex size-6.5 items-center justify-center rounded-full border border-neutral-200 bg-background shadow-xs">
            <div className="flex size-5 items-center justify-center rounded-full bg-foreground text-background">
              <XIcon className="size-4 stroke-3" />
            </div>
          </div>
        </button>
      ) : (
        <></>
      )}

      {isDropdownVisible &&
        (searchTerm.trim().length ? (
          <SearchResults searchTerm={searchTerm} />
        ) : (
          <SearchSuggestions onNavigate={() => setIsDropdownVisible(false)} />
        ))}
    </div>
  );
}

function SearchResults({ searchTerm }: { searchTerm: string }) {
  const { data: results, isLoading } = useSearchCourses(searchTerm);

  return (
    <div
      className="absolute left-0 z-50 w-full rounded-xl border border-border bg-card p-4 shadow-lg"
      style={{
        height: `calc(${((results?.length ?? 0) + 1) * 3}rem + 3.5rem)`,
        top: "calc(100% + 0.7rem)",
      }}
    >
      {isLoading && (
        <p className="px-3 py-2 text-sm text-muted-foreground">Searching…</p>
      )}
      {results?.map((item) => (
        <div
          key={item.id}
          className="flex h-12 items-center gap-4 rounded-xl px-3 transition-all duration-150 ease-in-out hover:text-muted-foreground"
        >
          <SearchIcon className="size-4.5 text-neutral-500" />
          <Link to="/course/$slug" params={{ slug: item.slug }}>
            <span
              className="font-open-sans text-base font-semibold"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
          </Link>{" "}
        </div>
      ))}
    </div>
  );
}

function SearchSuggestions({ onNavigate }: { onNavigate: () => void }) {
  const { data: categories } = useCategories();
  const searchDropdownCategories = categories
    ?.slice(0, categoryStylePresets.length)
    .map((category, i) => ({
      title: category.name,
      slug: category.slug,
      image: "/assets/images/category-placeholder.png",
      ...categoryStylePresets[i],
    }));

  return (
    <div className="absolute -bottom-104.5 left-0 z-50 h-100 w-full rounded-xl border border-border bg-background p-4 shadow-lg">
      <div className="flex w-full flex-col gap-2.5">
        <TrendingSearch onNavigate={onNavigate} />

        <SearchDropdownLabel>Categories</SearchDropdownLabel>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 overflow-y-scroll lg:overflow-hidden h-65">
          {searchDropdownCategories.map((category) => (
            <div>
              <Link
                to="/category/$slug"
                params={{ slug: category.slug }}
                onClick={onNavigate}
              >
                <FactCard
                  icon={GraduationCapIcon}
                  label={""}
                  value={category.title}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TrendingSearch({ onNavigate }: { onNavigate: () => void }) {
  const { scrollerRef, canScrollLeft, canScrollRight, scrollBy } =
    useHorizontalScroll();

  const trendingCourses = useTrendingCourses();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-end justify-between">
        <SearchDropdownLabel>Trending Searches</SearchDropdownLabel>

        <div className="flex items-center gap-1">
          <Button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollBy(-1)}
            variant="secondary"
            size="sm"
            disabled={!canScrollLeft}
          >
            <ChevronLeft size={16} />
          </Button>
          <Button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollBy(1)}
            variant="secondary"
            size="sm"
            disabled={!canScrollRight}
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>

      <div
        className="text-muted-foreground no-scrollbar flex w-full gap-2 overflow-x-scroll"
        ref={scrollerRef}
      >
        {trendingCourses.data &&
          trendingCourses?.data.map((item) => (
            <div
              key={item.id}
              className="rounded-full text-foreground bg-background px-4 py-0.5 text-sm font-semibold whitespace-nowrap"
            >
              <Link
                to="/course/$slug"
                params={{ slug: item.slug }}
                onClick={onNavigate}
              >
                {item.title}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

function SearchDropdownLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose-sm font-semibold text-neutral-500">{children}</div>
  );
}
