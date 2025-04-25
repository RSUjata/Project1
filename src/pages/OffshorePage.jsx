import React from 'react';
import Navbar from '../components/Navbar'; // Adjust path as needed
import Footer from '../components/Footer'; // Adjust path as needed
import BelowFooter from '../components/BelowFooter'; // Import BelowFooter
import { Link } from 'react-router-dom';

const OffshorePage = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div className="bg-black text-white min-h-[40vh] flex flex-col items-center justify-center px-4 text-center relative">
                <h1 className="text-6xl sm:text-7xl font-extrabold mb-6 tracking-tight">Offshore Software Development</h1>
                <p className="text-xl sm:text-2xl text-gray-300 max-w-xl">
                    Accelerate your digital transformation with Eurisko’s high-quality offshore software development services, tailored specifically for your enterprise growth and innovation.
                </p>
            </div>

            {/* Breadcrumb */}
            <div className="bg-white px-4 py-6 shadow-sm">
                <div className="max-w-7xl mx-auto text-xl text-gray-600">
                    Home / <span className="text-black font-bold">Offshore Development</span>
                </div>
            </div>

            {/* Offshore Development Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-4xl font-bold text-black mb-6">Why Choose Eurisko for Offshore Software Development?</h2>
                <p className="text-xl text-gray-700 mb-8">
                    At Eurisko, we blend cutting-edge technology, industry-leading expertise, and agile methodologies to deliver superior offshore software solutions. Our dedicated teams help you achieve rapid scalability, reduce operational costs, and maintain a competitive edge in your industry.
                </p>

                {/* Image Section 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                    <div>
                        <img src="Advanced-Technology.jpg" alt="Advanced Technology" className="w-full h-auto rounded-lg" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold mb-4">Proven Expertise</h3>
                        <p className="text-lg text-gray-600">
                            Benefit from our experienced professionals skilled in the latest technologies and best practices, ensuring exceptional results tailored to your specific business needs.
                        </p>
                    </div>
                </div>

                {/* Image Section 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                    <div>
                        <img src="Scalable-Offshore-Development-Teams@2x.png" alt="Scalable Teams" className="w-full h-auto rounded-lg" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold mb-4">Scalable Teams</h3>
                        <p className="text-lg text-gray-600">
                            Quickly scale up or down your development team to align perfectly with your project's evolving requirements, ensuring maximum efficiency and cost-effectiveness.
                        </p>
                    </div>
                </div>

                {/* Image Section 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                    <div>
                        <img src="Digital-Onboarding-System.jpg" alt="Agile Methodology" className="w-full h-auto rounded-lg" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold mb-4">Agile Methodology</h3>
                        <p className="text-lg text-gray-600">
                            Our agile-driven processes ensure rapid development cycles, continuous improvements, and transparent communication at every project stage.
                        </p>
                    </div>
                </div>

                {/* Image Section 4 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                    <div>
                        <img src="Offshore-Development-Cost-Savings.png" alt="Cost Savings" className="w-full h-auto rounded-lg" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-semibold mb-4">Cost Savings</h3>
                        <p className="text-lg text-gray-600">
                            By working with our offshore software development teams, you save on salaries, benefits packages, and overhead associated with recruiting and retaining full-time staff.
                        </p>
                    </div>
                </div>

                {/* Our Offshore Software Development Services */}
                <h2 className="text-4xl font-bold text-black mb-6">Our Offshore Software Development Services</h2>
                <p className="text-xl text-gray-700 mb-8">
                    Eurisko offers a comprehensive suite of offshore software development services designed to accelerate your digital transformation and drive business innovation.
                </p>

                {/* Services */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className="border p-6 rounded-lg text-center">
                        <h3 className="text-xl font-semibold mb-4">Artificial Intelligence & Data Analytics</h3>
                        <p className="text-lg text-gray-600 mb-4">
                            Our offshore specialists leverage advanced AI, machine learning, and data analytics technologies to provide powerful insights and significantly enhance your operational efficiency across global operations.
                        </p>
                        <Link to="/services/ai" className="text-blue-600">Read More</Link>
                    </div>

                    <div className="border p-6 rounded-lg text-center">
                        <h3 className="text-xl font-semibold mb-4">Mobile App Development</h3>
                        <p className="text-lg text-gray-600 mb-4">
                            Utilize our offshore expertise in native frameworks, React Native, and Flutter to efficiently build high-performance, user-centric mobile applications at optimal cost and quality.
                        </p>
                        <Link to="/services/mobile-app" className="text-blue-600">Read More</Link>
                    </div>

                    <div className="border p-6 rounded-lg text-center">
                        <h3 className="text-xl font-semibold mb-4">Enterprise Web Development</h3>
                        <p className="text-lg text-gray-600 mb-4">
                            We develop robust, secure enterprise web portals and applications through offshore development, leveraging microservices architecture and modern programming languages to ensure seamless global integration.
                        </p>
                        <Link to="/services/web-development" className="text-blue-600">Read More</Link>
                    </div>

                    <div className="border p-6 rounded-lg text-center">
                        <h3 className="text-xl font-semibold mb-4">User Experience & User Interface Design</h3>
                        <p className="text-lg text-gray-600 mb-4">
                            Our offshore UI/UX specialists craft intuitive and visually appealing interfaces tailored specifically for global audiences, ensuring engaging experiences across all digital platforms.
                        </p>
                        <Link to="/services/ui-ux" className="text-blue-600">Read More</Link>
                    </div>
                </div>

            </div>

            {/* Footer */}
            <Footer />

            {/* Below Footer */}
            <BelowFooter />
        </div>
    );
};

export default OffshorePage;
