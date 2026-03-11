import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ArcheologicalSites from "./pages/ArcheologicalSites.tsx";
import CenotesPage from "./pages/Cenotes.tsx";
import LagoonsPage from "./pages/Lagoons.tsx";
import CitiesPage from "./pages/Cities.tsx";
import TransportationPage from "./pages/Transportation.tsx";
import ContactPage from "./pages/Contact.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/destinations/archeological-sites" element={<ArcheologicalSites />} />
          <Route path="/destinations/cenotes" element={<CenotesPage />} />
          <Route path="/destinations/lagoons" element={<LagoonsPage />} />
          <Route path="/destinations/cities" element={<CitiesPage />} />
          <Route path="/transportation" element={<TransportationPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
