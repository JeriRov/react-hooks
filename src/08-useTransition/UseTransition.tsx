import React, { FC, useState, useTransition } from 'react';

export const UseTransition: FC = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState('');
  const [items, setItems] = useState<string[]>([]);
  const LIST_SIZE = 9000;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    startTransition(() => {
      const tempList = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        tempList.push(e.target.value + i);
      }
      setItems(tempList);
    });
  };

  return (
    <>
      <input onChange={handleInputChange} type={'text'} value={input} />
      {isPending
        ? 'Loading...'
        : items.map(item => <div key={item}>{item}</div>)}
    </>
  );
};
