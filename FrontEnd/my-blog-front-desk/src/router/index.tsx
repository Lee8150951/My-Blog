import React, { Suspense } from 'react';
import { Routes, Route, useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { RouteInterface } from '../model/route';
import routes from './routes';

// 统一渲染路由配置
const Element = (props: RouteInterface): JSX.Element => {
  let { component: Component, meta } = props;

  // 修改页面Title
  let { title="MyBlog-WebApp" } = meta || {};
  document.title = title

  // 获取路由信息， 基于属性传递给组件
  const navigate = useNavigate(),
    location = useLocation(),
    params = useParams(),
    [usp] = useSearchParams();

  return (
    <Component navigate={navigate} location={location} param={params} usp={usp}/>
  );
};

const RouterView = (): JSX.Element => {
  return (
    <Suspense fallback={<div>路由懒加载...</div>}>
      <Routes>
        {routes.map(item => {
          let { name, path } = item;
          return <Route key={name} path={path} element={<Element {...item}/>}/>;
        })}
      </Routes>
    </Suspense>
  );
}

export default RouterView;