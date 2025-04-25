import React from 'react';
import Navbar from '../components/Navbar'; // adjust path as needed
import Footer from '../components/Footer'; // adjust path as needed
import BelowFooter from '../components/BelowFooter'; // import BelowFooter

const ContactPage = () => {
    return (
        <div className="bg-white text-gray-800">

            {/* Navbar */}
            <Navbar />

            {/* Hero Section (Black & Stylish) */}
            <div className="bg-black text-white min-h-[40vh] flex flex-col items-center justify-center px-4 text-center relative">
                <h1 className="text-6xl sm:text-7xl font-extrabold mb-6 tracking-tight">Contact Us</h1>
                <p className="text-xl sm:text-2xl text-gray-300 max-w-xl">
                    Get in touch with us regarding your idea or project
                </p>

                {/* Optional: Decorative underline or element */}
                <div className="absolute bottom-0 h-1 w-24 bg-white rounded-full mt-6"></div>
            </div>

            {/* Breadcrumb */}
            <div className="bg-white px-4 py-6 shadow-sm">
                <div className="max-w-7xl mx-auto text-xl text-gray-600">
                    Home / <span className="text-black font-bold">Contact</span>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-5xl mx-auto px-6 py-16">
                <h2 className="text-5xl font-extrabold mb-10 text-center">Get in touch</h2>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <label className="block text-3xl font-semibold mb-3">First name <span className="text-red-500">*</span></label>
                        <input type="text" required className="w-full border border-gray-300 rounded-lg px-8 py-5 focus:outline-none focus:ring-2 focus:ring-black text-2xl" />
                    </div>
                    <div>
                        <label className="block text-3xl font-semibold mb-3">Last name <span className="text-red-500">*</span></label>
                        <input type="text" required className="w-full border border-gray-300 rounded-lg px-8 py-5 focus:outline-none focus:ring-2 focus:ring-black text-2xl" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-3xl font-semibold mb-3">Email <span className="text-red-500">*</span></label>
                        <input type="email" required className="w-full border border-gray-300 rounded-lg px-8 py-5 focus:outline-none focus:ring-2 focus:ring-black text-2xl" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-3xl font-semibold mb-3">Subject</label>
                        <input type="text" className="w-full border border-gray-300 rounded-lg px-8 py-5 focus:outline-none focus:ring-2 focus:ring-black text-2xl" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-3xl font-semibold mb-3">Message <span className="text-red-500">*</span></label>
                        <textarea required rows="6" className="w-full border border-gray-300 rounded-lg px-8 py-5 focus:outline-none focus:ring-2 focus:ring-black text-2xl" />
                    </div>
                    <div className="md:col-span-2">
                        <button type="submit" className="bg-black text-white font-semibold rounded-full px-12 py-6 hover:bg-gray-900 transition text-2xl">
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            {/* Branches Section */}
            <div className="bg-white px-6 py-12 border-t-4 border-gray-800">
                <h2 className="text-3xl font-extrabold text-center mb-8">Our Branches</h2>

                <div className="flex flex-wrap justify-center gap-12">
                    {/* Mumbai Branch */}
                    <div className="flex-1 max-w-xs">
                        <h3 className="text-2xl font-extrabold mb-2">MUMBAI, INDIA</h3>
                        <p className="text-lg font-semibold mb-1">Andheri East, Mumbai</p>
                        <p className="text-lg font-semibold mb-1">+91 22 61234567</p>
                        <p className="text-lg font-semibold">info@eurisko.net</p>
                    </div>

                    {/* Delhi Branch */}
                    <div className="flex-1 max-w-xs">
                        <h3 className="text-2xl font-extrabold mb-2">DELHI, INDIA</h3>
                        <p className="text-lg font-semibold mb-1">Connaught Place, Delhi</p>
                        <p className="text-lg font-semibold mb-1">+91 11 23456789</p>
                        <p className="text-lg font-semibold">info@eurisko.net</p>
                    </div>

                    {/* Bangalore Branch */}
                    <div className="flex-1 max-w-xs">
                        <h3 className="text-2xl font-extrabold mb-2">BANGALORE, INDIA</h3>
                        <p className="text-lg font-semibold mb-1">MG Road, Bangalore</p>
                        <p className="text-lg font-semibold mb-1">+91 80 45678912</p>
                        <p className="text-lg font-semibold">info@eurisko.net</p>
                    </div>

                    {/* Chennai Branch */}
                    <div className="flex-1 max-w-xs">
                        <h3 className="text-2xl font-extrabold mb-2">CHENNAI, INDIA</h3>
                        <p className="text-lg font-semibold mb-1">Mount Road, Chennai</p>
                        <p className="text-lg font-semibold">+91 44 23456789</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />

            {/* Below Footer */}
            <BelowFooter />

        </div>
    );
};

export default ContactPage;
