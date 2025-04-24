import React, { useState } from 'react';
import { FaBrain, FaRobot, FaChartBar, FaDatabase, FaShieldAlt, FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaAngular, FaJs, FaJava, FaNodeJs, FaPython, FaPhp, FaCloud, FaAws, FaDocker, FaJenkins, FaMicrosoft, FaShopify, FaAndroid, FaApple, FaSwift, FaGoogle, FaCode } from 'react-icons/fa';
import { SiFirebase, SiMongodb, SiPostgresql, SiMysql, SiSqlite, SiOracle, SiDjango, SiLaravel, SiKubernetes, SiTableau, SiSalesforce, SiWoo, SiMagento, SiNginx } from 'react-icons/si';

const tabs = [
  'Emerging Tech', 'Frontend', 'Backend', 'Mobile', 'Database',
  'Frameworks', 'Cloud', 'DevOps', 'Platforms', 'Ecommerce'
];

const techIcons = {
  'AI (Gen AI)': <FaRobot />, 'Machine Learning': <FaBrain />, 'Big Data': <FaChartBar />, 'Data Intelligence': <FaChartBar />, 'AppSec': <FaShieldAlt />,
  'Angular': <FaAngular />, 'JavaScript': <FaJs />, 'HTML5': <FaHtml5 />, 'CSS3': <FaCss3Alt />, 'React': <FaReact />, 'TezJS': <FaCode />, 'Vue.js': <FaVuejs />,
  'Node.js': <FaNodeJs />, 'Java': <FaJava />, 'Nest.js': <FaNodeJs />, 'Meteor.js': <FaNodeJs />, '.NET': <FaMicrosoft />,
  'iOS': <FaApple />, 'Android': <FaAndroid />, 'Xamarin': <FaMicrosoft />, 'React Native': <FaReact />, 'Ionic': <FaReact />, 'Flutter': <FaGoogle />, 'Swift': <FaSwift />,
  'MySQL': <SiMysql />, 'SQLite': <SiSqlite />, 'Oracle': <SiOracle />, 'Firebase': <SiFirebase />, 'DynamoDB': <FaDatabase />, 'MongoDB': <SiMongodb />, 'SQL Server': <FaDatabase />, 'PostgreSQL': <SiPostgresql />,
  'Rxweb.io': <FaReact />, 'Django': <SiDjango />, 'CakePHP': <FaPhp />, 'MEAN': <FaNodeJs />, 'CodeIgniter': <FaPhp />, 'Laravel': <SiLaravel />,
  'AWS': <FaAws />, 'Azure': <FaMicrosoft />, 'Google Cloud': <FaGoogle />,
  'Gradle': <FaCloud />, 'Selenium': <FaCloud />, 'Jenkins': <FaJenkins />, 'Kubernetes': <SiKubernetes />, 'Docker': <FaDocker />, 'Azure DevOps': <FaMicrosoft />,
  'Zoho': <FaMicrosoft />, 'Power BI': <FaChartBar />, 'Dynamic CRM': <FaMicrosoft />, 'Tableau': <SiTableau />, 'Servicenow': <FaCloud />, 'Salesforce': <SiSalesforce />,
  'Magento': <SiMagento />, 'WooCommerce': <SiWoo />, 'NopCommerce': <FaShopify />, 'Kentico': <FaMicrosoft />, 'Shopify': <FaShopify />
};

const technologies = {
  'Emerging Tech': [
    'AI (Gen AI)', 'Machine Learning', 'Big Data', 'Data Intelligence', 'AppSec'
  ],
  'Frontend': [
    'Angular', 'JavaScript', 'HTML5', 'CSS3', 'React', 'TezJS', 'Vue.js'
  ],
  'Backend': [
    'Node.js', 'Java', 'Nest.js', 'Meteor.js', '.NET'
  ],
  'Mobile': [
    'iOS', 'Android', 'Xamarin', 'React Native', 'Ionic', 'Flutter', 'Swift'
  ],
  'Database': [
    'MySQL', 'SQLite', 'Oracle', 'Firebase', 'DynamoDB', 'MongoDB', 'SQL Server', 'PostgreSQL'
  ],
  'Frameworks': [
    'Rxweb.io', 'Django', 'CakePHP', 'MEAN', 'CodeIgniter', 'Laravel'
  ],
  'Cloud': [
    'AWS', 'Azure', 'Google Cloud'
  ],
  'DevOps': [
    'Gradle', 'Selenium', 'Jenkins', 'Kubernetes', 'Docker', 'Azure DevOps'
  ],
  'Platforms': [
    'Zoho', 'Power BI', 'Dynamic CRM', 'Tableau', 'Servicenow', 'Salesforce'
  ],
  'Ecommerce': [
    'Magento', 'WooCommerce', 'NopCommerce', 'Kentico', 'Shopify'
  ]
};

const TechnologyCard = ({ tech }) => (
  <div className="bg-black shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center text-white border border-gray-500 hover:bg-gray-700 transition-all duration-300">
    <div className="text-5xl mb-6">{techIcons[tech]}</div>
    <span className="text-2xl font-semibold">{tech}</span>
  </div>
);

const TechnologiesPage = () => {
  const [activeTab, setActiveTab] = useState('Emerging Tech');

  return (
    <div className="p-6 max-w-screen-xl mx-auto space-y-12">
      {/* Heading with even bigger font */}
      <h2 className="text-6xl font-extrabold text-center text-gray-800 mb-12">
        Technologies and Platforms We Use
      </h2>

      {/* Tabs for Categories with hover underline effect */}
      <div className="flex flex-wrap gap-8 justify-center border-b-4 pb-6 mb-10">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-10 py-5 text-4xl font-bold rounded-t-md transition-all duration-300 ease-in-out ${
              activeTab === tab
                ? 'bg-gray-800 text-white border-b-8 border-yellow-400'
                : 'bg-transparent text-gray-600 border-b-2 border-transparent hover:text-gray-800 hover:border-b-4 hover:border-yellow-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Display Technology Cards with larger font */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 mt-8">
        {technologies[activeTab].map((tech, index) => (
          <TechnologyCard key={index} tech={tech} />
        ))}
      </div>
    </div>
  );
};

export default TechnologiesPage;
