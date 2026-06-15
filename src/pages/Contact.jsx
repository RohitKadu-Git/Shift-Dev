import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">Get In Touch</h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Have a project in mind? Fill out the form below or reach us directly through our social channels.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:rohitkadu2016@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                rohitkadu2016@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
              <a href="https://wa.me/919307391559" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                +91 7620361889
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Instagram</h3>
              <a href="https://instagram.com/shift.dev" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">
                @shift.dev
              </a>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-400">India (Remote-First Agency)</p>
            </div>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
