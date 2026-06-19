import { useState, useEffect } from 'react'
import Divider from './components/ui/gray_divider'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Plasma from './components/ui/Plasma'
import CardSwap from './components/ui/card_swap'
import { Card } from './components/ui/card_swap'
import CardNav from './components/ui/card_nav'
// import Navbar from './components/ui/glass_nav'
import times_square_video from '/121994-724732238_medium.mp4'
import hyperspeed_loop from '/hyperspeed-1781726416343.webm'
import graph from '/graph.mp4'
import ui_development from '/UI_development.png'
import DarkVeil from './components/ui/dark_veil'
import RippleGrid from './components/ui/ripple_grid'
import GlassSurface from './components/ui/glass_surface'
import Navbar from './components/Navbar'
import TestimonialSection from './components/Testimonials'
import ProjectsSection from './components/Projects'
import Lenis from 'lenis'
import Contact from './components/Contact'
import HeroSection from './components/HeroSection'

function App() {


  useEffect(() => {
    const lenis = new Lenis();
    let frameId;
    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, [])


  
  return (
    <>
      <Navbar /> 
      {/* <Divider/> */}
      <HeroSection/>
      <Divider/>
      <ProjectsSection />
      <Divider/>
      <TestimonialSection />
      <Contact/>
    </>
  )
}

export default App