import React from 'react';

const StatsSection = () => {
  const statsData = [
    {
      value: "30+",
      label: "Systems Automated"
    },
    {
      value: "50%",
      label: "Reduced task completion time"
    },
    {
      value: "20 Days",
      label: "Avg. Deployment"
    },
    {
      value: "0",
      label: "Code Required"
    }
  ];

  return (
    // Matches the outer wrapper margins and font from your ServicesSection
    <section className="w-full mt-10 mb-20 font-instrument">
      {/* Matches the exact width constraint and padding of your layout */}
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid layout: 1 column on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center py-10 px-6 border text-center border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-[2.5rem] font-bold text-[#272535] mb-2 leading-none">
                {stat.value}
              </h3>
              <p className="text-[1.1rem] text-gray-500 text-center font-medium leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;