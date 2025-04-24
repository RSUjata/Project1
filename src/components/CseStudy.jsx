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
    { title: 'Al Qabas', description: 'AlQabas is a leading publishing company in Kuwait,...', image: case1 },
    { title: 'MBC Dream', description: 'MBC GROUP is the largest media company in...', image: case2 },
    { title: 'Shasha', description: 'Shasha is a VoD platform broadcasting movies, shows,...', image: case3 },
    { title: 'Azadeans', description: 'Azadeans is a mobile application designed specifically for...', image: case4 },
    { title: 'BLF', description: 'BLF is one of the leading banks in...', image: case5 },
    { title: 'WIZZO', description: 'WIZZO is a gaming platform in the Middle...', image: case6 },
    { title: 'Thrive', description: 'The “Thrive” mobile app provides supply and spending..', image: case7 },
    { title: 'MBC Academy', description: 'MBC Academy is a platform that refines and...', image: case8 },
    { title: 'Menasa', description: 'Menasa is a platform for e-commerce businesses.', image: case1 },
    { title: 'Smart Forest', description: 'Smart Forest is an initiative by Eurisko following...', image: case2 },
    { title: 'Oulo', description: 'Oulo is a Middle-Eastern influencer marketing platform.', image: case3 },
    { title: 'FlexxPay', description: 'FlexxPay is a FinTech company that provides a...', image: case4 },
    { title: 'Best Assistance', description: 'Best Assistance is an insurance company that specializes...', image: case5 },
    { title: 'Navleb', description: 'Navleb is a Lebanese company specializing in map...', image: case6 },
    { title: 'Sinyar Diving', description: 'AMAN, the Qatari Protection and Social Rehabilitation Center,...', image: case7 },
    { title: 'Energo', description: 'Aramco is one of the world..', image: case8 },
    { title: 'Animal Discovery', description: 'The project consisted of launching an educational game...', image: case1 },
    { title: 'Altanfeethi', description: 'Altanfeethi company is an “Executive Office Company” managing...', image: case2 },
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
  const itemsPerPage = 16; // Change here to show 16 items per page
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
              onClick={() => navigate('/casestudy')}
              className="bg-white text-black font-semibold px-6 py-2 rounded-lg hover:bg-gray-200"
            >
              View All
            </button>
          </div>

          <div className="flex justify-center space-x-4 mb-8 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-6 py-3 text-lg rounded-full font-medium ${
                  selectedCategory === cat
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

          {/* Images and Case Studies (Horizontal) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {paginatedData.concat(paginatedData).map((item, index) => ( // Duplicate the data to show 2 times
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-xl"
                style={{
                  height: '400px', // Set a fixed height for each card
                }}
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

                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 text-white p-6 transform translate-y-full group-hover:translate-y-0 transition duration-500 ease-in-out`}
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
                  className={`px-4 py-2 rounded ${
                    page === idx + 1
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
