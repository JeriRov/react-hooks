import React, { useState } from 'react';

import { usePrevious } from './usePrevious';

export const PreviousComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Kyle');
  const previousCount = usePrevious<number>(count);

  const handleIncrement = () => setCount(prevCount => prevCount + 1);
  const handleSetName = () => setName('John');

  return (
    <div>
      <div>
        {count} - {previousCount}
      </div>
      <div>{name}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleSetName}>Change Name</button>
    </div>
  );
};
