
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-pulseDark/90 backdrop-blur-md shadow-lg py-3 border-b border-white/5' 
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-500 ${isScrolled ? 'border-pulseCyan scale-90' : 'border-pulseCyan shadow-neon-cyan'}`}>
            <span className="font-bold text-xl text-white">P</span>
            <div className="absolute right-0 top-1 w-3 h-3 bg-pulseMagenta rounded-full blur-[2px] animate-pulse"></div>
          </div>
          <span className="text-xl font-bold tracking-wider text-white">
            PULSE <span className="font-light">AGENCY</span>
          </span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm">
          <a href="#servicios" className="text-gray-400 hover:text-pulseCyan transition-colors">Servicios</a>
          <a href="#dashboard" className="text-gray-400 hover:text-pulseCyan transition-colors">Dashboard</a>
          <a href="#demo" className="text-gray-400 hover:text-pulseCyan transition-colors">Demo IA</a>
          <a href="tel:+13074293264" className="flex items-center text-white hover:text-pulseCyan transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            +1 (307) 4293264
          </a>
          <a 
            href="https://calendly.com/pulseagencyllc/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-gradient-to-r from-pulseMagenta to-pulsePurple px-6 rounded-full font-semibold text-white shadow-neon-magenta hover:scale-105 transition-all active:scale-95 flex items-center ${isScrolled ? 'py-2 text-sm' : 'py-3'}`}
          >
            Reserva Estratégica
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white hover:text-pulseCyan transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-pulseDark border-b border-white/10 shadow-2xl animate-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col p-6 space-y-6">
            <a href="#servicios" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-300 hover:text-pulseCyan font-medium">Servicios</a>
            <a href="#dashboard" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-300 hover:text-pulseCyan font-medium">Dashboard</a>
            <a href="#demo" onClick={() => setIsMenuOpen(false)} className="text-lg text-pulseCyan font-bold">Probar Demo IA</a>
            <hr className="border-white/10" />
            <a href="tel:+13074293264" className="flex items-center text-lg text-white">
              <Phone className="w-5 h-5 mr-3 text-pulseCyan" />
              +1 (307) 4293264
            </a>
            <a 
              href="https://calendly.com/pulseagencyllc/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-pulseMagenta to-pulsePurple px-6 py-4 rounded-xl font-bold text-white shadow-neon-magenta text-center"
            >
              Reserva Estratégica
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
