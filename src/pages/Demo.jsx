import React from 'react';

const services = [
  {
    name: 'Signature Facial',
    description: 'Deep cleansing facial with gold-infused serum for radiant, youthful skin.',
    price: '₹2,499',
    icon: '✨',
  },
  {
    name: 'Hot Stone Massage',
    description: 'Full-body relaxation therapy with heated volcanic stones and essential oils.',
    price: '₹3,199',
    icon: '🪨',
  },
  {
    name: 'Keratin Hair Treatment',
    description: 'Premium smoothing treatment for frizz-free, salon-perfect hair for 3 months.',
    price: '₹4,999',
    icon: '💇',
  },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=300&fit=crop',
];

export default function Demo() {
  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#2d2d2d] font-sans">
      {/* Salon Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf7f2]/90 backdrop-blur-md border-b border-[#d4af37]/20 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wider">
            <span className="text-[#d4af37]">ELEGANCE</span> SPA
          </h1>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-[#2d2d2d]/70 hover:text-[#d4af37] text-sm tracking-wide transition-colors">Services</a>
            <a href="#gallery" className="text-[#2d2d2d]/70 hover:text-[#d4af37] text-sm tracking-wide transition-colors">Gallery</a>
            <a href="#book" className="px-5 py-2 bg-[#d4af37] text-white text-sm font-semibold rounded hover:bg-[#b8962e] transition-colors">Book Now</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=1600&h=900&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#faf7f2]" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-4 font-medium">Premium Beauty & Wellness</p>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Where <span className="text-[#d4af37]">Luxury</span> Meets Relaxation
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
            Indulge in world-class spa treatments crafted to rejuvenate your body, mind, and soul.
          </p>
          <a
            href="#book"
            className="inline-block px-10 py-4 bg-[#d4af37] text-black font-bold text-lg rounded hover:bg-[#b8962e] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#d4af37]/20"
          >
            Book Your Experience
          </a>
        </div>
      </section>

      {/* Featured Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#d4af37] text-sm tracking-[0.3em] uppercase text-center mb-2">Our Expertise</p>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white border border-[#d4af37]/20 rounded-lg p-8 text-center hover:border-[#d4af37]/60 transition-all duration-300 hover:-translate-y-1 shadow-sm"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-[#2d2d2d] mb-3">{service.name}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.description}</p>
                <p className="text-[#d4af37] text-2xl font-bold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#d4af37] text-sm tracking-[0.3em] uppercase text-center mb-2">Our Space</p>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#2d2d2d]">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-lg group">
                <img
                  src={img}
                  alt={`Salon gallery ${i + 1}`}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Now CTA Section */}
      <section id="book" className="py-24 px-6 text-center bg-[#f5f0e6]">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-2">Ready to Glow?</p>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[#2d2d2d]">Book Your Appointment</h3>
          <p className="text-gray-500 mb-10">Experience the ultimate luxury. Walk in beautiful, walk out radiant.</p>
          <a
            href="https://wa.me/919307391559?text=Hi%2C%20I%20want%20to%20book%20an%20appointment%20at%20Elegance%20Spa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-[#d4af37] text-white font-bold text-lg rounded hover:bg-[#b8962e] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#d4af37]/20"
          >
            Book on WhatsApp
          </a>
        </div>
      </section>

      {/* Salon Footer */}
      <footer className="py-8 px-6 border-t border-[#d4af37]/20 text-center bg-[#faf7f2]">
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Elegance Spa. All rights reserved.</p>
        <p className="text-gray-400 text-xs mt-2">Premium Beauty & Wellness</p>
      </footer>

      {/* Mobile Sticky Book Now Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#faf7f2]/95 backdrop-blur-md border-t border-[#d4af37]/30">
        <a
          href="#book"
          className="block w-full py-3 bg-[#d4af37] text-black font-bold text-center rounded hover:bg-[#b8962e] transition-colors"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
