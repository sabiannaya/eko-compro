interface LanguageToggleProps {
  onLanguageChange: (language: string) => void;
  currentLanguage: string;
}

export default function LanguageToggle({ onLanguageChange, currentLanguage }: LanguageToggleProps) {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'id', name: 'Indonesia' }
  ];

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          className={`px-3 py-1 rounded-md text-sm transition-colors ${
            currentLanguage === lang.code
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
}