import React, { FC, useEffect, useRef, useState } from 'react';

export const PreviousValueInput: FC = () => {
  const [name, setName] = useState('');
  const prevName = useRef<string>('');
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  return (
    <>
      <input onChange={handleSetName} value={name} />
      <div>My name is {name}</div>
      <div>My previous name was {prevName.current}</div>
    </>
  );
};
