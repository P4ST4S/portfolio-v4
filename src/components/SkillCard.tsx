import React from "react";
import type { Skill } from "@/types";
import { useIntl } from "react-intl";
import { motion, type Variants } from "motion/react";

interface SkillCardProps {
  skill: Skill;
  variants?: Variants;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, variants }) => {
  const intl = useIntl();

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-[#007E73] text-white border-[#007E73]";
      case "Advanced":
        return "bg-[#0D9488] text-white border-[#0D9488]";
      case "Intermediate":
        return "bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-100 border-slate-200 dark:border-slate-700";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700";
    }
  };

  const getLevelLabel = (level: string) => {
    switch (level) {
      case "Expert":
        return intl.formatMessage({ id: "skills.expert" });
      case "Advanced":
        return intl.formatMessage({ id: "skills.advanced" });
      case "Intermediate":
        return intl.formatMessage({ id: "skills.intermediate" });
      case "Learning":
        return intl.formatMessage({ id: "skills.learning" });
      default:
        return level;
    }
  };

  return (
    <motion.div
      variants={variants}
      className="group relative bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-[#007E73]/40 dark:hover:border-[#5EEAD4]/40 h-full flex flex-col motion-safe:hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span
            aria-label={skill.name}
            className="flex h-10 w-10 items-center justify-center"
          >
            {skill.icon}
          </span>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">
              {skill.name}
            </h3>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getLevelColor(skill.level)}`}
            >
              {getLevelLabel(skill.level)}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="bg-slate-50 dark:bg-slate-700/50 p-2 rounded-lg text-center">
          <span className="block font-semibold text-slate-900 dark:text-white">
            {skill.years}
          </span>
          <span className="text-slate-600 dark:text-slate-400 text-xs">
            {intl.formatMessage({ id: "skills.card.experience" })}
          </span>
        </div>
        <div className="bg-slate-50 dark:bg-slate-700/50 p-2 rounded-lg text-center">
          <span className="block font-semibold text-slate-900 dark:text-white">
            {skill.projectCount}
          </span>
          <span className="text-slate-600 dark:text-slate-400 text-xs">
            {intl.formatMessage({ id: "skills.card.projects" })}
          </span>
        </div>
      </div>

      <p className="text-slate-700 dark:text-slate-300 text-sm mb-4 leading-relaxed flex-grow">
        {skill.context}
      </p>

      {skill.relatedProject && (
        <div className="pt-4 border-t border-slate-200 dark:border-slate-700 mt-auto">
          <p className="text-xs text-slate-600 dark:text-slate-400 mb-1">
            {intl.formatMessage({ id: "skills.card.featuredIn" })}
          </p>
          <a
            href={skill.relatedProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-[#007E73] dark:text-[#5EEAD4] hover:text-[#005F56] dark:hover:text-[#99F6E4] transition-colors"
          >
            {skill.relatedProject.name}
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      )}
    </motion.div>
  );
};

export default SkillCard;
