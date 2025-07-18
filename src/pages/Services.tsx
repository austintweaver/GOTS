
import { Scale, Users, TrendingUp, Award, FileText, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      category: "Sports Representation",
      icon: Users,
      description: "Comprehensive representation for athletes and coaches",
      services: [
        "Athlete Contract Negotiations",
        "Coach Contract Negotiations", 
        "Endorsement Deals",
        "Sponsorship Agreements",
        "Career Management",
        "Brand Development"
      ]
    },
    {
      category: "Legal Counsel",
      icon: Scale,
      description: "Expert legal guidance for sports industry matters",
      services: [
        "Contract Review & Negotiation",
        "Compliance & Governance",
        "Dispute Resolution",
        "Employment Law",
        "Intellectual Property",
        "Risk Management"
      ]
    },
    {
      category: "Business Strategy",
      icon: TrendingUp,
      description: "Strategic business development and operational support",
      services: [
        "Fractional Operations",
        "Business Development",
        "Strategic Planning",
        "Market Analysis",
        "Growth Strategies",
        "Operational Efficiency"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Our <span className="text-brand-red">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions designed to help you win where it matters most
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.category}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-red/10 rounded-full mb-4 group-hover:bg-brand-red/20 transition-colors duration-300">
                      <service.icon className="h-10 w-10 text-brand-red" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                      {service.category}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3">
                    {service.services.map((item, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-brand-red rounded-full mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="px-8 pb-8">
                  <Button 
                    className="w-full bg-brand-red hover:bg-red-700 text-white transition-colors duration-300"
                    asChild
                  >
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Specialized <span className="text-brand-red">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Additional areas where we provide focused, high-level support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Award className="h-12 w-12 text-brand-red mb-4" />
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                Award Negotiations
              </h3>
              <p className="text-gray-600">
                Performance bonuses, achievement awards, and incentive structures
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <FileText className="h-12 w-12 text-brand-red mb-4" />
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                Contract Analytics
              </h3>
              <p className="text-gray-600">
                Market analysis and contract benchmarking for optimal terms
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Handshake className="h-12 w-12 text-brand-red mb-4" />
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                Partnership Development
              </h3>
              <p className="text-gray-600">
                Strategic partnerships and joint venture negotiations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to Get <span className="text-brand-red">Started</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your specific needs and how we can help you achieve your goals.
          </p>
          <Button 
            size="lg" 
            className="bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
