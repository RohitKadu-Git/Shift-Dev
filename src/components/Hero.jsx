import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(167,139,250,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 animate-fade-in-up">
        {/* Badge */}
        <div className="flex justify-center mb-0">
          <img src="/new-logo.png" alt="Site Former" className="w-[350px] h-[350px] md:w-[700px] md:h-[700px] object-contain" />
        </div>
        {/* <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Site Former</h2> */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-purple-300 font-medium">AI-Powered Development Agency</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black leading-tight mb-6">
          <span className="text-white">High-Performance Sites</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Delivered in 48 Hours
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed px-2">
          We combine React, secure backends, and AI workflows to launch your business online — faster than any traditional agency.
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
        >
          {/* Button gradient border */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 p-[2px]">
            <span className="flex h-full w-full items-center justify-center rounded-full bg-dark-900 px-8 py-4">
              <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent font-bold">
                Get Free Mockup
              </span>
              <svg className="w-5 h-5 ml-2 text-cyan-400 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </span>
        </a>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '48h', label: 'Delivery' },
            { value: '99.9%', label: 'Uptime' },
            { value: '100+', label: 'Sites Launched' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
