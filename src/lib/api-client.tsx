import HeroSection from "@/components/site/HeroSection";

const API_BASE = "https://api-v2.bluestroninstitute.com/api/v1";

export interface Course {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  featured_image: string | null;
  price: number;
  duration: string | null;
  categories: Category[];
  published_at: string | null;

  seo_title?: string | null;
  seo_description?: string | null;
  seo_canonical?: string | null;
  seo_robots_noindex?: boolean;
  og_title?: string | null;
  og_description?: string | null;
}

export interface Page {
  id: number;
  slug: string;
  title: string;
  content: string;
}

export interface OnlineSession {
  start: string;
  end: string;
  schedule: string;
  fee: string;
}

export interface ClassroomSession {
  city: string;
  country: string;
  schedule: string;
  duration: string;
  fee: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface PaginatedCourses {
  data: Course[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

export interface Category {
  id: number;
  name?: string;
  slug: string;
  image?: string;
  seo_title?: string;
  seo_description?: string;
  description?: string;
  courses_count?: number;
}

export interface HeroSection {
  headline: string;
  second_headline: string;
  headline_highlight: string;
  subheadline: string;
  cta_label: string;
  cta_url: string;
  badge_text: string;
  is_active: boolean;
}

async function get<T>(
  path: string,
  params: Record<string, string | number | undefined> = {},
): Promise<T> {
  const cleaned = Object.fromEntries(
    Object.entries(params).filter(
      ([, v]) => v !== undefined && v !== null && v !== "",
    ),
  ) as Record<string, string | number>;

  const query = new URLSearchParams(
    cleaned as Record<string, string>,
  ).toString();

  const url = query ? `${API_BASE}${path}?${query}` : `${API_BASE}${path}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`API request failed: ${res.status} ${path}`);
  }
  return res.json();
}

async function post<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const json = await res.json().catch(() => null);
    throw new Error(
      json?.message ?? `API request failed: ${res.status} ${path}`,
    );
  }
  return res.json();
}

export const api = {
  listCourses: (
    params: { page?: number; search?: string; category?: number } = {},
  ) =>
    get<{ data: Course[] }>(
      "/courses",
      params as Record<string, string | number>,
    ).then((r) => r.data),

  getCourse: (slug: string) => get<{ data: Course }>(`/courses/${slug}`),

  getHeroSection: () => get<HeroSection>("/hero-section"),

  listCategories: () => get<Category[]>("/categories"),

  getPage: (slug: string) =>
    get<{ data: Page }>(`/pages/${slug}`).then((r) => r.data),

  listPaginatedCourses: (
    params: {
      page?: number;
      search?: string;
      category?: number;
      per_page?: number;
    } = {},
  ) =>
    get<PaginatedCourses>(
      "/courses",
      params as Record<string, string | number>,
    ),

  listTrendingCourses: () => get<Course[]>("/courses/trending"),

  searchCourses: (q: string) =>
    get<{ results: { id: number; slug: string; title: string }[] }>(
      `/search?q=${encodeURIComponent(q)}`,
    ).then((r) => r.results),

  getCategoryCourses: (slug: string) =>
    get<{ category: Category; courses: Course[] }>(`/categories/${slug}`),

  registerForCourse: (payload: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    organization: string;
    jobTitle: string;
    trainingMode: string;
    participants: string;
    startDate: string;
    endDate: string;
    message: string;
    courseSlug: string;
    courseName: string;
    courseCategory: string;
  }): Promise<string> =>
    post<{ success: boolean; message: string }>("/registrations", payload).then(
      (json) => {
        if (!json.success)
          throw new Error(
            json.message ?? "Registration failed. Please try again.",
          );
        return json.message;
      },
    ),
};
