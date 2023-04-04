import React, { Suspense } from 'react';
import { Routes, Route, useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { RouteInterface } from '../model/route';
import routes from './routes';
// 配置GraphQL
import { ApolloProvider } from '@apollo/client';
import client from '../api/server';

import Navbar from '../components/Navbar';

// 统一渲染路由配置
const Element = (props: RouteInterface): JSX.Element => {
  let { component: Component, meta, client } = props;

  // 修改页面Title
  let { title="MyBlog-WebApp" } = meta || {};
  document.title = title

  // 获取路由信息， 基于属性传递给组件
  const navigate = useNavigate(),
    location = useLocation(),
    params = useParams(),
    [usp] = useSearchParams();

  return (
    <Component navigate={navigate} location={location} param={params} usp={usp} client={client}/>
  );
};

const RouterView = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <Suspense fallback={<div>路由懒加载...</div>}>
        <>
          <Navbar client={client}/>
          <Routes>
            {routes.map(item => {
              let { name, path } = item;
              return <Route key={name} path={path} element={<Element {...item} client={client}/>}/>;
            })}
          </Routes>
        </>
      </Suspense>
    </ApolloProvider>
  );
}

export default RouterView;