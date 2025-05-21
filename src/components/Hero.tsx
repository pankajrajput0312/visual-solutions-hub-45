
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[650px] flex items-center">
      <div className="video-container">
        {/* Video background with premium overlay */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="video-background"
          poster="/placeholder.svg"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-office-conference-setup-605-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="premium-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="mb-6 inline-block bg-white/90 px-5 py-2.5 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-brand-blue text-sm font-bold">An ISO 9001:2015, ISO 27001:2018 Certified Company</h2>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-xl">
            Virgir Ventures
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 font-semibold text-white">and Enterprises Pvt. Ltd.</span>
          </h1>
          <p className="text-xl text-white mb-8 bg-black/30 backdrop-blur-sm p-5 rounded-lg shadow-lg max-w-2xl">
            Comprehensive Visual Technology & IT Solutions for businesses and educational institutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/#products" className="premium-btn-primary flex items-center gap-2">
              Explore Our Products
              <ArrowRight size={18} />
            </Link>
            <Link to="/#contact" className="premium-btn-secondary flex items-center gap-2">
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
