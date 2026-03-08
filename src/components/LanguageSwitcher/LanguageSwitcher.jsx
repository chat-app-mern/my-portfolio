import { useState, useEffect, useRef } from 'react';

const languages = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'hi', label: 'HI', name: 'हिन्दी' },
  { code: 'gu', label: 'GU', name: 'ગુજરાતી' },
  { code: 'mr', label: 'MR', name: 'मराठी' },
];

const LanguageSwitcher = () => {
  const [selectedLang, setSelectedLang] = useState('en');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Retrieve language from localStorage on load
    const savedLang = localStorage.getItem('selectedLang');
    if (savedLang && languages.some(l => l.code === savedLang)) {
      setSelectedLang(savedLang);
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lang) => {
    if (lang === selectedLang) {
      setIsOpen(false);
      return;
    }

    setSelectedLang(lang);
    localStorage.setItem('selectedLang', lang);
    
    // Explicitly update the cookie for Google Translate
    const domain = window.location.hostname;
    document.cookie = `googtrans=/en/${lang}; path=/`;
    document.cookie = `googtrans=/en/${lang}; path=/; domain=${domain}`;
    document.cookie = `googtrans=/en/${lang}; path=/; domain=.${domain}`;
    
    setIsOpen(false);

    // Force reload to apply correctly across the React app without hydration mismatch crashes
    window.location.reload();
  };

  const activeLang = languages.find((l) => l.code === selectedLang) || languages[0];

  return (
    <div className="relative inline-block text-left notranslate" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-grey bg-lightBlack border border-grey rounded-md hover:text-primary hover:border-primary transition-all duration-200 focus:outline-none"
      >
        <span>{activeLang.label}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 origin-top-right bg-lightBlack border border-grey rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                  selectedLang === lang.code
                    ? 'text-primary bg-black/50'
                    : 'text-grey hover:text-primary hover:bg-black/30'
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default LanguageSwitcher;