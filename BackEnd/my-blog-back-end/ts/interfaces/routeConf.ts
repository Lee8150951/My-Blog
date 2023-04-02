import { Router } from 'express';

interface RouterConf {
  path: string,
  router: Router,
  meta?: unknown
}

export { RouterConf };