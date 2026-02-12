import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IntlProvider } from "react-intl";
import "./index.css";
import App from "./App.tsx";
import type { Locale } from "./contexts/LanguageContextDefinition";
import { loadMessages } from "./messages";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";

// Get locale from browser or localStorage, default to French
const getLocale = (): Locale => {
  const savedLocale = localStorage.getItem("locale");
  if (savedLocale && ["en", "fr"].includes(savedLocale)) {
    return savedLocale as Locale;
  }

  const browserLocale = navigator.language.split("-")[0];
  return ["en", "fr"].includes(browserLocale)
    ? (browserLocale as Locale)
    : "fr";
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

const localeMessages = await loadMessages(locale);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <IntlProvider locale={locale} messages={localeMessages}>
          <App />
        </IntlProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
);

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
