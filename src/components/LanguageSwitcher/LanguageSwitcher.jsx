import { useState, useEffect, useRef } from 'react';

const defaultLanguage = { code: 'en', label: 'EN', name: 'English' };

const LanguageSwitcher = () => {
  const [languages, setLanguages] = useState([defaultLanguage]);
  const [selectedLang, setSelectedLang] = useState('en');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const applyLanguage = (lang, retries = 0) => {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event('change', { bubbles: true }));
    } else if (retries < 20) {
      setTimeout(() => applyLanguage(lang, retries + 1), 500);
    }
  };

  useEffect(() => {
    // 1. Recover previously selected language
    const savedLang = localStorage.getItem('selectedLang');
    if (savedLang && savedLang !== 'en') {
      setSelectedLang(savedLang);
      applyLanguage(savedLang);
    }

    // 2. Click outside handler
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    // 3. Dynamically read languages from Google Translate select dropdown
    const fetchLanguages = (retries = 0) => {
      const select = document.querySelector('.goog-te-combo');
      if (select && select.options.length > 1) {
        const dynamicLanguages = [defaultLanguage];
        // Skip index 0 because it's usually "Select Language" placeholder
        for (let i = 1; i < select.options.length; i++) {
          const option = select.options[i];
          if (option.value && option.value !== 'en') {
            dynamicLanguages.push({
              code: option.value,
              label: option.value.toUpperCase(),
              name: option.text,
            });
          }
        }
        setLanguages(dynamicLanguages);
      } else if (retries < 30) {
        setTimeout(() => fetchLanguages(retries + 1), 500);
      }
    };
    fetchLanguages();

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lang) => {
    if (lang === selectedLang) {
      setIsOpen(false);
      return;
    }

    localStorage.setItem('selectedLang', lang);
    const domain = window.location.hostname;
    
    if (lang === 'en') {
      // Clear Google Translate cookies completely when reverting to English
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain}`;
    } else {
      // Set cookie as a fallback
      document.cookie = `googtrans=/en/${lang}; path=/;`;
      try {
          document.cookie = `googtrans=/en/${lang}; path=/; domain=${domain}`;
          document.cookie = `googtrans=/en/${lang}; path=/; domain=.${domain}`;
      } catch(e) {}
    }
    
    // Force reload to apply correctly
    window.location.reload();
  };

  const activeLang = languages.find((l) => l.code === selectedLang) || defaultLanguage;

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
        <div className="absolute right-0 mt-2 w-36 origin-top-right bg-lightBlack border border-grey rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50 max-h-[350px] overflow-y-auto overflow-x-hidden">
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