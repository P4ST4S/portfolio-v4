import { FaGithub, FaLinkedin, FaChevronDown } from "react-icons/fa6";
import { FormattedMessage } from "react-intl";
import Terminal from "@/components/Terminal";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const canAnimate = !shouldReduceMotion;
  const canParallax = canAnimate && isDesktop;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateDesktop = () => setIsDesktop(mediaQuery.matches);

    updateDesktop();
    mediaQuery.addEventListener("change", updateDesktop);

    return () => mediaQuery.removeEventListener("change", updateDesktop);
  }, []);

  const buttonVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="hero"
      className="min-h-screen flex items-center justify-center py-24 text-center relative overflow-hidden"
    >
      <motion.div
        aria-hidden="true"
        className="absolute -inset-y-12 inset-x-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,124,115,0.12),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.04),transparent_45%,rgba(0,124,115,0.08))]"
        style={canParallax ? { y: visualY } : undefined}
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#1A1A1A] dark:via-[#1A1A1A]/80"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={canAnimate ? { opacity: 0, y: 16 } : false}
          animate={canAnimate ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* GEO rationale: answer-first hero copy gives crawlers and recruiters the value proposition in the first 50-60 words. */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight mb-2">
            Antoine ROSPARS
          </h1>
        </motion.div>

        <motion.div
          initial={canAnimate ? { opacity: 0, y: 16 } : false}
          animate={canAnimate ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mt-4 text-xl md:text-2xl text-[#007E73] dark:text-[#5EEAD4] font-semibold animate-fade-in-up">
            <FormattedMessage id="hero.title" />
          </p>
        </motion.div>

        <motion.div
          initial={canAnimate ? { opacity: 0, y: 16 } : false}
          animate={canAnimate ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.72, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            <FormattedMessage id="hero.description" />
          </p>
        </motion.div>

        <motion.div
          initial={canAnimate ? "hidden" : false}
          animate={canAnimate ? "visible" : undefined}
          transition={{ delay: 0.24, staggerChildren: 0.06 }}
          className="mt-10 flex justify-center items-center gap-4"
        >
          <motion.a
            href="#projects"
            variants={buttonVariants}
            whileHover={canAnimate ? { scale: 1.03 } : undefined}
            className="bg-[#007E73] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#006A60] transition-all duration-300 transform hover:scale-105 hover:shadow-md"
          >
            <FormattedMessage id="hero.viewProjects" />
          </motion.a>
          <motion.a
            href="https://github.com/P4ST4S"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            className="text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-800/70 hover:text-[#007E73] dark:hover:text-[#5EEAD4] p-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md"
            aria-label="GitHub profile"
          >
            <FaGithub className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/antoinerospars/"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            className="text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 bg-white/80 dark:bg-slate-800/70 hover:text-[#007E73] dark:hover:text-[#5EEAD4] p-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className="w-8 h-8" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={canAnimate ? { opacity: 0, y: 18 } : false}
          animate={canAnimate ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.72, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <Terminal />
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 translate-y-0 opacity-100">
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
    </motion.section>
  );
};

export default Hero;
