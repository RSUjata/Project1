import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import img1 from '../assets/br4.png'; // Transparent PNG
import img2 from '../assets/br1.png';
import img3 from '../assets/rb3.png';
import img4 from '../assets/br2.jpeg';

const slides = [
  {
    image: img1,
    text: "#1 Global IT and Digital Transformation agency",
  },
  {
    image: img2,
    text: "Driving Into Tomorrow",
  },
  {
    image: img3,
    text: "Engineering Speed and Style",
  },
  {
    image: img4,
    text: "Eco-Friendly and Efficient Journeys",
  },
];

const categories = [
  {
    title: "Digital Transformation",
    description: "Pioneering custom software development in USA, UAE, Canada, UK, Saudi Arabia",
  },
  {
    title: "Metaverse",
    description: "Crafting the metaverse of tomorrow, today",
  },
  {
    title: "Artificial Intelligence",
    description: "The future of technology, and the technology of the future",
  },
  {
    title: "Virtual/Augmented Reality",
    description: "Reality-expanding technology solutions",
  },
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    navigate('/contact');
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full flex items-center justify-between px-8 md:px-16 transition-opacity duration-1000 ease-in-out ${
            currentIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Left - Text */}
          <div className="text-white max-w-xl space-y-6 animate-fade-in-up px-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-left">
              {slide.text}
            </h1>
            <button
              onClick={handleButtonClick}
              className="px-8 py-4 bg-white text-black text-lg md:text-xl rounded-full hover:text-purple-600 border border-black transition duration-200"
            >
              Get in Touch Now
            </button>
          </div>

          {/* Right - Image */}
          <div className="hidden md:block relative w-1/2 h-full">
            <img
              src={slide.image}
              alt="Slide"
              className="w-full h-full object-contain object-right"
            />
          </div>
        </div>
      ))}

      {/* Bottom Category Section */}
      <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-sm px-4 sm:px-10 py-6 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full">
            {categories.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="relative group text-left p-6 w-full transition-all duration-300"
                >
                  <div className="flex flex-col items-start space-y-4">
                    <div
                      className={`font-extrabold transition-colors duration-300 text-2xl sm:text-3xl lg:text-4xl ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-300 group-hover:text-white'
                      }`}
                    >
                      {item.title}
                    </div>

                    <div
                      className={`text-lg sm:text-xl transition-colors duration-300 ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-400 group-hover:text-white'
                      }`}
                    >
                      {item.description}
                    </div>
                  </div>

                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-purple-500 transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
