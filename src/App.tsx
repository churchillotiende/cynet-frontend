import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteLayout } from "@/components/site/SiteLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Calendar from "./pages/Calendar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/site/ThemeProvider";
import { FloatingWhatsApp } from "@digicroz/react-floating-whatsapp";
import { OurClients } from "./pages/OurClients";
import { OurGallery } from "./pages/OurGallery";
import { Accreditation } from "./pages/Accreditation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 5 * 60 * 1000, refetchOnWindowFocus: false },
  },
});

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <FloatingWhatsApp
          phoneNumber="+254 715 113 519"
          accountName="Bluestron Institute"
          avatar="assets/bluestroninstitute-primary-logo.png"
          statusMessage="Typically replies within 1 hour"
          chatMessage="Hello! 👋 How can we help you today?"
          darkMode={true}
          allowClickAway={true}
          allowEsc={true}
          notification={true}
          notificationSound={true}
        />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course/:slug" element={<CourseDetail />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/our-clients" element={<OurClients />} />
              <Route path="/our-gallery" element={<OurGallery />} />
              <Route path="/accreditation" element={<Accreditation />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
