import { FC } from 'react';

import { InputFocus } from './InputFocus';
import { PreviousValueInput } from './PreviousValueInput';
import { RenderCounter } from './RenderCounter';

export const UseRef: FC = () => {
  return (
    <>
      <h2>Render Counter</h2>
      <RenderCounter />
      <h2>Input Focus</h2>
      <InputFocus />
      <h2>PreviousName</h2>
      <PreviousValueInput />
    </>
  );
};
