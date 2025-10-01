import { Mail, Phone, Linkedin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const PrivateInfo = () => {
  return <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900">Contact Information</CardTitle>
            
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            {/* Email */}
            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-brand-red" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-brand-red transition-colors">
                  your.email@example.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-brand-red" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <a href="tel:+1234567890" className="text-gray-600 hover:text-brand-red transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex-shrink-0">
                <Linkedin className="h-6 w-6 text-brand-red" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
                <Button variant="link" className="p-0 h-auto text-gray-600 hover:text-brand-red" asChild>
                  <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                    View LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        
      </div>
    </div>;
};
export default PrivateInfo;