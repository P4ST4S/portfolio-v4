import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IntlProvider } from "react-intl";
import "./index.css";
import App from "./App.tsx";
import { reportWebVitals } from "./utils/performance";
import { onCLS, onINP, onFCP, onLCP, onTTFB } from "web-vitals";
import { messages } from "./messages";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";

// Get locale from browser or localStorage, default to French
const getLocale = (): string => {
  const savedLocale = localStorage.getItem("locale");
  if (savedLocale && ["en", "fr"].includes(savedLocale)) {
    return savedLocale;
  }

  const browserLocale = navigator.language.split("-")[0];
  return ["en", "fr"].includes(browserLocale) ? browserLocale : "fr";
};

const locale = getLocale();

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
        <IntlProvider
          locale={locale}
          messages={messages[locale as keyof typeof messages]}
        >
          <App />
        </IntlProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
);

// Track all Core Web Vitals
onCLS(reportWebVitals);
onINP(reportWebVitals);
onFCP(reportWebVitals);
onLCP(reportWebVitals);
onTTFB(reportWebVitals);
