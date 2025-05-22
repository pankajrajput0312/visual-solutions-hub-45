import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogHeader from '../components/BlogHeader';
import BlogList from '../components/BlogList';
import { Route, Routes } from 'react-router-dom';
import BlogDetail from '../components/BlogDetail';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BlogHeader />
                <div className="bg-white py-8 text-center">
                  <div className="container mx-auto px-4">
                    <h2 className="text-lg font-semibold text-brand-blue">An ISO 9001:2015, ISO 27001:2018 Certified Company</h2>
                  </div>
                </div>
                <BlogList />
              </>
            }
          />
          <Route path=":id" element={<BlogDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
