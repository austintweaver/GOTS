import { useState, useEffect } from "react";
import { ChevronDown, Scale, Users, TrendingUp, Target, Rocket, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";

const Index = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  // Modal state
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    setOpen(false);
  };

  // Calendly script loader for modal
  useEffect(() => {
    if (!open) return;
    const scriptId = 'calendly-widget-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => {
        window.Calendly?.initInlineWidgets();
      };
      document.body.appendChild(script);
    } else {
      // Script already present, manually initialize widgets
      window.Calendly?.initInlineWidgets();
    }
  }, [open]);

  return <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-black bg-cover bg-center bg-fixed overflow-x-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.82)), url('/assets/scoreboardhome.jpg')`
        }}
      >
        <div className="z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">
          {/* Headline */}
          <h1 className="font-extrabold text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 tracking-tight break-words">
            <span className="inline-block pb-2 border-b-4 border-brand-red">
              Built to Win.<br />
              Designed to Deliver.
            </span>
          </h1>
          {/* Subheadline */}
          <h2 className="text-brand-red text-xl sm:text-2xl md:text-4xl font-bold mb-6 mt-2 tracking-wide uppercase break-words">
            We partner with competitors, creators and builders.
          </h2>
          {/* Supporting Body Text */}
          <div className="text-base sm:text-lg md:text-xl text-white font-medium space-y-2 mb-10 max-w-full break-words">
            <p className="leading-snug">
              <span className="font-semibold text-white">We advise.</span> <span className="font-semibold text-white">We represent.</span> <span className="font-semibold text-white">We execute.</span>
            </p>
            <p className="leading-snug">
              From the locker room to the boardroom, we help <span className="font-bold text-brand-red">athletes</span>, <span className="font-bold text-brand-red">coaches</span>, <span className="font-bold text-brand-red">entertainers</span>, <span className="font-bold text-brand-red">entrepreneurs</span>, and <span className="font-bold text-brand-red">executives</span> win where it counts.
            </p>
            <p className="leading-snug break-words">
              Legal expertise. Business strategy. Operational leadership. <span className="font-bold text-white">All in one place.</span>
            </p>
            <p className="leading-snug text-white">
              No commissions. No billable hours. <span className="font-bold">Just outcomes.</span>
            </p>
          </div>
          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-brand-red hover:bg-red-700 text-white font-extrabold px-12 py-5 text-2xl shadow-xl rounded-full transition-all duration-300 tracking-wide uppercase"
            style={{ letterSpacing: '0.05em' }}
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Get to Work
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-[45px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8">
              About <span className="text-brand-red">Scoreboard Strategy</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">Winning requires more than talent — it takes strategy. Scoreboard Strategy provides the legal, business, and operational support athletes, coaches, entertainers, and organizations need to navigate every challenge and seize every opportunity.</p>
            {/* Values content moved here */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                  Alignment
                </h3>
                <p className="text-gray-600">
                  We succeed when you do. Our model is designed to eliminate conflicts of interest, ensuring that every strategy, negotiation, and action is in full alignment with your goals, not ours.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                  Execution
                </h3>
                <p className="text-gray-600">
                  Great strategies only matter when they're executed well. We bring precision, expertise, and business rigor to every engagement, ensuring plans translate into measurable outcomes.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                  Integrity
                </h3>
                <p className="text-gray-600">
                  We operate with transparency, honesty, and accountability — protecting our clients' interests with an uncompromising commitment to integrity and results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section (restored as its own section) */}
      <section className="bg-gray-50 mx-0 py-[45px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Our <span className="text-brand-red">Core Strengths</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built on a foundation of excellence, integrity, and results-driven strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Legal Expertise */}
            <div className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/10 rounded-full mb-6 group-hover:bg-brand-red/20 transition-colors duration-300">
                  <Scale className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  Legal Expertise
                </h3>
                <p className="text-gray-600 leading-relaxed">
                Comprehensive legal solutions for sports and business — ensuring every deal, decision, and defense is built for success.
                </p>
              </div>
            </div>

            {/* Sports Agency Services */}
            <div className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/10 rounded-full mb-6 group-hover:bg-brand-red/20 transition-colors duration-300">
                  <Users className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  All-In Representation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                Full-circle representation — contracts, endorsements, and career strategy, all aligned to your goals.
                </p>
              </div>
            </div>

            {/* Business Operations & Strategy */}
            <div className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/10 rounded-full mb-6 group-hover:bg-brand-red/20 transition-colors duration-300">
                  <TrendingUp className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                Fractional Leadership
                </h3>
                <p className="text-gray-600 leading-relaxed">
                Providing expert insight, structure, and strategy to streamline operations, optimize performance, and position your organization for sustained growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
            Ready to <span className="text-brand-red">Win</span><br />
            Where It <span className="text-brand-red">Matters Most</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
              Let's Get to Work
            </Button>
          </Link>
        </div>
      </section>
    </div>;
};
export default Index;