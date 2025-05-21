
import React from 'react';
import { ServiceType } from './ServicesSection';
import { Monitor, Shield, HardDrive, FileText, Video, Briefcase } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceType;
  isEven: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isEven }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'network':
        return <Monitor className="h-10 w-10 text-brand-blue" />;
      case 'security':
        return <Shield className="h-10 w-10 text-brand-blue" />;
      case 'hardware':
        return <HardDrive className="h-10 w-10 text-brand-blue" />;
      case 'software':
        return <FileText className="h-10 w-10 text-brand-blue" />;
      case 'audiovisual':
        return <Video className="h-10 w-10 text-brand-blue" />;
      case 'government':
        return <Briefcase className="h-10 w-10 text-brand-blue" />;
      default:
        return <Monitor className="h-10 w-10 text-brand-blue" />;
    }
  };

  // Get a sensible placeholder image based on the service category
  const getImageUrl = (category: string) => {
    switch (category) {
      case 'it':
        return 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop';
      case 'security':
        return 'https://images.unsplash.com/photo-1558402529-d2638a7023e9?q=80&w=800&auto=format&fit=crop';
      case 'software':
        return 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=800&auto=format&fit=crop';
      case 'av':
        return 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?q=80&w=800&auto=format&fit=crop';
      case 'gem':
        return 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=800&auto=format&fit=crop';
      default:
        return 'https://images.unsplash.com/photo-1581092921461-eab10380ed89?q=80&w=800&auto=format&fit=crop';
    }
  };

  return (
    <div className={`flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg mb-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Image Section - Left side (or right if even) */}
      <div className="md:w-2/5 h-64 md:h-auto">
        <img 
          src={getImageUrl(service.category)} 
          alt={service.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content Section - Right side (or left if even) */}
      <div className="p-8 md:w-3/5">
        <div className="mb-4 bg-brand-light inline-block p-3 rounded-lg">
          {getIcon(service.icon)}
        </div>
        <h3 className="subsection-title">{service.title}</h3>
        <p className="text-brand-gray mb-4">{service.description}</p>
        <a href="#contact" className="inline-flex items-center text-brand-blue font-medium hover:text-brand-navy transition-colors">
          Get Details <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
