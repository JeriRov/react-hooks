import { ChangeEvent, FC } from 'react';

import { useLocalStorage } from './useLocalStorage';
import { useUpdateLogger } from './useUpdateLogger';

export const CreateCustomHook: FC = () => {
  const [name, setName] = useLocalStorage('name', '');
  useUpdateLogger(name);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  return <input onChange={handleChange} type={'text'} value={name} />;
};
