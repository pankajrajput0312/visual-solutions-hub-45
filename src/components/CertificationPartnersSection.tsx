
import React from 'react';

const CertificationPartnersSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-dark-surface py-16 text-center transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Certifications and Partnerships</h2>
        <div className="flex flex-wrap justify-center items-center gap-12 mt-6">
          <div className="text-center transition-transform hover:scale-105 duration-300">
            <p className="text-sm text-brand-gray dark:text-dark-text-secondary mb-3 font-medium transition-colors duration-300">Available On</p>
            <img src="/lovable-uploads/3791d944-90f4-4c34-af49-148382748d08.png" alt="GeM Logo" className="h-60 mx-auto shadow-sm filter dark:brightness-90" />
          </div>
          <div className="text-center transition-transform hover:scale-105 duration-300">
            <p className="text-sm text-brand-gray dark:text-dark-text-secondary mb-3 font-medium transition-colors duration-300">Promoting</p>
            <img src="/lovable-uploads/2dbd5ae0-18b5-412c-bb9b-e7aadc945e16.png" alt="Make in India Logo" className="h-60 mx-auto shadow-sm filter dark:brightness-90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationPartnersSection;
