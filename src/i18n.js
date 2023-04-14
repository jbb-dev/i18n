import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations_en from "./locales/en/translations.json";
import translations_fr from "./locales/fr/translations.json";

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
        en: {
            translation: translations_en
        },
        fr: {
            translation: translations_fr
      }
    }
  });

export default i18n;