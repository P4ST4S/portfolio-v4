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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-800/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 relative inline-block">
            <FormattedMessage id="about.title" />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#00C4B3] to-transparent"></div>
          </h2>
          <h3 className="text-lg text-slate-400 mt-4">
            <FormattedMessage id="about.subtitle" />
          </h3>
        </div>
        
        <div className={`max-w-3xl mx-auto bg-slate-800/50 rounded-lg p-8 shadow-lg backdrop-blur-sm border border-slate-700/50 hover:border-[#00C4B3]/30 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} hover:shadow-2xl hover:shadow-[#00C4B3]/10`}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#00C4B3]/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
          
          <div className="relative z-10">
            <p className="text-lg text-slate-300 leading-relaxed">
              <FormattedMessage
                id="about.description1"
                values={{
                  strong: (chunks: ReactNode) => (
                    <strong className="text-[#00C4B3] hover:text-[#00E6D5] transition-colors duration-200 cursor-default">
                      {chunks}
                    </strong>
                  )
                }}
              />
            </p>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              <FormattedMessage
                id="about.description2"
                values={{
                  strong: (chunks: ReactNode) => (
                    <strong className="text-[#00C4B3] hover:text-[#00E6D5] transition-colors duration-200 cursor-default">
                      {chunks}
                    </strong>
                  )
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
