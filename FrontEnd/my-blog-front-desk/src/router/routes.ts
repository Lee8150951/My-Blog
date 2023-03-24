import { lazy } from 'react';
import { RouteInterface } from '../model/route';

const routes: RouteInterface[] = [
  {
    path: '/',
    name: 'home',
    component: lazy(() => import('../views/Home')),
    meta: {
      title: '主页-MyBlog',
    },
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: lazy(() => import('../views/Detail')),
    meta: {
      title: '详情页-MyBlog',
    },
  },
  {
    path: '/personal',
    name: 'personal',
    component: lazy(() => import('../views/Personal')),
    meta: {
      title: '个人中心-MyBlog',
    },
  },
];

export default routes;