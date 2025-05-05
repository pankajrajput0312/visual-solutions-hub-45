
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
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Our Services</h2>
        <p className="text-lg text-center text-brand-gray mb-8 max-w-3xl mx-auto">
          We provide a wide range of professional services to help your organization implement and maintain cutting-edge technology solutions.
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md capitalize transition-colors ${
                activeCategory === category 
                  ? 'bg-brand-teal text-white' 
                  : 'bg-brand-light text-brand-gray hover:bg-brand-blue hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
