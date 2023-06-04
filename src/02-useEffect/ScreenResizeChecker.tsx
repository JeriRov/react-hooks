import { FC, useEffect, useState } from 'react';

export const ScreenResizeChecker: FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return <div>{windowWidth}</div>;
};
