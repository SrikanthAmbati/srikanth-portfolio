
import React from 'react';
import { SKILLS_DATA } from '../constants';
import useScrollAnimation from '../hooks/useScrollAnimation';
import type { SkillCategory, Skill } from '../types';

const SectionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <div ref={ref} className="section-fade-in">
      {children}
    </div>
  );
};

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="bg-slate-800 p-4 rounded-lg flex items-center space-x-4 transform transition-all duration-300 hover:scale-105 hover:bg-slate-700">
    <div className="flex-shrink-0">{skill.icon}</div>
    <span className="text-slate-200 font-medium">{skill.name}</span>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900">
      <SectionWrapper>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Technical Skills</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12"></div>
          <div className="space-y-12">
            {SKILLS_DATA.map((category: SkillCategory) => (
              <div key={category.title}>
                <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center md:text-left">{category.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {category.skills.map((skill: Skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Skills;
