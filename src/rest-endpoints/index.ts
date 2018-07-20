
import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';
import { IRouterContext } from 'koa-router';

import logger from '../loggers';
import * as PublishRouter from './publish';

const app = new Koa();

export async function init() {
  app.use(PublishRouter.default.routes());
  app.listen(5000);
  logger.info('rest endpoints initialized');
  return;
}