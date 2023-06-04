import React, { FC, useDeferredValue, useEffect, useMemo } from 'react';

interface ListProps {
  input: string;
}

export const List: FC<ListProps> = ({ input }) => {
  const LIST_SIZE = 9000;
  const deferredInput = useDeferredValue(input);

  const list = useMemo(() => {
    const tempList = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      tempList.push(deferredInput + i);
    }
    return tempList;
  }, [deferredInput]);

  useEffect(() => {
    console.log(`Input ${input}\nDeferred ${deferredInput}`);
  }, [input, deferredInput]);

  return (
    <ul>
      {list.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
