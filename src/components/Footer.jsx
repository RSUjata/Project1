
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   const footerLinks = {
//     Services: [
//       'Mobile App Development',
//       'Enterprise Web Development',
//       'Digital Consultancy',
//       'AI & Data Analytics',
//       'Metaverse & Mixed Reality',
//       'UX/UI Design',
//       'Gaming',
//       'IoT & Smart Cities',
//     ],
    
//     Industries: [
//       'Media & Communications',
//       'E-Government',
//       'Entertainment & Gaming',
//       'Fintech & Insurtech',
//       'Healthcare',
//       'Retail & E-Commerce',
//     ],
//     Navigation: [
//       { name: 'Home', path: '/' },
//       { name: 'Offshore Software Development', path: '/offshore-software-development' },
//       { name: 'Case Studies', path: '/case-studies' },
//       { name: 'Careers', path: '/careers' },
//       { name: 'Contact', path: '/contact' },
//     ],
//   };

//   return (
//     <footer className="w-full bg-black text-white py-12 px-4 sm:px-10">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//         {/* Services */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Services</h3>
//           <ul className="space-y-2">
//             {footerLinks.Services.map((item, index) => (
//               <li key={index}>
//                 <Link
//                   to={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                   className="hover:text-purple-500 transition"
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

        

//         {/* Industries */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Industries</h3>
//           <ul className="space-y-2">
//             {footerLinks.Industries.map((item, index) => (
//               <li key={index}>
//                 <Link
//                   to={`/industries/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                   className="hover:text-purple-500 transition"
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Navigation */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Navigation</h3>
//           <ul className="space-y-2">
//             {footerLinks.Navigation.map((nav, index) => (
//               <li key={index}>
//                 <Link
//                   to={nav.path}
//                   className="hover:text-purple-500 transition"
//                 >
//                   {nav.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    Services: [
      'Mobile App Development',
      'Enterprise Web Development',
      'Digital Consultancy',
      'AI & Data Analytics',
      'Metaverse & Mixed Reality',
      'UX/UI Design',
      'Gaming',
      'IoT & Smart Cities',
    ],
    Industries: [
      'Media & Communications',
      'E-Government',
      'Entertainment & Gaming',
      'Fintech & Insurtech',
      'Healthcare',
      'Retail & E-Commerce',
    ],
    Navigation: [
      { name: 'Home', path: '/' },
      { name: 'Offshore Software Development', path: '/offshore-software-development' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/contact' },
    ],
  };

  return (
    <footer className="w-full bg-black text-white py-12 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-8">
        {/* Services */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            {footerLinks.Services.map((item, index) => (
              <li key={index}>
                <Link
                  to={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-purple-500 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Industries</h3>
          <ul className="space-y-2">
            {footerLinks.Industries.map((item, index) => (
              <li key={index}>
                <Link
                  to={`/industries/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-purple-500 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            {footerLinks.Navigation.map((nav, index) => (
              <li key={index}>
                <Link
                  to={nav.path}
                  className="hover:text-purple-500 transition"
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
