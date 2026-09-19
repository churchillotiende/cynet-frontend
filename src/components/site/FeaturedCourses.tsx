import { useCourses } from "@/hooks/use-courses";
import { Link } from "@tanstack/react-router";
import { ArrowRightCircle } from "lucide-react";
import { CardGridSkeleton, ErrorState } from "./Loaders";
import { CourseCard } from "./CourseCard";

function FeaturedCourses() {
  const courses = useCourses({ page: 1 });

  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-16 lg:pb-24">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Latest Programs
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold mt-2">
            Featured Training Courses
          </h2>
        </div>
        <Link
          to="/courses"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
        >
          View all <ArrowRightCircle className="size-4" />
        </Link>
      </div>

      {courses.isLoading && <CardGridSkeleton />}
      {courses.isError && (
        <ErrorState message={(courses.error as Error).message} />
      )}
      {courses.data && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.data.map((c, i) => (
            <CourseCard key={c.id} course={c} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}

export default FeaturedCourses;
