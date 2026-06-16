import React, { useState, useRef, useEffect } from 'react';

const menuItems = [
  {
    name: 'Truffle Risotto',
    description: 'Creamy arborio rice with black truffle, parmesan, and fresh herbs.',
    price: '₹1,299',
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=250&fit=crop',
  },
  {
    name: 'Wagyu Steak',
    description: 'Premium A5 wagyu, chargrilled to perfection with red wine jus.',
    price: '₹3,499',
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=250&fit=crop',
  },
  {
    name: 'Lobster Bisque',
    description: 'Rich, velvety soup with Atlantic lobster and a hint of brandy.',
    price: '₹899',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=250&fit=crop',
  },
  {
    name: 'Burrata Salad',
    description: 'Fresh burrata with heirloom tomatoes, basil, and aged balsamic.',
    price: '₹749',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop',
  },
  {
    name: 'Tiramisu',
    description: 'Classic Italian dessert with espresso-soaked ladyfingers and mascarpone.',
    price: '₹599',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=250&fit=crop',
  },
  {
    name: 'Crème Brûlée',
    description: 'Vanilla bean custard with a caramelized sugar crust.',
    price: '₹549',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&h=250&fit=crop',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    text: 'An absolutely unforgettable dining experience. The wagyu steak was perfection and the ambiance was divine.',
    rating: 5,
  },
  {
    name: 'Arjun Mehta',
    text: 'Best fine dining in the city. The staff made our anniversary celebration truly special.',
    rating: 5,
  },
  {
    name: 'Sneha Patel',
    text: 'From the truffle risotto to the tiramisu — every dish was a masterpiece. Will definitely return!',
    rating: 5,
  },
];

export default function DemoRestaurant() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('2');

  return (
    <div className="min-h-screen bg-[#f9f6f1] text-[#1a1a1a] font-sans">
      {/* Restaurant Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f9f6f1]/90 backdrop-blur-md border-b border-[#8b2635]/20 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wider">
            <span className="text-[#8b2635]">GOURMET</span> RESERVE
          </h1>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-[#1a1a1a]/60 hover:text-[#8b2635] text-sm tracking-wide transition-colors">Menu</a>
            <a href="#testimonials" className="text-[#1a1a1a]/60 hover:text-[#8b2635] text-sm tracking-wide transition-colors">Reviews</a>
            <a href="#reserve" className="px-5 py-2 bg-[#8b2635] text-white text-sm font-semibold rounded hover:bg-[#6d1e2a] transition-colors">Reserve a Table</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&h=900&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#f9f6f1]" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p className="text-[#8b2635] text-sm tracking-[0.3em] uppercase mb-4 font-medium">Fine Dining Experience</p>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-\[#2d2d2d\]">
            A Taste of <span className="text-[#8b2635]">Extraordinary</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed">
            Where culinary artistry meets unforgettable ambiance. Every dish tells a story.
          </p>

          {/* Quick Reservation Overlay */}
          <div className="bg-white/90 backdrop-blur-md border border-[#8b2635]/30 rounded-xl p-6 max-w-lg mx-auto">
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div>
                <label className="text-xs text-\[#2d2d2d\]/50 block mb-1">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-gray-50 border border-[#8b2635]/30 rounded px-3 py-2 text-sm text-\[#2d2d2d\] focus:outline-none focus:border-[#8b2635]"
                />
              </div>
              <div>
                <label className="text-xs text-\[#2d2d2d\]/50 block mb-1">Time</label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-gray-50 border border-[#8b2635]/30 rounded px-3 py-2 text-sm text-\[#2d2d2d\] focus:outline-none focus:border-[#8b2635]"
                >
                  <option value="">Select</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                  <option value="21:30">9:30 PM</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-\[#2d2d2d\]/50 block mb-1">Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-gray-50 border border-[#8b2635]/30 rounded px-3 py-2 text-sm text-\[#2d2d2d\] focus:outline-none focus:border-[#8b2635]"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
            </div>
            <a
              href="#reserve"
              className="block w-full py-3 bg-[#8b2635] text-white font-semibold text-center rounded hover:bg-[#6d1e2a] transition-colors"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section id="menu" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#8b2635] text-sm tracking-[0.3em] uppercase text-center mb-2">Culinary Excellence</p>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-\[#2d2d2d\]">Featured Menu</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#8b2635]/15 rounded-lg overflow-hidden hover:border-[#8b2635]/50 transition-all duration-300 hover:-translate-y-1 shadow-sm"
              >
                <div className="h-40 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-[#2d2d2d]">{item.name}</h4>
                    <span className="text-[#8b2635] font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.description}</p>
                  <span className="text-xs text-[#8b2635]/70 uppercase tracking-wider">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation Summary */}
      <section id="reserve" className="py-24 px-6 bg-\[#f3ece4\]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#8b2635] text-sm tracking-[0.3em] uppercase mb-2">Your Table Awaits</p>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-\[#2d2d2d\]">Make a Reservation</h3>
          <p className="text-gray-500 mb-10">Join us for an extraordinary dining experience. Our team will confirm your booking within the hour.</p>

          <div className="bg-white border border-[#8b2635]/30 rounded-xl p-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-xs text-\[#2d2d2d\]/50 block mb-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-[#8b2635]/20 rounded px-4 py-3 text-sm text-\[#2d2d2d\] placeholder-[#f5f0e8]/30 focus:outline-none focus:border-[#8b2635]" />
              </div>
              <div>
                <label className="text-xs text-\[#2d2d2d\]/50 block mb-1">Phone</label>
                <input type="tel" placeholder="+91 98765 43210" className="w-full bg-gray-50 border border-[#8b2635]/20 rounded px-4 py-3 text-sm text-\[#2d2d2d\] placeholder-[#f5f0e8]/30 focus:outline-none focus:border-[#8b2635]" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div>
                <label className="text-xs text-\[#2d2d2d\]/50 block mb-1">Date</label>
                <input type="date" className="w-full bg-gray-50 border border-[#8b2635]/20 rounded px-4 py-3 text-sm text-\[#2d2d2d\] focus:outline-none focus:border-[#8b2635]" />
              </div>
              <div>
                <label className="text-xs text-\[#2d2d2d\]/50 block mb-1">Time</label>
                <select className="w-full bg-gray-50 border border-[#8b2635]/20 rounded px-4 py-3 text-sm text-\[#2d2d2d\] focus:outline-none focus:border-[#8b2635]">
                  <option>7:00 PM</option>
                  <option>7:30 PM</option>
                  <option>8:00 PM</option>
                  <option>8:30 PM</option>
                  <option>9:00 PM</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-\[#2d2d2d\]/50 block mb-1">Guests</label>
                <select className="w-full bg-gray-50 border border-[#8b2635]/20 rounded px-4 py-3 text-sm text-\[#2d2d2d\] focus:outline-none focus:border-[#8b2635]">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="text-xs text-\[#2d2d2d\]/50 block mb-1">Special Requests</label>
              <textarea placeholder="Any dietary requirements or special occasions?" rows="3" className="w-full bg-gray-50 border border-[#8b2635]/20 rounded px-4 py-3 text-sm text-\[#2d2d2d\] placeholder-[#f5f0e8]/30 focus:outline-none focus:border-[#8b2635] resize-none" />
            </div>
            <button className="w-full py-4 bg-[#8b2635] text-white font-bold text-lg rounded hover:bg-[#6d1e2a] hover:scale-[1.01] transition-all duration-300">
              Confirm Reservation
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#8b2635] text-sm tracking-[0.3em] uppercase text-center mb-2">Guest Experiences</p>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-\[#2d2d2d\]">What Our Guests Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review, i) => (
              <div key={i} className="bg-white border border-[#8b2635]/15 rounded-lg p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <span key={j} className="text-[#8b2635]">★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{review.text}"</p>
                <p className="text-\[#2d2d2d\] font-semibold text-sm">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#8b2635]/20 text-center">
        <p className="text-\[#2d2d2d\]/40 text-sm">© {new Date().getFullYear()} Gourmet Reserve. All rights reserved.</p>
        <p className="text-\[#2d2d2d\]/20 text-xs mt-2">Fine Dining & Culinary Excellence</p>
      </footer>

      {/* Mobile Sticky Book Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-md border-t border-[#8b2635]/30">
        <a
          href="#reserve"
          className="block w-full py-3 bg-[#8b2635] text-white font-bold text-center rounded hover:bg-[#6d1e2a] transition-colors"
        >
          Reserve a Table
        </a>
      </div>

      {/* AI Order Taker */}
      <AiOrderTaker />
    </div>
  );
}

function getOrderResponse(input) {
  const lower = input.toLowerCase();

  if (lower.includes('menu') || lower.includes('what do you have') || lower.includes('options'))
    return "Here's our featured menu today:\n\n🥘 Truffle Risotto — ₹1,299\n🥩 Wagyu Steak — ₹3,499\n🍲 Lobster Bisque — ₹899\n🥗 Burrata Salad — ₹749\n🍰 Tiramisu — ₹599\n🍮 Crème Brûlée — ₹549\n\nWhat would you like to order?";

  if (lower.includes('risotto'))
    return "Great choice! Truffle Risotto (₹1,299) added. It's our signature dish with black truffle and aged parmesan. Would you like to add a starter or dessert?";

  if (lower.includes('steak') || lower.includes('wagyu'))
    return "Excellent! Wagyu Steak (₹3,499) added to your order. How would you like it cooked? (Rare / Medium Rare / Medium / Well Done)";

  if (lower.includes('lobster') || lower.includes('bisque'))
    return "Lobster Bisque (₹899) added! A perfect start to your meal. Would you like some bread on the side? It's complimentary.";

  if (lower.includes('tiramisu'))
    return "Tiramisu (₹599) added for dessert! Our chef makes it fresh daily with imported Italian mascarpone. Anything else?";

  if (lower.includes('burrata') || lower.includes('salad'))
    return "Burrata Salad (₹749) added! Made with fresh heirloom tomatoes and aged balsamic. Great as a starter!";

  if (lower.includes('creme') || lower.includes('brulee'))
    return "Crème Brûlée (₹549) added! Our pastry chef torches each one to order. Would you like anything else?";

  if (lower.includes('bill') || lower.includes('total') || lower.includes('checkout') || lower.includes('done') || lower.includes('that\'s all'))
    return "Here's your order summary:\n\nYour items have been noted! A server will confirm your order shortly. Estimated wait: 20-25 mins.\n\nWould you like to add drinks or modify anything?";

  if (lower.includes('recommend') || lower.includes('suggest') || lower.includes('best'))
    return "I'd recommend our Wagyu Steak (₹3,499) — it's our most loved dish! Pair it with the Lobster Bisque starter and finish with Tiramisu. The perfect 3-course experience. 🤌";

  if (lower.includes('vegetarian') || lower.includes('veg'))
    return "For vegetarian options, I'd recommend:\n\n🥗 Burrata Salad — ₹749\n🥘 Truffle Risotto — ₹1,299\n🍮 Crème Brûlée — ₹549\n\nAll made with fresh, premium ingredients!";

  if (lower.includes('drink') || lower.includes('wine') || lower.includes('beverage'))
    return "Our beverage selection:\n\n🍷 House Red Wine — ₹799/glass\n🥂 Prosecco — ₹899/glass\n🍸 Signature Cocktail — ₹649\n☕ Espresso — ₹199\n\nWhat catches your eye?";

  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey'))
    return "Welcome to Gourmet Reserve! 🍽️ I'm your AI dining assistant. I can help you browse our menu, take your order, recommend dishes, or answer questions. What would you like?";

  return "I can help you with our menu, take your order, recommend dishes, or check dietary options. Just ask! Try saying 'show menu' or 'recommend something'.";
}

function AiOrderTaker() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Welcome to Gourmet Reserve! 🍽️ I'm your AI dining assistant. I can take your order, recommend dishes, or answer menu questions. How can I help?" }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const chatEnd = useRef(null);

  useEffect(() => {
    chatEnd.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const response = getOrderResponse(userMsg);
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
      setTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#8b2635] hover:bg-[#6d1e2a] text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <span className="text-2xl">🤖</span>
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-[480px] bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 bg-[#8b2635] text-white flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">🍽️</div>
            <div>
              <p className="text-sm font-semibold">AI Order Assistant</p>
              <p className="text-xs opacity-80">Ready to take your order</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3 py-2 rounded-xl text-sm whitespace-pre-line ${
                  msg.role === 'user'
                    ? 'bg-[#8b2635] text-white rounded-br-sm'
                    : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-500 px-3 py-2 rounded-xl rounded-bl-sm text-sm">
                  <span className="animate-pulse">Taking your order...</span>
                </div>
              </div>
            )}
            <div ref={chatEnd} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Order or ask about menu..."
                className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8b2635]/30"
              />
              <button
                onClick={handleSend}
                className="px-3 py-2 bg-[#8b2635] text-white rounded-lg hover:bg-[#6d1e2a] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
            <div className="flex gap-1 mt-2 flex-wrap">
              {['Show Menu', 'Recommend', 'Vegetarian', 'Drinks'].map(q => (
                <button key={q} onClick={() => { setInput(q); }} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full hover:bg-red-50 hover:text-[#8b2635] transition-colors">
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
