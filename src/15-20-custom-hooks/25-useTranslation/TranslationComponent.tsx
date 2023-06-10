import { useTranslation } from './useTranslation';

export const TranslationComponent = () => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();

  const handleSetLanguage = (lang: string) => setLanguage(lang);
  const handleFallbackLanguage = (lang: string) => setFallbackLanguage(lang);

  return (
    <>
      <div>{language}</div>
      <div>{t('hi')}</div>
      <div>{t('bye')}</div>
      <div>{t('nested.value')}</div>
      <button onClick={() => handleSetLanguage('sp')}>Change To Spanish</button>
      <button onClick={() => handleSetLanguage('en')}>Change To English</button>
      <button onClick={() => handleFallbackLanguage('sp')}>
        Change FB Lang
      </button>
    </>
  );
};
