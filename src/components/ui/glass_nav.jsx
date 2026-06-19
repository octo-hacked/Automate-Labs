import React, { useEffect, useRef } from 'react';
import GlassSurface from "./glass_surface";

const Navbar = () => {
  const headerRef = useRef(null);
  const backgroundWrapperRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    let rafId;
    let isAttached = false; 

    const onScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          // STATE 1: HIT THE CEILING (Scroll Down)
          if (scrollY >= 24 && !isAttached) {
            isAttached = true;
            
            backgroundWrapperRef.current.classList.add('w-full', 'rounded-none');
            backgroundWrapperRef.current.classList.remove('w-[860px]', 'max-w-[90vw]', 'rounded-[40px]');
            
            overlayRef.current.style.opacity = '1';

            headerRef.current.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            headerRef.current.style.transform = `translateY(0px)`;

          // STATE 2: REACHED ABSOLUTE TOP (Scroll Up)
          } else if (scrollY <= 0 && isAttached) {
            isAttached = false;
            
            backgroundWrapperRef.current.classList.remove('w-full', 'rounded-none');
            backgroundWrapperRef.current.classList.add('w-[860px]', 'max-w-[90vw]', 'rounded-[40px]');
            
            overlayRef.current.style.opacity = '0';

            headerRef.current.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            headerRef.current.style.transform = `translateY(24px)`;

          // STATE 3: FREE FLOATING (Between 0 and 24, Scrolling Down)
          } else if (!isAttached && scrollY > 0 && scrollY < 24) {
            headerRef.current.style.transition = 'none';
            const yPos = Math.max(24 - scrollY, 0);
            headerRef.current.style.transform = `translateY(${yPos}px)`;
          }

          rafId = null;
        });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); 

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 flex justify-center items-start"
      style={{ transform: 'translateY(24px)', willChange: 'transform' }}
    >
      <div
        ref={backgroundWrapperRef}
        className="relative flex justify-center overflow-hidden h-[68px] w-[860px] max-w-[90vw] rounded-[40px]"
        style={{ 
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)', 
          willChange: 'width, border-radius' 
        }}
      >
        <div className="absolute inset-0 z-0">
          <GlassSurface width="100%" height="100%" borderRadius={0} />
        </div>

        <div
          ref={overlayRef}
          className="absolute inset-0 bg-[#0a0a0a] z-10 opacity-0"
          style={{ transition: 'opacity 0.5s ease-in-out' }}
        />

        <nav 
          className="relative z-20 flex items-center justify-between w-full max-w-[860px] px-6 md:px-8 h-full text-white"
        >
          <div className="font-bold text-[17px] tracking-wide">
            Automation Labs
          </div>

          <ul className="hidden md:flex gap-8 list-none text-[14px] font-medium m-0 p-0">
            {['Home', 'About', 'Services'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:opacity-70 transition-opacity">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="text-[13px] font-semibold py-2 px-5 rounded-full transition-opacity duration-300 hover:opacity-80 bg-white text-black"
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;