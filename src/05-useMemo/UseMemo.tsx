import React, { FC, useEffect, useMemo, useState } from 'react';

export const UseMemo: FC = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    };
  }, [dark]);

  useEffect(() => {
    console.log('Theme changed');
  }, [themeStyles]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNumber(parseInt(e.target.value));

  const handleThemeChange = () => setDark(prevDark => !prevDark);

  return (
    <>
      <input onChange={handleInputChange} type="number" value={number} />
      <button onClick={handleThemeChange}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

const slowFunction = (num: number) => {
  console.log('Calling slow function');
  for (let i = 0; i <= 1000000000; i++) {
    /* empty */
  }
  return num * 2;
};
