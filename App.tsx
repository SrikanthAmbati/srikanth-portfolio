
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const sections = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: React.RefObject<HTMLDivElement>) => {
    section.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-900 text-slate-100">
      <Header sections={sections} scrollToSection={scrollToSection} />
      <main>
        <div ref={sections.home}>
          <Hero scrollToProjects={() => scrollToSection(sections.projects)} />
        </div>
        <div ref={sections.about}>
          <About />
        </div>
        <div ref={sections.skills}>
          <Skills />
        </div>
        <div ref={sections.experience}>
          <Experience />
        </div>
        <div ref={sections.projects}>
          <Projects />
        </div>
        <div ref={sections.education}>
          <Education />
        </div>
        <Certificates />
        <div ref={sections.contact}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
