import { useEffect, useState, type ReactNode } from "react";
import { IntlProvider } from "react-intl";
import { en } from "@/messages/en";
import { fr } from "@/messages/fr";
import { LanguageContext, type Locale } from "./LanguageContextDefinition";

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const getLocaleFromPath = (): Locale | null => {
    const pathLocale = window.location.pathname.split("/")[1];
    return pathLocale === "en" || pathLocale === "fr" ? pathLocale : null;
  };

  const getInitialLocale = (): Locale => {
    const pathLocale = getLocaleFromPath();
    if (pathLocale) {
      return pathLocale;
    }

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

    const currentPath = window.location.pathname;
    const pathWithoutLocale = currentPath.replace(/^\/(en|fr)(?=\/|$)/, "");
    const normalizedPath =
      pathWithoutLocale === "" || pathWithoutLocale === "/"
        ? "/"
        : pathWithoutLocale;
    const nextPath = `/${newLocale}${normalizedPath}${window.location.search}${window.location.hash}`;

    window.history.pushState({}, "", nextPath);
  };

  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const syncLocaleWithPath = () => {
      const pathLocale = getLocaleFromPath();
      if (pathLocale) {
        setLocaleState(pathLocale);
      }
    };

    window.addEventListener("popstate", syncLocaleWithPath);
    return () => window.removeEventListener("popstate", syncLocaleWithPath);
  }, []);

  const messages = locale === "en" ? en : fr;

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
