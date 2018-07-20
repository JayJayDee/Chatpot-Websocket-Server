
import * as Router from 'koa-router';
import { IRouterContext } from 'koa-router';

import * as Pubsub from '../pubsub';
import * as MemberTypes from '../types/member-types';

const router = new Router();

router.post('/test', async (ctx: IRouterContext, next: () => Promise<any>) => {
  let memberToken: string = ctx.query['member_token'];
  let topicId: string = ctx.params['topic_id'];

  let payload: MemberTypes.ReqMemberRegister = {
    memberToken: memberToken,
    topicId: topicId
  };

  let resp = await Pubsub.Broker.publish('register', payload);
  ctx.body = resp;
  ctx.status = 200;
});

export default router;