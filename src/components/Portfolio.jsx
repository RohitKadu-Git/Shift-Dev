import { useState, useEffect } from 'react';

const staticProjects = [
  {
    title: 'Gourmet Reserve',
    description: 'Elegant restaurant reservation page with menu showcase, testimonials & inline booking form.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    link: '/demo/restaurant',
    tag: 'Restaurant',
  },
  {
    title: 'Prime Properties',
    description: 'Premium property listing portal with search filters, featured listings & agent contact forms.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    link: '/demo/realestate',
    tag: 'Real Estate',
  },
  {
    title: 'Nova Commerce',
    description: 'Modern e-commerce admin dashboard with analytics, order tracking & sales performance charts.',
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    link: '/demo/dashboard',
    tag: 'Dashboard',
  },
  {
    title: 'FitZone Gym',
    description: 'High-energy gym landing page with membership plans, class schedule & trainer profiles.',
    image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    link: '/demo/gym',
    tag: 'Fitness',
  },
  {
    title: 'Elegance Spa',
    description: 'Luxury dark-themed spa landing page with gold accents, booking system & mobile-optimized sticky CTA.',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    link: '/demo',
    tag: 'Spa & Wellness',
  },
  {
    title: 'Elite Detail Labs',
    description: 'Luxury car detailing studio with before/after slider, service cards & quote booking system.',
    image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    link: '/demo/cardetail',
    tag: 'Automotive',
  },
  {
    title: 'TechVault AI Chatbot',
    description: 'Fully interactive AI customer support bot — handles orders, returns, recommendations, payments & more in real-time.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    link: '/demo/ai-chatbot',
    tag: 'AI Chatbot',
  },
  {
    title: 'AI Image Generator',
    description: 'Create stunning visuals in seconds — describe your idea, pick a style, and let AI generate beautiful images for marketing & social media.',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    link: '/demo/ai-voice-order',
    tag: 'AI Art',
  },
  {
    title: 'AI Lead Qualifier',
    description: 'Smart AI that qualifies website visitors through conversational questions, scores leads & auto-routes hot prospects to sales.',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    link: '/demo/ai-lead-qualifier',
    tag: 'AI Sales',
  },
];

export default function Portfolio() {
  const [dynamicProjects, setDynamicProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || 'https://site-former-backend.onrender.com';
    fetch(`${apiUrl}/api/portfolio-demos`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.demos.length > 0) {
          const mapped = data.demos.map(demo => {
            return {
              title: demo.business_name,
              description: demo.business_description || 'AI-generated business website',
              image: demo.cover_image || 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
              link: `/preview/${demo.share_token}`,
              tag: demo.business_type || 'Client Work',
            };
          });
          setDynamicProjects(mapped);
        }
      })
      .catch(() => {});
  }, []);

  const allProjects = [...staticProjects, ...dynamicProjects];
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 6);

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
          {visibleProjects.map((project, index) => (
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

        {/* View More Button */}
        {!showAll && allProjects.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-full font-semibold text-white border border-purple-500/50 hover:bg-purple-500/10 transition-all"
            >
              View More Projects
            </button>
          </div>
        )}
        {showAll && allProjects.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(false)}
              className="px-8 py-3 rounded-full font-semibold text-gray-400 border border-gray-700 hover:bg-gray-800 transition-all"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
