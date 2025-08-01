import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Locale = "en" | "fr";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

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
