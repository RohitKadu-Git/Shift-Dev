import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Site Former</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're an AI-powered web development agency that delivers high-performance websites in 48 hours — so you can focus on growing your business.
          </p>
        </div>

        {/* Story */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              At Site Former, we believe every business deserves a professional online presence — without the weeks of waiting or bloated budgets. We combine modern technologies like React, Node.js, and AI workflows to build websites that are fast, secure, and conversion-ready.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-6">
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="text-white font-semibold mb-2">48-Hour Delivery</h3>
                <p className="text-gray-400 text-sm">From concept to live website in just 2 days. No delays, no excuses.</p>
              </div>
              <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-6">
                <div className="text-2xl mb-3">🤖</div>
                <h3 className="text-white font-semibold mb-2">AI-Powered Solutions</h3>
                <p className="text-gray-400 text-sm">Custom AI chatbots, lead qualifiers, and smart automation tools for your business.</p>
              </div>
              <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-6">
                <div className="text-2xl mb-3">🔒</div>
                <h3 className="text-white font-semibold mb-2">Secure & Scalable</h3>
                <p className="text-gray-400 text-sm">Built with secure backends, cloud hosting, and performance optimization from day one.</p>
              </div>
              <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl p-6">
                <div className="text-2xl mb-3">📱</div>
                <h3 className="text-white font-semibold mb-2">Mobile-First Design</h3>
                <p className="text-gray-400 text-sm">Every site is responsive and optimized for all devices — phones, tablets, and desktops.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>One-time pricing — no subscriptions or hidden fees</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>100+ websites delivered to happy clients</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Direct communication via WhatsApp — no middlemen</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Free AI-generated mockup before you commit</span>
              </li>
            </ul>
          </section>

          {/* CTA */}
          <div className="text-center pt-8">
            <p className="text-gray-400 mb-6">Ready to get your business online?</p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-90 transition-opacity"
            >
              Let's Build Your Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
