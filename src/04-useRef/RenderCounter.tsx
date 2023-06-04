import React, { FC, useEffect, useRef, useState } from 'react';

export const RenderCounter: FC = () => {
  const [name, setName] = useState('');
  const renderRef = useRef(0);

  useEffect(() => {
    renderRef.current++;
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  return (
    <>
      <input onChange={handleChange} value={name} />
      <div>My name is {name}</div>
      <div>I rendered {renderRef.current} times</div>
    </>
  );
};
