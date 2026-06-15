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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8">
            <defs>
              <linearGradient id="header-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
            <rect width="32" height="32" rx="6" fill="#12121a" />
            <path d="M10 10 L6 16 L10 22" stroke="url(#header-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M22 10 L26 16 L22 22" stroke="url(#header-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M18 9 L14 23" stroke="url(#header-grad)" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
          <span className="text-white font-bold text-lg">Shift-Dev</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Home</Link>
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
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-white text-sm font-medium">Contact</Link>
          <Link to="/privacy-policy" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-white text-sm font-medium">Privacy Policy</Link>
          <Link to="/terms" onClick={() => setMobileOpen(false)} className="block text-gray-300 hover:text-white text-sm font-medium">Terms & Conditions</Link>
        </div>
      )}
    </header>
  );
}
