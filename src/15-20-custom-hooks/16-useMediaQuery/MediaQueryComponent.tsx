import { useMediaQuery } from './useMediaQuery';

export const MediaQueryComponent = () => {
  const isLarge = useMediaQuery('(min-width: 200px)');

  return <div>Large: {isLarge.toString()}</div>;
};
