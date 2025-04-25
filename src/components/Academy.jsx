
import React, { useEffect, useState } from 'react';
import academyImage from '../assets/Academy.jpeg'; // Replace with your image path

const stats = [
  { label: 'Graduate applicants', value: 500 },
  { label: 'Hired graduates', value: 80 },
  { label: 'Schools', value: 8 },
  { label: 'School students', value: 2000 },
  { label: 'Session hours', value: 2500 },
  { label: 'Instructors', value: 25 },
];

const OurAcademySection = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const durations = stats.map((stat) => 1500); // 1.5s duration
    const steps = 30;
    const intervals = stats.map((stat, index) => {
      const increment = Math.ceil(stat.value / steps);
      return setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev];
          if (newCounters[index] < stat.value) {
            newCounters[index] = Math.min(newCounters[index] + increment, stat.value);
          }
          return newCounters;
        });
      }, durations[index] / steps);
    });

    return () => intervals.forEach((int) => clearInterval(int));
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-black to-purple-900 text-white py-16 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-2"> NextEdge</h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              We believes in human potential and invests heavily in the capabilities of new generations to practically teach them about emerging technologies.
            </p>
          </div>

          {/* Stats Grid - 2 Columns x 3 Rows */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-8 mt-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-left">
                <div className="text-3xl font-bold text-white">{counters[i]}{stat.value > 10 ? '+' : ''}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={academyImage}
            alt="Eurisko Academy"
            className="w-full max-w-md rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OurAcademySection;
