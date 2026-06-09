import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "@/types";
import { FormattedMessage } from "react-intl";
import { motion, type Variants } from "motion/react";

const ProjectCard = ({
  project,
  variants,
}: {
  project: Project;
  variants?: Variants;
}) => {
  const iconButtonClass =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 transition-all duration-200 hover:border-[#007E73] hover:text-[#007E73] dark:hover:border-[#5EEAD4] dark:hover:text-[#5EEAD4] hover:bg-[#007E73]/5";
  const disabledIconClass =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-300 dark:text-slate-600";

  return (
    <motion.div
      variants={variants}
      className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md h-full flex flex-col group relative border border-slate-200 dark:border-slate-700 hover:border-[#007E73]/40 dark:hover:border-[#5EEAD4]/40 motion-safe:hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#007E73]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="p-6 flex-grow relative z-10">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 transition-colors duration-300 group-hover:text-[#007E73] dark:group-hover:text-[#5EEAD4]">
          {project.title}
        </h3>
        {/* GEO rationale: visible month/year dates align project facts with JSON-LD dateModified and HTTP Last-Modified freshness signals. */}
        <p className="text-xs font-medium tracking-wide text-slate-500 dark:text-slate-400 mb-3">
          {project.dateLabel}
        </p>
        <p className="text-slate-700 dark:text-slate-300 mb-5 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* GEO rationale: answer engines cite passages more reliably when each chunk states context, problem, actions, stack, and result without relying on surrounding sections. */}
        <dl className="space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300 mb-5">
          <div>
            <dt className="font-bold text-slate-900 dark:text-slate-100">
              <FormattedMessage id="projects.problemLabel" />
            </dt>
            <dd>{project.problemSolved}</dd>
          </div>
          <div>
            <dt className="font-bold text-slate-900 dark:text-slate-100">
              <FormattedMessage id="projects.resultLabel" />
            </dt>
            <dd>{project.result}</dd>
          </div>
        </dl>

        <details className="mb-5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-900/30 px-4 py-3 text-sm text-slate-700 dark:text-slate-300">
          <summary className="cursor-pointer font-semibold text-slate-900 dark:text-slate-100">
            <FormattedMessage id="projects.detailsSummary" />
          </summary>
          <dl className="mt-3 space-y-3 leading-relaxed">
            <div>
              <dt className="font-bold text-slate-900 dark:text-slate-100">
                <FormattedMessage id="projects.contextLabel" />
              </dt>
              <dd>{project.context}</dd>
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
          </dl>
        </details>

        {/* GEO rationale: a short, labeled stack line supports machine-scannable comparisons and recruiter-style fan-out queries. */}
        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
          <strong className="text-slate-900 dark:text-slate-100">
            <FormattedMessage id="projects.stackLabel" />
          </strong>{" "}
          {project.mainTech}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200 text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 bg-slate-50 dark:bg-slate-800/60 mt-auto flex items-center justify-end gap-3 relative z-10 border-t border-slate-200 dark:border-slate-700">
        {project.links.github ? (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={iconButtonClass}
            aria-label={`Voir le code source de ${project.title} sur GitHub`}
          >
            <FaGithub className="w-6 h-6" />
          </a>
        ) : (
          <span className={disabledIconClass} aria-hidden="true">
            <FaGithub className="w-6 h-6" />
          </span>
        )}
        {project.links.demo ? (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={iconButtonClass}
            aria-label={`Voir la démo de ${project.title}`}
          >
            <FaExternalLinkAlt className="w-5 h-5" />
          </a>
        ) : (
          <span className={disabledIconClass} aria-hidden="true">
            <FaExternalLinkAlt className="w-5 h-5" />
          </span>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#007E73] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </motion.div>
  );
};

export default ProjectCard;
