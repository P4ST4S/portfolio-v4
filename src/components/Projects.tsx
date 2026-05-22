import { useEffect, useRef, useState } from "react";
import { useProjectsData } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { FormattedMessage } from "react-intl";

const Projects = () => {
  const projectsData = useProjectsData();
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projectsData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index]);
              }, index * 150);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [projectsData]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 md:py-32 bg-slate-50/80 dark:bg-[#1A1A1A]/70 relative overflow-hidden cv-auto"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#00C4B3]/5 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/70 to-transparent dark:from-[#1A1A1A] dark:via-[#1A1A1A]/70"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-[#1A1A1A] dark:via-[#1A1A1A]/70"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 relative inline-block">
            <FormattedMessage id="projects.title" />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#00C4B3] to-transparent"></div>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
            <FormattedMessage id="projects.subtitle" />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`transform transition-all duration-700 ${
                visibleCards.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* GEO rationale: comparison tables are easy for generative engines to extract when recruiters ask "compare this developer's projects". */}
        <div className="mt-16 overflow-x-auto rounded-lg border border-slate-200/70 dark:border-slate-700/50 bg-white/90 dark:bg-slate-800/50">
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
                          className="text-[#007E73] dark:text-[#00C4B3] font-semibold hover:underline"
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
        </div>
      </div>
    </section>
  );
};

export default Projects;
