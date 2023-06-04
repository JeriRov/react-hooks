import React, { FC, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { router } from '../router';

interface RoutesParams {
  path: string;
  Element: FC;
}
export const Main: FC = () => {
  const [routes, setRoutes] = useState<RoutesParams[]>();

  useEffect(() => {
    setRoutes(Object.values(router).filter(item => item.hook));
  }, []);

  return (
    <div>
      {routes?.map((item, index) => (
        <Link key={item.path} to={item.path}>
          <span>
            {index + 1}.{item.Element.name}
          </span>
          <br />
        </Link>
      ))}
    </div>
  );
};
