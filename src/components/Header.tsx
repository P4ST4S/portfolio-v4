import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import { HiMenu, HiX } from "react-icons/hi";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#about", labelKey: "nav.about" },
    { href: "#skills", labelKey: "nav.skills" },
    { href: "#projects", labelKey: "nav.projects" },
    // { href: "#pricing", labelKey: "nav.pricing" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-[#1A1A1A]/80 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#hero"
            className="text-xl font-bold text-slate-900 dark:text-slate-100 hover:text-[#00C4B3] transition-colors"
          >
            <img
              src="/logov2.png"
              alt="Logo"
              className="h-8 inline-block mr-2 mb-1"
            />
            Antoine ROSPARS
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-700 dark:text-slate-300 hover:text-[#00C4B3] transition-colors duration-300"
              >
                <FormattedMessage id={link.labelKey} />
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <a
              href="#contact"
              className="hidden md:inline-block bg-[#00C4B3] text-slate-900 dark:text-[#1A1A1A] font-bold py-2 px-4 rounded-lg hover:bg-[#00C4B3] transition-all duration-300 transform hover:scale-105"
            >
              <FormattedMessage id="nav.contactMe" />
            </a>
            <button
              onClick={handleMobileMenuToggle}
              className="md:hidden text-slate-700 dark:text-slate-300 hover:text-[#00C4B3] transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="bg-white/95 dark:bg-[#1A1A1A]/95 backdrop-blur-lg px-6 py-4 space-y-4 border-t border-slate-200/60 dark:border-slate-700/20">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block text-slate-700 dark:text-slate-300 hover:text-[#00C4B3] transition-colors duration-300 py-2 border-b border-slate-200/60 dark:border-slate-700/20 last:border-b-0"
              >
                <FormattedMessage id={link.labelKey} />
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="block bg-[#00C4B3] text-slate-900 dark:text-[#1A1A1A] font-bold py-3 px-4 rounded-lg hover:bg-[#00A699] transition-all duration-300 text-center mt-4"
            >
              <FormattedMessage id="nav.contactMe" />
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
