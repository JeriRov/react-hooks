import { useToggle } from '../1-useToggle/useToggle';

import { useRenderCount } from './useRenderCount';

export const RenderCountComponent = () => {
  const [boolean, handleToggle] = useToggle(false);

  const renderCount = useRenderCount();

  return (
    <>
      <div>{boolean.toString()}</div>
      <div>{renderCount}</div>
      <button onClick={handleToggle}>Toggle</button>
    </>
  );
};
