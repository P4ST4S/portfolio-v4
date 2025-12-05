import React from 'react';
import type { Skill } from '@/types';
import { useIntl } from 'react-intl';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const intl = useIntl();

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      case 'Advanced':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'Intermediate':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700';
    }
  };

  const getLevelLabel = (level: string) => {
      switch (level) {
          case 'Expert': return intl.formatMessage({ id: 'skills.expert' });
          case 'Advanced': return intl.formatMessage({ id: 'skills.advanced' });
          case 'Intermediate': return intl.formatMessage({ id: 'skills.intermediate' });
          case 'Learning': return intl.formatMessage({ id: 'skills.learning' });
          default: return level;
      }
  }

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-500/30 dark:hover:border-blue-500/30 h-full flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl" role="img" aria-label={skill.name}>
            {skill.icon}
          </span>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-lg">
              {skill.name}
            </h3>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getLevelColor(skill.level)}`}>
              {getLevelLabel(skill.level)}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="bg-gray-50 dark:bg-gray-700/50 p-2 rounded-lg text-center">
          <span className="block font-semibold text-gray-900 dark:text-white">{skill.years}</span>
          <span className="text-gray-500 dark:text-gray-400 text-xs">Experience</span>
        </div>
        <div className="bg-gray-50 dark:bg-gray-700/50 p-2 rounded-lg text-center">
          <span className="block font-semibold text-gray-900 dark:text-white">{skill.projectCount}</span>
          <span className="text-gray-500 dark:text-gray-400 text-xs">Projects</span>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed flex-grow">
        {skill.context}
      </p>

      {skill.relatedProject && (
        <div className="pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Featured in:</p>
          <a 
            href={skill.relatedProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            {skill.relatedProject.name}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default SkillCard;
