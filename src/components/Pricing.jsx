import React from 'react';

const plans = [
  {
    name: 'Starter Landing Page',
    price: '₹5,999',
    period: 'one-time',
    description: 'Perfect for new businesses, local shops, and freelancers needing a fast, premium online presence.',
    features: [
      'Single-page React website',
      '100% Mobile-responsive design',
      'Custom lead capture form',
      'Essential SEO meta tags setup (Optimized for Google search)',
      'Deployment & cloud hosting setup included',
      '48-Hour lightning-fast delivery',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Full-Stack Growth Portal',
    price: '₹19,999',
    period: 'one-time',
    description: 'For businesses ready to scale with a powerful digital platform.',
    features: [
      'Multi-page React application',
      'Secure Node.js & MySQL database backend',
      'Custom admin dashboard panel',
      'User authentication & account management',
      'Seamless payment gateway integration',
      'Automated email notification alerts',
      'Deployment & cloud architecture setup',
      '7 Days of priority post-launch technical support',
    ],
    cta: 'Go Full-Stack',
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-4">
            Pricing
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing.
          </h3>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            One-Time Development Fee. No Hidden Subscriptions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-[1px] transition-all duration-500 hover:scale-[1.02] ${
                plan.featured
                  ? 'bg-gradient-to-b from-purple-500 to-blue-500'
                  : 'bg-gradient-to-b from-gray-700/50 to-transparent hover:from-purple-500/50'
              }`}
            >
              {/* Popular badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-xs font-bold text-white uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="rounded-2xl bg-dark-800 p-8 h-full flex flex-col">
                <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                <div className="mb-8">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-gray-500 ml-2">/ {plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.featured
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/30'
                      : 'border border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-300'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
