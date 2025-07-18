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
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
    }}>
        <div className="text-center z-10 max-w-4xl mx-auto px-4">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-6">
              <span className="text-brand-red block text-5xl">Win</span>
              <span className="text-white block text-4xl">Where It Matters Most</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">At Scoreboard Strategy, we represent more than just clients 
 We represent competitors, creators, builders, and visionaries. Whether you're an athlete, coach, entertainer, entrepreneur, or executive, our mission is simple: 
to help you win.</p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">We combine precision, foresight, and the execution of seasoned operators, all under one roof. 
No hourly rates. No commissions. Just outcomes.</p>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl w-full">
                <DialogHeader>
                  <DialogTitle>Let's Start the Conversation</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Calendly Embed */}
                  <div>
                    <div
                      className="calendly-inline-widget"
                      data-url="https://calendly.com/austin-scoreboardstrategy/30min?hide_event_type_details=1"
                      style={{ minWidth: '320px', height: '700px', width: '100%' }}
                    />
                  </div>
                  {/* Contact Form */}
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                      Send us a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                          </label>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                            Subject *
                          </label>
                          <Input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="Tell us about your needs, goals, or how we can help you..."
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-brand-red hover:bg-red-700 text-white font-semibold py-2 text-lg transition-colors duration-300"
                      >
                        Send Message
                      </Button>
                    </form>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Scroll indicator */}
        <button onClick={scrollToAbout} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </button>
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
              Our <span className="text-brand-red">Three Pillars</span>
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
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
            Ready to Win Where It <span className="text-brand-red">Matters Most</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how Scoreboard Strategy can help you achieve your goals.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>;
};
export default Index;