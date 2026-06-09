import { useSkillsData } from "@/data/skills";
import { FormattedMessage, useIntl } from "react-intl";
import SkillCategory from "./SkillCategory";
import { FaBolt, FaCode, FaChartLine } from "react-icons/fa6";
import { motion, useReducedMotion, type Variants } from "motion/react";

const Skills = () => {
  const skillsData = useSkillsData();
  const intl = useIntl();
  const shouldReduceMotion = useReducedMotion();
  const canAnimate = !shouldReduceMotion;

  const revealInitial = canAnimate ? { opacity: 0, y: 20 } : false;
  const revealInView = canAnimate ? { opacity: 1, y: 0 } : undefined;
  const revealTransition = {
    duration: 0.64,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const gridVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: revealTransition,
    },
  };

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

  return (
    <section
      id="skills"
      className="py-20 md:py-32 relative overflow-hidden bg-slate-50 dark:bg-[#111] cv-auto"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={revealInitial}
          whileInView={revealInView}
          viewport={{ once: true, amount: 0.35 }}
          transition={revealTransition}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 relative inline-block">
            <FormattedMessage id="skills.title" />
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-[#007E73]"></div>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mt-6">
            <FormattedMessage id="skills.subtitle" />
          </p>
        </motion.div>

        {/* Strengths */}
        <motion.div
          initial={canAnimate ? "hidden" : false}
          whileInView={canAnimate ? "visible" : undefined}
          viewport={{ once: true, amount: 0.25 }}
          variants={gridVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-4xl mx-auto"
        >
          {strengths.map((strength) => (
            <motion.div
              key={strength.id}
              variants={cardVariants}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 text-center"
            >
              <span className="mb-3 flex justify-center">{strength.icon}</span>
              <h3 className="font-bold text-slate-900 dark:text-white">
                {strength.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Skills */}
        <div className="space-y-8">
          {skillsData.map((category) => (
            <SkillCategory
              key={category.category}
              title={category.category}
              skills={category.skills}
              canAnimate={canAnimate}
              cardVariants={cardVariants}
              gridVariants={gridVariants}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
