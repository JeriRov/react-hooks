import { useState } from 'react';

import { useTimeout } from './useTimeout';

export const TimeoutComponent = () => {
  const [count, setCount] = useState(10);
  const { clear: handleClear, reset: handleReset } = useTimeout(
    () => setCount(0),
    1000,
  );

  const handleIncrement = () => setCount(c => c + 1);

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleClear}>Clear Timeout</button>
      <button onClick={handleReset}>Reset Timeout</button>
    </div>
  );
};
