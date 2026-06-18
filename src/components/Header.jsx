import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/new-logo.png" alt="Site Former" className="w-10 h-10 object-contain" />
          <span className="text-white font-bold text-lg">Site Former</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">About</Link>
          {isHome ? (
            <a href="#ai-solutions" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">AI Solutions</a>
          ) : (
            <Link to="/#ai-solutions" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">AI Solutions</Link>
          )}
          {isHome ? (
            <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Portfolio</a>
          ) : (
            <Link to="/#portfolio" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Portfolio</Link>
          )}
          {isHome ? (
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Pricing</a>
          ) : (
            <Link to="/#pricing" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Pricing</Link>
          )}
          <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Contact</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-800/50 bg-dark-900/95 backdrop-blur-md px-6 py-4 space-y-3">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-white text-sm font-medium">Home</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-white text-sm font-medium">About</Link>
          {isHome ? (
            <a href="#ai-solutions" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-white text-sm font-medium">AI Solutions</a>
          ) : (
            <Link to="/#ai-solutions" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-white text-sm font-medium">AI Solutions</Link>
          )}
          {isHome ? (
            <a href="#portfolio" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-white text-sm font-medium">Portfolio</a>
          ) : (
            <Link to="/#portfolio" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-white text-sm font-medium">Portfolio</Link>
          )}
          {isHome ? (
            <a href="#pricing" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-white text-sm font-medium">Pricing</a>
          ) : (
            <Link to="/#pricing" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-white text-sm font-medium">Pricing</Link>
          )}
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-white text-sm font-medium">Contact</Link>
        </div>
      )}
    </header>
  );
}
