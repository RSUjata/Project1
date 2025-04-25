import React from 'react';

// Button Component
const Button = ({ text }) => (
  <button className="bg-black text-white py-3 px-6 rounded-full text-2xl font-semibold">{text}</button>
);

// Navbar Component
const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4">
    <ul className="flex space-x-6">
      {/* Add other links as needed */}
    </ul>
  </nav>
);

// ConsultingPage Component
const ConsultingPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="bg-black text-white min-h-[40vh] flex flex-col items-center justify-center px-4 text-center relative">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">Disrupting Consulting</h1>
        <p className="text-2xl sm:text-3xl md:text-4xl text-gray-300 max-w-4xl px-4">
          Change how your audience experiences your content, reading, listening, and watching, with emerging technologies.
        </p>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white px-4 py-6 shadow-sm">
        <div className="max-w-7xl mx-auto text-2xl text-gray-600">
          Home / <span className="text-black font-bold">Industries</span> / <span className="text-black font-bold">Consulting</span>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-4xl font-extrabold text-black mb-4">Disrupting Consulting</h2>
          <p className="text-xl text-black font-bold mb-4">
            New-Gen technologies dramatically shifted digital content consumption, restructuring working models in the music, television, film, gaming, and publishing industries.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Streaming videos, gaming, and social media are increasingly interrelated, so consulting companies must apply visionary technologies and user-centric strategies to penetrate the market, scale, and flourish.
          </p>
          
          {/* Get a Demo Button */}
          <div className="flex justify-center">
            <Button text="Get a Demo" />
          </div>
        </div>
      </div>

      {/* Eurisko Helps Section */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h3 className="text-3xl font-extrabold text-black mb-6">Eurisko Helps</h3>
        <p className="text-lg text-gray-600 mb-6">
          Eurisko helps consulting companies establish a solid presence in the ecosystem, by delivering an outstanding user experience, through the implementation of the latest technologies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature Items */}
          <div className="feature-item text-center">
            <h4 className="font-semibold text-xl text-gray-700">Hyper-personalization</h4>
            <p className="text-gray-600">Use real-time data to deliver custom and targeted experiences and messages to users in real-time.</p>
          </div>
          <div className="feature-item text-center">
            <h4 className="font-semibold text-xl text-gray-700">Ultimate Accessibility</h4>
            <p className="text-gray-600">Enable users to have the same experience and high quality across all devices, anytime, anywhere.</p>
          </div>
          <div className="feature-item text-center">
            <h4 className="font-semibold text-xl text-gray-700">Gamification</h4>
            <p className="text-gray-600">Add game mechanics to online platforms to engage users along the customer journey.</p>
          </div>
          <div className="feature-item text-center">
            <h4 className="font-semibold text-xl text-gray-700">Privacy & Security</h4>
            <p className="text-gray-600">Prioritize privacy, allow users to share data and access, navigate and consume your content safely.</p>
          </div>
        </div>
      </div>

      {/* Operational Optimization Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h4 className="text-2xl font-semibold text-gray-800 mb-6">Optimize Internal Operations</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Image Items */}
          <div className="operation-item text-center">
            <img src="/assets/images/Enterprise-Content-Management-ECM.jpg" alt="Enterprise Content Management" className="mx-auto rounded-lg mb-4" />
            <p className="text-lg text-gray-600">Enterprise Content Management (ECM)</p>
          </div>
          <div className="operation-item text-center">
            <img src="/assets/images/Consumer-Behavior-Analysis.jpg" alt="Consumer Behavior Analysis" className="mx-auto rounded-lg mb-4" />
            <p className="text-lg text-gray-600">Consumer Behavior Analysis</p>
          </div>
          <div className="operation-item text-center">
            <img src="/assets/images/Cloud-management-and-workflows.jpg" alt="Cloud Management" className="mx-auto rounded-lg mb-4" />
            <p className="text-lg text-gray-600">Cloud Management and Workflows</p>
          </div>
          <div className="operation-item text-center">
            <img src="/assets/images/Privacy-Security.jpg" alt="Privacy & Security" className="mx-auto rounded-lg mb-4" />
            <p className="text-lg text-gray-600">Privacy & Security</p>
          </div>
        </div>
      </div>

      {/* Blockchain for Digital Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h3 className="text-3xl font-extrabold text-black mb-6">Protect Your Digital Content with Blockchain</h3>
        <p className="text-lg text-gray-600 mb-6">
          By tracking the lifecycle of any digital asset, blockchain technology can reduce piracy of intellectual property, protect digital content, and facilitate the distribution of authentic digital collectibles.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          The open and decentralized nature of the public Ethereum platform allows actors in the consulting industry to:
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-600 mb-6">
          <li>Legally enforce their rights once infringement occurs</li>
          <li>Reduce intermediaries between them and consumers</li>
          <li>Benefit from micropayments enabled by consumption-based pricing mechanisms</li>
        </ul>
      </div>

      {/* AI for News Publishing */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h3 className="text-3xl font-extrabold text-black mb-6">AI for News Publishing</h3>
        <p className="text-lg text-gray-600 mb-6">
          Emerging technologies empower consulting companies to stay authoritative, keep up with rapid changes, and respond faster to users.
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-600 mb-6">
          <li><strong>Content authentication:</strong> AI makes it possible to discover plagiarism, tackle fake news, and analyze images and videos.</li>
          <li><strong>Faster publications:</strong> AI helps collect information, and write and edit content in a faster and more seamless way.</li>
          <li><strong>Personalized news:</strong> AI allows publishers to recommend, and notify users, with personalized topics.</li>
          <li><strong>Content Moderation:</strong> AI identifies the user’s age and gender before broadcasting any content that might be offensive or objectionable.</li>
        </ul>
      </div>

      {/* AI for OTT Platforms */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h3 className="text-3xl font-extrabold text-black mb-6">AI for OTT Platforms</h3>
        <ul className="list-disc pl-5 text-lg text-gray-600 mb-6">
          <li><strong>Content classification and categorization:</strong> AI identifies details about the movie, scenes, and crew, to determine the movie category.</li>
          <li><strong>Search algorithm optimization:</strong> AI helps users find relevant content while searching, using natural language processing.</li>
          <li><strong>Personalized recommendations:</strong> AI uses machine learning to deliver personalized content according to users’ preferences and watching history.</li>
          <li><strong>Secure chat, video, and audio conferencing:</strong> AI creates a safe space for OTT users to communicate and consume content at high security.</li>
        </ul>
      </div>

      {/* AI for Events and Live Streaming */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h3 className="text-3xl font-extrabold text-black mb-6">AI for Events and Live Streaming</h3>
        <ul className="list-disc pl-5 text-lg text-gray-600 mb-6">
          <li><strong>Personalized content:</strong> AI analyzes the user’s demographics and watching history, before broadcasting live streaming events based on their preferences.</li>
          <li><strong>AI chatbots:</strong> AI enables chatbots to understand users, and converts them into customers, by selling them event tickets, upselling, and answering their queries.</li>
          <li><strong>Real-time data:</strong> AI allows companies to collect real-time data from their users, and craft smarter marketing campaigns.</li>
        </ul>
      </div>

      {/* Book a Demo Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h3 className="text-3xl font-extrabold text-black mb-6">Want to bring innovation to the heart of your consulting company?</h3>
        <Button text="Book a Demo" />
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 Eurisko. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ConsultingPage;
