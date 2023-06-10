import { useEffect, useRef } from 'react';

import { EventListenerElement } from './useEventListener.types';

export const useEventListener = <T>(
  eventType: string,
  callback: (event: T) => void,
  element: EventListenerElement = window,
): void => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;

    const handler = (e: T) => callbackRef.current(e);
    element.addEventListener(eventType, handler as EventListener);

    return () => {
      element.removeEventListener(eventType, handler as EventListener);
    };
  }, [eventType, element]);
};
