import React, { useState } from 'react';

import { useToggle } from '../1-useToggle/useToggle';

import { ChildComponent } from './ChildComponent/ChildComponent';

export const DebugInformationComponent = () => {
  const [boolean, handleToggle] = useToggle(false);
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(prevCount => prevCount + 1);

  return (
    <>
      <ChildComponent boolean={boolean} count={count} />
      <button onClick={handleToggle}>Toggle</button>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
};
