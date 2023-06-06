import { useState } from 'react';

import { ToggleValueParams } from './useToggle.types';

export const useToggle = (defaultValue: boolean) => {
  const [value, setValue] = useState<boolean>(defaultValue);

  const toggleValue = (value: unknown) =>
    setValue((currentValue: boolean) =>
      typeof value === 'boolean' ? value : !currentValue,
    );

  return [value, toggleValue] as ToggleValueParams;
};
