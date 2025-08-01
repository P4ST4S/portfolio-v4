import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLocale('fr')}
        className={`px-2 py-1 text-sm font-medium rounded transition-colors duration-200 ${
          locale === 'fr'
            ? 'bg-[#00C4B3] text-[#1A1A1A]'
            : 'text-slate-300 hover:text-[#00C4B3]'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLocale('en')}
        className={`px-2 py-1 text-sm font-medium rounded transition-colors duration-200 ${
          locale === 'en'
            ? 'bg-[#00C4B3] text-[#1A1A1A]'
            : 'text-slate-300 hover:text-[#00C4B3]'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;