
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  sections: { [key: string]: React.RefObject<HTMLDivElement> };
  scrollToSection: (section: React.RefObject<HTMLDivElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ sections, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', ref: sections.home },
    { name: 'About', ref: sections.about },
    { name: 'Skills', ref: sections.skills },
    { name: 'Experience', ref: sections.experience },
    { name: 'Projects', ref: sections.projects },
    { name: 'Education', ref: sections.education },
    { name: 'Contact', ref: sections.contact },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection(sections.home); }} className="text-xl font-bold text-white hover:text-cyan-400 transition-colors">
          AS.
        </a>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.name.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.ref);
              }}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-slate-800">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.name.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  scrollToSection(link.ref);
                }}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
