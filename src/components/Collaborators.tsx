import { useEffect, useRef, useState } from "react";
import { useCollaboratorsData } from "@/data/collaborators";
import type { Collaborator } from "@/types";
import { FormattedMessage } from "react-intl";

const Collaborators = () => {
  const collaboratorsData = useCollaboratorsData();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <section ref={sectionRef} id="collaborators" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-transparent to-slate-800/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 relative inline-block">
            <FormattedMessage id="collaborators.title" />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#00C4B3] to-transparent"></div>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mt-6">
            <FormattedMessage id="collaborators.subtitle" />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {collaboratorsData.map((collaborator: Collaborator, index) => (
            <div
              key={collaborator.id}
              className={`transform transition-all duration-700 delay-${index * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <div className="bg-slate-800/50 rounded-xl p-6 shadow-lg backdrop-blur-sm border border-slate-700/50 hover:border-[#00C4B3]/30 transition-all duration-500 h-full group hover:shadow-[0_0_30px_rgba(0,196,179,0.15)] hover:-translate-y-2">
                
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#00C4B3] to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-all duration-300">
                      {collaborator.avatar ? (
                        <img 
                          src={collaborator.avatar} 
                          alt={collaborator.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        getInitials(collaborator.name)
                      )}
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00C4B3] to-cyan-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
                  </div>
                </div>

                {/* Name and Role */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-[#00C4B3] transition-colors duration-300">
                    {collaborator.name}
                  </h3>
                  <p className="text-[#00C4B3] font-medium text-sm">
                    {collaborator.role}
                  </p>
                  {collaborator.company && (
                    <p className="text-slate-500 text-xs mt-1">
                      @ {collaborator.company}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm text-center mb-6 leading-relaxed">
                  {collaborator.description}
                </p>

                {/* Specialities */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {collaborator.specialities.slice(0, 4).map((speciality, specIndex) => (
                      <span
                        key={specIndex}
                        className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-full border border-slate-600/50 group-hover:border-[#00C4B3]/30 transition-all duration-300"
                      >
                        {speciality}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex justify-center space-x-3">
                  {collaborator.links.linkedin && (
                    <a
                      href={collaborator.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center text-slate-400 hover:bg-[#0077B5] hover:text-white transition-all duration-300 hover:scale-110"
                      title="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                  
                  {collaborator.links.github && (
                    <a
                      href={collaborator.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center text-slate-400 hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-110"
                      title="GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  
                  {collaborator.links.website && (
                    <a
                      href={collaborator.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center text-slate-400 hover:bg-[#00C4B3] hover:text-white transition-all duration-300 hover:scale-110"
                      title="Website"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54C17.64 15.85 17 14.46 17 13v-2c0-.55-.45-1-1-1h-2v-2c0-.55-.45-1-1-1H9v2H7v2h2v2h4v2h2c1.1 0 2-.9 2-2v-1.54z"/>
                      </svg>
                    </a>
                  )}
                  
                  {collaborator.links.email && (
                    <a
                      href={`mailto:${collaborator.links.email}`}
                      className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center text-slate-400 hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110"
                      title="Email"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </a>
                  )}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00C4B3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 transform transition-all duration-700 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-slate-400 text-lg mb-6">
            Looking to <strong className="text-[#00C4B3]">collaborate</strong> with talented professionals?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00C4B3] to-cyan-400 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#00C4B3]/25 transition-all duration-300 hover:-translate-y-1"
            >
              <FormattedMessage id="collaborators.workTogether" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborators;