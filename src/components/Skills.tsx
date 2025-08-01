import { useEffect, useRef, useState } from "react";
import { useSkillsData } from "@/data/skills";
import type { SkillCategory } from "@/types";
import { FormattedMessage } from "react-intl";

const Skills = () => {
  const skillsData = useSkillsData();
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTimeout(() => {
              skillsData.forEach((category) => {
                category.skills.forEach((skill) => {
                  setTimeout(() => {
                    setAnimatedBars(prev => new Set([...prev, `${category.category}-${skill.name}`]));
                  }, Math.random() * 1000);
                });
              });
            }, 300);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [skillsData]);

  const getSkillColor = (level: number) => {
    if (level >= 90) return "from-emerald-500 to-green-400";
    if (level >= 80) return "from-[#00C4B3] to-cyan-400";
    if (level >= 70) return "from-blue-500 to-indigo-400";
    return "from-purple-500 to-pink-400";
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-transparent to-slate-700/20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 relative inline-block">
            <FormattedMessage id="skills.title" />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#00C4B3] to-transparent"></div>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mt-6">
            <FormattedMessage id="skills.subtitle" />
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillsData.map((category: SkillCategory, categoryIndex) => (
            <div
              key={category.category}
              className={`transform transition-all duration-700 delay-${categoryIndex * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              <div className="bg-slate-800/50 rounded-lg p-6 shadow-lg backdrop-blur-sm border border-slate-700/50 hover:border-[#00C4B3]/30 transition-all duration-500 h-full">
                <h3 className="text-xl font-bold text-[#00C4B3] mb-6 text-center">
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const isAnimated = animatedBars.has(`${category.category}-${skill.name}`);
                    return (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-3">
                            {skill.icon && (
                              <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                                {skill.icon}
                              </span>
                            )}
                            <span className="text-slate-300 font-medium group-hover:text-[#00C4B3] transition-colors duration-200">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm text-slate-400 font-mono">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="relative">
                          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out relative`}
                              style={{
                                width: isAnimated ? `${skill.level}%` : '0%',
                                transitionDelay: `${skillIndex * 100}ms`
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transform transition-all duration-700 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-slate-400 text-lg">
            <strong className="text-[#00C4B3]">
              <FormattedMessage id="skills.experience" />
            </strong>{' '}
            <FormattedMessage id="skills.experienceDescription" />
          </p>
          <p className="text-sm text-slate-500 mt-2">
            <FormattedMessage id="skills.learningNote" />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;