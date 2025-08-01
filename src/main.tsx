import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IntlProvider } from "react-intl";
import "./index.css";
import App from "./App.tsx";
import { reportWebVitals } from "./utils/performance";
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
import { messages } from "./messages";
import { LanguageProvider } from "./contexts/LanguageContext";

// Get locale from browser or localStorage, default to French
const getLocale = (): string => {
  const savedLocale = localStorage.getItem('locale');
  if (savedLocale && ['en', 'fr'].includes(savedLocale)) {
    return savedLocale;
  }
  
  const browserLocale = navigator.language.split('-')[0];
  return ['en', 'fr'].includes(browserLocale) ? browserLocale : 'fr';
};

const locale = getLocale();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <IntlProvider
        locale={locale}
        messages={messages[locale as keyof typeof messages]}
      >
        <App />
      </IntlProvider>
    </LanguageProvider>
  </StrictMode>
);

// Track all Core Web Vitals
onCLS(reportWebVitals);
onINP(reportWebVitals);
onFCP(reportWebVitals);
onLCP(reportWebVitals);
onTTFB(reportWebVitals);
