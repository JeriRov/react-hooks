import { useWindowSize } from './useWindowSize';

export const WindowSizeComponent = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      {width} x {height}
    </div>
  );
};
