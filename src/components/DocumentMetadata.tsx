import { useEffect } from "react";
import { useIntl } from "react-intl";
import { useLanguage } from "@/hooks/useLanguage";

const SITE_URL = "https://antoinerospars.dev";
const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

const setMetaContent = (
  selector: string,
  content: string,
  attribute = "content",
) => {
  const element = document.head.querySelector<HTMLMetaElement>(selector);
  element?.setAttribute(attribute, content);
};

const setLinkHref = (selector: string, href: string) => {
  const element = document.head.querySelector<HTMLLinkElement>(selector);
  element?.setAttribute("href", href);
};

const DocumentMetadata = () => {
  const intl = useIntl();
  const { locale } = useLanguage();

  useEffect(() => {
    const localePath = `/${locale}/`;
    const canonicalUrl = `${SITE_URL}${localePath}`;
    const title =
      locale === "en"
        ? "Antoine ROSPARS - React/TypeScript Fullstack Developer in Paris"
        : "Antoine ROSPARS - Développeur Fullstack React/TypeScript à Paris";
    const description = intl.formatMessage({ id: "meta.description" });

    document.title = title;
    document.documentElement.lang = locale;

    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[name="language"]', locale === "en" ? "English" : "French");
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent(
      'meta[property="og:locale"]',
      locale === "en" ? "en_US" : "fr_FR",
    );
    setMetaContent('meta[property="og:image"]', OG_IMAGE_URL);
    setMetaContent('meta[name="twitter:url"]', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
    setMetaContent('meta[name="twitter:image"]', OG_IMAGE_URL);
    setLinkHref('link[rel="canonical"]', canonicalUrl);
  }, [intl, locale]);

  return null;
};

export default DocumentMetadata;
