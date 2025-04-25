import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Importing images directly
import bankImage from '../assets/bank.jpeg';
import entertainmentImage from '../assets/game.jpeg';
import retailImage from '../assets/e-commerce.jpeg';
import healthcareImage from '../assets/health.jpeg';
import mediaImage from '../assets/media.jpeg';
import Travel from '../assets/travel.webp';
import Edtech from '../assets/edtech.jpg';
import Manufacturing from '../assets/manu.png';
import Real from '../assets/realestate.jpg';
import Logistics from '../assets/logistics.jpg';

const industriesData = [
  {
    title: 'Healthcare',
    description: 'Digital transformation in healthcare services.',
    image: healthcareImage,
  },
  {
    title: 'Fintech & Insurtech',
    description: 'Innovative financial and insurance tech solutions.',
    image: bankImage,
  },
  {
    title: 'Retail & E-commerce',
    description: 'Smart solutions for modern retail and e-commerce.',
    image: retailImage,
  },
  {
    title: 'Entertainment & Gaming',
    description: 'Creating immersive entertainment and gaming experiences.',
    image: entertainmentImage,
  },
  {
    title: 'Media & Communications',
    description: 'Revolutionizing media and communication landscapes.',
    image: mediaImage,
  },
  {
    title: 'Logistics',
    description: 'We build smart logistics solutions that optimize supply chains, enhance tracking, and drive operational efficiency.',
    image: Logistics,
  },
  {
    title: 'Real estate and construction',
    description: 'We provide innovative solutions for property management, construction planning, and real estate transactions.',
    image: Real,
  },
  {
    title: 'Manufacturing',
    description: 'We enhance manufacturing efficiency through automated processes and smart logistics solutions.',
    image: Manufacturing,
  },
  {
    title: 'Edtech',
    description: 'We empower educational institutions with digital solutions that enable efficient learning and management.',
    image: Edtech,
  },
  {
    title: 'Travel and hospitality',
    description: 'We streamline travel and hospitality services through smart solutions, optimizing operations and customer experience.',
    image: Travel,
  },
];

const IndustriesSection = () => {
  const [selected, setSelected] = useState(0); // default to Fintech & Insurtech
  const navigate = useNavigate();

  return (
    <div className="bg-black py-20 px-6 text-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Heading and Button */}
        <div className="flex justify-between items-center mb-12">
          <div className="text-center sm:text-left">
            <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 mb-8">
              Industries
            </h1>
            <p className="text-4xl max-w-2xl mx-auto sm:mx-0">
              Our expert teams work hand in hand in research, design, and development to create game-changing digital solutions for various industries.
            </p>
          </div>
          <button
          onClick={() => navigate('/services')}
          className="mt-8 md:mt-0 text-3xl px-14 py-6 bg-gradient-to-r from-gray-300 to-gray-500 text-white rounded-full shadow-xl hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-600 hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
        >
          View All
        </button>
        </div>

        {/* List + Content */}
        <div className="flex gap-10">
          {/* Left List */}
          <div className="w-1/3 space-y-6">
            {industriesData.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className={`flex justify-between items-center cursor-pointer group text-3xl font-semibold hover:text-gray-400 transition duration-300 transform hover:scale-110 ${
                  selected === index ? 'text-gray-300' : ''
                }`}
              >
                <span className="group-hover:underline">{item.title}</span>
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </div>
            ))}
          </div>

          {/* Right Content Box */}
          <div className="w-2/3 min-h-[300px]">
            <div className="bg-gradient-to-r from-gray-800 to-black rounded-3xl p-8 flex gap-8 items-center shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="w-1/2">
                <h2 className="text-5xl font-semibold mb-8 text-gray-300">{industriesData[selected].title}</h2>
                <p className="text-3xl text-gray-400">{industriesData[selected].description}</p>
              </div>
              <div className="w-1/2 relative">
                <img
                  src={industriesData[selected].image}
                  alt={industriesData[selected].title}
                  className="rounded-2xl object-cover w-full h-64 opacity-0 transition-opacity duration-700 ease-in-out transform hover:scale-105 hover:opacity-100"
                  style={{ opacity: 1 }} // Image will fade in when selected
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;
