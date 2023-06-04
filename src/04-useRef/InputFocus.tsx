import React, { FC, useRef, useState } from 'react';

export const InputFocus: FC = () => {
  const [name, setName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const handleButtonClick = () => inputRef.current?.focus();

  return (
    <>
      <input onChange={handleChange} ref={inputRef} value={name} />
      <div>My name is {name}</div>
      <button onClick={handleButtonClick}>Focus</button>
    </>
  );
};
