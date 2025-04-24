import React, { useState, useEffect } from 'react';
import video1 from '../assets/vd2.mp4';
import video2 from '../assets/vd1.mp4';
import video3 from '../assets/vd3.mp4';
import { useNavigate } from 'react-router-dom';

const SuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [animationProgress, setAnimationProgress] = useState([false, false, false]);
  const navigate = useNavigate();

  // Auto-rotate videos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStory(prev => (prev + 1) % 3);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Animation sequence
  useEffect(() => {
    setAnimationProgress([false, false, false]);
    const timers = [
      setTimeout(() => setAnimationProgress(p => [true, p[1], p[2]]), 300),
      setTimeout(() => setAnimationProgress(p => [p[0], true, p[2]]), 600),
      setTimeout(() => setAnimationProgress(p => [p[0], p[1], true]), 900)
    ];
    return () => timers.forEach(clearTimeout);
  }, [activeStory]);

  const stories = [
    {
      name: "John Doe",
      role: "Entrepreneur",
      quote: "This platform transformed my business strategy completely",
      video: video1,
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      bio: "Founder of TechSolutions Inc. with 10+ years experience"
    },
    {
      name: "Jane Smith",
      role: "Marketing Director",
      quote: "Unmatched results in just 3 months of using the service",
      video: video2,
      profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
      bio: "Helped 50+ brands scale their digital presence"
    },
    {
      name: "Alex Johnson",
      role: "Startup Founder",
      quote: "The mentorship program exceeded all our expectations",
      video: video3,
      profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
      bio: "Raised $5M in seed funding within first year"
    }
  ];

  return (
    <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-lg overflow-hidden">
      {/* Video Container with Responsive Height */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] bg-gray-900 rounded-lg overflow-hidden">
        <video 
          src={stories[activeStory].video} 
          autoPlay 
          loop
          muted
          className="w-full h-full object-cover"
        />

        {/* Left Side - Animated Lines */}
        <div className="absolute left-0 top-0 h-auto max-h-[80%] w-1/4 bg-gray-800 bg-opacity-70 backdrop-blur-sm p-4 overflow-y-auto" 
          style={{ top: '50%', transform: 'translateY(-50%)' }}>
          <h2 className="text-lg md:text-2xl font-bold text-white mb-3 md:mb-4">Success Story</h2>
          
          <div className="space-y-2 md:space-y-3">
            {stories.map((_, index) => (
              <div 
                key={index}
                onClick={() => setActiveStory(index)}
                className={`p-1.5 md:p-2 rounded-md cursor-pointer transition-all ${
                  activeStory === index 
                    ? 'bg-gray-600 bg-opacity-50 border-l-2 border-gray-400' 
                    : 'hover:bg-gray-700 hover:bg-opacity-30'
                }`}
              >
                <div className="h-px bg-gray-400 rounded-full w-3/4 mx-auto">
                  <div 
                    className={`h-full bg-white rounded-full transition-all duration-300 ${
                      activeStory === index ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content Overlay */}
        <div className="absolute right-0 top-0 h-full w-2/3 flex flex-col justify-end p-6">
          <div className="bg-gradient-to-t from-gray-800 via-gray-700 to-transparent p-6 rounded-lg">
            {/* Profile Section */}
            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
              <img 
                src={stories[activeStory].profilePic} 
                alt={stories[activeStory].name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white"
              />
              <div>
                <h3 className="text-xl font-bold text-white">{stories[activeStory].name}</h3>
                <p className="text-sm text-gray-300">{stories[activeStory].role}</p>
              </div>
            </div>

            {/* Quote & Bio */}
            <p className="text-lg text-white mb-4">{stories[activeStory].quote}</p>
            <p className="text-sm text-gray-300">{stories[activeStory].bio}</p>

            {/* Read More Button */}
            <button 
              onClick={() => navigate('/success-stories')}
              className="bg-gray-600 hover:bg-gray-500 text-white font-medium rounded-full px-5 py-3 flex items-center gap-2 transition-all mt-6"
            >
              Read Full Story
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
