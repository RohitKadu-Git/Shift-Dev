const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'Full-featured admin panel with analytics, inventory management & order tracking.',
    image: '/portfolio/eccomerse.jpg',
  },
  {
    title: 'Restaurant Booking Platform',
    description: 'Online reservation system with real-time table availability & payment integration.',
    image: '/portfolio/restaurant.jpg',
  },
  {
    title: 'FitZone Gym Website',
    description: 'Modern gym website with class schedules, membership plans, trainer profiles & online booking.',
    image: '/portfolio/gym.png',
  },
  {
    title: 'Real Estate Listing Portal',
    description: 'Property listing website with filters, virtual tours & agent contact system.',
    image: '/portfolio/real-estate.jpg',
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
          Websites & dashboards we've built for businesses like yours
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="aspect-video bg-gray-800 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 bg-gray-800/80">
                <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
