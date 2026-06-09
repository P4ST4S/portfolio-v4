import { FormattedMessage } from "react-intl";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const About = () => {
  const shouldReduceMotion = useReducedMotion();
  const canAnimate = !shouldReduceMotion;
  const revealInitial = canAnimate ? { opacity: 0, y: 20 } : false;
  const revealInView = canAnimate ? { opacity: 1, y: 0 } : undefined;
  const revealTransition = {
    duration: 0.64,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section
      id="about"
      className="py-20 md:py-32 relative overflow-hidden bg-white dark:bg-[#1A1A1A] cv-auto"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-200/60 to-transparent dark:via-slate-800/10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={revealInitial}
          whileInView={revealInView}
          viewport={{ once: true, amount: 0.35 }}
          transition={revealTransition}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 relative inline-block">
            <FormattedMessage id="about.title" />
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-[#007E73]"></div>
          <h3 className="text-lg text-slate-700 dark:text-slate-300 mt-4">
            <FormattedMessage id="about.subtitle" />
          </h3>
        </motion.div>

        <motion.div
          initial={revealInitial}
          whileInView={revealInView}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...revealTransition, delay: 0.08 }}
          className="max-w-3xl mx-auto bg-white dark:bg-slate-800/50 rounded-lg p-8 shadow-sm border border-slate-200 dark:border-slate-700 hover:border-[#007E73]/30 transition-all duration-300 hover:shadow-md"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#007E73]/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

          <div className="relative z-10">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              <FormattedMessage
                id="about.description1"
                values={{
                  strong: (chunks: ReactNode) => (
                    <strong className="font-semibold text-slate-900 dark:text-slate-100">
                      {chunks}
                    </strong>
                  ),
                }}
              />
            </p>
            <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              <FormattedMessage
                id="about.description2"
                values={{
                  strong: (chunks: ReactNode) => (
                    <strong className="font-semibold text-slate-900 dark:text-slate-100">
                      {chunks}
                    </strong>
                  ),
                }}
              />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
