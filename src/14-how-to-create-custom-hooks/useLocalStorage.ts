import { useEffect, useState } from 'react';

const getSavedValue = (key: string, initialValue: string | (() => void)) => {
  if (localStorage.getItem(key) === null) return initialValue;
  const savedValue = JSON.parse(localStorage.getItem(key) as string);
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
};
export const useLocalStorage = (
  key: string,
  initialValue: string | (() => void),
) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
