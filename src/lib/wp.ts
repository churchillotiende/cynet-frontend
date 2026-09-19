// WordPress REST API client for bluestroninstitute.com
const WP_BASE = "https://api.bluestroninstitute.com/wp-json/wp/v2";

export interface WPRendered {
  rendered: string;
  protected?: boolean;
}
export interface WPCourse {
  id: number;
  slug: string;
  date: string;
  link: string;
  title: WPRendered;
  excerpt: WPRendered;
  content?: WPRendered;
  featured_media: number;
  course_category?: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text?: string;
      media_details?: { sizes?: Record<string, { source_url: string }> };
    }>;
    "wp:term"?: Array<
      Array<{ id: number; name: string; slug: string; taxonomy: string }>
    >;
  };
}
export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
  description?: string;
}
export interface WPPage {
  id: number;
  slug: string;
  title: WPRendered;
  content: WPRendered;
  date: string;
  link: string;
}

const buildUrl = (
  path: string,
  params: Record<string, string | number | boolean | undefined> = {},
) => {
  const url = new URL(WP_BASE + path);
  Object.entries(params).forEach(
    ([k, v]) => v !== undefined && url.searchParams.set(k, String(v)),
  );
  return url.toString();
};

async function get<T>(
  path: string,
  params: Record<string, string | number | boolean | undefined> = {},
): Promise<T> {
  const res = await fetch(buildUrl(path, params), {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  if (!res.ok) throw new Error(`WP request failed: ${res.status}`);
  return res.json();
}

async function getWithTotal<T>(
  path: string,
  params: Record<string, string | number | boolean | undefined> = {},
): Promise<{ data: T; total: number; totalPages: number }> {
  const res = await fetch(buildUrl(path, params), {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  if (!res.ok) throw new Error(`WP request failed: ${res.status}`);
  const total = Number(res.headers.get("X-WP-Total") ?? "0");
  const totalPages = Number(res.headers.get("X-WP-TotalPages") ?? "0");
  const data = (await res.json()) as T;
  return { data, total, totalPages };
}

export const wp = {
  listCourses: (
    opts: {
      page?: number;
      perPage?: number;
      search?: string;
      category?: number;
      orderby?: string;
    } = {},
  ) =>
    getWithTotal<WPCourse[]>("/lp_course", {
      page: opts.page ?? 1,
      per_page: opts.perPage ?? 12,
      search: opts.search,
      course_category: opts.category,
      orderby: opts.orderby ?? "date",
      order: "desc",
      _embed: "wp:featuredmedia,wp:term",
      _fields:
        "id,slug,title,excerpt,date,link,featured_media,course_category,_links,_embedded",
    }),

  getCourse: async (slug: string): Promise<WPCourse | null> => {
    const list = await get<WPCourse[]>("/lp_course", {
      slug,
      _embed: "wp:featuredmedia,wp:term",
    });
    return list[0] ?? null;
  },

  listCategories: () =>
    get<WPCategory[]>("/course_category", {
      per_page: 50,
      hide_empty: true,
      orderby: "count",
      order: "desc",
    }),

  getPage: async (slug: string): Promise<WPPage | null> => {
    const list = await get<WPPage[]>("/pages", { slug });
    return list[0] ?? null;
  },
};

export const stripHtml = (html: string) =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&hellip;/g, "…")
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "–")
    .trim();

export const featuredImage = (course: WPCourse): string | null => {
  const media = course._embedded?.["wp:featuredmedia"]?.[0];
  if (!media) return null;
  return (
    media.media_details?.sizes?.medium_large?.source_url ??
    media.media_details?.sizes?.medium?.source_url ??
    media.source_url
  );
};

export const courseCategories = (course: WPCourse) =>
  course._embedded?.["wp:term"]
    ?.flat()
    .filter((t) => t.taxonomy === "course_category") ?? [];
