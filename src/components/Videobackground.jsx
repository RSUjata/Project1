// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// import img1 from '../assets/br4.png';
// import img2 from '../assets/br1.jpeg';
// import img3 from '../assets/rb3.png';
// import img4 from '../assets/br2.jpeg';

// const slides = [
//   {
//     image: img1,
//     text: "#1 Global IT and Digital Transformation agency",
//   },
//   {
//     image: img2,
//     text: "Driving Into Tomorrow",
//   },
//   {
//     image: img3,
//     text: "Engineering Speed and Style",
//   },
//   {
//     image: img4,
//     text: "Eco-Friendly and Efficient Journeys",
//   },
// ];

// const categories = [
//   {
//     title: "Digital Transformation",
//     description: "Pioneering  custom software development in USA, UAE, Canada, UK,Saudi Arabia",
//   },
//   {
//     title: "Metaverse",
//     description: "Crafting the metaverse of tomorrow, today",
//   },
//   {
//     title: "Artificial Intelligence",
//     description: "The future of technology, and the technology of the future",
//   },
//   {
//     title: "Virtual/Augmented Reality",
//     description: "Reality-expanding technology solutions",
//   },
// ];

// function ImageSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [activeIndex, setActiveIndex] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleButtonClick = () => {
//     navigate('/contact');
//   };

//   return (
//      <div className="relative w-full h-screen bg-gradient-to-r from-blue-900 via-[black] to-blue-900 overflow-hidden">
   

//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute top-0 left-0 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-12 transition-opacity duration-1000 ease-in-out transform ${
//             currentIndex === index
//               ? 'opacity-100 z-10 scale-100 animate-fade-in-up'
//               : 'opacity-0 z-0 scale-95'
//           }`}
//         >
//           <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
//             {/* Left Side Text */}
//             <div className="text-white text-center md:text-left md:w-1/2 space-y-6 animate-slide-left">
//               <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight transition-transform duration-700">
//                 {slide.text}
//               </h1>
//               <button
//                 onClick={handleButtonClick}
//                 className="px-6 py-3 bg-white text-black rounded-full hover:text-purple-600 border border-black transition-colors duration-200"
//               >
//                 Get in Touch Now
//               </button>
//             </div>

//             {/* Right Side Image */}
//             <div className="md:w-1/2 mt-6 md:mt-0 w-full max-w-md md:max-w-full animate-zoom-in">
//               <img
//                 src={slide.image}
//                 alt="Slide"
//                 className="w-full h-auto rounded-2xl shadow-xl object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[450px] mx-auto transition-transform duration-1000 ease-in-out"
//               />
//             </div>
//           </div>
//         </div>
//       ))}

//     {/* Bottom Category Section */}
// <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-sm px-4 sm:px-10 py-6">
//   <div className="max-w-7xl mx-auto">
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full">
//       {categories.map((item, index) => {
//         const isActive = activeIndex === index;
//         return (
//           <button
//             key={index}
//             onClick={() => setActiveIndex(index)} // Set active on click
//             className="relative group text-left p-4 w-full transition-all duration-300"
//           >
//             <div className="flex flex-col items-start space-y-1">
//               {/* Title */}
//               <div
//                 className={`font-semibold transition-colors duration-300
//                   text-lg sm:text-xl
//                   ${
//                     isActive
//                       ? 'text-white'
//                       : 'text-purple-400 group-hover:text-white'
//                   }`}
//               >
//                 {item.title}
//               </div>

//               {/* Description */}
//               <div
//                 className={`text-sm sm:text-base transition-colors duration-300
//                   ${
//                     isActive
//                       ? 'text-white'
//                       : 'text-gray-400 group-hover:text-white'
//                   }`}
//               >
//                 {item.description}
//               </div>
//             </div>

//             {/* Underline animation */}
//             <span
//               className={`absolute left-0 -bottom-1 h-0.5 bg-purple-500 transition-all duration-300 ease-out ${
//                 isActive ? 'w-full' : 'w-0 group-hover:w-full'
//               }`}
//             />
//           </button>
//         );
//       })}
//     </div>
//   </div>
// </div>

//         </div>
      
//   );
// }

// export default ImageSlider;

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
