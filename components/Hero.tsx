import React, { useState, useEffect } from 'react';

interface HeroProps {
  scrollToProjects: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToProjects }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-900/30 opacity-70"></div>
      <div className="container mx-auto px-6 py-16 flex flex-col items-center justify-center relative z-10">
        <div className="text-center">
          <h1 className={`text-5xl md:text-7xl font-black text-white mb-4 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Ambati Srikanth
          </h1>
          <h2 className={`text-2xl md:text-3xl font-bold text-cyan-400 mb-6 transition-all duration-700 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Aspiring AWS DevOps Engineer
          </h2>
          <p className={`text-lg text-slate-300 mb-8 max-w-lg mx-auto transition-all duration-700 ease-out delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Passionate about cloud computing, automation, and building scalable solutions.
          </p>
          <div className={`flex justify-center space-x-4 transition-all duration-700 ease-out delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <a href="/ambati-srikanth-resume.pdf" download className="bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-600 transition-transform transform hover:scale-105 duration-300 shadow-lg">
              Download Resume
            </a>
            <button onClick={scrollToProjects} className="bg-slate-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-600 transition-transform transform hover:scale-105 duration-300 shadow-lg">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;