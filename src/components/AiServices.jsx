const aiFeatures = [
  {
    title: 'AI Chatbots',
    description: 'Smart conversational bots for customer support, lead generation, and 24/7 engagement. Reduce response time by 90%.',
    icon: '🤖',
    examples: ['Customer Support Bot', 'Lead Qualifier', 'FAQ Assistant'],
  },
  {
    title: 'AI Order Taker',
    description: 'Automated ordering system for restaurants, cafes, and food businesses. Takes orders via chat, recommends dishes, handles dietary preferences.',
    icon: '🍽️',
    examples: ['Menu Navigator', 'Smart Recommendations', 'Dietary Filters'],
  },
  {
    title: 'AI Commerce Assistant',
    description: 'Intelligent dashboard assistants that answer business queries — revenue insights, inventory alerts, and customer analytics in natural language.',
    icon: '📊',
    examples: ['Sales Insights', 'Stock Predictions', 'Customer Analytics'],
  },
  {
    title: 'AI Appointment Booking',
    description: 'Conversational booking agents for salons, clinics, and service businesses. Handles scheduling, reminders, and rescheduling automatically.',
    icon: '📅',
    examples: ['Slot Finder', 'Auto Reminders', 'Reschedule Handler'],
  },
  {
    title: 'AI Product Recommender',
    description: 'Personalized product suggestions based on browsing behavior, preferences, and purchase history. Increases conversion by up to 35%.',
    icon: '🛍️',
    examples: ['Style Matcher', 'Cross-sell Engine', 'Wishlist AI'],
  },
  {
    title: 'AI Content Generator',
    description: 'Auto-generate product descriptions, blog posts, and social media content tailored to your brand voice and SEO strategy.',
    icon: '✍️',
    examples: ['SEO Descriptions', 'Blog Writer', 'Social Posts'],
  },
];

export default function AiServices() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-6">
            <span className="text-lg">🧠</span>
            <span className="text-sm text-purple-300 font-medium">AI-Powered Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            We Build <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Into Websites</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Not just static pages — we integrate intelligent AI features that automate tasks, engage customers, and grow your business 24/7.
          </p>
        </div>

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiFeatures.map((feature, i) => (
            <div
              key={i}
              className="group bg-gray-900/50 border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {feature.examples.map((ex, j) => (
                  <span key={j} className="text-xs px-2 py-1 bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-full">
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">See AI in action on our demo pages — try the chatbots yourself!</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-90 transition-opacity"
          >
            <span>Get AI for Your Business</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
