import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Globe, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy dark:bg-dark-bg text-white dark:text-dark-text transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <polygon fill="#0F375A" className="dark:fill-dark-accent transition-colors duration-300" points="50,0 100,25 100,75 50,100 0,75 0,25" />
                  <polygon fill="#8B1E32" points="50,10 90,30 90,70 50,90 10,70 10,30" />
                  <text x="50" y="60" fontSize="40" fill="white" textAnchor="middle" dominantBaseline="middle">V</text>
                </svg>
              </div>
              <div className="ml-2">
                <span className="font-heading font-bold text-xl text-white">
                  Virgir
                </span>
                <span className="font-heading font-bold text-xl text-brand-maroon">
                  .Co
                </span>
              </div>
            </div>
            <p className="text-gray-300 dark:text-dark-text-secondary text-center md:text-left mb-4 transition-colors duration-300">
              Video Conferencing and IT Service Providers
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 dark:text-dark-text-secondary hover:text-brand-maroon dark:hover:text-dark-accent transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 dark:text-dark-text-secondary hover:text-brand-maroon dark:hover:text-dark-accent transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 dark:text-dark-text-secondary hover:text-brand-maroon dark:hover:text-dark-accent transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 dark:text-dark-text-secondary hover:text-brand-maroon dark:hover:text-dark-accent transition-colors duration-300">
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="#" className="text-gray-300 dark:text-dark-text-secondary hover:text-brand-maroon dark:hover:text-dark-accent transition-colors duration-300">Home</a></li>
              <li><a href="#services" className="text-gray-300 dark:text-dark-text-secondary hover:text-brand-maroon dark:hover:text-dark-accent transition-colors duration-300">Services</a></li>
              <li><Link to="/blog" className="text-gray-300 dark:text-dark-text-secondary hover:text-brand-maroon dark:hover:text-dark-accent transition-colors duration-300">Blog</Link></li>
              <li><a href="#contact" className="text-gray-300 dark:text-dark-text-secondary hover:text-brand-maroon dark:hover:text-dark-accent transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="#services" className="text-gray-300 dark:text-dark-text-secondary hover:text-brand-maroon dark:hover:text-dark-accent transition-colors duration-300">IT Infrastructure</a></li>
              <li><a href="#services" className="text-gray-300 dark:text-dark-text-secondary hover:text-brand-maroon dark:hover:text-dark-accent transition-colors duration-300">Security Systems</a></li>
              <li><a href="#services" className="text-gray-300 dark:text-dark-text-secondary hover:text-brand-maroon dark:hover:text-dark-accent transition-colors duration-300">AMC Services</a></li>
              <li><a href="#services" className="text-gray-300 dark:text-dark-text-secondary hover:text-brand-maroon dark:hover:text-dark-accent transition-colors duration-300">Software Licensing</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-dark-border mt-8 pt-8 transition-colors duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/lovable-uploads/3791d944-90f4-4c34-af49-148382748d08.png" alt="GeM Logo" className="h-8 mr-4 filter dark:brightness-90" />
              <img src="/lovable-uploads/2dbd5ae0-18b5-412c-bb9b-e7aadc945e16.png" alt="Make in India Logo" className="h-8 filter dark:brightness-90" />
            </div>
            <p className="text-gray-300 dark:text-dark-text-secondary text-center md:text-left transition-colors duration-300">
              &copy; {new Date().getFullYear()} Virgir Ventures and Enterprises Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
