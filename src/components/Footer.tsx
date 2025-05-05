
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Visual Solutions Hub</h3>
            <p className="text-gray-300 mb-4">
              Providing cutting-edge visual technology solutions for businesses and educational institutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-brand-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-brand-teal transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#products" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="text-gray-300 hover:text-brand-teal transition-colors">Video Conferencing</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-brand-teal transition-colors">LED Walls</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-brand-teal transition-colors">Smart Classrooms</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-brand-teal transition-colors">VR Labs</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-brand-teal transition-colors">Modular Furnishing</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-brand-teal transition-colors">IT Infrastructure</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-brand-teal transition-colors">Security Systems</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-brand-teal transition-colors">AMC Services</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-brand-teal transition-colors">Software Licensing</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-brand-teal transition-colors">GeM Services</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">&copy; {new Date().getFullYear()} Visual Solutions Hub. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-brand-teal transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-brand-teal transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
