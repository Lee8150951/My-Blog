import React from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

interface metaInterface {
  name?: string;
  active?: string;
  title?: string;
}

interface routeInterface {
  path: string;
  name: string;
  component: React.LazyExoticComponent<any>;
  children?: routeInterface[];
  meta?: metaInterface;
  auth?: boolean;
  client?: ApolloClient<NormalizedCacheObject>;
}

export type RouteInterface = routeInterface