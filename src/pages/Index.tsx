
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="bg-white py-8 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-lg font-semibold text-brand-blue">An ISO 9001:2015, ISO 27001:2018 Certified Company</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 mt-4">
              <div className="text-center">
                <p className="text-sm text-brand-gray mb-2">Available On</p>
                <img src="/lovable-uploads/3791d944-90f4-4c34-af49-148382748d08.png" alt="GeM Logo" className="h-12 mx-auto" />
              </div>
              <div className="text-center">
                <p className="text-sm text-brand-gray mb-2">Promoting</p>
                <img src="/lovable-uploads/2dbd5ae0-18b5-412c-bb9b-e7aadc945e16.png" alt="Make in India Logo" className="h-12 mx-auto" />
              </div>
            </div>
          </div>
        </div>
        <ProductSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
