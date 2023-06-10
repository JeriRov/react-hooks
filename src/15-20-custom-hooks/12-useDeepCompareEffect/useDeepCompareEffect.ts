import { useEffect, useRef } from 'react';

import isEqual from 'lodash/fp/isEqual';

import { IUseDeepCompareEffect } from './useDeepCompareEffect.types';

export const useDeepCompareEffect: IUseDeepCompareEffect = (
  callback,
  dependencies,
) => {
  const currentDependenciesRef = useRef<unknown>();

  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies;
  }

  useEffect(callback, [currentDependenciesRef.current]);
};
