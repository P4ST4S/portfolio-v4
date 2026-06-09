import React from "react";
import type { Skill } from "@/types";
import SkillCard from "./SkillCard";

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="mb-12 last:mb-0">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 pl-3 border-l-4 border-[#007E73]">
        {title}
      </h3>
      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
