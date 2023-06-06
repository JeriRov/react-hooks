import { useState } from 'react';

import { useUpdateEffect } from './useUpdateEffect';

export const UpdateEffectComponent = () => {
  const [count, setCount] = useState(10);
  useUpdateEffect(() => alert(count), [count]);
  const handleIncrement = () => setCount(prevCount => prevCount + 1);
  return (
    <div>
      <div>{count}</div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
