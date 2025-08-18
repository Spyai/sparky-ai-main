
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import { LanguageProvider } from "./context/LanguageContext";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { CursorTracker } from "./components/ui/CursorTracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
      <Toaster />
      <Sonner />
      <CursorTracker/>
      <div className="fixed inset-0 pointer-events-none z-50">
          <div className="cursor-dot w-2 h-2 bg-green-500 rounded-full fixed opacity-80 animate-pulse shadow-lg shadow-green-500/50"></div>
          <div className="cursor-ring w-8 h-8 border-2 border-blue-400 rounded-full fixed opacity-40 animate-spin-slow"></div>
        </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
