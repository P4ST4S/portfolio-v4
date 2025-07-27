import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "@/types";

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-slate-800/50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#00C4B3]/10 hover:-translate-y-2 flex flex-col">
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
      <p className="text-slate-400 mb-4 text-sm flex-grow">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-slate-700 text-[#00C4B3] text-xs font-semibold px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="p-6 bg-slate-800/30 mt-auto flex items-center justify-end gap-4">
      {project.links.github && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-[#00C4B3] transition-colors"
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
          className="text-slate-400 hover:text-[#00C4B3] transition-colors"
          aria-label={`Voir la démo de ${project.title}`}
        >
          <FaExternalLinkAlt className="w-5 h-5" />
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
