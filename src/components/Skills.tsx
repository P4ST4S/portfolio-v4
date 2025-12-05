import { useEffect, useRef, useState } from "react";
import { useSkillsData } from "@/data/skills";
import { FormattedMessage, useIntl } from "react-intl";
import SkillCategory from "./SkillCategory";

const Skills = () => {
  const skillsData = useSkillsData();
  const intl = useIntl();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const strengths = [
    { id: 'perf', icon: '🚀', title: intl.formatMessage({ id: 'skills.strengths.perf' }) },
    { id: 'clean', icon: '✨', title: intl.formatMessage({ id: 'skills.strengths.clean' }) },
    { id: 'scale', icon: '📈', title: intl.formatMessage({ id: 'skills.strengths.scale' }) },
  ];

  const learning = [
    { name: intl.formatMessage({ id: 'skills.learning.go' }), icon: '🐹' },
    { name: intl.formatMessage({ id: 'skills.learning.iac' }), icon: '☁️' },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 md:py-32 relative overflow-hidden bg-gray-50 dark:bg-[#111]">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
            <FormattedMessage id="skills.title" />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></div>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-6">
            <FormattedMessage id="skills.subtitle" />
          </p>
        </div>

        {/* Strengths */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-4xl mx-auto transform transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {strengths.map((strength) => (
            <div key={strength.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center">
              <span className="text-4xl mb-3 block">{strength.icon}</span>
              <h3 className="font-bold text-gray-900 dark:text-white">{strength.title}</h3>
            </div>
          ))}
        </div>

        {/* Main Skills */}
        <div className={`space-y-8 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {skillsData.map((category) => (
            <SkillCategory 
              key={category.category} 
              title={category.category} 
              skills={category.skills} 
            />
          ))}
        </div>

        {/* Learning Section */}
        <div className={`mt-20 transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            <FormattedMessage id="skills.learning.title" />
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {learning.map((item) => (
              <div key={item.name} className="flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-4 rounded-full shadow-sm border border-gray-100 dark:border-gray-700">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium text-gray-900 dark:text-white">{item.name}</span>
                <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-1 rounded-full ml-2">
                  <FormattedMessage id="skills.learning" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;