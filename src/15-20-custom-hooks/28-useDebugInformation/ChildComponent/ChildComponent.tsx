import { FC } from 'react';

import { useDebugInformation } from '../useDebugInformation';

import { ChildComponentProps } from './ChildComponent.types';

export const ChildComponent: FC<ChildComponentProps> = props => {
  const info = useDebugInformation('ChildComponent', props);

  return (
    <>
      <div>{props.boolean.toString()}</div>
      <div>{props.count}</div>
      <div>{JSON.stringify(info, null, 2)}</div>
    </>
  );
};
