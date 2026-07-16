import React from 'react';

const testimonials = [
  {
    id: 1,
    content: (
      <>
        Their automation solutions completely transformed our workflow. Tasks that took hours are now handled automatically, saving our team countless hours every week while eliminating manual errors.
      </>
    ),
    author: "Patrick Crosby",
    role: "Founder, Omni Media Group"
  },
  {
    id: 2,
    content: (
      <>
        We hired them for a website redesign, but <span className="text-amber-600 font-medium">they ended up optimizing our entire digital ecosystem.</span> The new site is faster, cleaner, and converts significantly better.
      </>
    ),
    author: "George Munguia",
    role: "Founder, Harmony AI"
  },
  {
    id: 3,
    content: (
      <>
        The UI/UX exceeded every expectation. <span className="text-indigo-600 font-medium">Beautiful interfaces, intuitive user flows, and a seamless experience that our customers instantly loved.</span>
      </>
    ),
    author: "Drew Rogers",
    role: "Founder, Stabledash Studios"
  },
  {
    id: 4,
    content: (
      <>
        They became more than just a development agency—they acted as a strategic technology partner. <span className="text-amber-600 font-medium">From automation to web development and ongoing support, they delivered at every stage.</span>
      </>
    ),
    author: "Christian Schute",
    role: "Serial Entrepreneur & Investor"
  },
  {
    id: 5,
    content: (
      <>
        Working with the team was effortless. They built our website, streamlined our operations with custom automations, and delivered a modern digital presence that perfectly reflects our brand.
      </>
    ),
    author: "Fluid Focus",
    role: ""
  },
  {
    id: 6,
    content: (
      <>
        Within weeks, they automated our lead management, CRM, and client onboarding. <span className="text-amber-600 font-medium">We saved dozens of hours every month while increasing conversions and improving customer experience.</span>
      </>
    ),
    author: "Robin Menezes",
    role: "Founder, Pause Studios"
  },
  {
    id: 7,
    content: (
      <>
        Their technical expertise is outstanding. <span className="text-indigo-600 font-medium">From custom dashboards to workflow automation and API integrations, everything worked flawlessly from day one.</span>
      </>
    ),
    author: "Lewy",
    role: "Marketing Director"
  },
  {
    id: 8,
    content: (
      <>
        Their SEO strategy and website optimization delivered incredible results. <span className="text-indigo-600 font-medium">Organic traffic more than doubled, and we started generating qualified leads consistently.</span>
      </>
    ),
    author: "Sheena",
    role: "Business Owner"
  },
  {
    id: 9,
    content: (
      <>
        Every project was delivered on time with exceptional quality. Whether it was web development, UI design, or automation, the team consistently exceeded expectations and communicated clearly throughout.
      </>
    ),
    author: "Brian Tam",
    role: "Founder, Barebone AI"
  },
  
];

export default function TestimonialSection() {
  return (
    // Replaced arbitrary my-20 with responsive py matched layout
    <section id="testimonials" className="my-16 sm:my-10 lg:my-16 text-gray-900 overflow-hidden font-instrument">
      {/* Aligned px-4 sm:px-6 lg:px-8 with the Hero structure */}
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header Area: Matched with Left Text layout of Hero */}
        <div className="space-y-4 mb-9 sm:mb-8 lg:mb-12 leading-[1]">
          {/* Matched h1 font scales, tracking, and leading from Hero */}
          <h2 className="text-[2.6rem] sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tighter">
            Client <br className="sm:hidden" /> {/* Clean wrap on mobile viewports */}
            <span className="text-[#18387b]">Testimonials</span>
          </h2>
          {/* Matched paragraph scaling, layout tracking, and text color */}
          <p className="w-full sm:w-[95%] text-xl sm:text-xl lg:text-[1.8rem] text-gray-400 leading-[1.15] font-medium tracking-tighter">
            Hear from their experience
          </p>
        </div>

        {/* Masonry Layout Grid */}
        {/* Matched column layout spacing elements with Hero grid gap defaults */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              // Changed border-gray-700 (dark) to clean border-gray-100 to fit your light UI palette
              className="break-inside-avoid bg-white p-6 rounded-lg border border-gray-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300 flex flex-col justify-between"
            >
              <p className="text-gray-700 leading-relaxed mb-6 text-[16px] sm:text-[17px]">
                {testimonial.content}
              </p>
              
              <div className="mt-auto pt-4 border-t border-gray-50">
                <h4 className="font-bold text-gray-900 text-base">
                  {testimonial.author}
                </h4>
                {testimonial.role && (
                  <p className="text-xs sm:text-sm text-gray-400 mt-0.5 leading-snug">
                    {testimonial.role}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 sm:mt-16 flex justify-center ">
          <a href="#contact">
          <button className="w-full sm:w-auto bg-black hover:bg-[#414141] text-white font-semibold py-4 px-8 rounded-lg text-lg sm:text-xl transition-colors duration-200 shadow-sm cursor-pointer">
            Book a Discovery Call
          </button>
          </a>
        </div>

      </div>
    </section>
  );
}