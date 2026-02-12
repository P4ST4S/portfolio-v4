import type { Locale } from "@/contexts/LanguageContextDefinition";

export const loadMessages = async (locale: Locale) => {
  if (locale === "en") {
    const { en } = await import("./en");
    return en;
  }

  const { fr } = await import("./fr");
  return fr;
};

export type Messages = Awaited<ReturnType<typeof loadMessages>>;
