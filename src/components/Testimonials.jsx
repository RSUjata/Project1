import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);
  const navigate = useNavigate();

  const stories = [
    {
      name: "Rajesh Kumar",
      role: "Tech Entrepreneur",
      quote: "This platform transformed my business strategy completely",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      bio: "Founder of Innovate Solutions with 12+ years experience in tech"
    },
    {
      name: "Priya Sharma",
      role: "Marketing Director",
      quote: "Unmatched results in just 3 months of using the service",
      profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
      bio: "Helped over 40 brands grow their digital presence"
    },
    {
      name: "Amit Verma",
      role: "Startup Founder",
      quote: "The mentorship program exceeded all our expectations",
      profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
      bio: "Raised ₹5 Crore in funding within the first year"
    }
  ];

  return (
    <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg overflow-hidden mt-16">
      {/* Video/Background Section with reduced height */}
      <div
        className="relative h-[200px] md:h-[300px] lg:h-[350px] rounded-lg overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://via.placeholder.com/1200x800)', // Replace with your image URL
        }}
      >
        {/* Left Navigation Panel */}
        <div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 h-auto max-h-[70%] w-1/4 bg-black bg-opacity-30 backdrop-blur-md p-3 overflow-y-auto rounded-tr-lg rounded-br-lg"
        >
          <h2 className="text-lg md:text-xl font-bold text-white mb-3">Success Story</h2>
          <div className="space-y-2 md:space-y-2">
            {stories.map((_, index) => (
              <div
                key={index}
                onClick={() => setActiveStory(index)}
                className={`p-1.5 md:p-2 rounded-md cursor-pointer transition-all ${
                  activeStory === index
                    ? 'bg-white/10 border-l-4 border-yellow-400'
                    : 'hover:bg-white/5'
                }`}
              >
                <div className="h-1 bg-white/30 rounded-full w-3/4 mx-auto">
                  <div
                    className={`h-full bg-yellow-400 rounded-full transition-all duration-300 ${
                      activeStory === index ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content Area with Black Background */}
        <div className="absolute right-0 bottom-0 h-full w-2/3 flex flex-col justify-end p-4 bg-black bg-opacity-60">
          <div className="bg-white/10 backdrop-blur-lg p-4 rounded-lg border border-white/20 shadow-xl">
            {/* Profile Section */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={stories[activeStory].profilePic}
                alt={stories[activeStory].name}
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
              />
              <div>
                <h3 className="text-lg font-bold text-white">{stories[activeStory].name}</h3>
                <p className="text-sm text-gray-200">{stories[activeStory].role}</p>
              </div>
            </div>

            {/* Quote & Bio */}
            <p className="text-sm text-white font-medium mb-2 italic">“{stories[activeStory].quote}”</p>
            <p className="text-xs text-gray-300">{stories[activeStory].bio}</p>

            {/* Button */}
            <button
              onClick={() => navigate('/success-stories')}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-full px-4 py-2 flex items-center gap-2 transition-all mt-4 shadow-md"
            >
              Read Full Story
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
