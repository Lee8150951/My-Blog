import { Request, Response, Router } from 'express';
import { RouterConf } from '../../ts/interfaces/routeConf';

const router = Router();

router.get('/test', (req: Request, res: Response) => {
  res.status(200).send("hello test")
});

export const homeRoute: RouterConf = {
  path: '/test',
  router,
};