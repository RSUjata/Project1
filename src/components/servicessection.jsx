import { useNavigate } from 'react-router-dom';
import {
  FaMobileAlt,
  FaGlobe,
  FaLightbulb,
  FaBrain,
  FaVrCardboard,
  FaPalette,
  FaCity,
} from 'react-icons/fa';

const services = [
  {
    title: "Custom Software Development",
    description:
      "We specialize in building custom software solutions designed to meet the specific needs of your business. Our team is skilled at developing secure, scalable, and high-performance applications, whether for web, mobile, or enterprise platforms. We work closely with your team to ensure the solution aligns with your objectives and improves efficiency.",
    icon: <FaGlobe className="text-gray-800 text-4xl mb-4" />,
    link: "/services/custom-software-development",
  },
  {
    title: "Artificial Intelligence & Data Analytics",
    description:
      "Artificial intelligence is transforming the way businesses operate. We offer solutions that harness the power of machine learning, AI, and data analytics to optimize processes, predict trends, and unlock valuable insights. Whether you need to automate tasks, improve decision-making, or leverage big data, we provide intelligent solutions tailored to your needs.",
    icon: <FaBrain className="text-gray-800 text-4xl mb-4" />,
    link: "/services/artificial-intelligence",
  },
  {
    title: "Mobile App Development",
    description:
      "Our mobile app development services focus on building fast, reliable, and user-friendly apps for iOS and Android platforms. From conceptualization to development and deployment, we ensure that every app we create is high-performing and delivers an exceptional user experience. Whether you're looking for a native or cross-platform app, we've got you covered.",
    icon: <FaMobileAlt className="text-gray-800 text-4xl mb-4" />,
    link: "/services/mobile-app-development",
  },
  {
    title: "Website Development",
    description:
      "We design and develop modern, responsive, and secure websites that are optimized for all devices. Our focus is on creating seamless experiences for users, ensuring that your website is not only visually appealing but also easy to navigate and perform optimally. We leverage the latest technologies to build scalable websites that adapt to your business needs.",
    icon: <FaGlobe className="text-gray-800 text-4xl mb-4" />,
    link: "/services/website-development",
  },
  {
    title: "Metaverse & Mixed Reality",
    description:
      "We specialize in creating immersive experiences that blend virtual and augmented reality. Our metaverse and mixed reality solutions allow businesses to engage their customers in new and exciting ways, enhancing interaction, learning, and brand experiences. Whether for gaming, training, or virtual collaboration, we bring innovative concepts to life.",
    icon: <FaVrCardboard className="text-gray-800 text-4xl mb-4" />,
    link: "/services/metaverse",
  },
  {
    title: "User Experience/User Interface Design",
    description:
      "A great user experience (UX) starts with great design. We focus on creating intuitive and aesthetically pleasing interfaces that are easy to navigate and align with user expectations. Our UX/UI design services ensure that your digital products are both functional and visually appealing, fostering a seamless experience for users while keeping your brand identity intact.",
    icon: <FaPalette className="text-gray-800 text-4xl mb-4" />,
    link: "/services/ui-ux-design",
  },
  {
    title: "Enterprise Web Development",
    description:
      "We build robust, scalable, and secure enterprise web applications that help businesses manage critical operations. From HR and finance systems to inventory management and customer relations, our enterprise web solutions are designed to streamline workflows, integrate with existing systems, and support your organization’s long-term growth.",
    icon: <FaCity className="text-gray-800 text-4xl mb-4" />,
    link: "/services/enterprise-web-development",
  },
  {
    title: "Digital Consultancy",
    description:
      "We provide expert consultancy to help you navigate the complexities of digital transformation. From technology selection to process optimization and digital strategy, our consultants have the experience to guide your business in making informed decisions. We help you integrate new technologies, improve efficiency, and stay competitive in an ever-evolving digital landscape.",
    icon: <FaLightbulb className="text-gray-800 text-4xl mb-4" />,
    link: "/services/digital-consultancy",
  },
];

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <div className="bg-black py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-start items-start">
        {/* Left Section */}
        <div>
          <h2 className="text-6xl font-bold text-white mb-8 text-left">
            Services
          </h2>
          <p className="text-3xl text-gray-400 max-w-3xl text-left">
            We ideate, strategize, design, and develop digital solutions that accelerate digital transformation across various industries. 
            Our services aim to empower businesses and enable them to stay ahead in a rapidly evolving digital world.
          </p>
        </div>

        {/* View All Button */}
        <button
          onClick={() => navigate('/services')}
          className="mt-8 md:mt-0 text-3xl px-14 py-6 bg-gradient-to-r from-gray-300 to-gray-500 text-white rounded-full shadow-xl hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-600 hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
        >
          View All
        </button>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            onClick={() => navigate(service.link)}
            className="bg-white rounded-lg shadow-xl p-8 cursor-pointer hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
          >
            <div className="flex flex-col items-start space-y-6">
              {service.icon}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 group-hover:font-bold transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-lg text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
