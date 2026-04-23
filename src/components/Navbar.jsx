import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md h-[70px] shadow-sm' : 'h-[80px]'}`}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-sde-dark">
          SRI DHUTHI <span className="text-sde-gold font-serif italic">ENTERPRISES</span>
        </a>
        
        <nav className="hidden md:flex gap-10">
          {['Home', 'About', 'Products', 'Process', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold hover:text-sde-gold transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sde-gold transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden sm:block btn-primary text-sm px-6 py-2">
          Get a Quote
        </a>
      </div>
    </header>
  );
};

export default Navbar;
