import { Mail, Phone, Linkedin, UserPlus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PrivateInfo = () => {
  const handleAddToContacts = async () => {
    // Helper to convert ArrayBuffer to Base64
    const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
      let binary = '';
      const bytes = new Uint8Array(buffer);
      const len = bytes.byteLength;
      for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return btoa(binary);
    };

    // Fetch the headshot and encode as base64 for embedding in vCard
    let photoLine = '';
    try {
      const res = await fetch('/assets/weaver-headshot.jpeg', { cache: 'reload' });
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        const base64 = arrayBufferToBase64(buffer);
        // vCard 3.0 inline photo encoding
        photoLine = `PHOTO;ENCODING=b;TYPE=JPEG:${base64}`;
      } else {
        // Fallback to URL if fetch fails
        photoLine = `PHOTO;TYPE=JPEG;VALUE=URI:${window.location.origin}/assets/weaver-headshot.jpeg`;
      }
    } catch (e) {
      // Fallback to URL on any error
      photoLine = `PHOTO;TYPE=JPEG;VALUE=URI:${window.location.origin}/assets/weaver-headshot.jpeg`;
    }

    const vCard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Weaver;Austin;;;',
      'FN:Austin Weaver',
      'ORG:Scoreboard Strategy',
      'TITLE:Founder & Principal',
      photoLine,
      'TEL;TYPE=CELL,VOICE:+18063671776',
      'EMAIL;TYPE=INTERNET;TYPE=WORK:austin@scoreboardstrategy.com',
      'URL:https://www.linkedin.com/in/austintweaver/',
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Austin_Weaver.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };
  return <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <img 
                src="/assets/weaver-headshot.jpeg" 
                alt="Austin Weaver" 
                className="w-32 h-32 rounded-full object-cover border-4 border-brand-red"
              />
            </div>
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
                <a href="mailto:austin@scoreboardstrategy.com" className="text-gray-600 hover:text-brand-red transition-colors">
                  austin@scoreboardstrategy.com
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
                <a href="tel:+18063671776" className="text-gray-600 hover:text-brand-red transition-colors">
                  +1 (806) 367-1776
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
                  <a href="https://www.linkedin.com/in/austintweaver/" target="_blank" rel="noopener noreferrer">
                    View LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>

            {/* Add to Contacts Button */}
            <div className="pt-4 border-t border-gray-200">
              <Button 
                onClick={handleAddToContacts}
                className="w-full bg-brand-red hover:bg-red-700 text-white"
              >
                <UserPlus className="h-5 w-5 mr-2" />
                Add to Contacts
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default PrivateInfo;