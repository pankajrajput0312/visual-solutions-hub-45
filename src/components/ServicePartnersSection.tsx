
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { InfoIcon } from 'lucide-react';

interface Partner {
  name: string;
  needsVerification?: boolean;
}

const partners: Partner[] = [
  { name: "AHULIA" },
  { name: "Honeywell" },
  { name: "SONY" },
  { name: "HP" },
  { name: "SAMSUNG" },
  { name: "PeopleLink" },
  { name: "Canon" },
  { name: "Interio" },
  { name: "VOLTAS" },
  { name: "eSSL" },
  { name: "Security at Fingertips" },
  { name: "RIGOH" },
  { name: "Microsoft" },
  { name: "o<omo>", needsVerification: true },
  { name: "foton", needsVerification: true },
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
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg animate-fade-in border border-gray-100 aspect-square"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-center">
                <h3 className="font-heading font-semibold text-brand-navy">
                  {partner.name}
                  {partner.needsVerification && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <sup><InfoIcon className="inline h-3 w-3 text-brand-gray ml-1" /></sup>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">Name requires verification</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </h3>
              </div>
            </div>
          ))}
          <div 
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg animate-fade-in border border-gray-100 aspect-square"
            style={{ animationDelay: `${partners.length * 0.05}s` }}
          >
            <div className="text-center">
              <h3 className="font-heading font-semibold text-brand-navy">Many More</h3>
              <p className="text-sm text-brand-gray">(Collaborations Ongoing...)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePartnersSection;
