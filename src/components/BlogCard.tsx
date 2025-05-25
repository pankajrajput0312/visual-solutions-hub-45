
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BlogPost } from './BlogList';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="card group">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-brand-teal dark:bg-dark-accent text-white px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300">
          {post.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-brand-gray dark:text-dark-text-secondary mb-2 transition-colors duration-300">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>
        <h3 className="text-xl font-bold text-brand-navy dark:text-dark-text mb-3 transition-colors duration-300">{post.title}</h3>
        <p className="text-brand-gray dark:text-dark-text-secondary mb-4 transition-colors duration-300">{post.excerpt}</p>
        <Link to={`/blog/${post.id}`} className="inline-flex items-center text-brand-blue dark:text-dark-accent font-medium hover:text-brand-navy dark:hover:text-blue-400 transition-colors">
          Read More <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
