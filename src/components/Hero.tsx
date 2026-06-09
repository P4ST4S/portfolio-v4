import { FaGithub, FaLinkedin, FaChevronDown } from "react-icons/fa6";
import { FormattedMessage } from "react-intl";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,124,115,0.12),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.04),transparent_45%,rgba(0,124,115,0.08))]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#1A1A1A] dark:via-[#1A1A1A]/80"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="transform transition-all duration-1000 translate-y-0 opacity-100">
          {/* GEO rationale: answer-first hero copy gives crawlers and recruiters the value proposition in the first 50-60 words. */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight mb-2">
            Antoine ROSPARS
          </h1>
        </div>

        <div className="transform transition-all duration-1000 delay-500 translate-y-0 opacity-100">
          <p className="mt-4 text-xl md:text-2xl text-[#007E73] dark:text-[#5EEAD4] font-semibold animate-fade-in-up">
            <FormattedMessage id="hero.title" />
          </p>
        </div>

        <div className="transform transition-all duration-1000 delay-700 translate-y-0 opacity-100">
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            <FormattedMessage id="hero.description" />
          </p>
        </div>

        {/* GEO rationale: the key facts block makes the strongest facts extractible as a standalone passage. */}
        <aside className="mt-8 max-w-3xl mx-auto text-left bg-white/95 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">
            <FormattedMessage id="hero.keyFacts.title" />
          </h2>
          <ul className="grid gap-4 text-base leading-relaxed text-slate-700 dark:text-slate-300 md:grid-cols-2 md:gap-x-8">
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
            className="bg-[#007E73] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#006A60] transition-all duration-300 transform hover:scale-105 hover:shadow-md"
          >
            <FormattedMessage id="hero.viewProjects" />
          </a>
          <a
            href="https://github.com/P4ST4S"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-800/70 hover:text-[#007E73] dark:hover:text-[#5EEAD4] p-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md"
            aria-label="GitHub profile"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/antoinerospars/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-800/70 hover:text-[#007E73] dark:hover:text-[#5EEAD4] p-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 translate-y-0 opacity-100">
        <a
          href="#about"
          className="flex flex-col items-center text-slate-600 dark:text-slate-400 hover:text-[#007E73] dark:hover:text-[#5EEAD4] transition-colors duration-300 group"
        >
          <span className="text-sm mb-2 opacity-75">
            <FormattedMessage id="hero.scroll" />
          </span>
          <FaChevronDown className="w-5 h-5 animate-bounce group-hover:text-[#007E73] dark:group-hover:text-[#5EEAD4]" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
