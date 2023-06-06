import { useEffect } from 'react';

import { useTimeout } from '../2-useTimeout/useTimeout';

import { IUseDebounce } from './useDebounce.types';

export const useDebounce: IUseDebounce = (callback, delay, dependencies) => {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, [clear]);
};
