import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { cloudflare } from '@cloudflare/vite-plugin';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import sitemap from 'vite-plugin-sitemap'

const API_BASE = "https://cyneteastafrica.com/wp-json/wp/v2";

const getCourseRoutes = async () => {
  try {
    const res = await fetch(`${API_BASE}/lp_course?per_page=100&_embed=wp:term`)
    const courses = (await res.json()) as Array<{ slug: string; seo_robots_noindex?: boolean }>
    if (!Array.isArray(courses)) {
      console.warn('Expected array of courses but got:', typeof courses)
      return []
    }
    return courses
      .filter((course) => !course.seo_robots_noindex)
      .map((course) => `/course/${course.slug}`)
  } catch (e) {
    console.warn('Could not fetch course routes for sitemap:', e)
    return []
  }
}
const getCategoryRoutes = async () => {
  try {
    const res = await fetch(`${API_BASE}/course_category?per_page=100&hide_empty=true`)
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
        hostname: 'https://cyneteastafrica.com',
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
