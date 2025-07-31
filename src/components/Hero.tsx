import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  const [text, setText] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const fullText = "Antoine ROSPARS";

  useEffect(() => {
    setIsLoaded(true);
    let i = 0;
    const typeTimer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeTimer);
      }
    }, 100);

    return () => clearInterval(typeTimer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C4B3]/5 via-transparent to-[#00C4B3]/10"></div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00C4B3]/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-slate-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#00C4B3]/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-100 leading-tight mb-2">
            {text}
            <span className="animate-blink text-[#00C4B3]">|</span>
          </h1>
        </div>
        
        <div className={`transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="mt-4 text-xl md:text-2xl text-[#00C4B3] font-medium animate-fade-in-up">
            Développeur Fullstack & Architecte de solutions web
          </p>
        </div>
        
        <div className={`transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
            Je transforme des idées complexes en applications web élégantes et
            performantes, de la conception à la mise en production.
          </p>
        </div>
        
        <div className={`mt-10 flex justify-center items-center gap-4 transform transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <a
            href="#projects"
            className="bg-[#00C4B3] text-[#1A1A1A] font-bold py-3 px-6 rounded-lg hover:bg-[#00C4B3] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00C4B3]/25 animate-bounce-subtle"
          >
            Voir mes projets
          </a>
          <a
            href="https://github.com/P4ST4S"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-[#00C4B3] p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/antoinerospars/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-[#00C4B3] p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
