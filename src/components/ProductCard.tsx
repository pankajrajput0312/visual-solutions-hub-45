
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProductType } from './ProductSection';

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="card group">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="subsection-title">{product.title}</h3>
        <p className="text-brand-gray mb-4">{product.description}</p>
        <a href="#contact" className="inline-flex items-center text-brand-blue font-medium hover:text-brand-navy transition-colors">
          Learn More <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
