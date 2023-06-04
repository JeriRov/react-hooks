import React, {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

const ThemeContext = React.createContext(false);
const ThemeUpdateContext = React.createContext(() => {
  console.log('ThemeUpdateContext');
});

export const useTheme = () => useContext(ThemeContext);

export const useThemeUpdate = () =>
  useContext(ThemeUpdateContext) as MouseEventHandler<HTMLButtonElement>;

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => setDarkTheme(prevDarkTheme => !prevDarkTheme);

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
