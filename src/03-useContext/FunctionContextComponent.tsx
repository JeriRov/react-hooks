import { FC } from 'react';

import { useTheme, useThemeUpdate } from './ThemeContext';

export const FunctionContextComponent: FC = () => {
  const darkTheme = useTheme();
  const handleToggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#ccc',
    color: darkTheme ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem',
  };
  return (
    <>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
};
