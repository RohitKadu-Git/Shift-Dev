import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-gray-400 mb-4">Last updated: 15 June 2025</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
            <p>When you use our contact form, we collect the following information:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Your name</li>
              <li>Business name</li>
              <li>Instagram handle</li>
              <li>WhatsApp number</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
            <p>We use the collected information solely to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Contact you regarding your project inquiry</li>
              <li>Provide you with a free website mockup</li>
              <li>Communicate project updates and deliverables</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Data Storage & Security</h2>
            <p>Your data is securely stored in our encrypted cloud database. We implement industry-standard security measures including SSL encryption to protect your personal information.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Third-Party Sharing</h2>
            <p>We do not sell, trade, or share your personal information with third parties. Your data is used exclusively for communication between you and Site Former.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
              <li>Request access to your personal data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of communications at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, contact us at:</p>
            <p className="mt-2 text-purple-400">siteformers@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
