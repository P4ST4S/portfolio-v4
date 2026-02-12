import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "@/hooks/useTheme";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center space-x-2 px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-[#00C4B3] transition-colors duration-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
    </button>
  );
};

export default ThemeSwitcher;
