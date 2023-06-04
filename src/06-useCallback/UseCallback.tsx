import React, { FC, useCallback, useState } from 'react';

import { List } from './List';

export const UseCallback: FC = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const getItems = useCallback(
    (incrementor: number) => {
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor,
      ];
    },
    [number],
  );

  const themeStyles = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black',
  };

  const handleThemeChange = () => setDark(prevDark => !prevDark);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNumber(parseInt(e.target.value));

  return (
    <div style={themeStyles}>
      <input onChange={handleInputChange} type={'number'} value={number} />
      <button onClick={handleThemeChange}>Change Theme</button>
      <List getItems={getItems} />
    </div>
  );
};
