
import { useState } from "react";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMember = {
    name: "Sarah Mitchell",
    title: "Managing Partner & Sports Attorney",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Sarah brings over 15 years of experience in sports law and athlete representation. She has negotiated multi-million dollar contracts for professional athletes across multiple sports leagues.",
    email: "sarah@scoreboardstrategy.com",
    linkedin: "#"
  };

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

      {/* Team Member */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div 
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 max-w-md w-full"
              onMouseEnter={() => setHoveredMember(0)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
                <img 
                  src={teamMember.image} 
                  alt={teamMember.name} 
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                
                {/* Overlay with bio on hover */}
                <div className={`absolute inset-0 bg-black bg-opacity-90 p-6 flex flex-col justify-center transition-opacity duration-300 ${hoveredMember === 0 ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-white text-sm leading-relaxed mb-4">
                    {teamMember.bio}
                  </p>
                  <div className="flex space-x-3">
                    <a 
                      href={`mailto:${teamMember.email}`} 
                      className="text-white hover:text-brand-red transition-colors duration-200"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a 
                      href={teamMember.linkedin} 
                      className="text-white hover:text-brand-red transition-colors duration-200"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                  {teamMember.name}
                </h3>
                <p className="text-brand-red font-medium">
                  {teamMember.title}
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
                <span className="text-2xl font-bold text-brand-red">A</span>
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
                <span className="text-2xl font-bold text-brand-red">E</span>
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
                <span className="text-2xl font-bold text-brand-red">I</span>
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
    </div>
  );
};

export default Team;
