import React from 'react';
import BorderGlow from './ui/glow_card';
// Adjust this path based on where you saved it

// Example Icon Component (Matching the image style)
const UsersIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {/* Stars */}
    <path d="M18 4L19 6L21 7L19 8L18 10L17 8L15 7L17 6L18 4Z" fill="currentColor" />
    <path d="M6 4L7 6L9 7L7 8L6 10L5 8L3 7L5 6L6 4Z" fill="currentColor" />
  </svg>
);

const ServiceCard = ({ title, description, icon }) => {
  return (
    <BorderGlow
      edgeSensitivity={30}
      glowColor="40 80 80"
      backgroundColor="#120F17"
      borderRadius={12}
      glowRadius={40}
      glowIntensity={1}
      coneSpread={25}
      animated={false}
      colors={['#c084fc', '#f472b6', '#38bdf8']}// Forces the background to be pure black
      className="p-6 sm:p-8 font-instrument transition-transform hover:-translate-y-1 duration-300 text-white h-full"
    >

      {/* Icon Container */}
      <div className="w-[60px] h-[60px] sm:w-full sm:h-[64px] rounded-2xl flex items-center justify-center shrink-0 mb-5 sm:mb-6 bg-white text-black">
        {icon}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow gap-3">
        <h3 className="text-[1.25rem] sm:text-[1.4rem] font-semibold tracking-tight leading-snug">
          {title}
        </h3>
        <p className="text-[0.95rem] sm:text-[1rem] leading-relaxed mb-4 text-gray-400">
          {description}
        </p>
      </div>

    </BorderGlow>
  );
};

const ServicesSection = () => {
  // Sample data to map through. Add your actual content here.
  const servicesData = [
    {
      title: "Convert Leads",
      description: "Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      icon: <UsersIcon />
    },
    {
      title: "Agentic Process Automation",
      description: "The leading enterprise AI platform to orchestrate across teams, systems, and processes. Powered by the industry's first Process Reasoning Engine.",
      icon: <UsersIcon />
    },
    {
      title: "Agentic Solutions",
      description: "Accelerate your transformation with pre-built AI agents, ready to deploy to solve business challenges across industries and functions.",
      icon: <UsersIcon />
    },
    {
      title: "Rapid Deployment",
      description: "Go from idea to production in days, not months. Our pre-built integrations and templates get you moving immediately.",
      icon: <UsersIcon />
    }
  ];

  return (
    <section className="w-full mt-10 mb-20 font-instrument">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">


        <div className="space-y-4 mb-9 sm:mb-8 lg:mb-12 leading-[1]">
          <h2 className="text-[2.6rem] sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tighter">
            What <span className="text-[#18387b]">we do?</span>
          </h2>
          <p className="w-full sm:w-[95%] text-xl sm:text-xl lg:text-[1.8rem] text-gray-500 leading-[1.15] font-medium tracking-tighter">
            A description of our work
          </p>
        </div>
        <div className="w-full flex flex-col-reverse sm:flex sm:flex-row items-start gap-8">
          {/* Left Column: Paragraph */}
          <div className="sm:w-1/2 text-xl ">
            <p>
We help founders, creators, and businesses build their digital presence, launch products, automate operations, and create systems that fuel long-term growth.<br /><br />
Whether you're starting from an idea or scaling an existing business, we become your technical growth partner. <br /><br /> <b className='text-2xl'>🚀 Product Launch</b> <br />
Turn your idea into a real product. <br /><br />

We design and develop MVPs, SaaS platforms, customer portals, and internal tools that help you validate ideas and get to market quickly. <br /> <br />
<b>Includes:</b> <br />

MVP Development <br />
SaaS Applications <br />
Dashboards & Admin Panels <br />
API Integrations <br />
Payment Systems <br />
Product Strategy <br /><br />

<b className='text-2xl'>🌐 Websites That Convert</b> <br /> 
Your website should do more than look good—it should grow your business. <br /><br />
We build fast, modern websites optimized for performance, SEO, and conversions. <br /> <br />

<b>Includes:</b> <br />

Business Websites<br />
Landing Pages <br />
E-commerce <br />
Portfolio Websites<br />
SEO Optimization<br />
Analytics & Tracking<br /><br />

<b className='text-2xl'>🤖 AI & Business Automation</b> <br /> 
Eliminate repetitive work and let AI handle the busywork.<br /><br />
From customer support to internal workflows, we build automation systems that save time and improve efficiency. <br /> <br />

<b>Includes:</b> <br />

AI Chatbots <br />
Customer Support Agents<br />
WhatsApp Automation<br />
CRM Automation <br />
Lead Qualification <br />
Workflow Automation
            </p>
          </div>

          {/* Right Column: Sticky Video */}
          <div className="sm:w-1/2 sm:sticky sm:top-35 sm:-translate-y-20">
            <video
              src="/automation-loop.mp4" // Replace with your video path
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div> */}

      </div>
    </section>
  );
};

export default ServicesSection;