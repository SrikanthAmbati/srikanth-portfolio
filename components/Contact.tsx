
import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const SectionWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useScrollAnimation<HTMLDivElement>();
  return (
    <div ref={ref} className="section-fade-in">
      {children}
    </div>
  );
};

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your message!');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-slate-800/50">
      <SectionWrapper>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Get In Touch</h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12"></div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Info</h3>
              <p className="text-slate-300 mb-6">
                Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
              </p>
              <div className="space-y-4">
                <a href="mailto:ambatisrikanth202@gmail.com" className="flex items-center group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span className="text-slate-300 group-hover:text-cyan-400 transition-colors">ambatisrikanth202@gmail.com</span>
                </a>
                <a href="tel:+919346456032" className="flex items-center group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span className="text-slate-300 group-hover:text-cyan-400 transition-colors">+91 9346456032</span>
                </a>
                <div className="flex items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                   <span className="text-slate-300">Hyderabad, Telangana</span>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-lg shadow-lg space-y-6">
                <input type="text" placeholder="Your Name" required className="w-full bg-slate-800 border-2 border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                <input type="email" placeholder="Your Email" required className="w-full bg-slate-800 border-2 border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                <textarea placeholder="Your Message" rows={5} required className="w-full bg-slate-800 border-2 border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"></textarea>
                <button type="submit" className="w-full bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-600 transition-transform transform hover:scale-105 duration-300 shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Contact;
