import { useEffect } from 'react'
import Divider from './components/ui/gray_divider'
import './App.css'
import Navbar from './components/Navbar'
import TestimonialSection from './components/Testimonials'
import ProjectsSection from './components/Projects'
import Lenis from 'lenis'
import Contact from './components/Contact'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'

import ServicesSection from './components/ServicesSection'

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
      <StatsSection/>
      <ServicesSection/>
      <ProjectsSection />
      <Divider/>
      <TestimonialSection />
      <Contact/>
    </>
  )
}

export default App