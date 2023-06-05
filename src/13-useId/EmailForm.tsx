import { FC, useId } from 'react';

export const EmailForm: FC = () => {
  const id = useId();
  return (
    <>
      <label htmlFor={`${id}-email`}>Email</label>
      <input id={`${id}-email`} type="email" />
      <br />
      <label htmlFor={`${id}-name`}>Name</label>
      <input id={`${id}-name`} type="text" />
    </>
  );
};
