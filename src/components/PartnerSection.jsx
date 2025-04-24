import React from 'react';

import PwCLogo from '../assets/pwc.jpg';
import MongoDBLogo from '../assets/mongodb.jpg';
import AWSLogo from '../assets/aws.png';
import DeloitteLogo from '../assets/deloite.png';
import KPMG from '../assets/kpmg.png';
import Metvy from '../assets/metvy.png';
import company from '../assets/mc.png';


const partners = [
  { name: 'KPMG', logo: KPMG },
  { name: 'Deloitte', logo: DeloitteLogo },
  { name: 'MC', logo: company },

  { name: 'Metvy', logo: Metvy },
];

const OurPartnersSection = () => {
  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stylish Title with Yellow Underline */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-extrabold text-white inline-block relative pb-3">
            Our Partners
            <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 w-24 h-1 bg-yellow-400 rounded-full"></span>
          </h2>
        </div>

        {/* Logo Scrolling Section */}
        <div className="relative w-full overflow-hidden">
          <div className="flex space-x-16 whitespace-nowrap animate-scroll-x items-center">
            {partners.concat(partners).map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-32 sm:w-40 md:w-48 lg:w-56 h-20 sm:h-24 md:h-28 lg:h-32 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full w-full object-contain brightness-110 hover:brightness-125 transition duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Animation */}
      <style jsx>{`
        @keyframes scrollX {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-x {
          animation: scrollX 35s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default OurPartnersSection;
