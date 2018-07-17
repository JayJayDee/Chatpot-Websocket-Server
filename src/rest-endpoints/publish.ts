
import * as Router from 'koa-router';
import { IRouterContext } from 'koa-router';

export const router = new Router();

router.post('/publish/member/:member_token', async (ctx: IRouterContext, next: () => Promise<any>) => {
  let memberToken: string = ctx.params['member_token'];

});