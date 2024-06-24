import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationFR from './locales/fr/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
    resources: {
      fr: {
        translation: translationFR,
      },
    },
  });

export default i18n;
