import { FC } from 'react';

export interface RoutesParams {
  path: string;
  Element: FC;
}

export interface RenderLinksProps {
  routes?: RoutesParams[];
}
