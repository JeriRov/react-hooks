import { useState } from 'react';

interface UseArray<T> {
  array: T[];
  set: (array: T[]) => void;
  push: (element: T) => void;
  filter: (callback: (n: T) => boolean) => void;
  update: (index: number, newElement: T) => void;
  remove: (index: number) => void;
  clear: () => void;
}
export const useArray = <T>(defaultValue: T[]): UseArray<T> => {
  const [array, setArray] = useState(defaultValue);

  function push(element: T) {
    setArray(a => [...a, element]);
  }

  function filter(callback: (n: T) => boolean) {
    setArray(a => a.filter(callback));
  }

  function update(index: number, newElement: T) {
    setArray(a => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ]);
  }

  function remove(index: number) {
    setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  }

  function clear() {
    setArray([]);
  }

  return { array, set: setArray, push, filter, update, remove, clear };
};
