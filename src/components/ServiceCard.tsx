import React from 'react';
import { ServiceType } from './ServicesSection';
import { Monitor, Shield, HardDrive, FileText, Video, Briefcase } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceType;
  isEven: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isEven }) => {
  const getIcon = (iconName: string) => {
    const iconClass = "h-10 w-10 text-brand-blue dark:text-dark-accent transition-colors duration-300";
    switch (iconName) {
      case 'network':
        return <Monitor className={iconClass} />;
      case 'security':
        return <Shield className={iconClass} />;
      case 'hardware':
        return <HardDrive className={iconClass} />;
      case 'software':
        return <FileText className={iconClass} />;
      case 'audiovisual':
        return <Video className={iconClass} />;
      case 'government':
        return <Briefcase className={iconClass} />;
      default:
        return <Monitor className={iconClass} />;
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
    <div className={`flex flex-col md:flex-row items-center bg-white dark:bg-dark-card rounded-lg shadow-md dark:shadow-xl overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl mb-8 border border-gray-100 dark:border-dark-border ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Image Section */}
      <div className="md:w-2/5 h-64 md:h-auto">
        <img 
          src={getImageUrl(service.category)} 
          alt={service.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content Section */}
      <div className="p-8 md:w-3/5 pb-6">
        <div className="mb-4 bg-brand-light dark:bg-dark-surface inline-block p-3 rounded-lg transition-colors duration-300">
          {getIcon(service.icon)}
        </div>
        <h3 className="subsection-title">{service.title}</h3>
        <p className="text-brand-gray dark:text-dark-text-secondary mb-6 transition-colors duration-300">{service.description}</p>
        
        {/* Key Partners Section */}
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-dark-border transition-colors duration-300">
          <h4 className="text-sm font-semibold text-brand-navy dark:text-dark-text mb-3 uppercase transition-colors duration-300">Key Partners</h4>
          <div className="flex items-center gap-6">
            <img src="/partners/hp.png" alt="HP Logo" className="h-12 object-contain transition-transform duration-300 hover:scale-110 filter dark:brightness-90" />
            <img src="/partners/Samsung_Logo.svg" alt="Samsung Logo" className="h-12 object-contain transition-transform duration-300 hover:scale-110 filter dark:brightness-90" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
