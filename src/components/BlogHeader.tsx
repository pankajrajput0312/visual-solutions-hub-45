
import React from 'react';

const BlogHeader: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-navy to-brand-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-repeat"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">Our Blog</h1>
        <div className="h-1 w-24 bg-brand-maroon mx-auto mb-8 rounded-full"></div>
        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Stay updated with the latest news, technology insights, and industry trends in visual solutions and IT services.
        </p>
      </div>
    </section>
  );
};

export default BlogHeader;
