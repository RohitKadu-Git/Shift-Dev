import React, { useState } from 'react';

const plans = [
  {
    name: 'Basic',
    price: '₹999',
    period: '/month',
    features: ['Gym Floor Access', 'Locker Room', 'Free WiFi', '1 Guest Pass/Month'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '₹1,999',
    period: '/month',
    features: ['All Basic Features', 'Group Classes', 'Personal Trainer (2x/month)', 'Nutrition Plan', 'Sauna Access'],
    highlight: true,
  },
  {
    name: 'Elite',
    price: '₹3,499',
    period: '/month',
    features: ['All Pro Features', 'Unlimited PT Sessions', 'Recovery Zone', 'Priority Booking', 'Free Supplements', 'Exclusive Events'],
    highlight: false,
  },
];

const schedule = [
  { time: '6:00 AM', mon: 'HIIT Blast', tue: 'Yoga Flow', wed: 'HIIT Blast', thu: 'Spin Class', fri: 'HIIT Blast', sat: 'Boot Camp' },
  { time: '8:00 AM', mon: 'Strength', tue: 'CrossFit', wed: 'Strength', thu: 'CrossFit', fri: 'Strength', sat: 'Yoga Flow' },
  { time: '10:00 AM', mon: 'Spin Class', tue: 'Pilates', wed: 'Boxing', thu: 'Pilates', fri: 'Spin Class', sat: 'Open Gym' },
  { time: '5:00 PM', mon: 'CrossFit', tue: 'Boxing', wed: 'CrossFit', thu: 'HIIT Blast', fri: 'Boxing', sat: '—' },
  { time: '7:00 PM', mon: 'Yoga Flow', tue: 'Strength', wed: 'Yoga Flow', thu: 'Strength', fri: 'Open Gym', sat: '—' },
];

const trainers = [
  { name: 'Arjun Kapoor', specialty: 'Strength & Conditioning', image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=300&h=300&fit=crop', exp: '8 Years' },
  { name: 'Priya Sharma', specialty: 'Yoga & Flexibility', image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=300&h=300&fit=crop', exp: '6 Years' },
  { name: 'Vikram Das', specialty: 'CrossFit & HIIT', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=300&fit=crop', exp: '10 Years' },
  { name: 'Sneha Reddy', specialty: 'Boxing & Cardio', image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=300&h=300&fit=crop', exp: '5 Years' },
];

export default function DemoGym() {
  const [formData, setFormData] = useState({ name: '', phone: '', goal: '' });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#39ff14]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-black tracking-tight">
            FIT<span className="text-[#39ff14]">ZONE</span>
          </h1>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#plans" className="text-gray-300 hover:text-[#39ff14] text-sm font-medium tracking-wide transition-colors">Plans</a>
            <a href="#schedule" className="text-gray-300 hover:text-[#39ff14] text-sm font-medium tracking-wide transition-colors">Schedule</a>
            <a href="#trainers" className="text-gray-300 hover:text-[#39ff14] text-sm font-medium tracking-wide transition-colors">Trainers</a>
            <a href="#join" className="px-5 py-2 bg-[#39ff14] text-black text-sm font-bold rounded hover:bg-[#32e012] transition-colors">Join Now</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&h=900&fit=crop)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[#0a0a0a]" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-[#39ff14] text-sm tracking-[0.4em] uppercase mb-4 font-bold">No Excuses. Just Results.</p>
          <h2 className="text-5xl md:text-8xl font-black leading-none mb-6 uppercase">
            Transform<br />
            <span className="text-[#39ff14]">Your Body</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            State-of-the-art equipment. World-class trainers. One goal — making you unstoppable.
          </p>
          <a
            href="#join"
            className="inline-block px-10 py-5 bg-[#39ff14] text-black font-black text-lg uppercase tracking-wider rounded hover:bg-[#32e012] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#39ff14]/20"
          >
            Start Your Free Trial
          </a>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <p className="text-3xl font-black text-[#39ff14]">50+</p>
              <p className="text-xs text-gray-400 mt-1">Equipment</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#39ff14]">15+</p>
              <p className="text-xs text-gray-400 mt-1">Trainers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#39ff14]">5000+</p>
              <p className="text-xs text-gray-400 mt-1">Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section id="plans" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#39ff14] text-sm tracking-[0.3em] uppercase text-center mb-2 font-bold">Pricing</p>
          <h3 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase">Membership Plans</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.highlight
                    ? 'bg-[#39ff14] text-black border-2 border-[#39ff14] scale-105'
                    : 'bg-[#151515] border border-gray-800 hover:border-[#39ff14]/50'
                }`}
              >
                {plan.highlight && (
                  <span className="inline-block px-3 py-1 bg-black text-[#39ff14] text-xs font-bold rounded-full mb-4 uppercase">Most Popular</span>
                )}
                <h4 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-black' : 'text-white'}`}>{plan.name}</h4>
                <div className="mb-6">
                  <span className={`text-4xl font-black ${plan.highlight ? 'text-black' : 'text-[#39ff14]'}`}>{plan.price}</span>
                  <span className={`text-sm ${plan.highlight ? 'text-black/60' : 'text-gray-400'}`}>{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className={`flex items-center gap-2 text-sm ${plan.highlight ? 'text-black/80' : 'text-gray-300'}`}>
                      <span className={plan.highlight ? 'text-black' : 'text-[#39ff14]'}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#join"
                  className={`block w-full py-3 text-center font-bold rounded transition-colors ${
                    plan.highlight
                      ? 'bg-black text-[#39ff14] hover:bg-gray-900'
                      : 'bg-[#39ff14] text-black hover:bg-[#32e012]'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section id="schedule" className="py-24 px-6 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#39ff14] text-sm tracking-[0.3em] uppercase text-center mb-2 font-bold">Weekly</p>
          <h3 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase">Class Schedule</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-800">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-[#1a1a1a] border-b border-gray-800">
                  <th className="px-4 py-4 text-left text-xs font-bold text-[#39ff14] uppercase tracking-wider">Time</th>
                  <th className="px-4 py-4 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">Mon</th>
                  <th className="px-4 py-4 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">Tue</th>
                  <th className="px-4 py-4 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">Wed</th>
                  <th className="px-4 py-4 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">Thu</th>
                  <th className="px-4 py-4 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">Fri</th>
                  <th className="px-4 py-4 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">Sat</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, i) => (
                  <tr key={i} className="border-b border-gray-800/50 hover:bg-[#1a1a1a]/50 transition-colors">
                    <td className="px-4 py-4 text-sm font-bold text-white">{row.time}</td>
                    <td className="px-4 py-4 text-center text-sm text-gray-300">{row.mon}</td>
                    <td className="px-4 py-4 text-center text-sm text-gray-300">{row.tue}</td>
                    <td className="px-4 py-4 text-center text-sm text-gray-300">{row.wed}</td>
                    <td className="px-4 py-4 text-center text-sm text-gray-300">{row.thu}</td>
                    <td className="px-4 py-4 text-center text-sm text-gray-300">{row.fri}</td>
                    <td className="px-4 py-4 text-center text-sm text-gray-300">{row.sat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trainer Spotlight */}
      <section id="trainers" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#39ff14] text-sm tracking-[0.3em] uppercase text-center mb-2 font-bold">Our Team</p>
          <h3 className="text-3xl md:text-5xl font-black text-center mb-16 uppercase">Trainer Spotlight</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((t, i) => (
              <div key={i} className="bg-[#151515] border border-gray-800 rounded-xl overflow-hidden group hover:border-[#39ff14]/50 transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-white text-lg">{t.name}</h4>
                  <p className="text-[#39ff14] text-sm font-medium mt-1">{t.specialty}</p>
                  <p className="text-gray-500 text-xs mt-2">{t.exp} Experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Now Form */}
      <section id="join" className="py-24 px-6 bg-[#111]">
        <div className="max-w-lg mx-auto">
          <p className="text-[#39ff14] text-sm tracking-[0.3em] uppercase text-center mb-2 font-bold">Let's Go</p>
          <h3 className="text-3xl md:text-4xl font-black text-center mb-4 uppercase">Get Your Free Pass</h3>
          <p className="text-gray-400 text-center mb-10">Start your transformation today. No commitment, no credit card.</p>
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8">
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-400 block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#39ff14] transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1 font-medium">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#39ff14] transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1 font-medium">Fitness Goal</label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#39ff14] transition-colors"
                >
                  <option value="">Select your goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="endurance">Endurance & Stamina</option>
                  <option value="flexibility">Flexibility & Mobility</option>
                  <option value="general">General Fitness</option>
                </select>
              </div>
            </div>
            <button className="w-full mt-6 py-4 bg-[#39ff14] text-black font-black text-lg uppercase tracking-wider rounded-lg hover:bg-[#32e012] hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-[#39ff14]/20">
              Claim My Free Pass
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 text-center">
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} FitZone. All rights reserved.</p>
        <p className="text-gray-600 text-xs mt-2">Transform Your Body, Transform Your Life.</p>
      </footer>

      {/* Mobile Sticky Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-[#39ff14]/20">
        <a
          href="#join"
          className="block w-full py-3 bg-[#39ff14] text-black font-black text-center uppercase tracking-wider rounded hover:bg-[#32e012] transition-colors"
        >
          Get My Free Pass
        </a>
      </div>
    </div>
  );
}
