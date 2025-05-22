import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from './BlogList';
import { ArrowLeft } from 'lucide-react';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
        <button onClick={() => navigate(-1)} className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft size={18} /> Back
        </button>
      </div>
    );
  }

  return (
    <section className="py-16 bg-brand-light min-h-[70vh]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <button onClick={() => navigate(-1)} className="mb-8 btn-secondary inline-flex items-center gap-2">
          <ArrowLeft size={18} /> Back to Blogs
        </button>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-72 object-cover" />
          <div className="p-8">
            <div className="flex flex-wrap items-center text-sm text-brand-gray mb-2 gap-3">
              <span className="bg-brand-teal text-white px-3 py-1 rounded-full text-xs font-medium">{post.category}</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">{post.title}</h1>
            <p className="text-lg text-brand-gray mb-8">{post.excerpt}</p>
            <div className="prose max-w-none text-brand-gray">
              {/* Placeholder for detailed blog content */}
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.</p>
              <p>Aliquam erat volutpat. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.</p>
              <ul>
                <li>Key point one about this topic.</li>
                <li>Key point two with more detail.</li>
                <li>Another important aspect to consider.</li>
              </ul>
              <p>Thank you for reading! For more insights, check out our other blog posts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail; 