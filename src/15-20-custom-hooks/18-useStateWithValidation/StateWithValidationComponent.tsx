import { ChangeEvent } from 'react';

import { useStateWithValidation } from './useStateWithValidation';

export const StateWithValidationComponent = () => {
  const [username, setUsername, isValid] = useStateWithValidation<string>(
    (name: string) => name.length > 5,
    '',
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <>
      <div>Valid: {isValid.toString()}</div>
      <input onChange={handleChange} type="text" value={username} />
    </>
  );
};
