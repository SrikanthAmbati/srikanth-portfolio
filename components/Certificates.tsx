
import React from 'react';
import { CERTIFICATES_DATA } from '../constants';
import useScrollAnimation from '../hooks/useScrollAnimation';
import type { CertificateItem } from '../types';

const SectionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <div ref={ref} className="section-fade-in">
      {children}
    </div>
  );
};

const CertificateCard: React.FC<{ certificate: CertificateItem }> = ({ certificate }) => (
  <div className="bg-slate-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:bg-slate-700">
    {certificate.icon}
    <h3 className="text-lg font-semibold text-white mt-4">{certificate.name}</h3>
  </div>
);

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-24 bg-slate-900">
      <SectionWrapper>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Certificates</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATES_DATA.map(cert => (
              <CertificateCard key={cert.name} certificate={cert} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Certificates;
