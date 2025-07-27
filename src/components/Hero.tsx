import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Hero = () => (
  <section
    id="hero"
    className="min-h-screen flex items-center justify-center text-center"
  >
    <div className="container mx-auto px-6">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-100 leading-tight">
        Antoine ROSPARS
      </h1>
      <p className="mt-4 text-xl md:text-2xl text-[#00C4B3] font-medium">
        Développeur Fullstack & Architecte de solutions web
      </p>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
        Je transforme des idées complexes en applications web élégantes et
        performantes, de la conception à la mise en production.
      </p>
      <div className="mt-10 flex justify-center items-center gap-4">
        <a
          href="#projects"
          className="bg-[#00C4B3] text-[#1A1A1A] font-bold py-3 px-6 rounded-lg hover:bg-[#00C4B3] transition-all duration-300 transform hover:scale-105"
        >
          Voir mes projets
        </a>
        <a
          href="https://github.com/P4ST4S"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 hover:text-[#00C4B3] p-3 rounded-full transition-colors duration-300"
        >
          <FaGithub className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/antoinerospars/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 hover:text-[#00C4B3] p-3 rounded-full transition-colors duration-300"
        >
          <FaLinkedin className="w-8 h-8" />
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
