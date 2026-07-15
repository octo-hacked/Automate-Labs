import React, { useState, useEffect } from 'react';

// Dedicated function to handle smooth scrolling to the contact form
const handleScrollToContact = (e, callback) => {
  e.preventDefault();
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  if (callback) callback();
};

const NavContent = ({ isFixed, onMenuToggle, isMenuOpen }) => (
  <div className="uppercase max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full w-full">

    {/* Logo block */}
    <a href="#home" className="flex items-center space-x-3 cursor-pointer select-none" aria-label="Automate Lab home">
      <div><img className='h-8' src="/Logo.png" alt="Automate Lab logo" width="32" height="32" /></div>
      <span className="uppercase font-extrabold text-xl tracking-tighter ">Automate Lab .</span>
    </a>

    {/* Desktop Navigation */}
    <div className="hidden md:flex space-x-7 text-[1rem] font-semibold items-center justify-center " aria-label="Primary">
      <a href="#" className={`transition-colors ${isFixed ? 'hover:text-gray-300' : 'hover:text-gray-600'}`}>Home</a>
      <a href="#portfolio" className={`transition-colors ${isFixed ? 'hover:text-gray-300' : 'hover:text-gray-600'}`}>Portfolio</a>
      <a href="#testimonials" className={`transition-colors ${isFixed ? 'hover:text-gray-300' : 'hover:text-gray-600'}`}>Testimonials</a>
      
      {/* Updated Contact Button */}
      <a 
        href="#contact" 
        onClick={(e) => handleScrollToContact(e)}
        className={`transition-colors ${isFixed ? 'hover:text-gray-300' : 'hover:text-gray-600'}`}
      >
        Contact
      </a>

      {/* Updated Book a Call Button */}
      <a
        href="#contact"
        onClick={(e) => handleScrollToContact(e)}
        className={`flex justify-center items-center rounded-lg px-4 py-2 text-[1rem] font-medium cursor-pointer transition-colors duration-300 ${
          isFixed
            ? 'bg-white text-black hover:bg-gray-200'
            : 'bg-black text-white hover:bg-gray-800'
        }`}
      >
        Book a Call
      </a>
    </div>

    {/* Mobile Hamburger Toggle */}
    <button
      onClick={onMenuToggle}
      className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-200 relative"
      aria-label="Toggle navigation menu"
      aria-expanded={isMenuOpen}
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
    <header>
      <div className="h-20 w-full uppercase" />

      <nav className="absolute top-0 left-0 w-full h-20 text-black bg-transparent z-40 font-instrument uppercase" aria-label="Main navigation">
        <NavContent isFixed={false} onMenuToggle={toggleMenu} isMenuOpen={isMenuOpen} />
      </nav>

      <nav
        className={`fixed top-0 left-0 w-full h-16 bg-black text-white z-50 transition-transform duration-500 ease-out shadow-md font-instrument uppercase ${
          isScrolled ? 'translate-y-0' : '-translate-y-full'
        }`}
        aria-label="Main navigation (sticky)"
      >
        <NavContent isFixed={true} onMenuToggle={toggleMenu} isMenuOpen={isMenuOpen} />
      </nav>

      {/* MOBILE DRAWER OVERLAY */}
      <div
        className={`fixed inset-0 bg-black z-30 flex flex-col pt-24 px-4 transition-all duration-500 ease-in-out font-instrument md:hidden ${
          isMenuOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col space-y-6 text-2xl font-bold tracking-tighter text-white/90 p-4" aria-label="Mobile navigation">
          <a href="#home" onClick={toggleMenu} className="hover:text-white transition-colors py-2 border-b border-white/10">Home</a>
          <a href="#portfolio" onClick={toggleMenu} className="hover:text-white transition-colors py-2 border-b border-white/10">Portfolio</a>
          <a href="#testimonials" onClick={toggleMenu} className="hover:text-white transition-colors py-2 border-b border-white/10">Testimonials</a>
          
          {/* Updated Mobile Contact */}
          <a 
            href="#contact" 
            onClick={(e) => handleScrollToContact(e, toggleMenu)} 
            className="hover:text-white transition-colors py-2 border-b border-white/10"
          >
            Contact
          </a>

          {/* Updated Mobile Book a Call */}
          <a
            href="#contact"
            onClick={(e) => handleScrollToContact(e, toggleMenu)}
            className="flex justify-center items-center bg-white text-black font-semibold rounded-lg py-4 text-lg cursor-pointer hover:bg-gray-200 transition-colors mt-4 shadow-sm"
          >
            Book a Call
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;