import { createContext } from "react";

export type Locale = "en" | "fr";

export interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);