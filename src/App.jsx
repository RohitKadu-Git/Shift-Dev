import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import AiServices from './components/AiServices';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Demo from './pages/Demo';
import DemoRestaurant from './pages/DemoRestaurant';
import DemoDashboard from './pages/DemoDashboard';
import DemoGym from './pages/DemoGym';
import DemoRealEstate from './pages/DemoRealEstate';
import DemoCarDetail from './pages/DemoCarDetail';
import DemoAiChat from './pages/DemoAiChat';
import DemoAiVoiceOrder from './pages/DemoAiVoiceOrder';
import DemoAiLeadQualifier from './pages/DemoAiLeadQualifier';

function HomePage() {
  return (
    <>
      <Hero />
      <Advantages />
      <AiServices />
      <Portfolio />
      <Pricing />
      <ContactForm />
    </>
  );
}

import AiChatbot from './components/AiChatbot';

function MainLayout() {
  return (
    <div className="min-h-screen bg-dark-900 overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
      <AiChatbot />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/demo" element={<Demo />} />
        <Route path="/demo/restaurant" element={<DemoRestaurant />} />
        <Route path="/demo/dashboard" element={<DemoDashboard />} />
        <Route path="/demo/gym" element={<DemoGym />} />
        <Route path="/demo/realestate" element={<DemoRealEstate />} />
        <Route path="/demo/cardetail" element={<DemoCarDetail />} />
        <Route path="/demo/ai-chatbot" element={<DemoAiChat />} />
        <Route path="/demo/ai-voice-order" element={<DemoAiVoiceOrder />} />
        <Route path="/demo/ai-lead-qualifier" element={<DemoAiLeadQualifier />} />
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
