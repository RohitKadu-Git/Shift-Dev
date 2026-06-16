import React, { useState, useRef, useEffect } from 'react';

const qualifyingQuestions = [
  "What industry is your business in?",
  "How many employees does your company have?",
  "What's your approximate monthly budget for digital solutions?",
  "What's your biggest challenge right now — more leads, better website, or automation?",
  "When are you looking to get started?",
];

function generateLeadResponse(input, step) {
  const lower = input.toLowerCase();

  if (lower.match(/^(hi|hello|hey|start)/))
    return { text: "👋 **Hey there! Welcome to SmartLead AI.**\n\nI'm an intelligent lead qualification bot. I'll ask you a few quick questions to understand your needs and connect you with the right solution.\n\n🏢 **First question:** What industry is your business in?\n\n*Examples: Restaurant, Real Estate, E-commerce, Healthcare, Fitness, etc.*", nextStep: 1 };

  if (step === 1 || lower.includes('restaurant') || lower.includes('real estate') || lower.includes('ecommerce') || lower.includes('fitness') || lower.includes('healthcare') || lower.includes('salon'))
    return { text: `✅ Got it — **${input}** industry. Great, we work with many businesses in this space!\n\n📊 **Next:** How many employees does your company have?\n\n• 1-5 (Solo / Small team)\n• 5-20 (Growing business)\n• 20-100 (Mid-size)\n• 100+ (Enterprise)`, nextStep: 2 };

  if (step === 2 || lower.match(/\d+/) || lower.includes('solo') || lower.includes('small') || lower.includes('growing') || lower.includes('enterprise'))
    return { text: `📝 Noted! That helps us understand your scale.\n\n💰 **Budget question:** What's your approximate monthly budget for digital solutions?\n\n• Under ₹5,000/month\n• ₹5,000 - ₹15,000/month\n• ₹15,000 - ₹50,000/month\n• ₹50,000+/month\n\n*(No pressure — this helps us recommend the right plan)*`, nextStep: 3 };

  if (step === 3 || lower.includes('5000') || lower.includes('15000') || lower.includes('50000') || lower.includes('budget') || lower.includes('₹'))
    return { text: `💡 Perfect. Based on your budget range, we have great options.\n\n🎯 **Key question:** What's your biggest challenge right now?\n\n• 📈 **Getting more leads/customers**\n• 🌐 **Need a better website**\n• 🤖 **Want to automate** (chatbots, AI tools)\n• 📱 **Social media & online presence**\n• 🔄 **All of the above**`, nextStep: 4 };

  if (step === 4 || lower.includes('lead') || lower.includes('website') || lower.includes('automat') || lower.includes('social') || lower.includes('all'))
    return { text: `🎯 Understood! That's exactly what we specialize in.\n\n⏰ **Last question:** When are you looking to get started?\n\n• 🔥 Immediately (this week)\n• 📅 Within 2 weeks\n• 📆 Within a month\n• 🤔 Just exploring for now`, nextStep: 5 };

  if (step === 5 || lower.includes('immediately') || lower.includes('week') || lower.includes('month') || lower.includes('exploring') || lower.includes('now'))
    return { text: `🎉 **Lead Qualification Complete!**\n\n━━━━━━━━━━━━━━━━━━━━\n📊 **Your Lead Score: 87/100** ⭐ HOT LEAD\n━━━━━━━━━━━━━━━━━━━━\n\n**Profile Summary:**\n• Industry: Identified ✅\n• Company Size: Assessed ✅\n• Budget: Qualified ✅\n• Pain Point: Mapped ✅\n• Timeline: Urgent ✅\n\n🚀 **Result:** You've been classified as a **high-priority prospect!**\n\n📞 Our sales team will reach out within **2 hours** with a personalized solution.\n\n**What happens next:**\n1. 📧 You'll receive a custom proposal via email\n2. 📞 A specialist will call to discuss details\n3. 🎨 Free mockup delivered within 48 hours\n\n━━━━━━━━━━━━━━━━━━━━\n*This is a demo of how AI qualifies leads automatically, scores them, and routes hot prospects to your sales team instantly.*`, nextStep: 6 };

  if (step === 6 || lower.includes('reset') || lower.includes('again') || lower.includes('new'))
    return { text: "🔄 **Starting fresh!**\n\n👋 Welcome back to SmartLead AI. Let me qualify you again.\n\n🏢 **What industry is your business in?**", nextStep: 1 };

  if (lower.includes('how') && lower.includes('work'))
    return { text: "🧠 **How SmartLead AI Works:**\n\n1️⃣ **Engage** — AI greets every website visitor automatically\n2️⃣ **Qualify** — Asks strategic questions to assess fit\n3️⃣ **Score** — Assigns a lead score (0-100) based on responses\n4️⃣ **Route** — Hot leads (70+) → instant sales notification\n5️⃣ **Nurture** — Warm leads get automated follow-up sequences\n\n📈 **Results for our clients:**\n• 3x more qualified leads\n• 60% faster response time\n• 40% higher conversion rate\n\nWant to try the qualification flow? Just say **\"Start\"**!", nextStep: step };

  if (lower.includes('pricing') || lower.includes('cost') || lower.includes('plan'))
    return { text: "💰 **SmartLead AI Pricing:**\n\n🥉 **Starter** — ₹4,999/month\n• 500 conversations/month\n• Basic lead scoring\n• Email notifications\n\n🥈 **Business** — ₹9,999/month\n• 2,000 conversations/month\n• Advanced scoring + CRM integration\n• WhatsApp + Email routing\n\n🥇 **Enterprise** — ₹19,999/month\n• Unlimited conversations\n• Custom AI training\n• Priority routing + Analytics dashboard\n\n*All plans include setup & 7-day free trial!*\n\nWant to start the qualification demo? Say **\"Start\"**!", nextStep: step };

  return { text: "🤖 I'm SmartLead AI — an intelligent lead qualification bot.\n\nI can:\n• 🎯 **Qualify leads** — Walk you through the process\n• 📊 **Score prospects** — See how scoring works\n• 💡 **Explain how it works** — Ask \"How does it work?\"\n• 💰 **Show pricing** — Ask about plans\n\nSay **\"Start\"** to begin the qualification demo!", nextStep: step };
}

export default function DemoAiLeadQualifier() {
  const [messages, setMessages] = useState([
    { role: 'ai', text: "🤖 **SmartLead AI — Intelligent Lead Qualifier**\n\nI'm a demo of an AI that lives on your website and automatically qualifies every visitor into hot, warm, or cold leads — then routes them to your sales team.\n\n**Try it out!** Say \"Hi\" or \"Start\" to begin the qualification flow, or ask:\n• \"How does it work?\"\n• \"Show pricing\"\n\nLet's see your lead score! 📊", time: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const chatEnd = useRef(null);

  useEffect(() => {
    chatEnd.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const handleSend = (text) => {
    const msg = text || input.trim();
    if (!msg) return;

    setMessages(prev => [...prev, { role: 'user', text: msg, time: new Date() }]);
    setInput('');
    setTyping(true);

    const delay = 700 + Math.random() * 1000;
    setTimeout(() => {
      const { text: response, nextStep } = generateLeadResponse(msg, step);
      setStep(nextStep);
      if (nextStep > step && nextStep <= 5) setScore(prev => prev + Math.floor(15 + Math.random() * 5));
      if (nextStep === 6) setScore(87);
      setMessages(prev => [...prev, { role: 'ai', text: response, time: new Date() }]);
      setTyping(false);
    }, delay);
  };

  const quickActions = [
    { label: '🚀 Start', value: 'Start' },
    { label: '❓ How it works', value: 'How does it work?' },
    { label: '💰 Pricing', value: 'Show pricing' },
    { label: '🔄 Reset', value: 'Start again' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-gray-900 to-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-md border-b border-emerald-700/30 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">🎯</div>
            <div>
              <h1 className="text-white font-bold">SmartLead AI Qualifier</h1>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-green-400">Qualifying visitors 24/7</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {score > 0 && (
              <div className={`text-xs px-3 py-1 rounded-full border font-medium ${
                score >= 70 ? 'bg-green-500/20 border-green-500/40 text-green-400' :
                score >= 40 ? 'bg-yellow-500/20 border-yellow-500/40 text-yellow-400' :
                'bg-gray-800 border-gray-700 text-gray-400'
              }`}>
                Score: {score}/100
              </div>
            )}
            <span className="text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full border border-gray-700">🎯 AI Sales Demo</span>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                  msg.role === 'user' ? 'bg-emerald-500 text-white' : 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white'
                }`}>
                  {msg.role === 'user' ? '👤' : '🎯'}
                </div>
                <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                  msg.role === 'user'
                    ? 'bg-emerald-600 text-white rounded-tr-sm'
                    : 'bg-gray-800 text-gray-200 border border-gray-700/50 rounded-tl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start">
              <div className="flex gap-2 max-w-[85%]">
                <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 text-white text-xs">🎯</div>
                <div className="bg-gray-800 border border-gray-700/50 rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}} />
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={chatEnd} />
        </div>
      </div>

      {/* Progress Bar */}
      {step > 0 && step < 6 && (
        <div className="px-4 pb-2">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
              <span>Qualification Progress</span>
              <span>{Math.min(step, 5)}/5 questions</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(Math.min(step, 5) / 5) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="px-4 pb-2 pt-2">
        <div className="max-w-3xl mx-auto flex gap-2 overflow-x-auto pb-2">
          {quickActions.map((action, i) => (
            <button
              key={i}
              onClick={() => handleSend(action.value)}
              className="flex-shrink-0 text-xs bg-gray-800 text-gray-300 border border-gray-700 px-3 py-2 rounded-full hover:bg-emerald-500/20 hover:border-emerald-500/40 hover:text-emerald-300 transition-all"
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="px-4 pb-6 pt-2">
        <div className="max-w-3xl mx-auto flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your response..."
            className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/40"
          />
          <button
            onClick={() => handleSend()}
            className="px-5 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <span className="hidden md:inline text-sm">Send</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
