import {
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { LanguageContext, type Locale } from "./LanguageContextDefinition";

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const getInitialLocale = (): Locale => {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale && ["en", "fr"].includes(savedLocale)) {
      return savedLocale as Locale;
    }

    const browserLocale = navigator.language.split("-")[0];
    return ["en", "fr"].includes(browserLocale)
      ? (browserLocale as Locale)
      : "fr";
  };

  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    // Reload the page to apply the new locale
    window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};
