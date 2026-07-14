import React, { useState, useEffect } from 'react';

// Extracted inner content with mobile layout support
const NavContent = ({ isFixed, onMenuToggle, isMenuOpen }) => (
  // Aligned horizontal padding to match px-4 sm:px-6 lg:px-8
  <div className="uppercase max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full w-full">
    
    
    {/* Logo block */}
    <div className="flex items-center space-x-3 cursor-pointer select-none">
      <div><img className='h-8' src="/Logo.png" alt="Logo" /></div>
      <span className="uppercase font-extrabold text-xl tracking-tighter ">Automate Lab .</span>
    </div>

    {/* Desktop Navigation */}
    <div className="hidden md:flex space-x-7 text-[1rem] font-semibold items-center justify-center ">
      <a href="#home" className={`transition-colors ${isFixed ? 'hover:text-gray-300' : 'hover:text-gray-600'}`}>Home</a>
      <a href="#portfolio" className={`transition-colors ${isFixed ? 'hover:text-gray-300' : 'hover:text-gray-600'}`}>Portfolio</a>
      <a href="#testimonials" className={`transition-colors ${isFixed ? 'hover:text-gray-300' : 'hover:text-gray-600'}`}>Testimonials</a>
      
      <div
        className={`flex justify-center items-center rounded-lg px-4 py-2 text-[1rem] font-medium cursor-pointer transition-colors duration-300 ${
          isFixed
            ? 'bg-white text-black hover:bg-gray-200' 
            : 'bg-black text-white hover:bg-gray-800'
        }`}
      >
        Book a Call
      </div>
    </div>

    {/* Mobile Hamburger Toggle */}
    <button 
      onClick={onMenuToggle}
      className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-200 relative"
      aria-label="Toggle Menu"
    >
      <span className={`block h-0.5 w-6 transition-all duration-300 ease-out rounded-full ${
        isFixed || isMenuOpen ? 'bg-white' : 'bg-black'
      } ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
      
      <span className={`block h-0.5 w-6 transition-all duration-300 ease-out rounded-full ${
        isFixed || isMenuOpen ? 'bg-white' : 'bg-black'
      } ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
      
      <span className={`block h-0.5 w-6 transition-all duration-300 ease-out rounded-full ${
        isFixed || isMenuOpen ? 'bg-white' : 'bg-black'
      } ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
    </button>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 300; 
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is pulled up
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* PLACEHOLDER to match your structural layout height */}
      <div className="h-20 w-full uppercase" />

      {/* NAVBAR 1: Top Static Panel */}
      <nav className="absolute top-0 left-0 w-full h-20 text-black bg-transparent z-40 font-instrument uppercase">
        <NavContent isFixed={false} onMenuToggle={toggleMenu} isMenuOpen={isMenuOpen} />
      </nav>

      {/* NAVBAR 2: Fixed Sticky Dynamic Panel */}
      <nav 
        className={`fixed top-0 left-0 w-full h-16 bg-black text-white z-50 transition-transform duration-500 ease-out shadow-md font-instrument uppercase ${
          isScrolled ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <NavContent isFixed={true} onMenuToggle={toggleMenu} isMenuOpen={isMenuOpen} />
      </nav>

      {/* MOBILE DRAWER OVERLAY (Slides smoothly from top down) */}
      <div 
        className={`fixed inset-0 bg-black z-30 flex flex-col pt-24 px-4 transition-all duration-500 ease-in-out font-instrument md:hidden ${
          isMenuOpen 
            ? 'translate-y-0 opacity-100 pointer-events-auto' 
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-6 text-2xl font-bold tracking-tighter text-white/90 p-4">
          <a href="#home" onClick={toggleMenu} className="hover:text-white transition-colors py-2 border-b border-white/10">Home</a>
          <a href="#portfolio" onClick={toggleMenu} className="hover:text-white transition-colors py-2 border-b border-white/10">Portfolio</a>
          <a href="#testimonials" onClick={toggleMenu} className="hover:text-white transition-colors py-2 border-b border-white/10">Testimonials</a>
          
          <div
            onClick={toggleMenu}
            className="flex justify-center items-center bg-white text-black font-semibold rounded-lg py-4 text-lg cursor-pointer hover:bg-gray-200 transition-colors mt-4 shadow-sm"
          >
            Book a Call
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;