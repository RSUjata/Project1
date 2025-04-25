import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Importing your images
import case1 from '../assets/s1.webp';
import case2 from '../assets/s2.jpg';
import case3 from '../assets/s3.png';
import case4 from '../assets/s4.jpg';
import case5 from '../assets/s5.webp';
import case6 from '../assets/s7.avif';
import case7 from '../assets/s8.jpg';
import case8 from '../assets/s4.jpg';

const categories = ['All', 'Mobile Apps', 'Gaming', 'UI/UX Design'];

const caseStudyData = {
  All: [
    { title: 'Al Qabas', description: 'A full digital transformation for Kuwait’s top news publisher.', image: case1 },
    { title: 'MBC Dream', description: 'An interactive TV app for the region’s leading media company.', image: case2 },
    { title: 'Shasha', description: 'A custom VoD platform for streaming movies and shows on-demand.', image: case3 },
    { title: 'Azadeans', description: 'A lifestyle and rewards app tailored for retail fashion customers.', image: case4 },
    { title: 'BLF', description: 'Mobile banking reimagined for one of the top Lebanese banks.', image: case5 },
    { title: 'WIZZO', description: 'A gamified experience platform for the MENA gaming community.', image: case6 },
    { title: 'Thrive', description: 'A finance management app to track business spending and logistics.', image: case7 },
    { title: 'MBC Academy', description: 'An educational portal to discover and train future media talents.', image: case8 },
    { title: 'Menasa', description: 'A scalable e-commerce solution for growing online retailers.', image: case1 },
    { title: 'Smart Forest', description: 'A sustainability-focused platform for environmental monitoring.', image: case2 },
    { title: 'Oulo', description: 'An influencer marketing hub connecting brands with content creators.', image: case3 },
    { title: 'FlexxPay', description: 'A FinTech app offering early wage access and financial wellness.', image: case4 },
    { title: 'Best Assistance', description: 'A smart insurance portal with real-time claims tracking.', image: case5 },
    { title: 'Navleb', description: 'A geographic data app providing mapping and navigation services.', image: case6 },
    { title: 'Sinyar Diving', description: 'An educational diving game raising awareness about marine life.', image: case7 },
    { title: 'Energo', description: 'A real-time data dashboard for the energy sector.', image: case8 },
    { title: 'Animal Discovery', description: 'A kids’ learning game focused on wildlife and habitats.', image: case1 },
    { title: 'Altanfeethi', description: 'An executive lounge and travel service booking platform.', image: case2 },
  ],

  'Mobile Apps': [
    { title: 'Mobile App 1', image: case1 },
    { title: 'Mobile App 2', image: case2 },
    { title: 'Mobile App 3', image: case3 },
  ],
  Gaming: [
    { title: 'Game 1', image: case4 },
    { title: 'Game 2', image: case5 },
    { title: 'Game 3', image: case6 },
  ],
  'UI/UX Design': [
    { title: 'UI/UX 1', image: case7 },
    { title: 'UI/UX 2', image: case8 },
  ],
};

const CaseStudiesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const data = caseStudyData[selectedCategory];
  const itemsPerPage = 10; // Showing 10 items per page
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <>
      {/* White gap */}
      <div className="bg-white py-16"></div>

      {/* Case Studies Section */}
      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12 flex-wrap gap-6">
            <div>
              <h1 className="text-5xl font-bold mb-4 text-white">Case Studies</h1>
              <p className="text-lg">Eurisko has over a decade of experience leveraging next-gen technologies in the MENA region.</p>
            </div>
            <button
          onClick={() => navigate('/services')}
          className="mt-8 md:mt-0 text-3xl px-14 py-6 bg-gradient-to-r from-gray-300 to-gray-500 text-white rounded-full shadow-xl hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-600 hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
        >
          View All
        </button>
          </div>

          <div className="flex justify-center space-x-4 mb-8 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-6 py-3 text-lg rounded-full font-medium ${selectedCategory === cat
                    ? 'bg-yellow-500 text-black'
                    : 'bg-opacity-30 hover:bg-white hover:text-black'
                  }`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setPage(1);
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Images and Case Studies */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {paginatedData.map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-xl"
                style={{ height: '400px' }}
              >
                {/* Image */}
                <div className="w-full h-full flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    style={{ background: 'transparent' }}
                  />
                </div>

                {/* Hover Overlay */}
                <div
                  className="absolute bottom-0 top-1/2 left-0 right-0 flex flex-col items-center justify-center bg-white/80 text-black p-6 transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out"
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-base mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10 space-x-4">
              {Array.from({ length: totalPages }, (_, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-2 rounded ${page === idx + 1
                      ? 'bg-yellow-500 text-black'
                      : 'bg-black bg-opacity-40 hover:bg-yellow-500 hover:text-black'
                    }`}
                  onClick={() => setPage(idx + 1)}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CaseStudiesSection;
