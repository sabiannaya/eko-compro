import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface LanguageToggleProps {
  onLanguageChange: (language: string) => void;
  currentLanguage: string;
}

const languages = [
  {
    code: "en",
    name: "English",
    tag: "EN",
    icon: <span className="fi fi-gb" />,
  },
  {
    code: "id",
    name: "Indonesia",
    tag: "ID",
    icon: <span className="fi fi-id" />,
  },
];

export default function LanguageToggle({
  onLanguageChange,
  currentLanguage,
}: LanguageToggleProps) {
  const [open, setOpen] = useState(false);

  const currentLang =
    languages.find((l) => l.code === currentLanguage) || languages[0];

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center space-x-2 px-3 py-2 bg-slate-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-200 min-w-[80px]"
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <div className="flex items-center justify-center gap-2">
          <div className="w-6 h-6 overflow-hidden rounded-sm">
            {currentLang.icon}
          </div>
          <span className="text-sm font-medium text-gray-700">
            {currentLang.tag}
          </span>
        </div>
        <ChevronDownIcon
          className={`w-4 h-4 text-gray-700 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 z-20 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`w-full flex items-center space-x-3 px-4 py-2.5 text-left hover:bg-gray-50 transition-colors duration-150 ${
                    currentLanguage === lang.code
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700"
                  }`}
                  onClick={() => {
                    setOpen(false);
                    onLanguageChange(lang.code);
                  }}
                  role="option"
                  aria-selected={currentLanguage === lang.code}
                >
                  <div className="w-5 h-5 overflow-hidden rounded-sm">
                    {lang.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{lang.tag}</span>
                    <span className="text-xs text-gray-500">{lang.name}</span>
                  </div>
                  {currentLanguage === lang.code && (
                    <div className="ml-auto">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
