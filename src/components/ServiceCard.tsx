
import React from 'react';
import { ServiceType } from './ServicesSection';
import { ArrowRight, Monitor, Shield, HardDrive, FileText, Video, Briefcase } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
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

  return (
    <div className="card hover:translate-y-[-5px]">
      <div className="p-6">
        <div className="mb-4 bg-brand-light inline-block p-3 rounded-lg">
          {getIcon(service.icon)}
        </div>
        <h3 className="subsection-title">{service.title}</h3>
        <p className="text-brand-gray mb-4">{service.description}</p>
        <a href="#contact" className="inline-flex items-center text-brand-blue font-medium hover:text-brand-navy transition-colors">
          Get Details <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
