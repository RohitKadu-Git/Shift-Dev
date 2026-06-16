import React, { useState, useRef, useEffect } from 'react';

const metrics = [
  { label: 'Total Revenue', value: '₹12,45,890', change: '+12.5%', positive: true, icon: '💰' },
  { label: 'Total Orders', value: '1,284', change: '+8.2%', positive: true, icon: '📦' },
  { label: 'Active Customers', value: '3,421', change: '+5.1%', positive: true, icon: '👥' },
  { label: 'Conversion Rate', value: '3.24%', change: '-0.4%', positive: false, icon: '📈' },
];

const orders = [
  { id: '#ORD-2841', customer: 'Rahul Verma', product: 'Wireless Headphones', status: 'Delivered', price: '₹2,499' },
  { id: '#ORD-2840', customer: 'Anita Desai', product: 'Smart Watch Pro', status: 'Pending', price: '₹4,999' },
  { id: '#ORD-2839', customer: 'Vikram Singh', product: 'Bluetooth Speaker', status: 'Delivered', price: '₹1,899' },
  { id: '#ORD-2838', customer: 'Meera Joshi', product: 'Laptop Stand', status: 'Cancelled', price: '₹1,299' },
  { id: '#ORD-2837', customer: 'Karan Patel', product: 'USB-C Hub', status: 'Pending', price: '₹2,199' },
  { id: '#ORD-2836', customer: 'Deepa Nair', product: 'Mechanical Keyboard', status: 'Delivered', price: '₹3,499' },
];

const salesData = [
  { day: 'Mon', value: 42000 },
  { day: 'Tue', value: 38000 },
  { day: 'Wed', value: 55000 },
  { day: 'Thu', value: 47000 },
  { day: 'Fri', value: 62000 },
  { day: 'Sat', value: 71000 },
  { day: 'Sun', value: 58000 },
];

const topProducts = [
  { name: 'Wireless Headphones', sold: 342, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&h=80&fit=crop' },
  { name: 'Smart Watch Pro', sold: 276, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&h=80&fit=crop' },
  { name: 'Bluetooth Speaker', sold: 198, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=80&h=80&fit=crop' },
  { name: 'Mechanical Keyboard', sold: 156, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=80&h=80&fit=crop' },
  { name: 'USB-C Hub', sold: 134, image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=80&h=80&fit=crop' },
];

const navItems = [
  { label: 'Dashboard', icon: '📊', active: true },
  { label: 'Inventory', icon: '📋', active: false },
  { label: 'Orders', icon: '🛒', active: false },
  { label: 'Customers', icon: '👤', active: false },
  { label: 'Settings', icon: '⚙️', active: false },
];

function StatusBadge({ status }) {
  const styles = {
    Delivered: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    Pending: 'bg-amber-100 text-amber-700 border-amber-200',
    Cancelled: 'bg-red-100 text-red-700 border-red-200',
  };
  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${styles[status]}`}>
      {status}
    </span>
  );
}

function SalesChart() {
  const maxVal = Math.max(...salesData.map(d => d.value));
  return (
    <div className="flex items-end justify-between gap-2 h-48 px-2">
      {salesData.map((d, i) => (
        <div key={i} className="flex flex-col items-center gap-2 flex-1">
          <div className="w-full relative group">
            <div
              className="w-full bg-gradient-to-t from-amber-500 to-amber-300 rounded-t-md transition-all duration-300 group-hover:from-amber-600 group-hover:to-amber-400 min-h-[4px]"
              style={{ height: `${(d.value / maxVal) * 160}px` }}
            />
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              ₹{(d.value / 1000).toFixed(0)}K
            </div>
          </div>
          <span className="text-xs text-gray-500">{d.day}</span>
        </div>
      ))}
    </div>
  );
}

export default function DemoDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex">
      {/* Sidebar */}
      <aside className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 shadow-sm transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-lg font-bold">
            <span className="text-amber-500">Nova</span> Commerce
          </h1>
          <p className="text-xs text-gray-400 mt-1">Admin Dashboard</p>
        </div>
        <nav className="p-4 space-y-1">
          {navItems.map((item, i) => (
            <button
              key={i}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                item.active
                  ? 'bg-amber-50 text-amber-700 border border-amber-200'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="absolute bottom-6 left-4 right-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-xs text-amber-700 font-medium">Pro Tip</p>
            <p className="text-xs text-gray-500 mt-1">Press ⌘K to search anything</p>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/30 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <main className="flex-1 min-h-screen overflow-auto">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-gray-500 hover:text-gray-800" onClick={() => setSidebarOpen(true)}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-gray-100 border border-gray-200 rounded-lg px-3 py-2">
              <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Search..." className="bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none w-40" />
            </div>
            <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-xs font-bold text-white">NC</div>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((m, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{m.icon}</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${m.positive ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                    {m.change}
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{m.value}</p>
                <p className="text-xs text-gray-500 mt-1">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Charts & Top Products Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sales Chart */}
            <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-semibold text-gray-800">Sales Performance</h3>
                  <p className="text-xs text-gray-500 mt-1">Revenue trend — Last 7 days</p>
                </div>
                <span className="text-sm text-emerald-600 font-medium">₹3.73L total</span>
              </div>
              <SalesChart />
            </div>

            {/* Top Products */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-4">Top Selling Products</h3>
              <div className="space-y-4">
                {topProducts.map((p, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-800 font-medium truncate">{p.name}</p>
                      <p className="text-xs text-gray-400">{p.sold} units sold</p>
                    </div>
                    <span className="text-xs text-amber-600 font-medium">#{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h3 className="font-semibold text-gray-800">Recent Orders</h3>
              <p className="text-xs text-gray-500 mt-1">Latest customer transactions</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="text-right px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-amber-600 font-mono">{order.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-800">{order.customer}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{order.product}</td>
                      <td className="px-6 py-4"><StatusBadge status={order.status} /></td>
                      <td className="px-6 py-4 text-sm text-gray-800 text-right font-medium">{order.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center py-4">
            <p className="text-xs text-gray-400">© {new Date().getFullYear()} Nova Commerce. All rights reserved.</p>
          </div>
        </div>
      </main>

      {/* AI Assistant Widget */}
      <AiAssistant />
    </div>
  );
}

const aiResponses = {
  'revenue': 'Your total revenue this week is ₹3.73L, which is 12.5% higher than last week. The best performing day was Saturday with ₹71K in sales.',
  'orders': 'You have 1,284 total orders. 68% delivered, 22% pending, and 10% cancelled. Your fulfillment rate is above industry average.',
  'top product': 'Wireless Headphones are your #1 seller with 342 units sold this month, followed by Smart Watch Pro at 276 units.',
  'stock': 'Based on current velocity, USB-C Hub will run out of stock in ~5 days. I recommend reordering 200 units now.',
  'customer': 'You have 3,421 active customers. New customer acquisition increased 5.1% this month. Top segment: 25-34 age group.',
  'default': "I can help you with revenue insights, order analytics, top products, stock predictions, and customer data. Try asking about any of these!",
};

function getAiResponse(input) {
  const lower = input.toLowerCase();
  if (lower.includes('revenue') || lower.includes('sales') || lower.includes('earning')) return aiResponses['revenue'];
  if (lower.includes('order') || lower.includes('delivery') || lower.includes('fulfil')) return aiResponses['orders'];
  if (lower.includes('top') || lower.includes('best') || lower.includes('product') || lower.includes('selling')) return aiResponses['top product'];
  if (lower.includes('stock') || lower.includes('inventory') || lower.includes('reorder')) return aiResponses['stock'];
  if (lower.includes('customer') || lower.includes('user') || lower.includes('buyer')) return aiResponses['customer'];
  return aiResponses['default'];
}

function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hi! I'm Nova AI, your commerce assistant. Ask me about revenue, orders, inventory, or customers." }
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
      const response = getAiResponse(userMsg);
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
      setTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-[450px] bg-white border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 bg-amber-500 text-white flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">🤖</div>
            <div>
              <p className="text-sm font-semibold">Nova AI Assistant</p>
              <p className="text-xs opacity-80">Always online</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-3 py-2 rounded-xl text-sm ${
                  msg.role === 'user'
                    ? 'bg-amber-500 text-white rounded-br-sm'
                    : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-500 px-3 py-2 rounded-xl rounded-bl-sm text-sm">
                  <span className="animate-pulse">Thinking...</span>
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
                placeholder="Ask about sales, orders..."
                className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
              />
              <button
                onClick={handleSend}
                className="px-3 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
            <div className="flex gap-1 mt-2 flex-wrap">
              {['Revenue', 'Top Products', 'Stock Alert', 'Customers'].map(q => (
                <button key={q} onClick={() => { setInput(q); }} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full hover:bg-amber-50 hover:text-amber-700 transition-colors">
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
