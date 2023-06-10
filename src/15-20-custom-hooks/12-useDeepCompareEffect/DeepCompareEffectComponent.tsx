import { useEffect, useState, useRef } from 'react';

import { useDeepCompareEffect } from './useDeepCompareEffect';

export const DeepCompareEffectComponent = () => {
  const [age, setAge] = useState(0);
  const [otherCount, setOtherCount] = useState(0);
  const useEffectCountRef = useRef<HTMLSpanElement>(null);
  const useDeepCompareEffectCountRef = useRef<HTMLSpanElement>(null);

  const person = { age, name: 'Kyle' };
  useEffect(() => {
    if (useEffectCountRef.current?.textContent) {
      useEffectCountRef.current.textContent = String(
        parseInt(useEffectCountRef.current.textContent) + 1,
      );
    }
  }, [person]);

  useDeepCompareEffect(() => {
    if (useDeepCompareEffectCountRef.current?.textContent) {
      useDeepCompareEffectCountRef.current.textContent = String(
        parseInt(useDeepCompareEffectCountRef.current.textContent) + 1,
      );
    }
  }, [person]);

  const handleIncrementAge = () => setAge(currentAge => currentAge + 1);
  const handleIncrementOtherCount = () => setOtherCount(count => count + 1);

  return (
    <div>
      <div>
        useEffect: <span ref={useEffectCountRef}>0</span>
      </div>
      <div>
        useDeepCompareEffect: <span ref={useDeepCompareEffectCountRef}>0</span>
      </div>
      <div>Other Count: {otherCount}</div>
      <div>{JSON.stringify(person)}</div>
      <button onClick={handleIncrementAge}>Increment Age</button>
      <button onClick={handleIncrementOtherCount}>Increment Other Count</button>
    </div>
  );
};
