import React, { FC, useState } from 'react';

import { List } from './List';

export const UseDeferredValue: FC = () => {
  const [input, setInput] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  return (
    <>
      <input onChange={handleInputChange} type={'text'} value={input} />
      <List input={input} />
    </>
  );
};
