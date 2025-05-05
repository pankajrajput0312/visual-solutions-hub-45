
import React from 'react';
import ProductCard from './ProductCard';

// Define types for our product data
export type ProductType = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
};

// Sample product data
const products: ProductType[] = [
  {
    id: 1,
    title: "Video Conferencing Systems",
    description: "High-definition video conferencing solutions for seamless remote communication, featuring crystal-clear audio and video quality.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "conferencing"
  },
  {
    id: 2,
    title: "Indoor LED Walls",
    description: "Vibrant indoor LED display walls with stunning visual clarity, perfect for corporate environments and control rooms.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "led"
  },
  {
    id: 3,
    title: "Outdoor LED Displays",
    description: "Weather-resistant outdoor LED displays with high brightness for optimal visibility in any lighting condition.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "led"
  },
  {
    id: 4,
    title: "Smart Classroom Solutions",
    description: "Interactive educational technology for modern classrooms, enhancing learning with digital tools and connectivity.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "education"
  },
  {
    id: 5,
    title: "VR Labs",
    description: "Immersive virtual reality environments for educational institutions and corporate training programs.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "education"
  },
  {
    id: 6,
    title: "Modular Furnishing",
    description: "Adaptable modular furniture solutions designed for modern workspaces and educational environments.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "furniture"
  }
];

// Get unique categories for filtering
const categories = ['all', ...new Set(products.map(product => product.category))];

const ProductSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState('all');
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-16 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Our Products</h2>
        <p className="text-lg text-center text-brand-gray mb-8 max-w-3xl mx-auto">
          We offer a comprehensive range of cutting-edge visual and technological solutions for businesses and educational institutions.
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md capitalize transition-colors ${
                activeCategory === category 
                  ? 'bg-brand-blue text-white' 
                  : 'bg-white text-brand-gray hover:bg-brand-teal hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
