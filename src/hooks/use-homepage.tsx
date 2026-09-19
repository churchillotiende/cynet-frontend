import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";

export function useHeroSection() {
  return useQuery({
    queryKey: ["hero-section"],
    queryFn: () => api.getHeroSection(),
  });
}
