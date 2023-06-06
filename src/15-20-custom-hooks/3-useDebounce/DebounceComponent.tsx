import { useState } from 'react';

import { useDebounce } from './useDebounce';

export const DebounceComponent = () => {
  const [count, setCount] = useState(10);
  useDebounce(() => alert(count), 1000, [count]);

  const handleIncrement = () => setCount(prevCount => prevCount + 1);

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
