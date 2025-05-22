import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { InfoIcon } from 'lucide-react';

const partnerLogos = [
  'essl.png',
  'hp.png',
  'PeopleLink.webp',
  'Samsung_Logo.svg',
  'AHUJA.png',
  'godrej_interio.png',
  'Geeken.jpg',
  'HoneyWell.png',
  'Sony.png',
  'Ricoh.png',
  'Okomo360.jpeg',
  'FotonVR.avif',
  'Microsoft.jpeg',
  'Edutech.png',
  'Voltas.avif',
  'Canon.png',
];

const ServicePartnersSection: React.FC = () => {
  return (
    <section id="service-partners" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <h2 className="section-title text-center">Service & Technology Partners</h2>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <InfoIcon className="h-5 w-5 text-brand-gray" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">Some partner names may require verification</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-lg text-center text-brand-gray mb-12 max-w-3xl mx-auto">
          Working with industry leaders to deliver exceptional solutions
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
          {partnerLogos.map((logo, idx) => (
            <div key={logo} className="flex items-center justify-center bg-white rounded-lg shadow p-4 h-32">
              <img
                src={`/partners/${logo}`}
                alt={logo.replace(/[-_]/g, ' ').replace(/\..+$/, '')}
                className="max-h-20 max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePartnersSection;
