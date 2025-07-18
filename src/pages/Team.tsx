
import { useState } from "react";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Sarah Mitchell",
      title: "Managing Partner & Sports Attorney",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Sarah brings over 15 years of experience in sports law and athlete representation. She has negotiated multi-million dollar contracts for professional athletes across multiple sports leagues.",
      email: "sarah@scoreboardstrategy.com",
      linkedin: "#"
    },
    {
      name: "Marcus Johnson",
      title: "Senior Partner & Business Strategy",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Marcus specializes in business development and operations strategy for sports organizations. Former VP of Operations for a major league franchise with extensive M&A experience.",
      email: "marcus@scoreboardstrategy.com",
      linkedin: "#"
    },
    {
      name: "Elena Rodriguez",
      title: "Senior Associate & Contract Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Elena focuses on contract negotiations and compliance matters. She has extensive experience in endorsement deals and has worked with Olympic athletes and professional teams.",
      email: "elena@scoreboardstrategy.com",
      linkedin: "#"
    },
    {
      name: "David Chen",
      title: "Partner & Legal Counsel",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "David handles complex legal matters including disputes, governance, and regulatory compliance. Former general counsel for sports entertainment companies with a track record of successful resolutions.",
      email: "david@scoreboardstrategy.com",
      linkedin: "#"
    },
    {
      name: "Jessica Taylor",
      title: "Sports Agent & Client Relations",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Jessica manages athlete relationships and career development. She has represented draft picks, free agents, and veteran players throughout their careers with personalized attention.",
      email: "jessica@scoreboardstrategy.com",
      linkedin: "#"
    },
    {
      name: "Robert Kim",
      title: "Associate & Market Analysis",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Robert provides market analysis and financial planning services. His background in sports economics and data analytics helps clients make informed decisions about contracts and investments.",
      email: "robert@scoreboardstrategy.com",
      linkedin: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Meet Our <span className="text-brand-red">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experienced professionals dedicated to helping you win where it matters most
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Overlay with bio on hover */}
                  <div className={`absolute inset-0 bg-black bg-opacity-90 p-6 flex flex-col justify-center transition-opacity duration-300 ${
                    hoveredMember === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <p className="text-white text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <div className="flex space-x-3">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-white hover:text-brand-red transition-colors duration-200"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                      <a
                        href={member.linkedin}
                        className="text-white hover:text-brand-red transition-colors duration-200"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand-red font-medium">
                    {member.title}
                  </p>
                </div>
              </div>
            ))}
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
                <span className="text-2xl font-bold text-brand-red">E</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for the highest standards in every aspect of our work
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-red">I</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                Integrity
              </h3>
              <p className="text-gray-600">
                Honest, transparent communication and ethical business practices
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-red">R</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                Results
              </h3>
              <p className="text-gray-600">
                Focused on delivering measurable outcomes that matter to our clients
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
