import { useLocalStorage } from '../8-useStorage/useStorage';

import { translations } from './translations';

export interface Translation {
  language: string;
  setLanguage: (language: string) => void;
  fallbackLanguage: string;
  setFallbackLanguage: (fallbackLanguage: string) => void;
  t: (key: string) => string;
}

export const useTranslation = (): Translation => {
  const [language, setLanguage] = useLocalStorage('language', 'en');
  const [fallbackLanguage, setFallbackLanguage] = useLocalStorage(
    'fallbackLanguage',
    'en',
  );

  const translate = (key: string) => {
    const keys = key.split('.');

    return (
      getNestedTranslation(language, keys) ??
      getNestedTranslation(fallbackLanguage, keys) ??
      key
    );
  };

  return {
    language,
    setLanguage,
    fallbackLanguage,
    setFallbackLanguage,
    t: translate,
  };
};

function getNestedTranslation(language: 'en' | 'sp', keys: string[]) {
  for (const key of Object.keys(translations[language])) {
    console.log(key);
  }
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  return keys.reduce((obj: any, key: string) => {
    return obj?.[key];
  }, translations[language]);
}
