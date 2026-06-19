import React from 'react';

const projects = [
  {
    id: 1,
    title: "Omni Media Scaling",
    description: "End-to-end video production and paid media strategy that resulted in a 33% drop in CPA and scaled the client's monthly recurring revenue.",
    tags: ["Video Editing", "Paid Ads", "Strategy"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600",
    link: "#"
  },
  {
    id: 2,
    title: "Barebone AI Rebrand",
    description: "A complete visual overhaul including high-retention short-form content, crisp b-roll integration, and a modern aesthetic.",
    tags: ["Branding", "Short-form", "Creative"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600",
    link: "#"
  },
  {
    id: 3,
    title: "Fluid Focus Launch",
    description: "Produced several high-performing video assets for a product launch, delivering a fresh, engaging feel that captured the brand's identity.",
    tags: ["Product Launch", "Motion Graphics"],
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800&h=600",
    link: "#"
  },
  {
    id: 4,
    title: "Tryharmony.ai Campaign",
    description: "High-energy edits with perfect song choices and dynamic fonts that drove massive organic engagement across social channels.",
    tags: ["Organic Social", "B-Roll", "Editing"],
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=800&h=600",
    link: "#"
  },
  {
    id: 5,
    title: "Pause Studios Growth",
    description: "A targeted content sprint over six weeks that significantly grew the brand's online presence and secured high-ticket client calls.",
    tags: ["Content Sprint", "Lead Gen"],
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&q=80&w=800&h=600",
    link: "#"
  },
  {
    id: 6,
    title: "Arthur Brooks Marketing",
    description: "Millions of views generated through top-notch editing skills, fast feedback loops, and highly strategic content distribution.",
    tags: ["Viral Content", "Distribution"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800&h=600",
    link: "#"
  }
];

export default function ProjectsSection() {
  return (
    // Replaced broad 'my-20' with synchronized layout responsive section padding
    <section className="py-4 sm:py-10 lg:py-16 bg-[#FAFAFA] text-gray-900 overflow-hidden font-instrument">
      {/* Aligned page container padding rules to match px-4 sm:px-6 lg:px-8 */}
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header Block: Preserved exactly as the Left Text architecture of Hero */}
        <div className="space-y-4 mb-9 sm:mb-8 lg:mb-12 leading-[1]">
          {/* Replaced fixed text scales with Hero's exact dynamic title parameters */}
          <h2 className="text-[2.6rem] sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tighter">
            Featured <br className="sm:hidden" /> {/* Flawless single-column drop on narrow devices */}
            <span className="text-[#18387b]">Projects</span>
          </h2>
          {/* Matched sizing, layout colors, and tracking styles */}
          <p className="w-full sm:w-[95%] text-xl sm:text-xl lg:text-[1.8rem] text-gray-400 leading-[1.15] font-medium tracking-tighter">
            A showcase of our recent work
          </p>
        </div>

        {/* Content Layout Grid */}
        {/* Adjusted to match the gaps of the hero image layout rules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              // Integrated border-gray-100 to sync cleanly with the layout borders across other panels
              className="bg-white rounded-lg border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Project Image Panel */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-gray-50">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
              </div>
              
              {/* Card Body Space */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed mb-6 text-sm sm:text-[16px] flex-grow">
                  {project.description}
                </p>
                
                {/* Meta Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2.5 py-0.5 bg-[#FAFAFA] border border-gray-100 text-gray-400 text-xs sm:text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details Anchor */}
                <div className="mt-auto pt-2">
                  <a 
                    href={project.link} 
                    className="inline-flex items-center font-bold text-sm sm:text-base text-[#18387b] hover:text-black transition-colors group/link"
                  >
                    View Project
                    <svg 
                      className="w-4 h-4 ml-1.5 transform transition-transform group-hover/link:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Unified View All CTA Panel */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <button className="w-full sm:w-auto bg-black hover:bg-[#011a38] text-white font-semibold py-4 px-8 rounded-lg text-lg sm:text-xl transition-colors duration-200 shadow-sm">
            View All Work
          </button>
        </div>

      </div>
    </section>
  );
}