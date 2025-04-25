import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    Services: [
      'Custom Software Development',
      'Artificial Intelligence & Data Analytics',
      'Mobile App Development',
      'Website Development',
      'Metaverse & Mixed Reality',
      'User Experience/User Interface Design',
      'Enterprise Web Development',
      'Digital Consultancy',
    ],
    Industries: [
      'Media & Communications',
      'E-Government',
      'Entertainment & Gaming',
      'Fintech & Insurtech',
      'Healthcare',
      'Retail & E-Commerce',
    ],
    Home: [
      { name: 'Offshore Software Development', path: '/offshore-software-development' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Contact', path: '/contact' },
    ],
  };

  return (
    <footer className="w-full bg-black text-white py-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-12">
        {/* Services */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6">Services</h3>
          <ul className="space-y-4">
            {footerLinks.Services.map((item, index) => (
              <li key={index}>
                <Link
                  to={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-purple-500 transition text-lg sm:text-xl lg:text-2xl"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6">Industries</h3>
          <ul className="space-y-4">
            {footerLinks.Industries.map((item, index) => (
              <li key={index}>
                <Link
                  to={`/industries/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-purple-500 transition text-lg sm:text-xl lg:text-2xl"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Home */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6">Home</h3>
          <ul className="space-y-4">
            {footerLinks.Home.map((nav, index) => (
              <li key={index}>
                <Link
                  to={nav.path}
                  className="hover:text-purple-500 transition text-lg sm:text-xl lg:text-2xl"
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom - Optional */}
    </footer>
  );
};

export default Footer;
