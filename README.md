# Bluestron Institute Learning Portal

A professional training and consultancy platform built with a cutting-edge React stack for maximum performance and SEO.

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com) (Full-stack React + Nitro)
- **Routing**: [TanStack Router](https://tanstack.com) (File-based, Type-safe)
- **Build Tool**: [Vite 8](https://vite.dev) & [Node 25](https://nodejs.org)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) & [Shadcn UI](https://shadcn.com)
- **Data Fetching**: [TanStack Query v5](https://tanstack.com)
- **CMS Integration**: Headless WordPress via WP-API

---

## 📁 Project Structure

```text
src/
├── app/               # TanStack Start Routes
│   ├── __root.tsx     # Global Layout (Navbar, Footer, Providers)
│   ├── index.tsx      # Homepage (Hero, Featured Programs)
│   ├── courses.tsx    # Course Listing with Category Filtering
│   └── courses.$slug.tsx # Dynamic Course Detail Pages
├── components/        # Shared Shadcn & UI Components
├── lib/               # WordPress API Client & Utils
├── index.css          # Tailwind v4 Theme & Global Styles
└── router.tsx         # Router Instance & Type Registration
```

---

## 🛠️ Key Features

- **Automated Sitemap**: Generated dynamically at build-time via TanStack Start.
- **Type-Safe Search Params**: URL filtering (e.g., `?category=27`) validated with Zod.
- **High Performance**: Vite 8 and Tailwind v4 ensure sub-second build times.
- **SEO Optimized**: Server-side rendered (SSR) with dynamic meta tags for every course.

---

## 🏁 Development

### 1. Installation
```bash
npm install --legacy-peer-deps
```

### 2. Run Locally
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```
> The sitemap will be generated at `.output/public/sitemap.xml`.

---

## 💡 Migration Notes

When moving components from the old React Router setup to this TanStack Start setup:
- Replace `Link` from `react-router-dom` with `@tanstack/react-router`.
- Use `Route.useParams()` and `Route.useSearch()` for URL data.
- Ensure all custom styling is mapped in the `@theme` block of `index.css`.
# cynet-frontend
