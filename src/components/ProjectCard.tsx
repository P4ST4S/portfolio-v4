import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "@/types";

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-slate-800/50 rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#00C4B3]/20 hover:-translate-y-3 flex flex-col group relative backdrop-blur-sm border border-slate-700/50 hover:border-[#00C4B3]/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C4B3]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="p-6 flex-grow relative z-10">
        <h3 className="text-xl font-bold text-slate-100 mb-2 transition-colors duration-300 group-hover:text-[#00C4B3]">
          {project.title}
        </h3>
        <p className="text-slate-400 mb-4 text-sm flex-grow transition-colors duration-300 group-hover:text-slate-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={tag}
              className={`bg-slate-700 text-[#00C4B3] text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 hover:bg-[#00C4B3] hover:text-slate-900 transform hover:scale-105 ${
                isHovered ? 'animate-pulse' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6 bg-slate-800/30 mt-auto flex items-center justify-end gap-4 relative z-10">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#00C4B3] transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg p-2 rounded-full hover:bg-[#00C4B3]/10"
            aria-label={`Voir le code source de ${project.title} sur GitHub`}
          >
            <FaGithub className="w-6 h-6" />
          </a>
        )}
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#00C4B3] transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg p-2 rounded-full hover:bg-[#00C4B3]/10"
            aria-label={`Voir la démo de ${project.title}`}
          >
            <FaExternalLinkAlt className="w-5 h-5" />
          </a>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00C4B3] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
  );
};

export default ProjectCard;
