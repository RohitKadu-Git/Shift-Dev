import React from 'react';

const advantages = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'React Speed',
    description:
      'Blazing-fast single-page apps built with React. Virtual DOM rendering, code splitting, and optimized bundles ensure sub-second load times.',
    gradient: 'from-purple-500 to-blue-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Secure MySQL Backends',
    description:
      'Enterprise-grade database architecture with parameterized queries, encryption at rest, and automated backups. Your data stays locked down.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'AI-Accelerated Delivery',
    description:
      'Our AI-powered pipeline handles boilerplate, testing, and deployment. What takes agencies weeks, we ship in 48 hours — without cutting corners.',
    gradient: 'from-cyan-500 to-emerald-500',
  },
];

export default function Advantages() {
  return (
    <section className="py-24 px-6 relative">
      {/* Section header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-4">
          The Advantage
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Why Businesses Choose Us
        </h3>
        <p className="text-gray-400 text-lg">
          A modern tech stack fused with AI automation — delivering results that traditional agencies can't match.
        </p>
      </div>

      {/* Feature grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {advantages.map((item) => (
          <div
            key={item.title}
            className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-700/50 to-transparent hover:from-purple-500/50 hover:to-blue-500/20 transition-all duration-500"
          >
            <div className="rounded-2xl bg-dark-800 p-8 h-full flex flex-col transition-all duration-500 group-hover:bg-dark-700">
              {/* Icon */}
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6"
                style={{ background: `linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.15))` }}
              >
                <span className="text-purple-400">
                  {item.icon}
                </span>
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-400 leading-relaxed flex-1">{item.description}</p>

              {/* Bottom accent line */}
              <div className={`mt-6 h-[2px] w-0 group-hover:w-full bg-gradient-to-r ${item.gradient} transition-all duration-700 rounded-full`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
