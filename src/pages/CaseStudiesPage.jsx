import React from 'react';
import Navbar from '../components/Navbar'; // adjust path as needed
import Footer from '../components/Footer'; // adjust path as needed
import CaseStudiesSection from '../components/CseStudy';
import BelowFooter from '../components/BelowFooter'; // import BelowFooter

const CaseStudiesPage = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div className="bg-black text-white min-h-[40vh] flex flex-col items-center justify-center px-4 text-center relative">
                <h1 className="text-6xl sm:text-7xl font-extrabold mb-6 tracking-tight">Case Studies</h1>
                <p className="text-xl sm:text-2xl text-gray-300 max-w-xl">
                    Explore our success stories and how we helped businesses achieve their goals.
                </p>
            </div>

            {/* Breadcrumb */}
            <div className="bg-white px-4 py-6 shadow-sm">
                <div className="max-w-7xl mx-auto text-xl text-gray-600">
                    Home / <span className="text-black font-bold">Case Studies</span>
                </div>
            </div>

            {/* Case Studies Section */}
            <CaseStudiesSection />

            {/* White Gap between Case Studies and Footer */}
            <div className="bg-white py-16"></div>

            {/* Footer */}
            <Footer />

            {/* Below Footer */}
            <BelowFooter />
        </div>
    );
};

export default CaseStudiesPage;
