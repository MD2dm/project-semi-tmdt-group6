import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const lag = window.localStorage.getItem('i18nextLng');

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: lag || 'en',
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/assets/data/locales/{{lng}}.json`,
    },
    fallbackLng: lag || 'en',
    debug: false,
    keySeparator: false,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
  });

export default i18n;
