import { useCallback, useRef, useState } from 'react';

interface IUseStateWithHistory<T> {
  history: T[];
  pointer: number;
  back: () => void;
  forward: () => void;
  go: (index: number) => void;
}
export const useStateWithHistory = <T>(
  defaultValue: T,
  { capacity = 10 } = {},
): [T, (v: T | ((v: T) => T)) => void, IUseStateWithHistory<T>] => {
  const [value, setValue] = useState<T>(defaultValue);
  const historyRef = useRef([value]);
  const pointerRef = useRef(0);

  const set = useCallback(
    (v: T | ((n: T) => T)) => {
      const resolvedValue =
        typeof v === 'function' ? (v as (n: T) => T).call(null, value) : v;
      if (historyRef.current[pointerRef.current] !== resolvedValue) {
        if (pointerRef.current < historyRef.current.length - 1) {
          historyRef.current.splice(pointerRef.current + 1);
        }
        historyRef.current.push(resolvedValue);

        while (historyRef.current.length > capacity) {
          historyRef.current.shift();
        }
        pointerRef.current = historyRef.current.length - 1;
      }
      setValue(resolvedValue);
    },
    [capacity, value],
  );

  const back = useCallback(() => {
    if (pointerRef.current <= 0) return;
    pointerRef.current--;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const forward = useCallback(() => {
    if (pointerRef.current >= historyRef.current.length - 1) return;
    pointerRef.current++;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const go = useCallback((index: number) => {
    if (index < 0 || index > historyRef.current.length - 1) return;
    pointerRef.current = index;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  return [
    value,
    set,
    {
      history: historyRef.current,
      pointer: pointerRef.current,
      back,
      forward,
      go,
    },
  ];
};
