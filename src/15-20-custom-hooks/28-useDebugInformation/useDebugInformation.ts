import { useEffect, useRef } from 'react';

import { useRenderCount } from '../27-useRenderCount/useRenderCount';
/* eslint-disable  @typescript-eslint/no-explicit-any */
export const useDebugInformation = (componentName: string, props: any) => {
  const count = useRenderCount();
  const changedProps = useRef({});
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const previousProps = useRef<any>(props);
  const lastRenderTimestamp = useRef(Date.now());

  const propKeys = Object.keys({ ...props, ...previousProps });
  changedProps.current = propKeys.reduce((obj, key) => {
    if (props[key] === previousProps.current[key]) return obj;
    return {
      ...obj,
      [key]: { previous: previousProps.current[key], current: props[key] },
    };
  }, {});
  const info = {
    count,
    changedProps: changedProps.current,
    timeSinceLastRender: Date.now() - lastRenderTimestamp.current,
    lastRenderTimestamp: lastRenderTimestamp.current,
  };

  useEffect(() => {
    previousProps.current = props;
    lastRenderTimestamp.current = Date.now();
    console.log('[debug-info]', componentName, info);
  });

  return info;
};
