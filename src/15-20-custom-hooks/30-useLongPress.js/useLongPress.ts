import { RefObject } from 'react';

import { useEventListener } from '../13-useEventListener/useEventListener';
import { EventListenerElement } from '../13-useEventListener/useEventListener.types';
import { useTimeout } from '../2-useTimeout/useTimeout';
import { useEffectOnce } from '../20-useEffectOnce/useEffectOnce';

export const useLongPress = (
  ref: RefObject<EventListenerElement>,
  cb: () => void,
  { delay = 250 } = {},
) => {
  const { reset, clear } = useTimeout(cb, delay);
  useEffectOnce(clear);

  useEventListener('mousedown', reset, ref.current ?? undefined);
  useEventListener('touchstart', reset, ref.current ?? undefined);

  useEventListener('mouseup', clear, ref.current ?? undefined);
  useEventListener('mouseleave', clear, ref.current ?? undefined);
  useEventListener('touchend', clear, ref.current ?? undefined);
};
