import { useState } from 'react';

import { useEffectOnce } from './useEffectOnce';

export const EffectOnceComponent = () => {
  const [count, setCount] = useState(0);

  useEffectOnce(() => alert('Hi'));

  const handleIncrement = () => setCount(prevCount => prevCount + 1);

  return (
    <>
      <div>{count}</div>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};
