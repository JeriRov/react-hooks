import { useState } from 'react';

import { useStateWithHistory } from './useStateWithHistory';

export const StateWithHistoryComponent = () => {
  const [
    count,
    setCount,
    {
      history,
      pointer,
      back: handleBack,
      forward: handleForward,
      go: handleGo,
    },
  ] = useStateWithHistory(1);
  const [name, setName] = useState('Kyle');
  const handleDouble = () => setCount(currentCount => currentCount * 2);
  const handleIncrement = () => setCount(prevCount => prevCount + 1);
  const handleNameChange = () => setName('John');
  return (
    <div>
      <div>{count}</div>
      <div>{history.join(', ')}</div>
      <div>Pointer - {pointer}</div>
      <div>{name}</div>
      <button onClick={handleDouble}>Double</button>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleForward}>Forward</button>
      <button onClick={() => handleGo(2)}>Go To Index 2</button>
      <button onClick={handleNameChange}>Change Name</button>
    </div>
  );
};
