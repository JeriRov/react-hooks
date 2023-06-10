import { useState, useCallback } from 'react';

export const useStateWithValidation = <T>(
  validationFunc: (name: T) => boolean,
  initialValue: T,
): [T, (value: T) => void, boolean] => {
  const [state, setState] = useState(initialValue);
  const [isValid, setIsValid] = useState(() => validationFunc(state));

  const onChange = useCallback(
    (nextState: T) => {
      const value =
        typeof nextState === 'function' ? nextState(state) : nextState;
      setState(value);
      setIsValid(validationFunc(value));
    },
    [state, validationFunc],
  );

  return [state, onChange, isValid];
};
