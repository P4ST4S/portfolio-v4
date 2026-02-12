import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FormattedMessage } from "react-intl";

const Footer = () => (
  <footer className="bg-white/80 dark:bg-[#1A1A1A]/70 border-t border-slate-200/70 dark:border-slate-800 py-8">
    <div className="container mx-auto px-6 text-center text-slate-600 dark:text-slate-400">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/P4ST4S"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#00C4B3] transition-colors"
          aria-label="GitHub profile"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/antoinerospars/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#00C4B3] transition-colors"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Antoine ROSPARS.{" "}
        <FormattedMessage id="footer.copyright" />
      </p>
    </div>
  </footer>
);

export default Footer;
