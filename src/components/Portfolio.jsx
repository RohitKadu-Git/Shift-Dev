const projects = [
  {
    title: 'Gourmet Reserve',
    description: 'Elegant restaurant reservation page with menu showcase, testimonials & inline booking form.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
    link: '/demo/restaurant',
    tag: 'Restaurant',
  },
  {
    title: 'Prime Properties',
    description: 'Premium property listing portal with search filters, featured listings & agent contact forms.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop',
    link: '/demo/realestate',
    tag: 'Real Estate',
  },
  {
    title: 'Nova Commerce',
    description: 'Modern e-commerce admin dashboard with analytics, order tracking & sales performance charts.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    link: '/demo/dashboard',
    tag: 'Dashboard',
  },
  {
    title: 'FitZone Gym',
    description: 'High-energy gym landing page with membership plans, class schedule & trainer profiles.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
    link: '/demo/gym',
    tag: 'Fitness',
  },
  {
    title: 'Elegance Spa',
    description: 'Luxury dark-themed spa landing page with gold accents, booking system & mobile-optimized sticky CTA.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop',
    link: '/demo',
    tag: 'Spa & Wellness',
  },
  {
    title: 'Elite Detail Labs',
    description: 'Luxury car detailing studio with before/after slider, service cards & quote booking system.',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=600&h=400&fit=crop',
    link: '/demo/cardetail',
    tag: 'Automotive',
  },
  {
    title: 'TechVault AI Chatbot',
    description: 'Fully interactive AI customer support bot — handles orders, returns, recommendations, payments & more in real-time.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    link: '/demo/ai-chatbot',
    tag: 'AI Chatbot',
  },
  {
    title: 'AI Voice Order Taker',
    description: 'Speech-to-order AI assistant for restaurants — customers speak their order and AI confirms, upsells & sends to kitchen.',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=400&fit=crop',
    link: '/demo/ai-voice-order',
    tag: 'AI Voice',
  },
  {
    title: 'AI Lead Qualifier',
    description: 'Smart AI that qualifies website visitors through conversational questions, scores leads & auto-routes hot prospects to sales.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    link: '/demo/ai-lead-qualifier',
    tag: 'AI Sales',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Our Recent Work
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Interactive demos of websites we've built. Click any project to explore the live version.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              className="group relative rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video bg-gray-800 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 py-2 bg-white/90 text-black text-sm font-semibold rounded-lg">
                    View Live Demo →
                  </span>
                </div>
                <span className="absolute top-3 left-3 px-2 py-1 bg-purple-500/80 text-white text-xs font-medium rounded">
                  {project.tag}
                </span>
              </div>
              <div className="p-5 bg-gray-800/80">
                <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
