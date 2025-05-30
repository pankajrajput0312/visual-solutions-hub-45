
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-dark-bg shadow-sm transition-colors duration-300">
      <div className="w-full bg-brand-blue dark:bg-brand-blue h-1 transition-colors duration-300"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="h-10 w-10">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <polygon fill="#0F375A" className="dark:fill-white transition-colors duration-300" points="50,0 100,25 100,75 50,100 0,75 0,25" />
                  <polygon fill="#8B1E32" className="dark:fill-brand-maroon" points="50,10 90,30 90,70 50,90 10,70 10,30" />
                  <text x="50" y="60" fontSize="40" fill="white" textAnchor="middle" dominantBaseline="middle">V</text>
                </svg>
              </div>
              <div className="ml-2">
                <span className="font-heading font-bold text-xl md:text-2xl text-brand-blue dark:text-white transition-colors duration-300">
                  Virgir
                </span>
                <span className="font-heading font-bold text-xl md:text-2xl text-brand-maroon dark:text-brand-maroon">
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
            <ThemeToggle />
            <a href="#contact" className="btn-primary">Contact Us</a>
          </nav>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-brand-blue dark:text-white transition-colors duration-300" />
              ) : (
                <Menu size={24} className="text-brand-blue dark:text-white transition-colors duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark-surface border-t dark:border-dark-border transition-colors duration-300">
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
            <a href="#contact" className="nav-link-mobile font-medium text-brand-maroon dark:text-brand-maroon" onClick={toggleMobileMenu}>
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
