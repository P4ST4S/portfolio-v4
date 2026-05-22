import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "@/types";
import { FormattedMessage } from "react-intl";

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white/90 dark:bg-slate-800/50 rounded-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#00C4B3]/20 hover:-translate-y-3 flex flex-col group relative backdrop-blur-sm border border-slate-200/70 dark:border-slate-700/50 hover:border-[#00C4B3]/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C4B3]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="p-6 flex-grow relative z-10">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300 group-hover:text-[#00C4B3]">
          {project.title}
        </h3>
        {/* GEO rationale: visible month/year dates align project facts with JSON-LD dateModified and HTTP Last-Modified freshness signals. */}
        <p className="text-xs font-semibold uppercase tracking-normal text-[#007E73] dark:text-[#00C4B3] mb-3">
          {project.dateLabel}
        </p>
        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm flex-grow transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-300">
          {project.description}
        </p>

        {/* GEO rationale: answer engines cite passages more reliably when each chunk states context, problem, actions, stack, and result without relying on surrounding sections. */}
        <dl className="space-y-3 text-sm text-slate-700 dark:text-slate-300 mb-5">
          <div>
            <dt className="font-bold text-slate-900 dark:text-slate-100">
              <FormattedMessage id="projects.contextLabel" />
            </dt>
            <dd>{project.context}</dd>
          </div>
          <div>
            <dt className="font-bold text-slate-900 dark:text-slate-100">
              <FormattedMessage id="projects.problemLabel" />
            </dt>
            <dd>{project.problemSolved}</dd>
          </div>
          <div>
            <dt className="font-bold text-slate-900 dark:text-slate-100">
              <FormattedMessage id="projects.actionsLabel" />
            </dt>
            <dd>
              <ul className="list-disc pl-5 space-y-1">
                {project.actions.map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt className="font-bold text-slate-900 dark:text-slate-100">
              <FormattedMessage id="projects.resultLabel" />
            </dt>
            <dd>{project.result}</dd>
          </div>
        </dl>

        {/* GEO rationale: a short, labeled stack line supports machine-scannable comparisons and recruiter-style fan-out queries. */}
        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          <strong className="text-slate-900 dark:text-slate-100">
            <FormattedMessage id="projects.stackLabel" />
          </strong>{" "}
          {project.mainTech}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={tag}
              className={`bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-[#00C4B3] text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 hover:bg-[#00C4B3] hover:text-slate-900 transform hover:scale-105 ${
                isHovered ? "animate-pulse" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 bg-slate-100/70 dark:bg-slate-800/30 mt-auto flex items-center justify-end gap-4 relative z-10">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-slate-400 hover:text-[#00C4B3] transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg p-2 rounded-full hover:bg-[#00C4B3]/10"
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
            className="text-slate-500 dark:text-slate-400 hover:text-[#00C4B3] transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg p-2 rounded-full hover:bg-[#00C4B3]/10"
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
