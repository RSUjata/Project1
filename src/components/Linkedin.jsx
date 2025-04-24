import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';

const LinkedInSection = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing((prev) => !prev);
    window.open('https://www.linkedin.com/company/eurisko', '_blank');
  };

  return (
    <div className="w-full text-white py-16 px-4 sm:px-10" style={{ backgroundColor: '#2d64bc' }}>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side Text */}
        <div className="md:w-2/3 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Connect with us on LinkedIn!</h2>
          <p className="text-white text-base sm:text-lg">
            Join our professional network for industry insights and opportunities. Don’t miss out and follow us on LinkedIn today and join our professional network.
          </p>
        </div>

        {/* Right Side Box */}
        <div className="flex justify-center items-center px-4 py-6">
      <div className="bg-white text-blue-700 rounded-xl shadow-md flex flex-col items-center px-6 py-4 space-y-2 w-full max-w-xs sm:max-w-sm md:max-w-md text-center">
        <div
          onClick={handleFollowClick}
          className="cursor-pointer flex items-center space-x-2 hover:text-blue-800 transition"
        >
          <FaLinkedin className="text-2xl sm:text-3xl" />
          <span className="font-semibold border-l border-blue-300 pl-4 text-sm sm:text-base">
            {isFollowing ? "Following" : "Follow"}
          </span>
        </div>
        <div className="text-sm sm:text-base font-semibold text-gray-700">
          10,397
        </div>
      </div>
    </div>
    </div></div>
  );
};

export default LinkedInSection;
