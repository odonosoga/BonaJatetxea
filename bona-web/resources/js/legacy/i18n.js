import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import directo (ahora sí funciona porque están dentro de src/)
import translationES from "./locales/es/translation.json";
import translationEU from "./locales/eu/translation.json";

const resources = {
  es: {
    translation: translationES
  },
  eu: {
    translation: translationEU
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "eu",                    // idioma inicial
    fallbackLng: "eu",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;