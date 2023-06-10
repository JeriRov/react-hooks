import { RefObject, useState } from 'react';

import { useEventListener } from '../13-useEventListener/useEventListener';
import { EventListenerElement } from '../13-useEventListener/useEventListener.types';

export const useHover = <T extends RefObject<EventListenerElement>>(ref: T) => {
  const [hovered, setHovered] = useState(false);

  useEventListener(
    'mouseover',
    () => setHovered(true),
    ref.current ?? undefined,
  );
  useEventListener(
    'mouseout',
    () => setHovered(false),
    ref.current ?? undefined,
  );

  return hovered;
};
