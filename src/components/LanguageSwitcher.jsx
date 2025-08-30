import { useTranslation } from "react-i18next";
import { useState } from "react";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsExpanded(false); // Se oculta después de seleccionar
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="fixed top-5 right-5 z-50 group"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div
        className={`flex items-center bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-full shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "w-40" : "w-12"
        }`} // Aumentado de w-36 a w-40
      >
        {/* Botón de flecha/trigger */}
        <button
          onClick={toggleExpanded}
          className="relative z-20 w-12 h-10 flex items-center justify-center text-white hover:text-gray-300 transition-colors duration-300"
        >
          <svg
            className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Contenedor de opciones de idioma */}
        <div
          className={`flex items-center transition-all duration-300 ease-in-out ${
            isExpanded ? "opacity-100 w-28" : "opacity-0 w-0"
          }`} // Aumentado de w-24 a w-28, eliminado translate-x
        >
          {/* Separador */}
          <div className="w-px h-6 bg-gray-600/50" />

          {/* Indicador deslizante */}
          <div className="relative flex">
            <div
              className={`absolute inset-y-0 w-12 bg-white/20 transition-transform duration-300 ease-in-out rounded-full mx-0.5 ${
                i18n.language === "en" ? "translate-x-0" : "translate-x-12"
              }`} // Reducido mx-1 a mx-0.5
            />

            {/* Botón EN */}
            <button
              onClick={() => changeLanguage("en")}
              className={`relative z-10 w-12 h-8 font-medium text-xs tracking-wider uppercase transition-colors duration-300 rounded-full mx-0.5 ${
                i18n.language === "en"
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`} // Reducido mx-1 a mx-0.5
            >
              EN
            </button>

            {/* Botón ES */}
            <button
              onClick={() => changeLanguage("es")}
              className={`relative z-10 w-12 h-8 font-medium text-xs tracking-wider uppercase transition-colors duration-300 rounded-full mx-0.5 ${
                i18n.language === "es"
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`} // Reducido mx-1 a mx-0.5
            >
              ES
            </button>
          </div>
        </div>

        {/* Borde interno sutil */}
        <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none" />
      </div>
    </div>
  );
}

export default LanguageSwitcher;