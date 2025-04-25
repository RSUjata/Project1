import React from 'react';

// Mock Button component if not defined
const Button = ({ text }) => (
  <button className="bg-blue-500 text-white py-2 px-4 rounded">{text}</button>
);

const Consulting = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Disrupting Consulting</h1>
      <p className="text-lg text-gray-600 mb-6">
        Change how consulting firms leverage emerging technologies to streamline operations, improve client engagement, and drive innovation.
        Digital transformation has reshaped how consulting services are delivered, utilizing next-gen technologies such as AI, data analytics, and automation to enhance decision-making and strategic insights.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">New-Gen Technologies for Consulting Firms</h2>
      <p className="text-lg text-gray-600 mb-6">
        Consulting companies must leverage modern technologies to optimize processes, scale their operations, and provide superior solutions to clients.
      </p>

      <Button text="Get a Demo" />

      <section className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Eurisko Helps Consulting Firms</h3>
        <p className="text-lg text-gray-600 mb-8">
          Eurisko helps consulting firms establish a solid presence by delivering a tailored user experience through the implementation of the latest technologies, ensuring growth, scalability, and customer satisfaction.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="feature-item text-center">
            <h4 className="font-semibold text-xl text-gray-700">AI-Driven Insights</h4>
            <p className="text-gray-600">Utilize artificial intelligence to generate valuable insights, optimize strategies, and provide recommendations for clients in real-time.</p>
          </div>
          <div className="feature-item text-center">
            <h4 className="font-semibold text-xl text-gray-700">Data-Driven Strategies</h4>
            <p className="text-gray-600">Leverage big data analytics to develop actionable strategies that enhance client success and business outcomes.</p>
          </div>
          <div className="feature-item text-center">
            <h4 className="font-semibold text-xl text-gray-700">Automation of Workflows</h4>
            <p className="text-gray-600">Automate repetitive tasks and processes to enhance efficiency, reduce errors, and increase overall operational productivity.</p>
          </div>
          <div className="feature-item text-center">
            <h4 className="font-semibold text-xl text-gray-700">Scalable Solutions</h4>
            <p className="text-gray-600">Implement scalable technology solutions that help consulting firms expand their services while maintaining quality and client satisfaction.</p>
          </div>
        </div>

        <h4 className="text-xl font-semibold text-gray-800 mt-12 mb-6">Optimize Internal Operations</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </section>

      <h2 className="text-2xl font-semibold text-gray-800 mt-12 mb-6">Bringing Innovation to the Heart of Consulting</h2>
      <p className="text-lg text-gray-600 mb-6">
        Want to leverage cutting-edge technologies and bring innovation to the heart of your consulting firm? Our solutions help you deliver faster, more intelligent, and impactful consulting services to your clients.
      </p>

      <Button text="Book a Demo" />
    </div>
  );
};

export default Consulting;
