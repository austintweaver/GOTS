
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
import { useEffect, useState } from "react";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

declare global {
  interface Window {
    Calendly?: any;
  }
}

const queryClient = new QueryClient();

const CookieBanner = () => {
  const [visible, setVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return !localStorage.getItem('cookieConsent');
    }
    return false;
  });

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'declined');
    setVisible(false);
    // Optionally initialize analytics tools here if accepted
  };

  if (!visible) return null;

  return (
    <div id="cookie-banner" style={{ display: 'block', position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: '#f8f8f8', color: '#333', padding: '15px 20px', boxShadow: '0 -2px 5px rgba(0,0,0,0.1)', zIndex: 1000, fontFamily: 'Arial, sans-serif' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ margin: 0, fontSize: 14 }}>
          We use cookies and tracking technologies to enhance your browsing experience, analyze traffic, and improve our services. <a href="/privacy-policy" style={{ color: '#0066cc' }}>Learn more</a>.
        </p>
        <div style={{ marginTop: 10 }}>
          <button onClick={() => handleConsent(true)} style={{ marginRight: 10, backgroundColor: '#0066cc', color: '#fff', border: 'none', padding: '8px 14px', cursor: 'pointer', borderRadius: 4 }}>Accept</button>
          <button onClick={() => handleConsent(false)} style={{ backgroundColor: '#ccc', color: '#333', border: 'none', padding: '8px 14px', cursor: 'pointer', borderRadius: 4 }}>Decline</button>
        </div>
      </div>
    </div>
  );
};

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
            text: 'Schedule a Call',
            color: '#DC2626',
            textColor: '#ffffff'
          });
        }
      };
      document.body.appendChild(script);
    } else if (window.Calendly) {
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/austin-scoreboardstrategy/30min?hide_event_type_details=1',
        text: 'Schedule a Call',
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
            <CookieBanner />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
