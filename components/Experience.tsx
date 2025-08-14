
import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import useScrollAnimation from '../hooks/useScrollAnimation';
import type { TimelineItem } from '../types';

const SectionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <div ref={ref} className="section-fade-in">
      {children}
    </div>
  );
};

const TimelineCard: React.FC<{ item: TimelineItem; isLeft: boolean }> = ({ item, isLeft }) => (
    <div className={`flex md:justify-between items-center w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}>
        <div className="md:w-5/12"></div>
        <div className="hidden md:flex relative justify-center">
            <div className="h-full w-1 bg-slate-700"></div>
            <div className="absolute w-6 h-6 rounded-full bg-cyan-400 z-10 text-white flex items-center justify-center">
                {item.icon}
            </div>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg w-full md:w-5/12 transform transition-transform duration-500 hover:scale-105">
            <p className="text-sm text-cyan-400 mb-1">{item.date}</p>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <h4 className="text-md font-semibold text-slate-300 mb-4">{item.subtitle}</h4>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
                {item.details.map((detail, index) => <li key={index}>{detail}</li>)}
            </ul>
        </div>
    </div>
);

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-24 bg-slate-800/50">
            <SectionWrapper>
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-4 text-white">Professional Experience</h2>
                    <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12"></div>
                    <div className="relative wrap overflow-hidden">
                        <div className="absolute h-full border border-dashed border-opacity-20 border-slate-100" style={{left: '50%'}}></div>
                        <div className="flex flex-col space-y-8">
                             {EXPERIENCE_DATA.map((item, index) => (
                                 <TimelineCard key={item.title} item={item} isLeft={index % 2 !== 0} />
                             ))}
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
};

export default Experience;
