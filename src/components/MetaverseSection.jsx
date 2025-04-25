import React from 'react';
import processImage from '../assets/process1.png'; // Import the process1.png image

const MetaverseSection = () => {
  return (
    <>
      {/* White gap before the "Our Work Process" section */}
      <div className="bg-white py-8"></div> {/* This creates a white gap */}

      {/* Our Work Process Section */}
      <div className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side - Section Title with Larger Font, Line Underneath, and Taglines */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-5xl sm:text-6xl font-bold mb-4 text-center lg:text-left relative">
              Our Work Process
            </h2>

            {/* Line Underneath the Title */}
            <div className="absolute bottom-[-10px] left-0 w-full lg:w-[80%] mx-auto border-t-2 border-white opacity-60"></div>

            {/* Smaller Taglines */}
            <div className="mt-4 text-lg sm:text-xl text-center lg:text-left">
              <p className="mb-2">Step-by-step approach to deliver excellence.</p>
              <p className="mb-2">Crafting innovative solutions at every stage.</p>
              <p className="mb-2">Your vision, our mission – brought to life.</p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={processImage} // Use the imported process1.png image
              alt="Our Work Process"
              className="w-full sm:w-[95%] md:w-[110%] lg:w-[120%] xl:w-[130%] 
                         h-auto rounded-2xl shadow-xl object-cover mt-6"
            />
          </div>

        </div>
      </div>

      {/* White gap after the "Our Work Process" section */}
      <div className="bg-white py-8"></div> {/* This creates another white gap */}
    </>
  );
};

export default MetaverseSection;
