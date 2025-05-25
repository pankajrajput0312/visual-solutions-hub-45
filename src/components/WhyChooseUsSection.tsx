
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
    icon: <Award className="h-8 w-8 text-brand-maroon dark:text-brand-maroon transition-colors duration-300" />,
  },
  {
    title: "Dedication to Service",
    description: "Committed to serving with integrity, empathy, reliability, and a customer-first mindset always.",
    icon: <Handshake className="h-8 w-8 text-brand-maroon dark:text-brand-maroon transition-colors duration-300" />,
  },
  {
    title: "Cost-Effective Innovation",
    description: "Delivering smart, efficient solutions that maximize value without compromising on innovation.",
    icon: <DollarSign className="h-8 w-8 text-brand-maroon dark:text-brand-maroon transition-colors duration-300" />,
  },
  {
    title: "Diverse Product Range",
    description: "Extensive selection of products designed to meet every customer need.",
    icon: <Package className="h-8 w-8 text-brand-maroon dark:text-brand-maroon transition-colors duration-300" />,
  },
  {
    title: "Sustainable Solutions",
    description: "Forward-thinking solutions balancing performance, responsibility, and lasting impact.",
    icon: <Leaf className="h-8 w-8 text-brand-maroon dark:text-brand-maroon transition-colors duration-300" />,
  },
  {
    title: "Comprehensive Services",
    description: "End-to-end solutions tailored to meet diverse needs with precision.",
    icon: <Utensils className="h-8 w-8 text-brand-maroon dark:text-brand-maroon transition-colors duration-300" />,
  }
];

const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-16 bg-white dark:bg-dark-surface transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Why Choose Us</h2>
        <p className="text-lg text-center text-brand-gray dark:text-dark-text-secondary mb-12 max-w-3xl mx-auto transition-colors duration-300">
          We pride ourselves on delivering excellence in every aspect of our business
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-white dark:bg-dark-card p-6 rounded-lg shadow-md dark:shadow-xl border border-gray-100 dark:border-dark-border transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl",
                "flex flex-col items-start animate-fade-in"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 bg-brand-light dark:bg-dark-surface p-3 rounded-full transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-brand-navy dark:text-dark-text transition-colors duration-300">{feature.title}</h3>
              <p className="text-brand-gray dark:text-dark-text-secondary transition-colors duration-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
