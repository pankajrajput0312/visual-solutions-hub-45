
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { InfoIcon } from 'lucide-react';

interface Client {
  name: string;
  logo?: string;
}

const clients: Client[] = [
  { 
    name: "Ministry of Women and Child Development",
    logo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=400&auto=format&fit=crop"
  },
  { 
    name: "INDIAN BIMBO",
    logo: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?q=80&w=400&auto=format&fit=crop"
  },
  { 
    name: "NUMISHING A BETTER WORLD",
    logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=400&auto=format&fit=crop"
  },
  { 
    name: "Hindustan Aeronautics Limited",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop"
  },
  { 
    name: "Celestial groovencxus",
    logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop"
  },
];

const ClienteleSection: React.FC = () => {
  return (
    <section id="clientele" className="py-16 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <h2 className="section-title text-center">Our Esteemed Clients</h2>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <InfoIcon className="h-5 w-5 text-brand-gray" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm">Some client names may require verification</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-lg text-center text-brand-gray mb-12 max-w-3xl mx-auto">
          Trusted by leading organizations across various sectors
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-heading font-semibold text-brand-navy">{client.name}</h3>
              </div>
            </div>
          ))}
          <div 
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in flex items-center justify-center p-8"
            style={{ animationDelay: `${clients.length * 0.1}s` }}
          >
            <div className="text-center">
              <h3 className="font-heading font-semibold text-xl text-brand-navy mb-2">Many More</h3>
              <p className="text-brand-gray">(Ongoing...)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClienteleSection;
