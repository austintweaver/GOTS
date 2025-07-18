
import { ChevronDown, Scale, Users, TrendingUp, Target, Rocket, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen">
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
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              At Scoreboard Strategy, we represent more than just clients — we represent competitors, creators, builders, and visionaries. Whether you're an athlete, coach, entertainer, entrepreneur, or executive, our mission is simple: to help you win.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We combine the precision of legal counsel, the foresight of business strategy, and the execution of seasoned operators — all under one roof. No hourly rates. No commissions. Just outcomes.
            </p>
            <Link to="/services">
              <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                Explore Our Services
              </Button>
            </Link>
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
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">At Scoreboard Strategy, we understand that success in sports extends far beyond the playing field. Our comprehensive approach combines legal expertise, strategic business guidance, and dedicated representation to help athletes, coaches, and organizations win where it matters most.</p>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
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
                  Comprehensive legal counsel for contract negotiations, compliance, 
                  governance, and dispute resolution in the sports industry.
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
                  Sports Agency Services
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Full-service representation for athletes and coaches, including 
                  contract negotiations, endorsement deals, and career management.
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
                  Business Operations & Strategy
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic business development, fractional operations support, 
                  and growth planning for sports organizations and enterprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Our <span className="text-brand-red">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    </div>
  );
};

export default Index;
