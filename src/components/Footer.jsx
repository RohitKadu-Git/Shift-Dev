import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8">
            <defs>
              <linearGradient id="footer-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a78bfa"/>
                <stop offset="100%" stopColor="#22d3ee"/>
              </linearGradient>
            </defs>
            <rect width="32" height="32" rx="6" fill="#12121a"/>
            <path d="M10 10 L6 16 L10 22" stroke="url(#footer-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M22 10 L26 16 L22 22" stroke="url(#footer-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M18 9 L14 23" stroke="url(#footer-grad)" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
          <span className="text-white font-semibold">Shift-Dev Web Solutions</span>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Shift-Dev Web Solutions. Built with React & AI.
        </p>
      </div>
    </footer>
  );
}
