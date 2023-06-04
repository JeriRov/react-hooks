import { FC, useState } from 'react';

export const UseState: FC = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('blue');

  const handleDecrementCount = () => setCount(prevCount => prevCount - 1);

  const handleIncrementCount = () => {
    setCount(prevCount => prevCount + 1);
    setTheme('red');
  };

  return (
    <div>
      <button onClick={handleDecrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={handleIncrementCount}>+</button>
    </div>
  );
};
