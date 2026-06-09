import { useEffect, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import type { ReactNode } from "react";

const About = () => {
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
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 md:py-32 relative overflow-hidden bg-white dark:bg-[#1A1A1A] cv-auto"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-200/60 to-transparent dark:via-slate-800/10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4 relative inline-block">
            <FormattedMessage id="about.title" />
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-[#007E73]"></div>
          <h3 className="text-lg text-slate-700 dark:text-slate-300 mt-4">
            <FormattedMessage id="about.subtitle" />
          </h3>
        </div>

        <div
          className={`max-w-3xl mx-auto bg-white dark:bg-slate-800/50 rounded-lg p-8 shadow-sm border border-slate-200 dark:border-slate-700 hover:border-[#007E73]/30 transition-all duration-300 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"} hover:shadow-md`}
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
        </div>
      </div>
    </section>
  );
};

export default About;
