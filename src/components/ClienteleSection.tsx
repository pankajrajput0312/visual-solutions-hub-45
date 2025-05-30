
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { InfoIcon } from 'lucide-react';

const clientLogos = [
  'BIMBO.jpg',
  'ministry-of-women-and-child-development.png',
  'HAL.webp',
  'Indianarmy.webp',
  'Groovenexus.jpg',
];

const ClienteleSection: React.FC = () => {
  return (
    <section id="clientele" className="py-16 bg-brand-light dark:bg-dark-surface transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <h2 className="section-title text-center">Our Esteemed Clients</h2>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <InfoIcon className="h-5 w-5 text-brand-gray dark:text-dark-text-secondary transition-colors duration-300" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">Some client names may require verification</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-lg text-center text-brand-gray dark:text-dark-text-secondary mb-12 max-w-3xl mx-auto transition-colors duration-300">
          Trusted by leading organizations across various sectors
        </p>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8 items-center justify-center">
          {clientLogos.map((logo, idx) => (
            <div key={logo} className="flex items-center justify-center bg-white dark:bg-dark-card rounded-lg shadow dark:shadow-xl p-2 xs:p-4 h-36 xs:h-48 border border-gray-100 dark:border-dark-border transition-colors duration-300">
              <img
                src={`/client/${logo}`}
                alt={logo.replace(/[-_]/g, ' ').replace(/\..+$/, '')}
                className="max-h-24 xs:max-h-40 max-w-full object-contain filter dark:brightness-90"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClienteleSection;
