import React from 'react'
import { useState } from 'react'
import DarkVeil from './ui/dark_veil'
import GlassSurface from './ui/glass_surface'

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
  };
  return (
    <div className="h-[80vh] overflow-clip relative flex items-center justify-between font-instrument">
        {/* Background Component Kept Intact */}
        <div className='w-full absolute -z-10 h-full bg-black/25'></div>
        <div className='absolute -z-20 w-full h-full'>
          <DarkVeil />
        </div>

        {/* Main Content Wrapper (Forced over the veil via z-index) */}
        <div className="relative z-10 w-full max-w-[1250px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left Column: Heading & Info */}
          <div className="space-y-6 max-w-xl">
            {/* <div className="inline-flex items-center space-x-2 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs text-neutral-400 font-medium tracking-wide uppercase">Available for projects</span>
          </div> */}

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Let’s build something smarter.
            </h2>

            <p className="text-neutral-400 text-base md:text-lg leading-relaxed">
              Have an idea, an automation bottleneck, or a system that needs scaling? Reach out and let's configure a solution that moves your business faster.
            </p>

            {/* Quick Info Items */}
            <div className="pt-6 space-y-4 border-t border-neutral-900">
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-widest">Direct Line</p>
                <a href="mailto:hello@automatelabs.com" className="text-white hover:text-neutral-300 font-medium transition-colors">
                  hello@automatelabs.com
                </a>
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-widest">HQ Location</p>
                <p className="text-neutral-300 font-medium">San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Form Element */}
          <div className=" border rounded-2xl p-8 relative shadow-2xl max-w-lg w-full lg:ml-auto">
            <div className="absolute inset-0 z-[-5] ">
              <GlassSurface width="100%" height="100%" borderRadius={20} />
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-neutral-900/50 border border-neutral-800 focus:border-neutral-700 text-white placeholder-neutral-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-700 transition-all"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-neutral-900/50 border border-neutral-800 focus:border-neutral-700 text-white placeholder-neutral-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-700 transition-all"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-neutral-900/50 border border-neutral-800 focus:border-neutral-700 text-white placeholder-neutral-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-700 resize-none transition-all"
                  placeholder="Describe your goals, timeline, or tech stack requirements..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white hover:bg-neutral-200 text-black font-semibold text-sm py-3 px-4 rounded-xl transition-colors duration-200 shadow-md flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
  )
}

export default Contact
