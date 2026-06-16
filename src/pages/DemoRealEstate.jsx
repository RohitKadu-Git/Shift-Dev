import React from 'react';

const listings = [
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
    price: '₹1.2 Cr',
    address: 'Bandra West, Mumbai',
    beds: 3,
    baths: 2,
    sqft: '1,850',
    tag: 'New',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
    price: '₹85 Lac',
    address: 'Koregaon Park, Pune',
    beds: 2,
    baths: 2,
    sqft: '1,200',
    tag: 'Featured',
  },
  {
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop',
    price: '₹2.5 Cr',
    address: 'Whitefield, Bangalore',
    beds: 4,
    baths: 3,
    sqft: '2,800',
    tag: 'Premium',
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop',
    price: '₹65 Lac',
    address: 'Hinjewadi, Pune',
    beds: 2,
    baths: 1,
    sqft: '980',
    tag: null,
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
    price: '₹1.8 Cr',
    address: 'Jubilee Hills, Hyderabad',
    beds: 3,
    baths: 3,
    sqft: '2,200',
    tag: 'New',
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop',
    price: '₹95 Lac',
    address: 'Viman Nagar, Pune',
    beds: 3,
    baths: 2,
    sqft: '1,450',
    tag: null,
  },
];

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Maximum Exposure',
    description: 'Your property reaches thousands of verified buyers through our premium listing network and targeted marketing.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Professional Photography',
    description: 'HDR photography, drone shots, and virtual tours included free with every premium listing to showcase your property.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Verified Buyers',
    description: 'Every buyer on our platform is identity-verified and pre-qualified, ensuring serious inquiries only.',
  },
];

export default function DemoRealEstate() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#1e293b] font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">
            <span className="text-[#1e3a5f]">Prime</span> <span className="text-gray-400 font-normal">Properties</span>
          </h1>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#listings" className="text-gray-600 hover:text-[#1e3a5f] text-sm font-medium transition-colors">Listings</a>
            <a href="#features" className="text-gray-600 hover:text-[#1e3a5f] text-sm font-medium transition-colors">Why Us</a>
            <a href="#contact" className="px-5 py-2 bg-[#1e3a5f] text-white text-sm font-semibold rounded-lg hover:bg-[#162d4a] transition-colors">Contact Agent</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/80 via-[#1e3a5f]/50 to-[#f8f9fa]" />
        <div className="relative z-10 text-center px-6 max-w-4xl w-full">
          <p className="text-white/80 text-sm tracking-[0.2em] uppercase mb-4 font-medium">Premium Properties</p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
            Find Your <span className="text-blue-300">Dream Home</span>
          </h2>
          <p className="text-white/70 text-lg mb-12 max-w-xl mx-auto">
            Browse verified listings with professional photography and transparent pricing.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div>
                <label className="text-xs text-gray-500 block mb-1 text-left font-medium">Location</label>
                <input
                  type="text"
                  placeholder="City or Area"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#1e293b] placeholder-gray-400 focus:outline-none focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f]/20"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1 text-left font-medium">Property Type</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#1e293b] focus:outline-none focus:border-[#1e3a5f]">
                  <option>All Types</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Penthouse</option>
                  <option>Plot</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-500 block mb-1 text-left font-medium">Price Range</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#1e293b] focus:outline-none focus:border-[#1e3a5f]">
                  <option>Any Budget</option>
                  <option>Under ₹50 Lac</option>
                  <option>₹50 Lac - ₹1 Cr</option>
                  <option>₹1 Cr - ₹2 Cr</option>
                  <option>Above ₹2 Cr</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="w-full bg-[#1e3a5f] text-white font-semibold py-3 rounded-lg hover:bg-[#162d4a] transition-colors text-sm">
                  Search Properties
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section id="listings" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#1e3a5f] text-sm tracking-wider uppercase text-center mb-2 font-semibold">Handpicked for You</p>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1e293b]">Featured Listings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((item, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative h-52 overflow-hidden">
                  <img src={item.image} alt={item.address} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    {item.tag && (
                      <span className="px-3 py-1 bg-[#1e3a5f] text-white text-xs font-semibold rounded-full">{item.tag}</span>
                    )}
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-3 py-1 bg-white/95 text-[#1e293b] text-sm font-bold rounded-lg shadow">{item.price}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-[#1e293b] mb-3">{item.address}</h4>
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                      {item.beds} Beds
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
                      {item.baths} Baths
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                      {item.sqft} sqft
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Detail Preview */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=500&fit=crop" alt="Featured property" className="w-full h-80 object-cover" />
            </div>
            <div>
              <span className="text-xs text-[#1e3a5f] uppercase tracking-wider font-semibold">Featured Property</span>
              <h3 className="text-3xl font-bold text-[#1e293b] mt-2 mb-4">Luxury 3BHK in Bandra West</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                Stunning sea-facing apartment with modern interiors, floor-to-ceiling windows, Italian marble flooring, and access to premium amenities including a rooftop infinity pool, gym, and private parking.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-gray-50 px-4 py-2 rounded-lg">
                  <p className="text-xs text-gray-500">Price</p>
                  <p className="font-bold text-[#1e293b]">₹1.2 Cr</p>
                </div>
                <div className="bg-gray-50 px-4 py-2 rounded-lg">
                  <p className="text-xs text-gray-500">Area</p>
                  <p className="font-bold text-[#1e293b]">1,850 sqft</p>
                </div>
                <div className="bg-gray-50 px-4 py-2 rounded-lg">
                  <p className="text-xs text-gray-500">Config</p>
                  <p className="font-bold text-[#1e293b]">3 Bed / 2 Bath</p>
                </div>
                <div className="bg-gray-50 px-4 py-2 rounded-lg">
                  <p className="text-xs text-gray-500">Status</p>
                  <p className="font-bold text-emerald-600">Ready to Move</p>
                </div>
              </div>
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#162d4a] transition-colors shadow-lg shadow-[#1e3a5f]/20"
              >
                Schedule a Tour
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why List With Us */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#1e3a5f] text-sm tracking-wider uppercase text-center mb-2 font-semibold">Our Promise</p>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#1e293b]">Why List With Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-16 h-16 mx-auto mb-5 bg-[#1e3a5f]/10 rounded-2xl flex items-center justify-center text-[#1e3a5f]">
                  {f.icon}
                </div>
                <h4 className="text-lg font-semibold text-[#1e293b] mb-3">{f.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Agent */}
      <section id="contact" className="py-20 px-6 bg-[#1e3a5f]">
        <div className="max-w-lg mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Speak With an Agent</h3>
          <p className="text-blue-200/70 mb-10">Our property experts are ready to help you find or sell your perfect home.</p>
          <div className="bg-white rounded-2xl p-8 text-left">
            <div className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#1e293b] placeholder-gray-400 focus:outline-none focus:border-[#1e3a5f]" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#1e293b] placeholder-gray-400 focus:outline-none focus:border-[#1e3a5f]" />
              <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#1e293b] focus:outline-none focus:border-[#1e3a5f]">
                <option>I want to Buy</option>
                <option>I want to Sell</option>
                <option>I want to Rent</option>
              </select>
              <textarea placeholder="Message (optional)" rows="3" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#1e293b] placeholder-gray-400 focus:outline-none focus:border-[#1e3a5f] resize-none" />
            </div>
            <button className="w-full mt-6 py-4 bg-[#1e3a5f] text-white font-semibold rounded-lg hover:bg-[#162d4a] transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-gray-200 text-center">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Prime Properties. All rights reserved.</p>
        <p className="text-gray-300 text-xs mt-2">Premium Real Estate Solutions</p>
      </footer>

      {/* Mobile Sticky Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg flex gap-2">
        <a href="#listings" className="flex-1 py-3 bg-gray-100 text-[#1e293b] font-semibold text-center text-sm rounded-lg">
          Search
        </a>
        <a href="#contact" className="flex-1 py-3 bg-[#1e3a5f] text-white font-semibold text-center text-sm rounded-lg">
          Contact Agent
        </a>
      </div>
    </div>
  );
}
