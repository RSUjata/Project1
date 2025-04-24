// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const GetInTouchBox = () => {
//   const navigate = useNavigate();

//   const handleContactClick = () => {
//     navigate('/contact'); // redirect to your contact page
//   };

//   return (
//     <div className="w-full bg-gray-100 py-16 px-4 sm:px-10">
//       <div className="max-w-6xl mx-auto bg-black rounded-2xl shadow-lg p-10 md:flex md:items-center md:justify-between">
//         {/* Left Side Text */}
//         <div className="md:w-3/4 space-y-4">
//           <h2 className="text-2xl sm:text-3xl font-bold text-white-900">Let’s get in touch!</h2>
//           <p className="text-white-600 text-base sm:text-lg">
//             Our team is ready to discuss your next big idea and execute your project.
//           </p>
//         </div>

//         {/* Right Side Button */}
//         <div className="mt-6 md:mt-0 md:w-1/4 flex justify-start md:justify-end">
//           <button
//             onClick={handleContactClick}
//             className="bg-purple-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300"
//           >
//             Get in Touch
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetInTouchBox;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const GetInTouchBox = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="w-full bg-gray-100 py-16 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto bg-black rounded-2xl shadow-lg p-10 flex flex-wrap items-start justify-between gap-6">
        {/* Left Side Content */}
        <div className="w-full md:w-3/4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Let’s get in touch!</h2>
          <p className="text-white text-base sm:text-lg">
            Our team is ready to discuss your next big idea and execute your project.
          </p>

          <button
            onClick={handleContactClick}
            className="mt-4 bg-purple-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchBox;
