import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TermsOfService = () => (
  <div className="min-h-screen pt-16 bg-white">
    <section className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-6">
        <Button className="bg-white text-black hover:bg-gray-100" asChild>
          <Link to="/">← Back to Home</Link>
        </Button>
      </div>
      <h1 className="text-4xl font-heading font-bold mb-6 text-brand-red">Terms of Service</h1>
      <p className="text-gray-600 mb-6">Effective Date: July 10, 2025</p>
      <p className="mb-6 text-gray-700">These Terms of Service (“Terms”) govern your access to and use of the website operated by Scoreboard Strategy, LLC (“Company,” “we,” or “us”). By accessing or using our website, you agree to be bound by these Terms and our Privacy Policy.</p>
      <ol className="list-decimal list-inside space-y-6 text-gray-700">
        <li>
          <strong>Use of the Site</strong>
          <p className="mt-2">You may use this site for lawful purposes only. You agree not to use the site in any way that could damage the website or interfere with anyone else’s use of it.</p>
        </li>
        <li>
          <strong>Scheduling and Communication</strong>
          <p className="mt-2">When scheduling a consultation or sending us an email through our website, you agree to provide accurate and truthful information. Communications initiated through our site do not create an attorney-client or advisor-client relationship unless and until explicitly agreed in writing.</p>
        </li>
        <li>
          <strong>Intellectual Property</strong>
          <p className="mt-2">All content on this site—including text, graphics, logos, and design—is the property of Scoreboard Strategy, LLC or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
        </li>
        <li>
          <strong>Disclaimer</strong>
          <p className="mt-2">The information provided on this site is for general informational purposes only and does not constitute legal, business, or financial advice. You use the site and its content at your own risk.</p>
        </li>
        <li>
          <strong>Limitation of Liability</strong>
          <p className="mt-2">To the fullest extent permitted by law, Scoreboard Strategy, LLC shall not be liable for any damages arising from your use of the site, including but not limited to direct, indirect, incidental, or consequential damages.</p>
        </li>
        <li>
          <strong>Third-Party Links</strong>
          <p className="mt-2">This site may contain links to third-party websites or services. We are not responsible for the content, privacy practices, or accuracy of any third-party sites.</p>
        </li>
        <li>
          <strong>Modifications</strong>
          <p className="mt-2">We may modify these Terms at any time. The updated version will be posted on this page with a new effective date. Your continued use of the site after changes are posted constitutes your acceptance of the revised Terms.</p>
        </li>
        <li>
          <strong>Governing Law</strong>
          <p className="mt-2">These Terms are governed by the laws of the State of Illinois, without regard to its conflict of laws principles.</p>
        </li>
        <li>
          <strong>Contact</strong>
          <p className="mt-2">If you have any questions about these Terms, please contact us at:</p>
          <p>Scoreboard Strategy, LLC<br />Email: <a href="mailto:contact@scoreboardstrategy.com" className="text-brand-red underline">contact@scoreboardstrategy.com</a></p>
        </li>
      </ol>
    </section>
  </div>
);

export default TermsOfService; 