import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";

export function useCourses(
  params: { page?: number; search?: string; category?: number } = {},
) {
  return useQuery({
    queryKey: ["courses", params],
    queryFn: () => api.listCourses(params),
  });
}

export function useCourse(slug: string | undefined) {
  return useQuery({
    queryKey: ["course", slug],
    queryFn: () => api.getCourse(slug as string),
    enabled: !!slug,
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: api.listCategories,
    staleTime: 1000 * 60 * 30,
  });
}

export function usePage(slug: string | undefined) {
  return useQuery({
    queryKey: ["page", slug],
    queryFn: () => api.getPage(slug as string),
    enabled: !!slug,
  });
}

export function useTrendingCourses() {
  return useQuery({
    queryKey: ["courses", "random"],
    queryFn: api.listTrendingCourses,
    staleTime: 0,
  });
}

export function useSearchCourses(query: string) {
  return useQuery({
    queryKey: ["search", query],
    queryFn: () => api.searchCourses(query),
    enabled: query.trim().length > 0,
    staleTime: 1000 * 30,
  });
}

export function useCategoryCourses(slug: string) {
  return useQuery({
    queryKey: ["category-courses", slug],
    queryFn: () => api.getCategoryCourses(slug),
    enabled: !!slug,
  });
}
