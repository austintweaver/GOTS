
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useEffect } from "react";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

declare global {
  interface Window {
    Calendly?: any;
  }
}

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Inject Calendly CSS
    if (!document.getElementById('calendly-badge-css')) {
      const link = document.createElement('link');
      link.id = 'calendly-badge-css';
      link.rel = 'stylesheet';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      document.head.appendChild(link);
    }
    // Inject Calendly script
    if (!document.getElementById('calendly-badge-script')) {
      const script = document.createElement('script');
      script.id = 'calendly-badge-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initBadgeWidget({
            url: 'https://calendly.com/austin-scoreboardstrategy/30min?hide_event_type_details=1',
            text: 'Schedule Initial Call',
            color: '#DC2626',
            textColor: '#ffffff'
          });
        }
      };
      document.body.appendChild(script);
    } else if (window.Calendly) {
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/austin-scoreboardstrategy/30min?hide_event_type_details=1',
        text: 'Schedule Initial Call',
        color: '#DC2626',
        textColor: '#ffffff'
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-white">
            <Navigation />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
