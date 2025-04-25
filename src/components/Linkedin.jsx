import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const LinkedInSection = () => {
  const handleFollowClick = () => {
    window.open('https://www.linkedin.com/company/eurisko', '_blank');
  };

  return (
    <div className="w-full">
      {/* White Gap Above LinkedIn Section */}
      <div className="w-full bg-white py-16"></div>

      {/* LinkedIn Section */}
      <div className="w-full bg-gradient-to-r from-[#2d64bc] to-[#1a3c75] py-16 px-4 sm:px-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-wide leading-tight">
              Join Our Professional Network on LinkedIn
            </h2>
            <p className="text-white text-lg sm:text-xl max-w-2xl mx-auto">
              Click the LinkedIn icon below to connect with our team and gain access to industry insights, job opportunities, and much more.
            </p>
          </div>

          {/* LinkedIn Icon Box */}
          <div
            onClick={handleFollowClick}
            className="mt-8 cursor-pointer inline-block rounded-full bg-white text-[#0077b5] p-8 shadow-xl hover:bg-[#0077b5] hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <FaLinkedin className="text-5xl sm:text-6xl" />
          </div>
        </div>
      </div>

      {/* White Gap Below LinkedIn Section */}
      <div className="w-full bg-white py-16"></div>
    </div>
  );
};

export default LinkedInSection;
