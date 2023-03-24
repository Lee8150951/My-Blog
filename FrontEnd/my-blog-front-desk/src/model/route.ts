import React from 'react';

interface metaInterface {
  name?: string;
  active?: string;
  title?: string;
}

interface routeInterface {
  path: string,
  name: string,
  component: React.LazyExoticComponent<any>,
  children?: routeInterface[],
  meta?: metaInterface
  auth?: boolean;
}

export type RouteInterface = routeInterface
