import React from "react";

const PrivacyPolicy = () => (
  <div className="min-h-screen pt-16 bg-white">
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-heading font-bold mb-6 text-brand-red">Privacy Policy</h1>
      <p className="text-gray-600 mb-2">Effective Date: 7/10/2025</p>
      <p className="text-gray-600 mb-6">Last Updated: 7/10/2025</p>
      <p className="mb-6 text-gray-700">Scoreboard Strategy, LLC ("Company," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and safeguard your information when you visit our website and interact with our services.</p>
      <ol className="list-decimal list-inside space-y-6 text-gray-700">
        <li>
          <strong>Information We Collect</strong>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>
              <strong>a. Personal Information You Provide</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Name and email address when scheduling a call via Calendly</li>
                <li>Information you provide via the "Email Me" button</li>
              </ul>
            </li>
            <li>
              <strong>b. Automatically Collected Information</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Through Microsoft Clarity and cookies:</li>
                <li>Device data (e.g., browser, OS, IP address)</li>
                <li>Usage data (e.g., pages visited, session recordings, clicks, scrolls)</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>How We Use Your Information</strong>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>To schedule and manage meetings</li>
            <li>To respond to inquiries</li>
            <li>To analyze site usage and improve user experience</li>
            <li>To comply with legal obligations</li>
          </ul>
        </li>
        <li>
          <strong>Legal Bases for Processing (GDPR)</strong>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Consent: for cookies and communications</li>
            <li>Contract: to deliver requested services</li>
            <li>Legitimate Interest: to improve our services</li>
            <li>Legal Obligation: for compliance with law</li>
          </ul>
        </li>
        <li>
          <strong>Third-Party Services</strong>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>Calendly: Privacy Policy</li>
            <li>Microsoft Clarity: Privacy Policy</li>
            <li>Email Provider: for receiving and storing email inquiries</li>
          </ul>
        </li>
        <li>
          <strong>Cookies and Tracking Technologies</strong>
          <p className="mt-2">We use cookies and similar tracking technologies through Microsoft Clarity. These help us understand how users interact with the site. You can disable cookies through your browser settings.</p>
          <p>For more information, visit Microsoft’s cookie documentation.</p>
        </li>
        <li>
          <strong>Sharing and Disclosure</strong>
          <p className="mt-2">We do not sell or rent your personal information. We may share data with service providers, legal authorities (if required), or in a business transfer scenario.</p>
        </li>
        <li>
          <strong>Your Rights</strong>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>
              <strong>a. California Residents (CCPA/CPRA)</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Right to know, access, and delete personal data</li>
                <li>Right to opt out of sale/share (we do not sell personal data)</li>
                <li>To exercise your rights, contact us at: <a href="mailto:contact@scoreboardstrategy.com" className="text-brand-red underline">contact@scoreboardstrategy.com</a></li>
              </ul>
            </li>
            <li>
              <strong>b. EEA/UK Residents (GDPR)</strong>
              <ul className="list-disc list-inside ml-6">
                <li>Right to access, correct, or delete your data</li>
                <li>Right to object to processing or withdraw consent</li>
                <li>Right to data portability</li>
                <li>To exercise these rights, contact us at: <a href="mailto:contact@scoreboardstrategy.com" className="text-brand-red underline">contact@scoreboardstrategy.com</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Children’s Privacy</strong>
          <p className="mt-2">We do not knowingly collect data from children under 13 (or under 16 in certain jurisdictions). If you believe we have collected data from a child, please contact us.</p>
        </li>
        <li>
          <strong>Data Retention</strong>
          <p className="mt-2">We retain your information only as long as needed to fulfill the purposes outlined in this policy, or as required by law.</p>
        </li>
        <li>
          <strong>International Data Transfers</strong>
          <p className="mt-2">If you are located outside the United States, your data may be transferred to and processed in the U.S. We take reasonable measures to safeguard international data transfers.</p>
        </li>
        <li>
          <strong>Changes to This Policy</strong>
          <p className="mt-2">We may update this policy from time to time. Changes will be posted here with an updated effective date.</p>
        </li>
        <li>
          <strong>Contact Us</strong>
          <p className="mt-2">If you have questions or would like to exercise your privacy rights, please contact us at:</p>
          <p>Scoreboard Strategy, LLC<br />Email: <a href="mailto:contact@scoreboardstrategy.com" className="text-brand-red underline">contact@scoreboardstrategy.com</a></p>
        </li>
        <li>
          <strong>Do Not Track (DNT)</strong>
          <p className="mt-2">Our site does not currently respond to "Do Not Track" browser settings, as no standard has been adopted universally.</p>
        </li>
      </ol>
    </section>
  </div>
);

export default PrivacyPolicy; 