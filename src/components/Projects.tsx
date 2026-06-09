import { useState } from "react";
import { useProjectsData } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { FormattedMessage } from "react-intl";
import { motion, useReducedMotion, type Variants } from "motion/react";

const Projects = () => {
  const projectsData = useProjectsData();
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");
  const shouldReduceMotion = useReducedMotion();
  const canAnimate = !shouldReduceMotion;

  const revealInitial = canAnimate ? { opacity: 0, y: 24 } : false;
  const revealInView = canAnimate ? { opacity: 1, y: 0 } : undefined;
  const revealTransition = {
    duration: 0.64,
    ease: [0.22, 1, 0.36, 1] as const,
  };
  const gridVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  };
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: revealTransition,
    },
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-slate-50/80 dark:bg-[#1A1A1A]/70 relative overflow-hidden cv-auto"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#007E73]/5 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/70 to-transparent dark:from-[#1A1A1A] dark:via-[#1A1A1A]/70"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-[#1A1A1A] dark:via-[#1A1A1A]/70"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={revealInitial}
          whileInView={revealInView}
          viewport={{ once: true, amount: 0.35 }}
          transition={revealTransition}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 relative inline-block">
            <FormattedMessage id="projects.title" />
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-[#007E73]"></div>
          <p className="text-slate-700 dark:text-slate-300 mt-6 max-w-2xl mx-auto leading-relaxed">
            <FormattedMessage id="projects.subtitle" />
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setViewMode("cards")}
              aria-pressed={viewMode === "cards"}
              className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
                viewMode === "cards"
                  ? "bg-[#007E73] text-white"
                  : "text-slate-700 hover:text-[#007E73] dark:text-slate-300 dark:hover:text-[#5EEAD4]"
              }`}
            >
              <FormattedMessage id="projects.view.cards" />
            </button>
            <button
              type="button"
              onClick={() => setViewMode("table")}
              aria-pressed={viewMode === "table"}
              className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
                viewMode === "table"
                  ? "bg-[#007E73] text-white"
                  : "text-slate-700 hover:text-[#007E73] dark:text-slate-300 dark:hover:text-[#5EEAD4]"
              }`}
            >
              <FormattedMessage id="projects.view.table" />
            </button>
          </div>
        </div>

        <motion.div
          initial={canAnimate ? "hidden" : false}
          whileInView={canAnimate ? "visible" : undefined}
          viewport={{ once: true, amount: 0.12 }}
          variants={gridVariants}
          className={`grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3 ${
            viewMode === "cards" ? "" : "hidden"
          }`}
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="h-full"
            >
              <ProjectCard project={project} variants={cardVariants} />
            </div>
          ))}
        </motion.div>

        {/* GEO rationale: comparison tables are easy for generative engines to extract when recruiters ask "compare this developer's projects". */}
        <motion.div
          initial={revealInitial}
          whileInView={revealInView}
          viewport={{ once: true, amount: 0.2 }}
          transition={revealTransition}
          className={`overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm ${
            viewMode === "table" ? "" : "hidden"
          }`}
        >
          <table className="w-full min-w-[900px] text-left text-sm">
            <caption className="sr-only">
              <FormattedMessage id="projects.comparisonCaption" />
            </caption>
            <thead className="bg-slate-100 dark:bg-slate-900/50 text-slate-900 dark:text-slate-100">
              <tr>
                <th scope="col" className="px-4 py-3 font-bold">
                  <FormattedMessage id="projects.table.name" />
                </th>
                <th scope="col" className="px-4 py-3 font-bold">
                  <FormattedMessage id="projects.table.tech" />
                </th>
                <th scope="col" className="px-4 py-3 font-bold">
                  <FormattedMessage id="projects.table.problem" />
                </th>
                <th scope="col" className="px-4 py-3 font-bold">
                  <FormattedMessage id="projects.table.result" />
                </th>
                <th scope="col" className="px-4 py-3 font-bold">
                  <FormattedMessage id="projects.table.link" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/70 dark:divide-slate-700/50">
              {projectsData.map((project) => {
                const link = project.links.demo ?? project.links.github;

                return (
                  <tr key={`comparison-${project.id}`}>
                    <th
                      scope="row"
                      className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100"
                    >
                      {project.title}
                    </th>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                      {project.mainTech}
                    </td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                      {project.problemSolved}
                    </td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                      {project.result}
                    </td>
                    <td className="px-4 py-3">
                      {link ? (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#007E73] dark:text-[#5EEAD4] font-semibold hover:underline"
                        >
                          <FormattedMessage id="projects.table.open" />
                        </a>
                      ) : (
                        <span className="text-slate-500">
                          <FormattedMessage id="projects.table.private" />
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
