import React from 'react'
import RippleGrid from './ui/ripple_grid'
import times_square_video from '/121994-724732238_medium.mp4'
import graph from '/graph.mp4'
import ui_development from '/UI_development.png'

const HeroSection = () => {
  return (
    <div className="mb-10 min-h-[calc(100vh-80px)] relative -z-20 bg-white font-instrument flex flex-col overflow-hidden">

      {/* Background Grid */}
      <div className='absolute -z-10 w-full h-full -translate-y-48 translate-x-20 md:-translate-y-26 md:-translate-x-40 opacity-55'>
        <RippleGrid
          enableRainbow={false}
          gridColor="#000000"
          rippleIntensity={0}
          gridSize={13}
          gridThickness={38}
          fadeDistance={1.9}
          vignetteStrength={2.5}
          glowIntensity={0.05}
          opacity={0.05}
          gridRotation={0}
          mouseInteraction
          mouseInteractionRadius={2}
        />
      </div>

      {/* Hero */}
      <main className="flex-1 flex items-center py-4 sm:py-10 lg:py-0">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 sm:gap-8 lg:gap-12 items-center">

            {/* Left Text */}
            <div className="sm:flex sm:flex-col lg:block sm:items-center sm:justify-center space-y-4 sm:space-y-4 leading-[1] sm:text-center lg:text-left">
              <h1 className="text-[2.6rem] sm:text-5xl lg:text-6xl  font-extrabold text-black tracking-tighter">
                Launch faster. <br />
                Grow smarter. <br />
                Scale with systems.
              </h1>
              <p className="w-full sm:w-[60%] lg:w-[95%]  text-xl sm:text-2xl lg:text-[1.8rem] text-justify sm:text-center lg:text-justify text-gray-400 leading-[1.15] font-medium tracking-tighter">
                We build products, websites, automations, and growth engines that help businesses move faster and scale efficiently.
              </p>
            </div>

            {/* Right Image Grid */}
            <div className="flex gap-1 h-[320px] sm:h-[450px] lg:h-[360px] w-full sm:w-[80%] lg:w-full mx-auto lg:ml-auto rounded-lg">
              <div className="flex flex-col gap-1 w-[55%]">
                <img
                  src={ui_development}
                  alt="Preview"
                  className="w-full h-[65%] rounded-lg object-cover"
                />
                <div className="flex gap-1 w-full h-[35%]">
                  <div className="w-1/2 h-full rounded-lg overflow-hidden relative">
                    <video
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      src={graph}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                  <div className="bg-white rounded-lg w-1/2 h-full" />
                </div>
              </div>
              <div className="w-[45%] h-full rounded-lg overflow-hidden relative">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={times_square_video}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Giant Bottom Text */}
      <div className="flex items-center justify-sta px-4 mt-3 sm:mt-6 relative ">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-8 overflow-hidden
                        text-left sm:text-center">
          <h2 className=" relative
            w-full text-[21vw] sm:text-[14.4vw] md:text-[14.8vw] custom-text-range lg:text-[190px] 
            font-black text-black leading-none tracking-tighter
            whitespace-normal sm:whitespace-nowrap
            select-none -left-5 sm:-left-5 md:-left-5 lg:-left-2
          ">
           Automate Lab.
          </h2>
        </div>
      </div>

    </div>
  )
}

export default HeroSection