import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    client_name: '',
    business_name: '',
    business_description: '',
    insta_handle: '',
    whatsapp: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error on change
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};

    // Name: required, min 2 chars, only letters and spaces
    if (!formData.client_name.trim()) {
      newErrors.client_name = 'Name is required';
    } else if (formData.client_name.trim().length < 2) {
      newErrors.client_name = 'Name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.client_name.trim())) {
      newErrors.client_name = 'Name can only contain letters and spaces';
    }

    // Business name: required, min 2 chars
    if (!formData.business_name.trim()) {
      newErrors.business_name = 'Business name is required';
    } else if (formData.business_name.trim().length < 2) {
      newErrors.business_name = 'Business name must be at least 2 characters';
    }

    // Instagram handle: required, valid format
    if (!formData.insta_handle.trim()) {
      newErrors.insta_handle = 'Instagram handle is required';
    } else if (!/^[a-zA-Z0-9._]{1,30}$/.test(formData.insta_handle.trim())) {
      newErrors.insta_handle = 'Enter a valid Instagram handle (letters, numbers, dots, underscores)';
    }

    // WhatsApp: required, valid Indian/international number
    const cleanedPhone = formData.whatsapp.replace(/[\s\-()]/g, '');
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp number is required';
    } else if (!/^\+?\d{10,15}$/.test(cleanedPhone)) {
      newErrors.whatsapp = 'Enter a valid phone number (10-15 digits)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });

    if (!validate()) return;

    setLoading(true);

    const apiUrl = import.meta.env.VITE_API_URL || 'https://site-former-backend.onrender.com';

    try {
      const res = await fetch(`${apiUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', message: 'Submitted successfully! Redirecting you to WhatsApp...' });

        // Open WhatsApp chat after 2 seconds
        const customerMsg = `Hi Site Former,\n\nI'm interested in getting a professional website for my business.\n\n*Name:* ${formData.client_name}\n*Business:* ${formData.business_name}${formData.business_description ? `\n*Requirement:* ${formData.business_description}` : ''}\n*Instagram:* @${formData.insta_handle}\n*WhatsApp:* ${formData.whatsapp}\n\nPlease share more details about your services and pricing. Looking forward to hearing from you.`;
        const waLink = `https://wa.me/917620361889?text=${encodeURIComponent(customerMsg)}`;

        setTimeout(() => {
          window.open(waLink, '_blank');
        }, 2000);

        // Generate AI demo page in background (only if description has 5+ words)
        const descWords = (formData.business_description || '').trim().split(/\s+/).filter(Boolean);
        if (descWords.length >= 5) {
          try {
            fetch(`${apiUrl}/api/generate-demo`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                business_name: formData.business_name,
                business_description: formData.business_description,
                client_name: formData.client_name,
              }),
            });
          } catch (demoErr) {
            console.error('Demo generation failed:', demoErr);
          }
        }

        setFormData({ client_name: '', business_name: '', business_description: '', insta_handle: '', whatsapp: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-purple-400 mb-4">
            Get Started
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Yours
          </h3>
          <p className="text-gray-400 text-lg">
            Fill in the details below and we'll send you a free mockup within 48 hours.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="relative rounded-2xl p-[1px] bg-gradient-to-b from-gray-700/50 to-transparent"
        >
          <div className="rounded-2xl bg-dark-800 p-8 space-y-6">
            {/* Client Name */}
            <div>
              <label htmlFor="client_name" className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="client_name"
                name="client_name"
                value={formData.client_name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full px-4 py-3 rounded-xl bg-dark-900 border ${errors.client_name ? 'border-red-500' : 'border-gray-700'} text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all`}
              />
              {errors.client_name && <p className="mt-1 text-xs text-red-400">{errors.client_name}</p>}
            </div>

            {/* Business Name */}
            <div>
              <label htmlFor="business_name" className="block text-sm font-medium text-gray-300 mb-2">
                Business Name
              </label>
              <input
                type="text"
                id="business_name"
                name="business_name"
                value={formData.business_name}
                onChange={handleChange}
                placeholder="Acme Inc."
                className={`w-full px-4 py-3 rounded-xl bg-dark-900 border ${errors.business_name ? 'border-red-500' : 'border-gray-700'} text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all`}
              />
              {errors.business_name && <p className="mt-1 text-xs text-red-400">{errors.business_name}</p>}
            </div>

            {/* Business Description */}
            <div>
              <label htmlFor="business_description" className="block text-sm font-medium text-gray-300 mb-2">
                Tell us about your dream website <span className="text-gray-500">(optional)</span>
              </label>
              <p className="text-xs text-gray-500 mb-2">
                Share your business details so we can generate a free demo mockup just for you.
              </p>
              <textarea
                id="business_description"
                name="business_description"
                value={formData.business_description}
                onChange={handleChange}
                rows={3}
                placeholder="e.g. Restaurant website with online menu & table booking, E-commerce store, Portfolio site..."
                className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
              ></textarea>
            </div>

            {/* Instagram Handle */}
            <div>
              <label htmlFor="insta_handle" className="block text-sm font-medium text-gray-300 mb-2">
                Instagram Handle
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">@</span>
                <input
                  type="text"
                  id="insta_handle"
                  name="insta_handle"
                  value={formData.insta_handle}
                  onChange={handleChange}
                  placeholder="yourbrand"
                  className={`w-full pl-9 pr-4 py-3 rounded-xl bg-dark-900 border ${errors.insta_handle ? 'border-red-500' : 'border-gray-700'} text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all`}
                />
              </div>
              {errors.insta_handle && <p className="mt-1 text-xs text-red-400">{errors.insta_handle}</p>}
            </div>

            {/* WhatsApp Number */}
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-2">
                WhatsApp Number
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`w-full px-4 py-3 rounded-xl bg-dark-900 border ${errors.whatsapp ? 'border-red-500' : 'border-gray-700'} text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all`}
              />
              {errors.whatsapp && <p className="mt-1 text-xs text-red-400">{errors.whatsapp}</p>}
            </div>

            {/* Status message */}
            {status.message && (
              <div
                className={`p-4 rounded-xl text-sm font-medium ${
                  status.type === 'success'
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                }`}
              >
                {status.message}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Get My Free Mockup'
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
