import { afterEach, describe, expect, it, vi } from "vitest";
import { api } from "@/lib/api-client";

describe("api.listPaginatedCourses", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns root-level pagination metadata for the course catalog UI", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        headers: {
          get: (name: string) => {
            if (name === "X-WP-Total") return "42";
            if (name === "X-WP-TotalPages") return "5";
            return null;
          },
        },
        json: async () => [
          {
            id: 1,
            slug: "demo-course",
            title: { rendered: "Demo Course" },
            excerpt: { rendered: "<p>Intro text</p>" },
            content: { rendered: "<p>Full details</p>" },
            date: "2025-01-02T00:00:00",
            link: "https://cyneteastafrica.com/demo-course",
            featured_media: 11,
            course_category: [7],
            _embedded: {
              "wp:featuredmedia": [],
              "wp:term": [[]],
            },
          },
        ],
      }),
    );

    const result = await api.listPaginatedCourses({ page: 1, per_page: 12 });

    expect(result.total).toBe(42);
    expect(result.last_page).toBe(5);
    expect(result.data).toHaveLength(1);
    expect(result.meta.total).toBe(42);
    expect(result.meta.last_page).toBe(5);
  });
});
