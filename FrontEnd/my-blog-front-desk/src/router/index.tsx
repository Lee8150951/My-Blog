import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteInterface } from '../model/route';
import routes from './routes';

function RouterView(): JSX.Element {
  return (
    <main>
      <Routes>
        {routes.map((item: RouteInterface, i: number) => (
          <Route
            key={i}
            path={item.path}
            element={
              <Suspense fallback={<div>路由懒加载...</div>}>
                <item.component />
              </Suspense>
            }
          />
        ))}
      </Routes>
    </main>
  );
}

export default RouterView;