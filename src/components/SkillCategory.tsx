import React from 'react';
import type { Skill } from '@/types';
import SkillCard from './SkillCard';

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="mb-12 last:mb-0">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pl-2 border-l-4 border-blue-500">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
