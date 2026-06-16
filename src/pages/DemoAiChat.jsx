import React, { useState, useRef, useEffect } from 'react';

const quickActions = [
  { label: '🛍️ Track Order', value: 'Track my order' },
  { label: '🔄 Return Item', value: 'I want to return an item' },
  { label: '💡 Recommend', value: 'Recommend products for me' },
  { label: '📦 Shipping Info', value: 'What are shipping options?' },
  { label: '💳 Payment Issue', value: 'I have a payment issue' },
  { label: '🎁 Offers', value: 'Any current offers?' },
];

const productCatalog = [
  { name: 'ProMax Wireless Earbuds', price: '₹2,999', rating: '4.8★', category: 'audio' },
  { name: 'UltraSlim Laptop Stand', price: '₹1,499', rating: '4.6★', category: 'accessories' },
  { name: 'SmartFit Band Pro', price: '₹3,499', rating: '4.7★', category: 'wearables' },
  { name: 'EchoSphere Speaker', price: '₹4,999', rating: '4.9★', category: 'audio' },
  { name: 'MagCharge Wireless Pad', price: '₹899', rating: '4.5★', category: 'accessories' },
];

function generateResponse(input) {
  const lower = input.toLowerCase();

  // Greeting
  if (lower.match(/^(hi|hello|hey|good morning|good evening)/))
    return { text: "Hello! 👋 Welcome to TechVault support. I'm your AI assistant. I can help you with:\n\n• Order tracking & delivery status\n• Returns & refunds\n• Product recommendations\n• Payment & billing issues\n• Shipping information\n• Current offers & deals\n\nHow can I help you today?", type: 'greeting' };

  // Order tracking
  if (lower.includes('track') || lower.includes('order status') || lower.includes('where is my order') || lower.includes('delivery'))
    return { text: "I'd be happy to help track your order! 📦\n\nI found your most recent order:\n\n**Order #TV-28491**\n• ProMax Wireless Earbuds × 1\n• Status: **Out for Delivery** 🚚\n• Estimated: Today by 6:00 PM\n• Carrier: BlueDart (AWB: BD8834721)\n\n📍 Last location: Local delivery hub, 2.3 km away\n\nWould you like me to send you live tracking updates on WhatsApp?", type: 'order' };

  // Returns
  if (lower.includes('return') || lower.includes('refund') || lower.includes('exchange'))
    return { text: "I can help with returns! Here's our policy:\n\n✅ **7-day easy returns** on all products\n✅ **No questions asked** for unused items\n✅ Refund processed within **3-5 business days**\n\nTo initiate a return, I'll need:\n1. Your order number\n2. Reason for return\n3. Preferred: Refund or Exchange?\n\nWhich item would you like to return?", type: 'return' };

  // Recommendations
  if (lower.includes('recommend') || lower.includes('suggest') || lower.includes('what should i buy') || lower.includes('best product'))
    return { text: "Here are my top picks for you based on trending items! 🔥\n\n" + productCatalog.map((p, i) => `${i+1}. **${p.name}** — ${p.price} (${p.rating})`).join('\n') + "\n\n🏆 Most popular this week: **EchoSphere Speaker** — customers love the 360° sound!\n\nWant me to help you choose based on your budget or category preference?", type: 'recommend' };

  // Shipping
  if (lower.includes('shipping') || lower.includes('delivery time') || lower.includes('how long'))
    return { text: "Here are our shipping options: 🚚\n\n| Option | Time | Cost |\n|--------|------|------|\n| Standard | 5-7 days | Free (above ₹499) |\n| Express | 2-3 days | ₹99 |\n| Same Day | Today | ₹199 (select cities) |\n\n📍 Same-day available in: Mumbai, Delhi, Bangalore, Pune, Hyderabad\n\n💡 Pro tip: Orders above ₹2,000 get free Express shipping!\n\nAnything else I can help with?", type: 'shipping' };

  // Payment
  if (lower.includes('payment') || lower.includes('pay') || lower.includes('card') || lower.includes('upi') || lower.includes('emi'))
    return { text: "I can help with payment queries! 💳\n\nWe accept:\n• UPI (GPay, PhonePe, Paytm)\n• Credit/Debit Cards (Visa, Mastercard, RuPay)\n• Net Banking (all major banks)\n• EMI (No-cost on orders above ₹3,000)\n• Cash on Delivery (₹29 handling fee)\n\n**Current payment issues?**\n• If charged but order not placed → refund auto-initiates in 24hrs\n• If EMI not showing → check if card is EMI-enabled with your bank\n\nWhat specific issue are you facing?", type: 'payment' };

  // Offers
  if (lower.includes('offer') || lower.includes('discount') || lower.includes('coupon') || lower.includes('sale') || lower.includes('deal'))
    return { text: "Great timing! Here are today's active offers: 🎉\n\n🔥 **FLASH20** — Flat 20% off on audio products\n🎁 **NEWUSER** — ₹200 off on first order (min ₹999)\n⚡ **COMBO15** — 15% off when buying 2+ items\n💳 **HDFCEMI** — No-cost EMI on HDFC cards\n🚚 **FREESHIP** — Free express on orders above ₹1,500\n\n⏰ Flash sale ends in 4 hours!\n\nWant me to apply a code to your cart?", type: 'offer' };

  // Product query
  if (lower.includes('earbuds') || lower.includes('headphone') || lower.includes('audio'))
    return { text: "Here are our best audio products: 🎧\n\n**1. ProMax Wireless Earbuds** — ₹2,999\n• 40hr battery | ANC | IPX5 waterproof\n• Rating: 4.8★ (2,341 reviews)\n\n**2. EchoSphere Speaker** — ₹4,999\n• 360° sound | 20hr battery | RGB lights\n• Rating: 4.9★ (1,876 reviews)\n\nBoth are eligible for the FLASH20 coupon (20% off)!\n\nWant detailed specs or should I add one to cart?", type: 'product' };

  // Size/specs
  if (lower.includes('spec') || lower.includes('detail') || lower.includes('feature'))
    return { text: "Which product would you like specs for? Here's a quick overview of our bestseller:\n\n**ProMax Wireless Earbuds**\n• Driver: 12mm dynamic\n• ANC: Hybrid (-35dB)\n• Battery: 8hr (40hr with case)\n• Connectivity: BT 5.3, multipoint\n• Water: IPX5\n• Weight: 4.5g per bud\n• Colors: Black, White, Navy\n\nWould you like to compare with another product?", type: 'specs' };

  // Complaint
  if (lower.includes('complaint') || lower.includes('bad') || lower.includes('damaged') || lower.includes('broken') || lower.includes('wrong'))
    return { text: "I'm sorry to hear about this! 😔 Let me help resolve it immediately.\n\nFor damaged/wrong items, we offer:\n• **Instant replacement** (ships within 24hrs)\n• **Full refund** (processed in 3-5 days)\n• **₹100 store credit** as apology\n\nTo proceed, could you:\n1. Share your order number\n2. Upload a photo of the issue (if damaged)\n\nI'll prioritize this with our team right away.", type: 'complaint' };

  // Thank you
  if (lower.includes('thank') || lower.includes('thanks') || lower.includes('helpful'))
    return { text: "You're welcome! 😊 Happy to help!\n\nBefore you go:\n⭐ Rate this chat: Was I helpful today?\n📱 Download our app for exclusive deals\n🔔 Turn on notifications for price drop alerts\n\nAnything else I can assist with? I'm here 24/7!", type: 'thanks' };

  // Bye
  if (lower.includes('bye') || lower.includes('exit') || lower.includes('close'))
    return { text: "Thank you for chatting with TechVault! 🙏\n\nQuick summary of our chat has been emailed to you. Have a great day! 👋\n\n— Nova AI Assistant", type: 'bye' };

  // Human agent
  if (lower.includes('human') || lower.includes('agent') || lower.includes('real person') || lower.includes('speak to someone'))
    return { text: "I understand you'd like to speak with a human agent. 🙋\n\n**Live agent availability:**\n• Chat: Available now (wait: ~2 mins)\n• Call: 1800-XXX-XXXX (9AM-9PM)\n• Email: support@techvault.com (24hr response)\n\nWould you like me to connect you to a live agent now, or can I try to resolve your issue first?", type: 'agent' };

  // Default
  return { text: "I understand you're asking about: \"" + input + "\"\n\nLet me help! I can assist with:\n• 📦 Order tracking & delivery\n• 🔄 Returns & refunds\n• 💡 Product recommendations\n• 💳 Payment & billing\n• 🎁 Offers & coupons\n• 📋 Product specifications\n\nCould you rephrase or pick one of these topics?", type: 'default' };
}

export default function DemoAiChat() {
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hi there! 👋 I'm Nova, TechVault's AI assistant. I'm here to help you 24/7 with orders, products, returns, and more.\n\nHow can I help you today?", time: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
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

    const delay = 800 + Math.random() * 1200;
    setTimeout(() => {
      const { text: response } = generateResponse(msg);
      setMessages(prev => [...prev, { role: 'ai', text: response, time: new Date() }]);
      setTyping(false);
    }, delay);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">TV</div>
            <div>
              <h1 className="text-white font-bold">TechVault AI Support</h1>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-green-400">Always Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="hidden md:block text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full border border-gray-700">Powered by AI</span>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}>
              <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                  msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gradient-to-br from-violet-500 to-blue-500 text-white'
                }`}>
                  {msg.role === 'user' ? 'You' : '🤖'}
                </div>
                {/* Message */}
                <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-sm'
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
                <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-violet-500 to-blue-500 text-white text-xs">🤖</div>
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

      {/* Quick Actions */}
      <div className="px-4 pb-2">
        <div className="max-w-3xl mx-auto flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {quickActions.map((action, i) => (
            <button
              key={i}
              onClick={() => handleSend(action.value)}
              className="flex-shrink-0 text-xs bg-gray-800 text-gray-300 border border-gray-700 px-3 py-2 rounded-full hover:bg-violet-500/20 hover:border-violet-500/40 hover:text-violet-300 transition-all"
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
            placeholder="Type your message..."
            className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/40"
          />
          <button
            onClick={() => handleSend()}
            className="px-5 py-3 bg-gradient-to-r from-violet-500 to-blue-500 text-white rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <span className="hidden md:inline text-sm">Send</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
