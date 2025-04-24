import React from 'react';
import MetaverseImage from '../assets/meta.webp';
import roadmapImg from '../assets/roadmap.png';

const MetaverseSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-[black] to-blue-900
    text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        
        {/* Left Side - Section Title & Roadmap Image */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Work Progress</h2>
          
          <img
            src={roadmapImg}
            alt="Metaverse Roadmap"
            className="w-full max-w-[95%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[750px] xl:max-w-[800px] 
                       h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 
                       rounded-2xl shadow-xl object-contain mt-6"
          />
        </div>

        {/* Right Side - Metaverse Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-12 sm:mt-16 md:mt-24 lg:mt-40 xl:mt-52">
  <img
    src={MetaverseImage}
    alt="Metaverse Illustration"
    className="w-full max-w-[95%] h-auto rounded-lg shadow-lg object-cover"
  />
</div>



      </div>
    </div>
  );
};

export default MetaverseSection;
