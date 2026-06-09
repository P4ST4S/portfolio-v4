import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";

const getInitialTheme = (): "light" | "dark" => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

if (getInitialTheme() === "dark") {
  document.documentElement.classList.add("dark");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
);

requestAnimationFrame(() => {
  document.body.classList.add("app-ready");
  window.setTimeout(() => {
    document.getElementById("page-loader")?.remove();
  }, 420);
});

if (import.meta.env.DEV) {
  const [{ reportWebVitals }, webVitals] = await Promise.all([
    import("./utils/performance"),
    import("web-vitals"),
  ]);

  webVitals.onCLS(reportWebVitals);
  webVitals.onINP(reportWebVitals);
  webVitals.onFCP(reportWebVitals);
  webVitals.onLCP(reportWebVitals);
  webVitals.onTTFB(reportWebVitals);
}
