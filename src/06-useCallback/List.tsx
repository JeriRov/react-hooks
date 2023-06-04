import { FC, useEffect, useState } from 'react';

interface ListProps {
  getItems: (incrementor: number) => number[];
}
export const List: FC<ListProps> = ({ getItems }) => {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    setItems(getItems(1));
    console.log('Updating Items');
  }, [getItems]);
  return (
    <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
