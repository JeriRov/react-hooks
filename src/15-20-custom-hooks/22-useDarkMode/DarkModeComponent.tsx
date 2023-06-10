import './body.css';
import { useDarkMode } from './useDarkMode';

export const DarkModeComponent = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const handleToggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <button
      onClick={handleToggleDarkMode}
      style={{
        border: `1px solid ${darkMode ? 'white' : 'black'}`,
        background: 'none',
        color: darkMode ? 'white' : 'black',
      }}>
      Toggle Dark Mode
    </button>
  );
};
