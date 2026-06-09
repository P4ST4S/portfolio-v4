import { useEffect, useRef, useState } from "react";
import { useSkillsData } from "@/data/skills";
import { FormattedMessage, useIntl } from "react-intl";
import SkillCategory from "./SkillCategory";
import { FaBolt, FaCode, FaChartLine } from "react-icons/fa6";
import { SiGo } from "react-icons/si";
import { FaCloud } from "react-icons/fa";

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
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const strengths = [
    {
      id: "perf",
      icon: <FaBolt className="text-4xl text-[#007E73] dark:text-[#5EEAD4]" />,
      title: intl.formatMessage({ id: "skills.strengths.perf" }),
    },
    {
      id: "clean",
      icon: <FaCode className="text-4xl text-[#007E73] dark:text-[#5EEAD4]" />,
      title: intl.formatMessage({ id: "skills.strengths.clean" }),
    },
    {
      id: "scale",
      icon: <FaChartLine className="text-4xl text-[#007E73] dark:text-[#5EEAD4]" />,
      title: intl.formatMessage({ id: "skills.strengths.scale" }),
    },
  ];

  const learning = [
    {
      name: intl.formatMessage({ id: "skills.learning.go" }),
      icon: <SiGo className="text-2xl text-[#007E73] dark:text-[#5EEAD4]" />,
    },
    {
      name: intl.formatMessage({ id: "skills.learning.iac" }),
      icon: <FaCloud className="text-2xl text-[#007E73] dark:text-[#5EEAD4]" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 md:py-32 relative overflow-hidden bg-slate-50 dark:bg-[#111] cv-auto"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 relative inline-block">
            <FormattedMessage id="skills.title" />
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-[#007E73]"></div>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mt-6">
            <FormattedMessage id="skills.subtitle" />
          </p>
        </div>

        {/* Strengths */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-4xl mx-auto transform transition-all duration-700 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          {strengths.map((strength) => (
            <div
              key={strength.id}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 text-center"
            >
              <span className="mb-3 flex justify-center">{strength.icon}</span>
              <h3 className="font-bold text-slate-900 dark:text-white">
                {strength.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Main Skills */}
        <div
          className={`space-y-8 transform transition-all duration-700 delay-200 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          {skillsData.map((category) => (
            <SkillCategory
              key={category.category}
              title={category.category}
              skills={category.skills}
            />
          ))}
        </div>

        {/* Learning Section */}
        <div
          className={`mt-20 transform transition-all duration-700 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 pl-3 border-l-4 border-[#007E73]">
            <FormattedMessage id="skills.learning.title" />
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {learning.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-3 bg-white dark:bg-slate-800 px-6 py-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700"
              >
                <span>{item.icon}</span>
                <span className="font-medium text-slate-900 dark:text-white">
                  {item.name}
                </span>
                <span className="text-xs bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-100 px-2 py-1 rounded-full ml-auto">
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
