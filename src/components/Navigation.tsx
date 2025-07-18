import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  const navLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "Services",
    path: "/services"
  }, {
    name: "Team",
    path: "/team"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-heading font-bold text-brand-black">
              Scoreboard{" "}
              <span className="text-brand-red">Strategy</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors duration-200 hover:text-brand-red ${location.pathname === link.path ? "text-brand-red" : isScrolled ? "text-gray-900" : "text-white"}`}>
                {link.name}
              </Link>)}
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className={`${isScrolled ? "text-gray-900" : "text-white"} hover:text-brand-red`}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
              {navLinks.map(link => <Link key={link.path} to={link.path} className={`block px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-brand-red ${location.pathname === link.path ? "text-brand-red" : "text-gray-900"}`}>
                  {link.name}
                </Link>)}
              <div className="flex items-center space-x-2 px-3 py-2">
                <Phone className="h-4 w-4 text-brand-red" />
                <a href="tel:+1234567890" className="text-sm font-medium text-gray-900 hover:text-brand-red transition-colors duration-200">
                  (123) 456-7890
                </a>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;