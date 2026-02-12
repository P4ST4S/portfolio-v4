import { FormattedMessage } from "react-intl";
import type { ReactNode } from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-32 relative overflow-hidden cv-auto"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-200/60 to-transparent dark:via-slate-800/10"></div>

      <div className="container mx-auto px-6 relative z-10 scroll-fx">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 relative inline-block">
            <FormattedMessage id="about.title" />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#00C4B3] to-transparent"></div>
          </h2>
          <h3 className="text-lg text-slate-600 dark:text-slate-400 mt-4">
            <FormattedMessage id="about.subtitle" />
          </h3>
        </div>

        <div className="max-w-3xl mx-auto bg-white/80 dark:bg-slate-800/50 rounded-lg p-8 shadow-lg backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/50 hover:border-[#00C4B3]/30 transition-all duration-500 transform hover:shadow-2xl hover:shadow-[#00C4B3]/10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00C4B3]/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>

          <div className="relative z-10">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              <FormattedMessage
                id="about.description1"
                values={{
                  strong: (chunks: ReactNode) => (
                    <strong className="text-[#00C4B3] hover:text-[#00E6D5] transition-colors duration-200 cursor-default">
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
                    <strong className="text-[#00C4B3] hover:text-[#00E6D5] transition-colors duration-200 cursor-default">
                      {chunks}
                    </strong>
                  ),
                }}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
