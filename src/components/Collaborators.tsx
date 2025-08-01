import { useEffect, useRef, useState, type ReactNode } from "react";
import { useCollaboratorsData } from "@/data/collaborators";
import type { Collaborator } from "@/types";
import { FormattedMessage } from "react-intl";
import { FaLinkedin, FaGithub, FaBriefcase, FaEnvelope } from "react-icons/fa";

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
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section
      ref={sectionRef}
      id="collaborators"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-transparent to-slate-800/20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
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
              className={`transform transition-all duration-700 delay-${
                index * 200
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
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
                    {collaborator.specialities
                      .slice(0, 4)
                      .map((speciality, specIndex) => (
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
                      <FaLinkedin className="w-5 h-5" />
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
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}

                  {collaborator.links.website && (
                    <a
                      href={collaborator.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center text-slate-400 hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-110"
                      title="Portfolio"
                    >
                      <FaBriefcase className="w-5 h-5" />
                    </a>
                  )}

                  {collaborator.links.email && (
                    <a
                      href={`mailto:${collaborator.links.email}`}
                      className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center text-slate-400 hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110"
                      title="Email"
                    >
                      <FaEnvelope className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00C4B3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div
          className={`text-center mt-16 transform transition-all duration-700 delay-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-slate-400 text-lg mb-6">
            <FormattedMessage
              id="collaborators.lookingContact"
              values={{
                strong: (chunks: ReactNode) => (
                  <strong className="text-[#00C4B3]">{chunks}</strong>
                ),
              }}
            />
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
