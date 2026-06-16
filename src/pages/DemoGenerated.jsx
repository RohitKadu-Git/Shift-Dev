import { useLocation, Link } from 'react-router-dom';

export default function DemoGenerated() {
  const location = useLocation();
  const pageData = location.state?.pageData;

  if (!pageData) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">No Demo Data</h1>
          <p className="text-gray-400 mb-6">Submit the contact form to generate a personalized demo.</p>
          <Link to="/#contact" className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:opacity-90">
            Go to Form
          </Link>
        </div>
      </div>
    );
  }

  const { businessName, heroHeadline, heroSubtext, primaryColor, services, features, ctaText, tagline, testimonial } = pageData;

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold" style={{ color: primaryColor }}>{businessName}</span>
          <div className="flex items-center gap-4">
            <span className="hidden md:block text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
              ✨ AI-Generated Demo by Site Former
            </span>
            <Link to="/#contact" className="px-4 py-2 rounded-lg text-sm font-semibold text-white" style={{ backgroundColor: primaryColor }}>
              Get This Built
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: primaryColor }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: primaryColor }}>{tagline}</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">{heroHeadline}</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">{heroSubtext}</p>
          <button className="px-8 py-4 rounded-full text-lg font-bold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: primaryColor }}>
            {ctaText}
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">What we offer to help your business grow</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services?.map((service, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features?.map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold" style={{ backgroundColor: primaryColor }}>
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {testimonial && (
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-6" style={{ color: primaryColor }}>"</div>
            <p className="text-xl md:text-2xl text-gray-300 italic mb-6">{testimonial.text}</p>
            <p className="font-bold text-white">{testimonial.author}</p>
            <p className="text-gray-500 text-sm">{testimonial.role}</p>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center bg-gray-900 border border-gray-800 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8">This is a preview of what your website could look like. Let's make it real.</p>
          <Link
            to="/#contact"
            className="inline-block px-8 py-4 rounded-full text-lg font-bold text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: primaryColor }}
          >
            {ctaText}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">Demo generated by <span className="text-purple-400 font-medium">Site Former</span> AI</p>
          <Link to="/" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
            ← Back to Site Former
          </Link>
        </div>
      </footer>
    </div>
  );
}
