import React, { useState } from 'react';
import { ArrowRight, Video, Monitor, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative min-h-[650px] flex items-center bg-gradient-to-r from-blue-50/80 to-white">
      {/* Unsplash background image with overlay */}
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=80"
        alt="Conference Room"
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      />
      <div className="premium-overlay"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center min-h-[500px]">
        <div className="max-w-2xl animate-fade-in bg-white/80 rounded-xl shadow-xl p-10 md:p-14 backdrop-blur-md">
          <span className="text-xs font-semibold text-brand-blue bg-white px-3 py-1 rounded-full shadow inline-block mb-4">
            An ISO 9001:2015, ISO 27001:2018 Certified Company
          </span>
          <span className="block text-brand-maroon font-semibold uppercase tracking-wider mb-2 text-sm">Your Trusted Partner in AV & IT Distribution</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy drop-shadow mb-4">
            Virgir: Product Distribution & Video Conferencing Solutions
          </h1>
          <p className="text-lg md:text-xl text-brand-gray mb-6">
            We empower organizations with world-class video conferencing, AV, and IT solutions for modern businesses and educational institutions.
          </p>          
          {/* Service icons row */}
          <div className="flex gap-8 mb-8">
            <div className="flex flex-col items-center">
              <Video className="text-brand-blue w-8 h-8" />
              <span className="text-xs mt-2">Video Conferencing</span>
            </div>
            <div className="flex flex-col items-center">
              <Monitor className="text-brand-blue w-8 h-8" />
              <span className="text-xs mt-2">AV Solutions</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="text-brand-blue w-8 h-8" />
              <span className="text-xs mt-2">Collaboration</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              className="premium-btn-secondary flex items-center gap-2 text-lg px-8 py-4"
              onClick={() => setShowModal(true)}
            >
              Get in Touch
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Cal.com */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80">
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-4xl w-full relative min-h-[80vh] flex flex-col">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-3xl"
              onClick={() => setShowModal(false)}
              aria-label="Close modal"
            >
              ×
            </button>
            <iframe
              src="https://cal.com/pankaj-rajput/15min"
              title="Book a meeting"
              className="w-full h-[70vh] rounded bg-white"
              frameBorder="0"
              allow="camera; microphone; fullscreen; speaker"
              style={{ background: 'white' }}
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
