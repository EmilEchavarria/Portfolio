// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importa los archivos JSON de traducción
import translationES from "./locals/es/translation.json";
import translationEN from "./locals/en/translation.json";

i18n
  .use(LanguageDetector) // detecta el idioma del navegador
  .use(initReactI18next) // pasa i18n a react-i18next
  .init({
    resources: {
      es: { translation: translationES },
      en: { translation: translationEN },
    },
    fallbackLng: "es", // si no detecta idioma, usa español
    interpolation: {
      escapeValue: false // react ya se encarga de la seguridad
    }
  });

export default i18n;
