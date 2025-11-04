
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import PrivateInfo from "./pages/PrivateInfo";

declare global {
  interface Window {
    clarity?: any;
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
    if (accepted) {
      // Inject Microsoft Clarity script
      if (!window.clarity) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://www.clarity.ms/tag/scre5aixuv';
        document.head.appendChild(script);
      }
    }
  };

  if (!visible) return null;

  return (
    <div id="cookie-banner" style={{ display: 'block', position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: '#18181b', color: '#fff', padding: '15px 20px', boxShadow: '0 -2px 5px rgba(0,0,0,0.2)', zIndex: 1000, fontFamily: 'Montserrat, Arial, sans-serif' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ margin: 0, fontSize: 14 }}>
          We use cookies and tracking technologies to enhance your browsing experience, analyze traffic, and improve our services. <a href="/privacy-policy" style={{ color: '#DC2626', fontWeight: 600, textDecoration: 'underline', marginLeft: 8 }}>Learn more</a>.
        </p>
        <div style={{ marginTop: 10 }}>
          <button onClick={() => handleConsent(true)} style={{ marginRight: 10, backgroundColor: '#DC2626', color: '#fff', border: 'none', padding: '8px 18px', cursor: 'pointer', borderRadius: 6, fontWeight: 700 }}>Accept</button>
          <button onClick={() => handleConsent(false)} style={{ backgroundColor: '#333', color: '#fff', border: 'none', padding: '8px 18px', cursor: 'pointer', borderRadius: 6, fontWeight: 700 }}>Decline</button>
        </div>
      </div>
    </div>
  );
};

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen bg-white">
            <Navigation />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/private-info" element={<PrivateInfo />} />
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
