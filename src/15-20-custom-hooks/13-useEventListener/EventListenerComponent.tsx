import { useState } from 'react';

import { useEventListener } from './useEventListener';

export const EventListenerComponent = () => {
  const [key, setKey] = useState<string>('');

  useEventListener<KeyboardEvent>('keydown', e => {
    setKey(e.key);
  });

  return <div>Last Key: {key}</div>;
};
