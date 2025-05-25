import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import CertificationPartnersSection from '../components/CertificationPartnersSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ClienteleSection from '../components/ClienteleSection';
import ServicePartnersSection from '../components/ServicePartnersSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <CertificationPartnersSection />
        <WhyChooseUsSection />
        <ClienteleSection />
        <ServicePartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
