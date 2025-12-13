import { BookOpen, Award, Target, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import bookCover from "@/assets/GOTS Cover (1600 x 2560 px).svg";
import { useState, useEffect } from "react";
import { EmailSignup } from "@/components/EmailSignup";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed top-4 left-4 z-50 bg-brand-red hover:bg-red-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
      {/* Hero Section with Book Cover */}
      <section
        className="relative lg:min-h-screen flex items-start lg:items-center justify-center bg-black bg-cover bg-center overflow-x-hidden pt-8 pb-12 lg:pt-12 lg:pb-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/assets/scoreboardhome.jpg')`
        }}
      >
        <div className="z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Book Cover */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={bookCover}
                alt="Get on the Scoreboard book cover"
                className="w-auto max-w-[60vw] sm:max-w-sm lg:max-w-md xl:max-w-lg max-h-[40vh] lg:max-h-[60vh] shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-300 object-contain"
              />
            </div>

            {/* Book Info */}
            <div className="text-center lg:text-left space-y-4">
              <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
                <span className="text-brand-red">Win.</span> <span className="text-white">Where It Matters Most.</span>
              </h1>
              
              <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Practical tools for athletes, entertainers, creators, and entrepreneurs to think bigger, protect smarter, and grow stronger.
              </p>

              {/* Credibility line */}
              <p className="text-gray-300/90 italic max-w-3xl mx-auto lg:mx-0 leading-relaxed mt-2">
                From Austin Weaver — attorney, business leader, and founder of the Scoreboard Collective, a platform helping athletes, entertainers, and entrepreneurs build with strategy and purpose.
              </p>

              {/* Opt-in helper */}
              <p className="text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed mt-4">
                Join with your email to get a special launch discount and exclusive future content.
              </p>

              <div className="pt-0 space-y-2 max-w-lg mx-auto lg:mx-0 w-full">
                {/* Signup row */}
                <div className="w-full">
                  <EmailSignup />
                </div>

                {/* Primary Buy Button */}
                <div className="w-full">
                  <Button
                    className="bg-brand-red hover:bg-red-700 text-white font-bold w-full shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
                      Buy the Book on Amazon
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Book Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              About the <span className="text-brand-red">Book</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="h-8 w-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Winning Strategy</h3>
              <p className="text-gray-600">Learn proven systems and structures that transform talent into sustainable business success.</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="h-8 w-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Practical Tools
              </h3>
              <p className="text-gray-600">Get actionable advice and real-world tools you can implement immediately to advance your career.</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-8 w-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Leadership & Longevity</h3>
              <p className="text-gray-600">Develop the mindset and business acumen to navigate opportunities and build lasting value.</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Whether you're an athlete building your brand, a creator monetizing your platform, or an entrepreneur launching your venture, <em>Get on the Scoreboard</em> equips you with the tools, structure, and strategy to turn potential into long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* About the Author Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About the <span className="text-brand-red">Author</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="flex justify-center lg:justify-start">
              <img
                src="/assets/weaver-headshot.jpeg"
                alt="Austin Weaver"
                className="rounded-lg shadow-xl w-full max-w-sm"
              />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Austin Weaver is the founder of the Scoreboard Collective, a multidisciplinary firm helping athletes, entertainers, and entrepreneurs align strategy, law, and leadership for lasting success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                As an attorney, business leader, and strategic advisor, Austin combines legal insight with real-world strategy to help clients protect what they’ve built and create sustainable success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With experience spanning business law, operations, and leadership, Austin empowers professionals to bridge the gap between performance and business ownership. His mission is simple — to help others win where it matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-brand-red">Win</span>
            <br />
            Where it <span className="text-brand-red">Matters Most</span>?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-brand-red hover:bg-red-700 text-white font-bold px-10 py-6 text-xl shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">Visit the Scoreboard Collective</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;