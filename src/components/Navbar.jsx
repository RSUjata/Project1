
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import log from '../assets/p-logo.png';
import LogoBlack from '../assets/LogoBlack.png';
import { HiChevronDown } from 'react-icons/hi';
import {
  FaCode, FaPaintBrush, FaServer, FaMobileAlt, FaCloud,
  FaLock, FaCogs, FaRobot, FaIndustry, FaMicrochip,
  FaBolt, FaDatabase, FaBriefcase, FaFlask
} from 'react-icons/fa';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  const servicesOptions = [
    { name: 'Web Development', icon: <FaCode className="text-blue-600" /> },
    { name: 'UI/UX Design', icon: <FaPaintBrush className="text-pink-500" /> },
    { name: 'Backend Services', icon: <FaServer className="text-gray-700" /> },
    { name: 'Mobile Apps', icon: <FaMobileAlt className="text-green-500" /> },
    { name: 'Cloud Solutions', icon: <FaCloud className="text-indigo-500" /> },
    { name: 'Cybersecurity', icon: <FaLock className="text-red-500" /> },
    { name: 'DevOps', icon: <FaCogs className="text-yellow-500" /> },
    { name: 'AI/ML', icon: <FaRobot className="text-purple-500" /> },
  ];

  const industriesOptions = [
    { name: 'Manufacturing', icon: <FaIndustry className="text-yellow-600" /> },
    { name: 'Electronics', icon: <FaMicrochip className="text-indigo-600" /> },
    { name: 'Energy', icon: <FaBolt className="text-orange-500" /> },
    { name: 'Data Services', icon: <FaDatabase className="text-green-600" /> },
    { name: 'Consulting', icon: <FaBriefcase className="text-blue-500" /> },
    { name: 'R&D', icon: <FaFlask className="text-pink-600" /> },
  ];

  const handleLinkClick = (path) => navigate(path);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white text-black shadow' : 'bg-transparent text-white'
      }`}
    >
      <div className={`flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-6'
      }`}>
        <Link to="/" className="flex items-center transition-all duration-300">
          <img
            src={isScrolled ? LogoBlack : log} // Conditionally switch the logo
            alt="Logo"
            className={`transition-all duration-300 ${isScrolled ? 'w-20 h-20' : 'w-32 h-32'}`}
          />
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base md:text-lg lg:text-xl font-semibold mr-4 sm:mr-6 md:mr-10 lg:mr-20">
          <div
            className="relative"
            onMouseEnter={() => setMenuOpen('services')}
            onMouseLeave={() => setMenuOpen(null)}
          >
            <button className="flex items-center">
              Services <HiChevronDown className="ml-1" />
            </button>
            {menuOpen === 'services' && (
              <div className="fixed top-[100px] left-[5%] md:left-[10%] w-[90%] md:w-[80%] bg-white text-black rounded-xl shadow-xl p-6 z-40">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {servicesOptions.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleLinkClick(`/services/${index}`)}
                      className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded-md text-left w-full"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setMenuOpen('industries')}
            onMouseLeave={() => setMenuOpen(null)}
          >
            <button className="flex items-center">
              Industries <HiChevronDown className="ml-1" />
            </button>
            {menuOpen === 'industries' && (
              <div className="fixed top-[100px] left-[5%] md:left-[10%] w-[90%] md:w-[80%] bg-white text-black rounded-xl shadow-xl p-6 z-40">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {industriesOptions.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleLinkClick(`/industries/${index}`)}
                      className="flex items-center gap-2 p-3 hover:bg-gray-100 rounded-md text-left w-full"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/offshore" className="hover:underline">
            Offshore Development
          </Link>
          <Link to="/case-studies" className="hover:underline">
            Case Studies
          </Link>
          <Link to="/news" className="hover:underline">
            Blogs
          </Link>

          <Link
            to="/contact"
            className={`rounded-full px-4 py-2 font-semibold transition-colors duration-200 ${
              isScrolled ? 'text-black hover:text-purple-600' : 'text-white hover:text-purple-400'
            }`}
          >
            Get in touch now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
