import React, { useState } from 'react';
import BlogCard from './BlogCard';

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Video Conferencing Technologies",
    excerpt: "Explore emerging trends and technologies that are shaping the future of video conferencing and remote collaboration.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "May 2, 2025",
    author: "Alex Johnson",
    category: "Technology"
  },
  {
    id: 2,
    title: "LED Walls: Transforming Corporate Environments",
    excerpt: "How LED wall technology is revolutionizing corporate spaces, from lobbies to conference rooms.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "April 25, 2025",
    author: "Sarah Miller",
    category: "Business"
  },
  {
    id: 3,
    title: "VR in Education: Beyond the Hype",
    excerpt: "Practical applications of virtual reality technology that are making a real difference in educational outcomes.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "April 18, 2025",
    author: "Michael Chen",
    category: "Education"
  },
  {
    id: 4,
    title: "Smart Classrooms: The New Standard in Education",
    excerpt: "How integrated technology is transforming traditional classrooms into interactive learning environments.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "April 10, 2025",
    author: "Emily Rodriguez",
    category: "Education"
  },
  {
    id: 5,
    title: "IT Security for Modern Businesses",
    excerpt: "Essential security measures every business should implement to protect their digital assets and infrastructure.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "April 3, 2025",
    author: "David Wilson",
    category: "Security"
  },
  {
    id: 6,
    title: "GeM Services: Navigating Government Procurement",
    excerpt: "A comprehensive guide to effectively utilizing the Government e-Marketplace for your business needs.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "March 27, 2025",
    author: "Priya Sharma",
    category: "Business"
  }
];

const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

const BlogList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section className="py-16 bg-brand-light dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md capitalize transition-colors duration-300 ${
                activeCategory === category 
                  ? 'bg-brand-blue dark:bg-dark-accent text-white' 
                  : 'bg-white dark:bg-dark-card text-brand-gray dark:text-dark-text-secondary hover:bg-brand-teal dark:hover:bg-dark-accent hover:text-white border border-gray-200 dark:border-dark-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
