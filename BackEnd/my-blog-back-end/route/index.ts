import { Express, Request, Response } from 'express';
import { RouterConf } from '../ts/interfaces/routeConf';

import { homeRoute } from './routes/homeRoute';

// 路由配置
const routerConf: Array<RouterConf> = [homeRoute];

const routes = (app: Express) => {
  // 根目录
  app.get('/', (req: Request, res: Response) => res.status(200).send('Hello World!!!'));

  routerConf.forEach((conf) => app.use(conf.path, conf.router));
};

export default routes;