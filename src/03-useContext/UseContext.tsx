import { FC } from 'react';

import { FunctionContextComponent } from './FunctionContextComponent';
import { ThemeProvider } from './ThemeContext';

export const UseContext: FC = () => {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
};
