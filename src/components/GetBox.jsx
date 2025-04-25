import React from 'react';
import { useNavigate } from 'react-router-dom';

const GetInTouchBox = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="w-full">
      {/* White Gap Above the Get in Touch Section */}
      <div className="w-full bg-white py-16"></div>

      {/* Get in Touch Section */}
      <div className="w-full bg-black py-16 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-10 md:p-16 flex items-center justify-between gap-12 relative overflow-hidden">
          {/* Left Side Content */}
          <div className="w-full md:w-3/4 space-y-6 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black">
              Let’s Get in Touch!
            </h2>
            <p className="text-gray-800 text-lg sm:text-xl">
              Our team is ready to discuss your next big idea and help execute your project. We are here to bring your vision to life.
            </p>

            <button
              onClick={handleContactClick}
              className="mt-8 bg-black text-white font-medium px-14 py-6 rounded-full hover:bg-gray-800 transition duration-300 shadow-lg"
            >
              Get in Touch Now
            </button>
          </div>

          {/* Right Side Decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-gray-600 to-black opacity-20 rounded-full transform rotate-45 -z-10"></div>
        </div>
      </div>

      {/* White Gap Below the Get in Touch Section */}
      <div className="w-full bg-white py-16"></div>
    </div>
  );
};

export default GetInTouchBox;
