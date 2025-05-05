
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-brand-light">
        <div className="text-center px-4 py-16">
          <h1 className="text-6xl font-bold mb-4 text-brand-blue">404</h1>
          <p className="text-2xl text-brand-navy mb-8">Oops! Page not found</p>
          <p className="text-lg text-brand-gray mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <a 
            href="/" 
            className="btn-primary inline-flex"
          >
            Return to Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
