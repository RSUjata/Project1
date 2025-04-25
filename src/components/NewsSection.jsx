import React from 'react';
import { useNavigate } from 'react-router-dom';
import news1 from '../assets/news1.jpg';
import news2 from '../assets/news2.jpg';
import news3 from '../assets/news3.jpg';
import news4 from '../assets/news4.jpg';
import news5 from '../assets/news5.jpeg';
import news6 from '../assets/news2.jpg';
import news7 from '../assets/news1.jpg';
import news8 from '../assets/news3.jpg';

const newsItems = [
  {
    image: news1,
    title: 'Transforming Offshore Software Development through Innovation and Excellence',
    date: 'April 1st, 2025',
    tags: ' Offshore Software Development',
    link: '/news/eurisko-academy-transformation',
  },
  {
    image: news2,
    title: ' Participates in BDD Career Fair to Connect with Emerging Tech Talent',
    date: 'March 3rd, 2025',
    tags: 'IT Tech',
    link: '/news/bdd-career-fair',
  },
  {
    image: news3,
    title: 'Celebrates a Milestone: Joy Awards App Surpasses 14.8 Million Downloads',
    date: 'January 21st, 2025',
    tags: 'Achievements, Our Apps, Saudi Arabia',
    link: '/news/joy-awards-app-milestone',
  },
  {
    image: news4,
    title: ' Appreciation at the Telecom Review Leaders’ Summit',
    date: 'December 11th, 2024',
    tags: 'Achievements',
    link: '/news/telecom-review-summit',
  },
  {
    image: news5,
    title: 'Celebrating Our Success and Future Prospects',
    date: 'July 30th, 2024',
    tags: 'IT Tech',
    link: '/news/academy-success',
  },
  {
    image: news6,
    title: ' Launches Groundbreaking AI and Data Analytics Academy',
    date: 'July 15th, 2024',
    tags: 'Artificial Intelligence, Eurisko Academy, Press Releases',
    link: '/news/ai-data-academy',
  },
  {
    image: news7,
    title: ' opens extended labs showcasing cutting-edge innovations',
    date: 'July 5th, 2024',
    tags: 'Achievements',
    link: '/news/extended-labs',
  },
  {
    image: news8,
    title: 'Showcases Tech & Engages Students at University Job Fairs',
    date: 'May 28th, 2024',
    tags: 'IT Tech',
    link: '/news/university-job-fairs',
  },
];

const NewsSection = () => {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <div className="w-full bg-gray-100 py-16 px-4 sm:px-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mb-10">
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-3xl font-bold text-black">Our Latest Blogs & Posts</h2>
          <p className="text-gray-700">
            Stay updated on the latest tech discoveries and our ongoing innovations.
          </p>
        </div>
        <button
          onClick={() => navigate('/services')}
          className="mt-8 md:mt-0 text-3xl px-14 py-6 bg-gradient-to-r from-gray-300 to-gray-500 text-white rounded-full shadow-xl hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-600 hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
        >
          View All
        </button>




      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {newsItems.map((item, index) => (
          <div key={index} className="group cursor-pointer" onClick={() => handleNavigate(item.link)}>
            <div className="overflow-hidden rounded-lg shadow-lg bg-white transform group-hover:scale-105 transition duration-300">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:opacity-75 transition duration-300"
              />
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="text-base font-semibold text-gray-800 group-hover:text-purple-600 transition duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.date} | {item.tags}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
