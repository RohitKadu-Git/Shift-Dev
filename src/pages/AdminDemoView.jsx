import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function AdminDemoView() {
  const { id } = useParams();
  const [pageData, setPageData] = useState(null);
  const [businessName, setBusinessName] = useState('');
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || 'https://site-formers-backend.onrender.com';
    fetch(`${apiUrl}/api/demos/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setBusinessName(data.demo.business_name);
          const parsed = typeof data.demo.page_data === 'string' ? JSON.parse(data.demo.page_data) : data.demo.page_data;
          setPageData(parsed);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Demo Not Found</h1>
          <Link to="/admin/demos" className="text-purple-400 hover:text-purple-300">← Back to list</Link>
        </div>
      </div>
    );
  }

  const { heroHeadline, heroSubtext, primaryColor, secondaryColor, theme, services, features, ctaText, tagline, testimonials, testimonial, aboutText, stats, faq, heroImage, portfolio, galleryKeywords } = pageData;
  const allTestimonials = testimonials || (testimonial ? [testimonial] : []);
  const isLight = theme === 'light';
  const accent = secondaryColor || primaryColor;

  // Theme colors
  const bg = isLight ? 'bg-white' : 'bg-gray-950';
  const bgAlt = isLight ? 'bg-gray-50' : 'bg-gray-900/30';
  const cardBg = isLight ? 'bg-white border-gray-200' : 'bg-gray-900/80 border-gray-800';
  const textMain = isLight ? 'text-gray-900' : 'text-white';
  const textSub = isLight ? 'text-gray-600' : 'text-gray-400';
  const textMuted = isLight ? 'text-gray-500' : 'text-gray-500';
  const borderColor = isLight ? 'border-gray-200' : 'border-gray-800';
  const headerBg = isLight ? 'bg-white/80' : 'bg-gray-950/80';

  return (
    <div className={`min-h-screen ${bg} ${textMain}`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 ${headerBg} backdrop-blur-md border-b ${borderColor}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold" style={{ color: primaryColor }}>{businessName}</span>
          <div className="flex items-center gap-3">
            <Link to="/" className="px-4 py-2 rounded-lg text-sm font-semibold text-white" style={{ backgroundColor: primaryColor }}>
              {ctaText}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        {heroImage && (
          <div className="absolute inset-0 z-0">
            <img src={`https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=900&fit=crop&q=80`} alt="" className="w-full h-full object-cover opacity-10" 
              onError={(e) => e.target.style.display = 'none'}
            />
            <img src={`https://source.unsplash.com/1600x900/?${encodeURIComponent(heroImage)}`} alt="" className="w-full h-full object-cover absolute inset-0" style={{ opacity: isLight ? 0.08 : 0.12 }}
              onError={(e) => e.target.style.display = 'none'}
            />
          </div>
        )}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-[100px] opacity-15" style={{ backgroundColor: primaryColor }} />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full blur-[80px] opacity-10" style={{ backgroundColor: accent }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${borderColor} mb-8`} style={{ backgroundColor: isLight ? `${primaryColor}10` : `${primaryColor}15` }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: primaryColor }} />
            <span className={`text-sm font-medium ${textSub}`}>{tagline}</span>
          </div>
          <h1 className={`text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6 ${textMain}`}>{heroHeadline}</h1>
          <p className={`text-lg md:text-xl ${textSub} max-w-2xl mx-auto mb-10 leading-relaxed`}>{heroSubtext}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-full text-lg font-bold text-white hover:opacity-90 transition-opacity shadow-lg" style={{ backgroundColor: primaryColor, boxShadow: `0 10px 40px ${primaryColor}33` }}>
              {ctaText}
            </button>
            <button className={`px-8 py-4 rounded-full text-lg font-semibold ${textMain} border ${borderColor} hover:opacity-80 transition-all`} style={{ backgroundColor: isLight ? '#f9fafb' : '#1f2937' }}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      {stats && stats.length > 0 && (
        <section className={`py-12 px-6 border-y ${borderColor}`}>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-black mb-1" style={{ color: primaryColor }}>{stat.value}</div>
                <div className={`text-sm ${textSub}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* About */}
      {aboutText && (
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-3xl font-bold mb-6 ${textMain}`}>About Us</h2>
            <p className={`text-lg ${textSub} leading-relaxed`}>{aboutText}</p>
          </div>
        </section>
      )}

      {/* Services */}
      <section className={`py-20 px-6 ${bgAlt}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textMain}`}>Our Services</h2>
            <p className={`${textSub} max-w-xl mx-auto`}>Everything you need to grow your business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services?.map((service, i) => (
              <div key={i} className={`${cardBg} border rounded-2xl p-8 hover:shadow-lg transition-all group`}>
                <div className="text-4xl mb-5">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: primaryColor }}>{service.title}</h3>
                <p className={`${textSub} leading-relaxed`}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textMain}`}>Why Choose Us</h2>
            <p className={`${textSub} max-w-xl mx-auto`}>The advantages that set us apart</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features?.map((feature, i) => (
              <div key={i} className={`text-center ${cardBg} border rounded-2xl p-6`}>
                <div className="text-2xl font-black mb-2" style={{ color: i % 2 === 0 ? primaryColor : accent }}>{feature.stat || (i + 1)}</div>
                <h3 className={`text-base font-bold mb-2 ${textMain}`}>{feature.title}</h3>
                <p className={`${textSub} text-sm leading-relaxed`}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Our Work */}
      {portfolio && portfolio.length > 0 && (
        <section className={`py-20 px-6 ${bgAlt}`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textMain}`}>Our Work</h2>
              <p className={`${textSub} max-w-xl mx-auto`}>Some of our recent projects and achievements</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {portfolio.map((work, i) => (
                <div key={i} className={`${cardBg} border rounded-2xl overflow-hidden group hover:shadow-xl transition-all`}>
                  <div className="aspect-video bg-gray-200 overflow-hidden relative">
                    <img
                      src={`https://source.unsplash.com/600x400/?${encodeURIComponent(work.image)}`}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className={`text-lg font-bold mb-2 ${textMain}`}>{work.title}</h3>
                    <p className={`${textSub} text-sm`}>{work.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {galleryKeywords && galleryKeywords.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textMain}`}>Gallery</h2>
              <p className={`${textSub} max-w-xl mx-auto`}>A glimpse into what we do</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {galleryKeywords.map((keyword, i) => (
                <div key={i} className={`${i === 0 || i === 3 ? 'row-span-2' : ''} rounded-xl overflow-hidden`}>
                  <img
                    src={`https://source.unsplash.com/${i === 0 || i === 3 ? '600x800' : '600x400'}/?${encodeURIComponent(keyword)}`}
                    alt={keyword}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {allTestimonials.length > 0 && (
        <section className={`py-20 px-6 ${bgAlt}`}>
          <div className="max-w-5xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${textMain}`}>What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allTestimonials.map((t, i) => (
                <div key={i} className={`${cardBg} border rounded-2xl p-8`}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating || 5)].map((_, s) => (
                      <span key={s} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className={`${textSub} italic mb-5 leading-relaxed`}>"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ backgroundColor: i % 2 === 0 ? primaryColor : accent }}>
                      {t.author?.charAt(0) || 'C'}
                    </div>
                    <div>
                      <p className={`font-semibold text-sm ${textMain}`}>{t.author}</p>
                      <p className={`${textMuted} text-xs`}>{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faq && faq.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-12 ${textMain}`}>Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faq.map((item, i) => (
                <div key={i} className={`${cardBg} border rounded-xl overflow-hidden`}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className={`w-full px-6 py-5 flex items-center justify-between text-left hover:opacity-80 transition-colors`}
                  >
                    <span className={`font-semibold ${textMain} pr-4`}>{item.question}</span>
                    <svg className={`w-5 h-5 ${textMuted} flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className={`${textSub} leading-relaxed`}>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center rounded-3xl p-12 relative overflow-hidden" style={{ backgroundColor: `${primaryColor}${isLight ? '08' : '10'}`, border: `1px solid ${primaryColor}30` }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full blur-[100px] opacity-20" style={{ backgroundColor: accent }} />
          <div className="relative z-10">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textMain}`}>Ready to Get Started?</h2>
            <p className={`${textSub} mb-8 max-w-lg mx-auto`}>This is an AI-generated preview. The final website will be even more polished and customized to your brand.</p>
            <button className="px-8 py-4 rounded-full text-lg font-bold text-white hover:opacity-90 transition-opacity" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${accent})` }}>
              {ctaText}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${borderColor} py-8 px-6`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`${textMuted} text-sm`}>© {new Date().getFullYear()} {businessName}. All rights reserved.</p>
          <p className={`${textMuted} text-sm`}>Powered by <span style={{ color: primaryColor }} className="font-medium">Site Formers</span></p>
        </div>
      </footer>
    </div>
  );
}
