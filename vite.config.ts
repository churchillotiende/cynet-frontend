import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { cloudflare } from '@cloudflare/vite-plugin';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import sitemap from 'vite-plugin-sitemap'

const API_BASE = "https://api-v2.bluestroninstitute.com/api/v1";

const getCourseRoutes = async () => {
  try {
    const res = await fetch(`${API_BASE}/courses?per_page=1000`)
    const json = (await res.json()) as { data?: unknown }
    const courses = json?.data
    if (!Array.isArray(courses)) {
      console.warn('Expected array of courses but got:', typeof courses)
      return []
    }
    return (courses as Array<{ slug: string; seo_robots_noindex?: boolean }>)
      .filter((course) => !course.seo_robots_noindex)
      .map((course) => `/course/${course.slug}`)
  } catch (e) {
    console.warn('Could not fetch course routes for sitemap:', e)
    return []
  }
}
const getCategoryRoutes = async () => {
  try {
    const res = await fetch(`${API_BASE}/categories`)
    const categories = await res.json()
    if (!Array.isArray(categories)) {
      console.warn('Expected array of categories but got:', typeof categories)
      return []
    }
    return categories.map((category) => `/category/${category.slug}`)
  } catch (e) {
    console.warn('Could not fetch category routes for sitemap:', e)
    return []
  }
}

export default defineConfig(async () => {

  const [courseRoutes, categoryRoutes] = await Promise.all([
    getCourseRoutes(),
    getCategoryRoutes(),
  ])

  return {
    server: {
      port: 3000,
    },
    plugins: [
      cloudflare({ viteEnvironment: { name: 'ssr' } }),
      tailwindcss(),
      tanstackStart({
        srcDirectory: 'src',
        router: {
          routesDirectory: 'app',
        },
      }),
      sitemap({
        hostname: 'https://bluestroninstitute.com',
        outDir: 'dist/client',
        dynamicRoutes: [
          '/',
          '/courses',
          '/about',
          '/our-gallery',
          '/accreditation',
          '/our-clients',
          '/contact',
          '/terms-and-conditions',
          ...courseRoutes,
          ...categoryRoutes,
        ],
      }),
      react(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})
