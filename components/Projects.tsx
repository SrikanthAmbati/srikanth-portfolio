
import React from 'react';
import { PROJECTS_DATA } from '../constants';
import useScrollAnimation from '../hooks/useScrollAnimation';
import type { ProjectItem } from '../types';

const SectionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <div ref={ref} className="section-fade-in">
      {children}
    </div>
  );
};

const ProjectCard: React.FC<{ project: ProjectItem }> = ({ project }) => (
  <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col">
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-sm font-mono text-cyan-300 mb-4">{project.date}</p>
      <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map(tag => (
          <span key={tag} className="bg-slate-700 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900">
      <SectionWrapper>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Projects</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.map(project => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Projects;
