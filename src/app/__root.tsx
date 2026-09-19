import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import appCss from "./globals.css?url";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Footer } from "@/components/site/Footer";
import { SiteHeader } from "@/components/site/sideHeader";
import { ThemeProvider } from "@/components/site/ThemeProvider";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FloatingWhatsApp } from "@digicroz/react-floating-whatsapp";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 5 * 60 * 1000, refetchOnWindowFocus: false },
  },
});

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      {
        title: "Corporate: training trusted by 35+ organisations across Africa",
      },
      {
        name: "description",
        content:
          "NITA-approved courses delivered in Nairobi, online, or in-house at your offices. 1,000+ professionals trained since 2020.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content:
          "Corporate: training trusted by 35+ organisations across Africa",
      },
      {
        property: "og:description",
        content: ".",
      },
      {
        property: "og:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/...",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "Corporate: training trusted by 35+ organisations across Africa.",
      },
      {
        name: "twitter:description",
        content:
          "Corporate: training trusted by 35+ organisations across Africa.",
      },
      {
        name: "twitter:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/...",
      },
      {
        name: "google-site-verification",
        content: "pdOAd7qjHCoS3jbyiLvqgOJf4F6cp3hRyZ3vpYwIKTo",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [{ src: "https://elfsightcdn.com/platform.js", async: true }],
  }),
  component: RootLayout,
});

function RootLayout() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <div className="min-h-screen flex flex-col bg-background text-foreground">
                <SiteHeader />
                <main className="flex-1">
                  <Outlet />
                </main>
                <Footer />
              </div>
              <FloatingWhatsApp
                phoneNumber="+254 715 113 519"
                accountName="Bluestron Institute"
                avatar="assets/bluestroninstitute-primary-logo.png"
                statusMessage="Typically replies within 1 hour"
                chatMessage="Hello! 👋 How can we help you today?"
                darkMode={false}
                allowClickAway={true}
                allowEsc={true}
                notification={true}
                notificationSound={true}
              />
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </QueryClientProvider>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
