import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", labelKey: "nav.about" },
    { href: "#skills", labelKey: "nav.skills" },
    { href: "#projects", labelKey: "nav.projects" },
    { href: "#contact", labelKey: "nav.contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#1A1A1A]/80 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#hero"
            className="text-xl font-bold text-slate-100 hover:text-[#00C4B3] transition-colors"
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
                className="text-slate-300 hover:text-[#00C4B3] transition-colors duration-300"
              >
                <FormattedMessage id={link.labelKey} />
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <a
              href="#contact"
              className="bg-[#00C4B3] text-[#1A1A1A] font-bold py-2 px-4 rounded-lg hover:bg-[#00C4B3] transition-all duration-300 transform hover:scale-105"
            >
              <FormattedMessage id="nav.contactMe" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
