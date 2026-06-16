import React, { useState } from 'react';

const services = [
  {
    name: 'Ceramic Coating',
    description: '9H nano-ceramic protection that lasts up to 5 years. Hydrophobic, UV-resistant, and showroom-level gloss.',
    price: 'From ₹15,999',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    name: 'Interior Deep Clean',
    description: 'Steam sanitization, leather conditioning, carpet extraction, and odor elimination for a factory-fresh cabin.',
    price: 'From ₹4,999',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    name: 'Paint Correction',
    description: 'Multi-stage machine polishing to remove swirl marks, scratches, and oxidation. Mirror-finish guaranteed.',
    price: 'From ₹8,999',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    car: 'BMW 5 Series',
    text: 'Absolutely mind-blowing results. My car looks better than the day I bought it. The ceramic coating is phenomenal.',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop',
  },
  {
    name: 'Aditya Patel',
    car: 'Mercedes C-Class',
    text: 'The paint correction removed years of swirl marks. It literally looks like glass now. Worth every rupee.',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=300&h=200&fit=crop',
  },
  {
    name: 'Kavitha Rao',
    car: 'Audi Q7',
    text: 'Interior deep clean was incredible. The leather smells and feels brand new. My kids had destroyed it — now it is perfect.',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=300&h=200&fit=crop',
  },
];

function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden select-none cursor-col-resize">
      {/* After Image (bottom layer) */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200&h=600&fit=crop"
          alt="After detailing"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-[#00e5ff]/90 text-black px-3 py-1 rounded text-xs font-bold uppercase">After</div>
      </div>
      {/* Before Image (top layer, clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
        <img
          src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1200&h=600&fit=crop"
          alt="Before detailing"
          className="w-full h-full object-cover"
          style={{ minWidth: '100%', width: `${100 / (sliderPos / 100)}%`, maxWidth: 'none' }}
        />
        <div className="absolute bottom-4 left-4 bg-white/90 text-black px-3 py-1 rounded text-xs font-bold uppercase">Before</div>
      </div>
      {/* Slider Line */}
      <div className="absolute top-0 bottom-0 w-1 bg-[#00e5ff] shadow-lg shadow-[#00e5ff]/50" style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#00e5ff] rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
      {/* Slider Input */}
      <input
        type="range"
        min="5"
        max="95"
        value={sliderPos}
        onChange={(e) => setSliderPos(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize"
      />
    </div>
  );
}

export default function DemoCarDetail() {
  const [formData, setFormData] = useState({ name: '', phone: '', car: '', service: '' });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#00e5ff]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wider">
            ELITE <span className="text-[#00e5ff]">DETAIL</span> LABS
          </h1>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-400 hover:text-[#00e5ff] text-sm tracking-wide transition-colors">Services</a>
            <a href="#results" className="text-gray-400 hover:text-[#00e5ff] text-sm tracking-wide transition-colors">Results</a>
            <a href="#reviews" className="text-gray-400 hover:text-[#00e5ff] text-sm tracking-wide transition-colors">Reviews</a>
            <a href="#book" className="px-5 py-2 bg-[#00e5ff] text-black text-sm font-bold rounded hover:bg-[#00b8d4] transition-colors">Get a Quote</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1600&h=900&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.05)_0%,transparent_70%)]" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
            <span className="text-xs text-[#00e5ff] font-medium tracking-wider uppercase">Premium Auto Detailing</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black leading-none mb-6 uppercase tracking-tight">
            Perfection<br />
            <span className="bg-gradient-to-r from-[#00e5ff] to-[#b0bec5] bg-clip-text text-transparent">Engineered</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Where cutting-edge technology meets obsessive craftsmanship. Your car deserves nothing less than flawless.
          </p>
          <a
            href="#book"
            className="inline-block px-10 py-5 bg-[#00e5ff] text-black font-black text-lg uppercase tracking-wider rounded hover:bg-[#00b8d4] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#00e5ff]/25"
          >
            Get a Quote
          </a>
        </div>
      </section>

      {/* Services Gallery */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#00e5ff] text-sm tracking-[0.3em] uppercase text-center mb-2 font-bold">What We Do</p>
          <h3 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase tracking-tight">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-[#111] border border-gray-800 rounded-2xl p-8 group hover:border-[#00e5ff]/50 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#00e5ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-[#00e5ff] mb-5">{s.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-3">{s.name}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#00e5ff] font-bold">{s.price}</span>
                    <button className="text-sm text-gray-400 hover:text-[#00e5ff] transition-colors flex items-center gap-1">
                      View Details
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Results */}
      <section id="results" className="py-24 px-6 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#00e5ff] text-sm tracking-[0.3em] uppercase text-center mb-2 font-bold">The Proof</p>
          <h3 className="text-3xl md:text-5xl font-black text-center mb-6 uppercase tracking-tight">Before & After</h3>
          <p className="text-gray-400 text-center mb-12 max-w-lg mx-auto">Drag the slider to reveal the transformation. Every detail matters.</p>
          <BeforeAfterSlider />
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#00e5ff] text-sm tracking-[0.3em] uppercase text-center mb-2 font-bold">Client Stories</p>
          <h3 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase tracking-tight">Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden group hover:border-[#00e5ff]/30 transition-all duration-300">
                <div className="h-44 overflow-hidden">
                  <img src={t.image} alt={t.car} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-[#00e5ff] text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-[#00e5ff] text-xs">{t.car}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book a Detail */}
      <section id="book" className="py-24 px-6 bg-[#050505]">
        <div className="max-w-lg mx-auto">
          <p className="text-[#00e5ff] text-sm tracking-[0.3em] uppercase text-center mb-2 font-bold">Ready?</p>
          <h3 className="text-3xl md:text-4xl font-black text-center mb-4 uppercase tracking-tight">Book a Detail</h3>
          <p className="text-gray-400 text-center mb-10">Get a custom quote in under 2 hours. No obligation.</p>
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-8">
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-400 block mb-1 font-medium uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00e5ff] transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1 font-medium uppercase tracking-wider">Phone</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00e5ff] transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1 font-medium uppercase tracking-wider">Car Model</label>
                <input
                  type="text"
                  placeholder="e.g. BMW 3 Series, Audi Q5"
                  value={formData.car}
                  onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#00e5ff] transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1 font-medium uppercase tracking-wider">Service Type</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00e5ff] transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="ceramic">Ceramic Coating</option>
                  <option value="interior">Interior Deep Clean</option>
                  <option value="paint">Paint Correction</option>
                  <option value="full">Full Detail Package</option>
                  <option value="custom">Custom / Not Sure</option>
                </select>
              </div>
            </div>
            <button className="w-full mt-6 py-4 bg-[#00e5ff] text-black font-black text-lg uppercase tracking-wider rounded-lg hover:bg-[#00b8d4] hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-[#00e5ff]/20">
              Get My Quote
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 text-center">
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Elite Detail Labs. All rights reserved.</p>
        <p className="text-gray-600 text-xs mt-2">Precision. Perfection. Protection.</p>
      </footer>

      {/* Mobile Sticky Footer */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-[#00e5ff]/20 flex gap-2">
        <a href="tel:+919307391559" className="flex-1 py-3 bg-[#1a1a1a] border border-gray-700 text-white font-bold text-center text-sm rounded-lg">
          Call for Quote
        </a>
        <a href="#book" className="flex-1 py-3 bg-[#00e5ff] text-black font-bold text-center text-sm rounded-lg">
          Book Appointment
        </a>
      </div>
    </div>
  );
}
