import React from 'react';
import Navbar from '../components/Navbar'; // Adjust path as needed
import Footer from '../components/Footer'; // Adjust path as needed
import NewsSection from '../components/NewsSection'; // Import the NewsSection component
import BelowFooter from '../components/BelowFooter'; // Import BelowFooter

const NewsPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="bg-black text-white min-h-[40vh] flex flex-col items-center justify-center px-4 text-center relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Blogs</h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl px-4">
          Stay up-to-date with the latest news and updates from US.
        </p>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white px-4 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto text-xl text-gray-600">
          Home / <span className="text-black font-bold">News</span>
        </div>
      </div>

      {/* News Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <NewsSection />
      </div>

      {/* Footer */}
      <Footer />

      {/* Below Footer */}
      <BelowFooter />
    </div>
  );
};

export default NewsPage;
