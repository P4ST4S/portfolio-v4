import { useLanguage } from '@/hooks/useLanguage';
import { TbLanguage } from 'react-icons/tb';

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLanguage();

  const toggleLanguage = () => {
    setLocale(locale === 'en' ? 'fr' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 text-slate-300 hover:text-[#00C4B3] transition-colors duration-300 rounded-lg hover:bg-slate-800/50"
      title={`Switch to ${locale === 'en' ? 'French' : 'English'}`}
    >
      <TbLanguage className="w-5 h-5" />
      <span className="text-sm font-medium">{locale.toUpperCase()}</span>
    </button>
  );
};

export default LanguageSwitcher;