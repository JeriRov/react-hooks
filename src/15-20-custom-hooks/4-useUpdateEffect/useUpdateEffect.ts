import { useEffect, useRef } from 'react';

import { IUseUpdateEffect } from './useUpdateEffect.types';

export const useUpdateEffect: IUseUpdateEffect = (callback, dependencies) => {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};
