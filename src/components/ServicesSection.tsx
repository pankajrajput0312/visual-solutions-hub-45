import React from 'react';
import ServiceCard from './ServiceCard';

export type ServiceType = {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: string;
};

const services: ServiceType[] = [
  {
    id: 1,
    title: "IT Infrastructure Solutions",
    description: "Comprehensive IT infrastructure design, implementation, and management services for businesses of all sizes.",
    icon: "network",
    category: "it"
  },
  {
    id: 2,
    title: "Security Surveillance Systems",
    description: "Advanced security systems with HD cameras, access control solutions, and real-time monitoring capabilities.",
    icon: "security",
    category: "security"
  },
  {
    id: 3,
    title: "IT Equipment & AMC Services",
    description: "Cutting-edge IT hardware and comprehensive annual maintenance contract services to ensure continuous operation.",
    icon: "hardware",
    category: "it"
  },
  {
    id: 4,
    title: "Software Licensing & Installation",
    description: "Complete software licensing solutions and professional installation services for businesses and educational institutions.",
    icon: "software",
    category: "software"
  },
  {
    id: 5,
    title: "Audio-Visual Solutions",
    description: "Custom audio-visual setups for conference rooms, auditoriums, and educational spaces with professional installation.",
    icon: "audiovisual",
    category: "av"
  },
  {
    id: 6,
    title: "GeM Services",
    description: "Specialized services for Government e-Marketplace procurement, registration, and bidding assistance.",
    icon: "government",
    category: "gem"
  }
];

const categories = ['all', ...new Set(services.map(service => service.category))];

const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState('all');
  
  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="py-16 bg-brand-light dark:bg-dark-surface transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Our Services</h2>
        <p className="text-lg text-center text-brand-gray dark:text-dark-text-secondary mb-8 max-w-3xl mx-auto transition-colors duration-300">
          We provide a wide range of professional services to help your organization implement and maintain cutting-edge technology solutions.
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md capitalize transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-brand-teal dark:bg-dark-accent text-white shadow-lg' 
                  : 'bg-white dark:bg-dark-card text-brand-gray dark:text-dark-text-secondary hover:bg-brand-blue dark:hover:bg-dark-accent hover:text-white border border-gray-200 dark:border-dark-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Services List */}
        <div className="flex flex-col gap-6">
          {filteredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} isEven={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
