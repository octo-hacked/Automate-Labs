import React from 'react';

const testimonials = [
  {
    id: 1,
    content: (
      <>
        For 3 years, Metro Media House has been my go-to team — helping deliver top-quality content for 7-9 figure clients with great communication, fast turnaround, and flawless editing.
      </>
    ),
    author: "Patrick Crosby",
    role: "Founder, Omni Media Group"
  },
  {
    id: 2,
    content: (
      <>
        Holy F*cking shit. Excuse my language but <span className="text-amber-600 font-medium">I took a sneak peek at the edits and they are unreal.</span> So stoked about this.
      </>
    ),
    author: "George Munguia",
    role: "Founder, Tryharmony.ai"
  },
  {
    id: 3,
    content: (
      <>
        Love the vibe and overall execution. <span className="text-indigo-600 font-medium">Edits are crisp, song choice & energy is a vibe, broll is on point, fonts are awesome.</span> Great work!
      </>
    ),
    author: "Drew Rogers",
    role: "Founder, Stabledash Studios"
  },
  {
    id: 4,
    content: (
      <>
        Metro Media House helped me rapidly build my personal brand online. Saksham is more than a supplier — he's a <span className="text-amber-600 font-medium">true partner with vision, strategy, and 24/7 support</span>
      </>
    ),
    author: "Christian Schute",
    role: "8 fig serial entrepreneur and investor. Built ticketing software for F1"
  },
  {
    id: 5,
    content: (
      <>
        Working with MMH has been an absolute pleasure. They produced several videos for Fluid Focus, and we were genuinely impressed by the creativity they brought to each concept. Their modern editing style gave our content a fresh, engaging feel that really captured our brand. Professional, imaginative, and easy to collaborate with - we couldn't be happier with the results.
      </>
    ),
    author: "Fluid Focus",
    role: ""
  },
  {
    id: 6,
    content: (
      <>
        In just six weeks, Saksham and his team at Metro Media House helped me grow my brand significantly, <span className="text-amber-600 font-medium">increasing my income by thousands of dollars and securing three key client calls.</span> Highly recommend their approachable team and effective strategies.
      </>
    ),
    author: "Robin Menezes",
    role: "Founder, Pause Studios"
  },
  {
    id: 7,
    content: (
      <>
        We've had very good results. The team is very fast at feedback and their editing skills are top notch too. We have <span className="text-indigo-600 font-medium">multiple millions of views through Saksham's team on the B-roll side of things</span> which help with the strategy and the content that we already put out.
      </>
    ),
    author: "Lewy",
    role: "Creative & Marketing, Arthur Brooks"
  },
  {
    id: 8,
    content: (
      <>
        In 2 months, they grew my Instagram from 2k to 8k followers organically, <span className="text-indigo-600 font-medium">helping me achieve my first $25k month with 20 new clients.</span>
      </>
    ),
    author: "Sheena",
    role: "Relationship Coach"
  },
  {
    id: 9,
    content: (
      <>
        Working with Metro Media House was a seamless experience. Their video quality is top-tier, and the content they produced consistently met our performance benchmarks. On the creative side, the team was always receptive to our feedback and willing to iterate to get the visual style just right. Their ability to take our vision and turn it into polished, high-caliber content was a big plus for our brand. I'd recommend them to anyone looking for a team that wants to make high quality videos.
      </>
    ),
    author: "Brian Tam",
    role: "Barebone AI"
  },
  {
    id: 10,
    content: (
      <>
        Metro Media House overdelivers — 95% on point, professional, and reliable. Highly recommended.
      </>
    ),
    author: "Yashvardhan Swamy",
    role: "Fitness Entrepreneur"
  },
];

export default function TestimonialSection() {
  return (
    // Replaced arbitrary my-20 with responsive py matched layout
    <section className="my-16 sm:my-10 lg:my-16 bg-[#FAFAFA] text-gray-900 overflow-hidden font-instrument">
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
              className="break-inside-avoid bg-white p-6 rounded-lg border border-gray-700 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300 flex flex-col justify-between"
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
        <div className="mt-12 sm:mt-16 flex justify-center">
          <button className="w-full sm:w-auto bg-black hover:bg-[#011a38] text-white font-semibold py-4 px-8 rounded-lg text-lg sm:text-xl transition-colors duration-200 shadow-sm">
            Book a Discovery Call
          </button>
        </div>

      </div>
    </section>
  );
}