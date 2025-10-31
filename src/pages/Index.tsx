import { BookOpen, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import bookCover from "@/assets/book-cover.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Book Cover */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-black bg-cover bg-center overflow-x-hidden py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('/assets/scoreboardhome.jpg')`
        }}
      >
        <div className="z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Book Cover */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={bookCover}
                alt="Get on the Scoreboard book cover"
                className="w-full max-w-md shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Book Info */}
            <div className="text-center lg:text-left space-y-6">
              <h1 className="font-extrabold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
                GET ON THE<br />
                <span className="text-brand-red">SCOREBOARD</span>
              </h1>
              
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed">
                Turn Talent and Ideas Into<br />
                a Business That Wins
              </h2>

              <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0">
                Tools for Athletes, Entertainers, Creators and Entrepreneurs<br />
                to Win in the Game of Business
              </p>

              <div className="pt-4">
                <p className="text-white text-2xl font-semibold mb-8">
                  by <span className="text-brand-red">Austin Weaver</span>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-brand-red hover:bg-red-700 text-white font-bold px-10 py-6 text-xl shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
                      Buy on Amazon
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-10 py-6 text-xl rounded-lg transition-all duration-300"
                    asChild
                  >
                    <Link to="/contact">
                      Contact Austin
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Book Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About the <span className="text-brand-red">Book</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Strategic Framework
              </h3>
              <p className="text-gray-600">
                Learn the proven systems and strategies that transform talent into sustainable business success.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Practical Tools
              </h3>
              <p className="text-gray-600">
                Get actionable advice and real-world tools you can implement immediately to advance your career.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Winning Mindset
              </h3>
              <p className="text-gray-600">
                Develop the competitive edge and business acumen to navigate opportunities and maximize your value.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Whether you're an athlete building your brand, a creator monetizing your platform, or an entrepreneur launching your venture, 
              <span className="font-bold text-gray-900"> Get on the Scoreboard</span> provides the playbook you need to turn your talent into tangible results.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This book breaks down the complex world of business, legal strategy, and personal branding into clear, actionable steps that empower you to take control of your career and build lasting success.
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/assets/weaver-headshot.jpeg"
                alt="Austin Weaver"
                className="rounded-lg shadow-xl w-full max-w-sm"
              />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Austin Weaver
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Austin Weaver is the founder of Scoreboard Strategy, a firm dedicated to helping athletes, entertainers, and entrepreneurs navigate the intersection of talent and business. As an attorney, agent, and strategic advisor, Austin has spent his career helping clients turn their unique abilities into sustainable competitive advantages.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With experience in sports law, business operations, and strategic representation, Austin brings a comprehensive approach to career development and business building. His mission is to eliminate the barriers between talent and opportunity, ensuring that those with the drive to succeed have the tools and guidance they need to win.
              </p>
              <div className="pt-4">
                <Link to="/team">
                  <Button
                    size="lg"
                    className="bg-brand-red hover:bg-red-700 text-white font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get on the <span className="text-brand-red">Scoreboard</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Start your journey to turning talent into business success today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-brand-red hover:bg-red-700 text-white font-bold px-10 py-6 text-xl shadow-xl rounded-lg transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
                Order Your Copy
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-10 py-6 text-xl rounded-lg transition-all duration-300"
              asChild
            >
              <Link to="/contact">
                Connect with Austin
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;