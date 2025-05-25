import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="w-full bg-brand-blue h-1"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="h-10 w-10">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <polygon fill="#0F375A" points="50,0 100,25 100,75 50,100 0,75 0,25" />
                  <polygon fill="#8B1E32" points="50,10 90,30 90,70 50,90 10,70 10,30" />
                  <text x="50" y="60" fontSize="40" fill="white" textAnchor="middle" dominantBaseline="middle">V</text>
                </svg>
              </div>
              <div className="ml-2">
                <span className="font-heading font-bold text-xl md:text-2xl text-brand-blue">
                  Virgir
                </span>
                <span className="font-heading font-bold text-xl md:text-2xl text-brand-maroon">
                  .Co
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="nav-link font-medium">Home</a>
            <a href="#services" className="nav-link font-medium">Services</a>
            <Link to="/blog" className="nav-link font-medium">Blog</Link>
            <a href="#contact" className="btn-primary">Contact Us</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-brand-blue" />
            ) : (
              <Menu size={24} className="text-brand-blue" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col py-2">
            <a href="#" className="nav-link-mobile" onClick={toggleMobileMenu}>
              Home
            </a>
            <a href="#services" className="nav-link-mobile" onClick={toggleMobileMenu}>
              Services
            </a>
            <Link to="/blog" className="nav-link-mobile" onClick={toggleMobileMenu}>
              Blog
            </Link>
            <a href="#contact" className="nav-link-mobile font-medium text-brand-maroon" onClick={toggleMobileMenu}>
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
