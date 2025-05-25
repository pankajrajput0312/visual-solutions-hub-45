
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Globe, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy dark:bg-dark-bg text-white dark:text-dark-text diagonal-border-bottom transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
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
            <p className="text-gray-300 dark:text-dark-text-secondary mb-4 transition-colors duration-300">
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

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-brand-maroon dark:text-dark-accent flex-shrink-0 mt-1 transition-colors duration-300" />
                <span className="text-gray-300 dark:text-dark-text-secondary transition-colors duration-300">F-204, SG Grand, Raj Nagar Ex, Ghaziabad - 201003</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-brand-maroon dark:text-dark-accent flex-shrink-0 transition-colors duration-300" />
                <span className="text-gray-300 dark:text-dark-text-secondary transition-colors duration-300">+91 99104 67633</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-brand-maroon dark:text-dark-accent flex-shrink-0 transition-colors duration-300" />
                <span className="text-gray-300 dark:text-dark-text-secondary transition-colors duration-300">+91 76270 50482</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-brand-maroon dark:text-dark-accent flex-shrink-0 transition-colors duration-300" />
                <span className="text-gray-300 dark:text-dark-text-secondary transition-colors duration-300">virgirctpl@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Globe size={20} className="mr-2 text-brand-maroon dark:text-dark-accent flex-shrink-0 transition-colors duration-300" />
                <a href="http://www.virgir.in" target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-dark-text-secondary hover:text-brand-maroon dark:hover:text-dark-accent transition-colors duration-300">www.virgir.in</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 dark:text-dark-text-secondary hover:text-brand-maroon dark:hover:text-dark-accent transition-colors duration-300">IT Infrastructure</a></li>
              <li><a href="#services" className="text-gray-300 dark:text-dark-text-secondary hover:text-brand-maroon dark:hover:text-dark-accent transition-colors duration-300">Security Systems</a></li>
              <li><a href="#services" className="text-gray-300 dark:text-dark-text-secondary hover:text-brand-maroon dark:hover:text-dark-accent transition-colors duration-300">AMC Services</a></li>
              <li><a href="#services" className="text-gray-300 dark:text-dark-text-secondary hover:text-brand-maroon dark:hover:text-dark-accent transition-colors duration-300">Software Licensing</a></li>
              <li><a href="#services" className="text-gray-300 dark:text-dark-text-secondary hover:text-brand-maroon dark:hover:text-dark-accent transition-colors duration-300">GeM Services</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-dark-border mt-8 pt-8 transition-colors duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-3 md:mb-0">
              <img src="/lovable-uploads/3791d944-90f4-4c34-af49-148382748d08.png" alt="GeM Logo" className="h-10 mr-4 filter dark:brightness-90" />
              <img src="/lovable-uploads/2dbd5ae0-18b5-412c-bb9b-e7aadc945e16.png" alt="Make in India Logo" className="h-10 filter dark:brightness-90" />
            </div>
            <p className="text-gray-300 dark:text-dark-text-secondary transition-colors duration-300">&copy; {new Date().getFullYear()} Virgir Ventures and Enterprises Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
