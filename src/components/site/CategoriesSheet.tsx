import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCategories } from "@/hooks/use-courses";
import { Link } from "@tanstack/react-router";
import { ArrowRight2 } from "iconsax-reactjs";
import { GraduationCapIcon } from "lucide-react";
import { HiMenuAlt4 } from "react-icons/hi";

export default function CategoriesSheet() {
  const categories = useCategories();

  return (
    <Sheet>
      <SheetTrigger
        render={(props) => (
          <Button
            {...props}
            variant="default"
            size="sm"
            className="font-semibold"
          >
            <HiMenuAlt4 />
            Categories
          </Button>
        )}
      />{" "}
      <SheetContent side="left" showCloseButton={false}>
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">Categories</SheetTitle>
        </SheetHeader>

        {categories.data && (
          <div className="flex scrollbar-thumb-neutral-200 flex-col overflow-scroll px-2">
            {categories.data.map((category) => (
              <div
                key={category.id}
                className="transition-base flex border-collapse items-center justify-between gap-2 border-b border-border px-4 py-3 first:border-t hover:bg-background"
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-sm bg-background p-2">
                    <GraduationCapIcon />{" "}
                  </div>

                  <Link to="/category/$slug" params={{ slug: category.slug }}>
                    <div className="font-semibold">{category.name}</div>
                  </Link>
                </div>

                <ArrowRight2 variant="Linear" className="size-6" />
              </div>
            ))}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
