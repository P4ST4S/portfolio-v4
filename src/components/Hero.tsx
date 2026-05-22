import { FaGithub, FaLinkedin, FaChevronDown } from "react-icons/fa6";
import { FormattedMessage } from "react-intl";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C4B3]/5 via-transparent to-[#00C4B3]/10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#1A1A1A] dark:via-[#1A1A1A]/80"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="transform transition-all duration-1000 translate-y-0 opacity-100">
          {/* GEO rationale: answer-first hero copy gives crawlers and recruiters the value proposition in the first 50-60 words. */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight mb-2">
            Antoine ROSPARS
          </h1>
        </div>

        <div className="transform transition-all duration-1000 delay-500 translate-y-0 opacity-100">
          <p className="mt-4 text-xl md:text-2xl text-[#00C4B3] font-medium animate-fade-in-up">
            <FormattedMessage id="hero.title" />
          </p>
        </div>

        <div className="transform transition-all duration-1000 delay-700 translate-y-0 opacity-100">
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
            <FormattedMessage id="hero.description" />
          </p>
        </div>

        {/* GEO rationale: "À retenir / Key facts" makes the strongest facts extractible as a standalone passage. */}
        <aside className="mt-8 max-w-3xl mx-auto text-left bg-white/90 dark:bg-slate-800/70 border border-slate-200/70 dark:border-slate-700/50 rounded-lg p-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
            <FormattedMessage id="hero.keyFacts.title" />
          </h2>
          <ul className="grid gap-3 text-sm text-slate-700 dark:text-slate-300 md:grid-cols-2">
            <li>
              <FormattedMessage id="hero.keyFacts.experience" />
            </li>
            <li>
              <FormattedMessage id="hero.keyFacts.employer" />
            </li>
            <li>
              <FormattedMessage id="hero.keyFacts.stack" />
            </li>
            <li>
              <FormattedMessage id="hero.keyFacts.outcomes" />
            </li>
          </ul>
        </aside>

        <div className="mt-10 flex justify-center items-center gap-4 transform transition-all duration-1000 delay-1000 translate-y-0 opacity-100">
          <a
            href="#projects"
            className="bg-[#00C4B3] text-[#1A1A1A] font-bold py-3 px-6 rounded-lg hover:bg-[#00C4B3] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00C4B3]/25 animate-bounce-subtle"
          >
            <FormattedMessage id="hero.viewProjects" />
          </a>
          <a
            href="https://github.com/P4ST4S"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-300 hover:text-[#00C4B3] p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg"
            aria-label="GitHub profile"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/antoinerospars/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-300 hover:text-[#00C4B3] p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 translate-y-0 opacity-100">
        <a
          href="#about"
          className="flex flex-col items-center text-slate-500 dark:text-slate-400 hover:text-[#00C4B3] transition-colors duration-300 group"
        >
          <span className="text-sm mb-2 opacity-75">
            <FormattedMessage id="hero.scroll" />
          </span>
          <FaChevronDown className="w-5 h-5 animate-bounce group-hover:text-[#00C4B3]" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
