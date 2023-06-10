import { useEffect, useRef } from 'react';

export const useRenderCount = (): number => {
  const count = useRef<number>(1);
  useEffect(() => {
    count.current++;
  });
  return count.current;
};
