
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-heading font-bold text-xl md:text-2xl text-brand-blue">
              Visual Solutions Hub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link font-medium">Home</Link>
            <Link to="/#products" className="nav-link font-medium">Products</Link>
            <Link to="/#services" className="nav-link font-medium">Services</Link>
            <Link to="/blog" className="nav-link font-medium">Blog</Link>
            <Link to="/#contact" className="btn-primary">Contact Us</Link>
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
            <Link to="/" className="nav-link-mobile" onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link to="/#products" className="nav-link-mobile" onClick={toggleMobileMenu}>
              Products
            </Link>
            <Link to="/#services" className="nav-link-mobile" onClick={toggleMobileMenu}>
              Services
            </Link>
            <Link to="/blog" className="nav-link-mobile" onClick={toggleMobileMenu}>
              Blog
            </Link>
            <Link to="/#contact" className="nav-link-mobile font-medium text-brand-blue" onClick={toggleMobileMenu}>
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
