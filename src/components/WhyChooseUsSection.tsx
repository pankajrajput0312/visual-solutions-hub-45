
import React from 'react';
import { Check, Award, Handshake, DollarSign, Leaf, Package, Utensils } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeaturePoint {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeaturePoint[] = [
  {
    title: "Commitment to Quality",
    description: "Committed to excellence through precision, innovation, and consistent quality.",
    icon: <Award className="h-8 w-8 text-brand-maroon" />,
  },
  {
    title: "Dedication to Service",
    description: "Committed to serving with integrity, empathy, reliability, and a customer-first mindset always.",
    icon: <Handshake className="h-8 w-8 text-brand-maroon" />,
  },
  {
    title: "Cost-Effective Innovation",
    description: "Delivering smart, efficient solutions that maximize value without compromising on innovation.",
    icon: <DollarSign className="h-8 w-8 text-brand-maroon" />,
  },
  {
    title: "Diverse Product Range",
    description: "Extensive selection of products designed to meet every customer need.",
    icon: <Package className="h-8 w-8 text-brand-maroon" />,
  },
  {
    title: "Sustainable Solutions",
    description: "Forward-thinking solutions balancing performance, responsibility, and lasting impact.",
    icon: <Leaf className="h-8 w-8 text-brand-maroon" />,
  },
  {
    title: "Comprehensive Services",
    description: "End-to-end solutions tailored to meet diverse needs with precision.",
    icon: <Utensils className="h-8 w-8 text-brand-maroon" />,
  }
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Why Choose Us</h2>
        <p className="text-lg text-center text-brand-gray mb-12 max-w-3xl mx-auto">
          We pride ourselves on delivering excellence in every aspect of our business
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg",
                "flex flex-col items-start animate-fade-in"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 bg-brand-light p-3 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-navy">{feature.title}</h3>
              <p className="text-brand-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
