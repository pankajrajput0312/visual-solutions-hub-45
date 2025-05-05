
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[600px] flex items-center diagonal-border">
      <div className="video-container">
        {/* Video background */}
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
        <div className="overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="mb-4 inline-block bg-white bg-opacity-90 px-4 py-2">
            <h2 className="text-brand-blue text-sm font-bold">An ISO 9001:2015, ISO 27001:2018 Certified Company</h2>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Virgir Ventures
            <span className="block text-3xl md:text-4xl lg:text-5xl text-white/90">and Enterprises Pvt. Ltd.</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 bg-black bg-opacity-20 p-4 rounded-lg">
            Comprehensive Visual Technology & IT Solutions for businesses and educational institutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/#products" className="btn-primary flex items-center gap-2">
              Explore Our Products
              <ArrowRight size={18} />
            </Link>
            <Link to="/#contact" className="btn-secondary flex items-center gap-2">
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
