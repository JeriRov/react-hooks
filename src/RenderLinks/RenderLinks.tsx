import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { RenderLinksProps } from './renderLinks.types';

export const RenderLinks: FC<RenderLinksProps> = ({ routes }) => {
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
