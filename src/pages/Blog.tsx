
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogHeader from '../components/BlogHeader';
import BlogList from '../components/BlogList';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <BlogHeader />
        <BlogList />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
