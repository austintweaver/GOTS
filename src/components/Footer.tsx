
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="relative flex flex-col md:block md:h-20">
          {/* Social Icons Only, centered and larger */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 flex justify-center items-center w-full md:w-auto md:absolute-none md:top-auto md:left-auto md:transform-none h-20">
            <div className="flex space-x-8 justify-center w-full">
              <a href="https://www.facebook.com/profile.php?id=61578784460129" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-red transition-colors duration-200"><Facebook className="h-8 w-8" /></a>
              <a href="https://www.linkedin.com/company/scoreboard-strategy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-red transition-colors duration-200"><Linkedin className="h-8 w-8" /></a>
              <a href="https://www.instagram.com/scoreboardstrategy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-red transition-colors duration-200"><Instagram className="h-8 w-8" /></a>
            </div>
          </div>

          {/* Legal - right aligned, smaller, compact */}
          <div className="flex flex-col items-end text-right text-xs space-y-1 pr-2 md:absolute md:right-0 md:top-0 md:h-full md:justify-center md:w-auto w-full mt-20 md:mt-0">
            <h3 className="font-heading font-semibold mb-2 text-xs text-gray-400">Legal</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200 text-xs">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors duration-200 text-xs">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-4 pt-1 text-center">
        <p className="text-xs text-white mt-4 max-w-3xl mx-auto">
            Scoreboard Strategy LLC is not a law firm and does not provide legal advice. This site is not intended as attorney advertising. Any legal services are provided independently by licensed attorneys through a separate engagement, and additional costs may apply. Clients are encouraged to consult with qualified legal counsel licensed in their jurisdiction for any legal matters.
          </p>
          <p className="text-xs text-white mt-4 max-w-3xl mx-auto">
            © 2025 Scoreboard Strategy. All rights reserved.
          </p>
  
        </div>
      </div>
    </footer>
  );
};

export default Footer;
