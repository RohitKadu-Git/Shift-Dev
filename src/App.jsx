import React from 'react';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Hero />
      <Advantages />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
