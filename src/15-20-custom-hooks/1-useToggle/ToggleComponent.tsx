import { FC } from 'react';

import { useToggle } from './useToggle';

export const ToggleComponent: FC = () => {
  const [value, handleToggleValue] = useToggle(false);

  return (
    <div>
      <div>{value.toString()}</div>
      <button onClick={handleToggleValue}>Toggle</button>
      <button onClick={() => handleToggleValue(true)}>Make True</button>
      <button onClick={() => handleToggleValue(false)}>Make False</button>
    </div>
  );
};
