import { useState } from "react";
import { Scale, Users, TrendingUp, Award, FileText, Handshake, Compass, Shield, Briefcase, Rocket, Building, Zap, Target, BarChart, Lightbulb, Settings, AlertTriangle, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
const Services = () => {
  // Set GAME Plan as the default tab
  const [showGamePlan, setShowGamePlan] = useState(true);
  const brandServices = [{
    title: "Fractional General Counsel",
    description: "Expert legal guidance and strategic counsel for your organization on a flexible, as-needed basis.",
    icon: Scale
  }, {
    title: "Fractional COO",
    description: "Experienced operational leadership to optimize your organization's efficiency and performance.",
    icon: Settings
  }, {
    title: "Strategy Consulting",
    description: "Comprehensive strategic planning and execution support to achieve your organizational goals.",
    icon: Target
  }, {
    title: "Revenue Strategy",
    description: "Data-driven approaches to optimize revenue streams and maximize financial performance.",
    icon: BarChart
  }, {
    title: "Start-up Advising",
    description: "Specialized guidance for emerging organizations to navigate growth and development challenges.",
    icon: Lightbulb
  }, {
    title: "Team Business Operations",
    description: "Tailored solutions for sports teams to enhance operations and business performance.",
    icon: Users
  }, {
    title: "Crisis Management",
    description: "Strategic support for managing critical situations and conducting thorough investigations.",
    icon: AlertTriangle
  }, {
    title: "HR Strategy & Management",
    description: "Comprehensive human resources solutions to build and maintain high-performing teams.",
    icon: UserCheck
  }];
  const gamePillars = [{
    title: "Guidance",
    description: "Expert advice to help navigate your journey.",
    icon: Compass
  }, {
    title: "Advocacy",
    description: "Protecting your interests and rights.",
    icon: Shield
  }, {
    title: "Management",
    description: "Professional oversight of your business matters.",
    icon: Briefcase
  }, {
    title: "Execution",
    description: "Implementation of strategies for your success.",
    icon: Rocket
  }];
  return <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Our <span className="text-brand-red">Services</span>
          </h1>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          {/* Toggle Switch Section restored here */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 mb-4 flex justify-center">
            <div className="flex items-center space-x-6">
              <Label htmlFor="service-toggle" className={`text-lg font-semibold transition-colors ${showGamePlan ? 'text-brand-red' : 'text-gray-500'}`}>The GAME Plan</Label>
              <Switch id="service-toggle" checked={!showGamePlan} onCheckedChange={checked => setShowGamePlan(!checked)} className="data-[state=checked]:bg-brand-red" />
              <Label htmlFor="service-toggle" className={`text-lg font-semibold transition-colors ${!showGamePlan ? 'text-brand-red' : 'text-gray-500'}`}>Business Services</Label>
            </div>
          </div>
          {showGamePlan ? (/* GAME Plan Panel */
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                  The <span className="text-brand-red">GAME</span> Plan
                </h2>
                <p className="text-xl text-gray-700 mb-6 font-semibold">
                  Representation Reinvented
                </p>
                {/* Four Pillars moved here */}
                <div className="grid grid-cols-4 gap-8 mb-8">
                  {gamePillars.map((pillar, index) => <div key={pillar.title} className="text-center group">
                      <div className="relative mb-6">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300 border-2 border-brand-red/10 group-hover:border-brand-red/30">
                          <pillar.icon className="h-10 w-10 text-brand-red" />
                        </div>
                        {index < gamePillars.length - 1 && <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-brand-red/30 to-transparent transform -translate-y-1/2"></div>}
                      </div>
                      <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>)}
                </div>
                {/* New supporting paragraphs */}
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
                  We offer subscription-based support for athletes, coaches, administrators, entertainers, and creators — delivering expert guidance without the commissions or conflicts of traditional representation.
                </p>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
                  Our approach is built for the full scope of your career and business journey. From navigating NIL deals and contract negotiations to career progression, brand building, and professional growth — we’re with you at every stage. Our model ensures you have access to legal expertise, strategic advice, and business management whenever you need it — all within a transparent, predictable subscription.
                </p>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We don’t take a percentage of your success — we help you build it.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="text-center space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
                <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105" asChild>
                  
                </Button>
                <Button size="lg" variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-semibold px-8 py-4 text-lg transition-all duration-300" asChild>
                  <Link to="/contact">Learn About Our Subscription Model</Link>
                </Button>
              </div>
            </div>) : (/* Business Services Panel */
        <div>
              <div className="text-center mt-12 mb-12">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                  Business <span className="text-brand-red">Services</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Strategic solutions for organizations looking to optimize operations and drive growth
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {brandServices.map(service => <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-gray-200 hover:border-brand-red/20">
                    <CardHeader className="flex flex-col items-center pb-4"> {/* Center icon and text */}
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-red/10 rounded-full mb-4 group-hover:bg-brand-red/20 transition-colors duration-300">
                        <service.icon className="h-6 w-6 text-brand-red" />
                      </div>
                      <CardTitle className="text-lg font-heading font-bold text-gray-900 mb-2 text-center">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-gray-600 text-sm leading-relaxed text-center">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>)}
              </div>
            </div>)}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
            Ready to <span className="text-brand-red">Win</span><br />
            Where It <span className="text-brand-red">Matters Most</span>?
          </h2>
          <Link to="/contact">
            <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
              Let's Get to Work
            </Button>
          </Link>
        </div>
      </section>
    </div>;
};
export default Services;