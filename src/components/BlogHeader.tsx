
import React from 'react';

const BlogHeader: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-navy to-brand-blue text-white diagonal-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          Stay updated with the latest news, technology insights, and industry trends in visual solutions and IT services.
        </p>
      </div>
    </section>
  );
};

export default BlogHeader;
