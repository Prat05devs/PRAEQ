import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = location.pathname === '/';
  const isEcosystem = location.pathname === '/ecosystem';
  const isAbout = location.pathname === '/about';
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated typography styles for better readability and hierarchy
  const navLinkClass = `text-[12px] lg:text-[13px] uppercase tracking-architectural font-bold transition-colors duration-300 font-sans ${
    isEcosystem || isAbout ? 'hover:text-[#D97642]' : isHome ? (isScrolled ? 'text-charcoal' : 'text-[#d4d3d3]') + ' hover:text-[#D97642]' : 'text-slate-dark hover:text-[#D97642]'
  }`;
  
  const navLinkStyle = (isEcosystem || isAbout) ? { color: '#F5F5F0' } : {};
  
  const logoClass = `text-2xl md:text-3xl font-serif font-bold tracking-tight z-50 transition-colors duration-300 ${
    isEcosystem || isAbout ? '' : isHome ? (isScrolled ? 'text-charcoal' : 'text-[#d4d3d3]') : 'text-slate-dark'
  } ${mobileMenuOpen ? '!text-charcoal' : ''}`;
  
  const logoStyle = (isEcosystem || isAbout) ? { color: '#F5F5F0' } : {};

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 flex justify-between items-center ${
          isAbout
            ? 'shadow-md py-4 px-6 md:px-12 lg:px-16'
            : isScrolled 
            ? 'bg-bone/95 backdrop-blur-md shadow-sm py-4 px-6 md:px-12 lg:px-16' 
            : 'bg-transparent py-6 md:py-8 px-6 md:px-12 lg:px-16'
        }`}
        style={isAbout ? {backgroundColor: '#3A3A3A'} : {}}
      >
        <Link to="/" className={logoClass} style={logoStyle} onClick={() => setMobileMenuOpen(false)}>
          PRAEQ
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-10 items-center">
          <Link to="/about" className={navLinkClass} style={navLinkStyle}>Philosophy</Link>
          <Link to="/legacy" className={navLinkClass} style={navLinkStyle}>Blueprints</Link>
          <Link to="/ecosystem" className={navLinkClass} style={navLinkStyle}>Infrastructure</Link>
          <Link to="/timeline" className={navLinkClass} style={navLinkStyle}>Timeline</Link>
          <Link to="/global" className={navLinkClass} style={navLinkStyle}>Global</Link>
          <Link to="/submission" className={`ml-2 lg:ml-4 text-[12px] lg:text-[13px] uppercase tracking-architectural font-bold px-5 py-2.5 lg:px-6 lg:py-3 border border-current transition-all duration-300 ${
              isEcosystem || isAbout
              ? 'hover:bg-[#F5F5F0] hover:text-charcoal'
              : isHome 
              ? (isScrolled ? 'text-charcoal border-charcoal' : 'text-[#d4d3d3] border-[#d4d3d3]') + ' hover:bg-charcoal hover:text-bone' 
              : 'text-navy-premium border-navy-premium hover:bg-navy-premium hover:text-bone'
          }`} style={(isEcosystem || isAbout) ? {color: '#F5F5F0', borderColor: '#F5F5F0'} : {}}>
            Inquiry
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden z-50 transition-colors duration-300 ${isHome && !mobileMenuOpen ? 'text-charcoal' : 'text-navy-premium'} ${mobileMenuOpen ? '!text-charcoal' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-bone flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center gap-8 animate-fade-in-up">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-serif text-charcoal hover:text-[#D97642] transition-colors">Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-charcoal hover:text-[#D97642] transition-colors">Philosophy</Link>
          <Link to="/legacy" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-charcoal hover:text-[#D97642] transition-colors">Blueprints</Link>
          <Link to="/ecosystem" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-charcoal hover:text-[#D97642] transition-colors">Infrastructure</Link>
          <Link to="/timeline" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-charcoal hover:text-[#D97642] transition-colors">Timeline</Link>
          <Link to="/global" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-charcoal hover:text-[#D97642] transition-colors">Global</Link>
          <Link to="/submission" onClick={() => setMobileMenuOpen(false)} className="text-lg font-sans uppercase tracking-widest text-white bg-navy-premium px-8 py-3 mt-4 hover:bg-[#D97642] transition-colors shadow-lg">Begin Inquiry</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;