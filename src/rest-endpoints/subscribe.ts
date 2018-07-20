
import * as Router from 'koa-router';
import { IRouterContext } from 'koa-router';

import * as Pubsub from '../pubsub';
import * as MemberTypes from '../types/member-types';

export const router = new Router();

router.post('/subscribe/topic/:topic_id', async (ctx: IRouterContext, next: () => Promise<any>) => {
  let memberToken: string = ctx.query['member_token'];
  let topicId: string = ctx.params['topic_id'];

  let payload: MemberTypes.ReqMemberRegister = {
    memberToken: memberToken,
    topicId: topicId
  };

  let resp = await Pubsub.Broker.publish('subscribe', payload);
  ctx.body = resp;
  ctx.status = 200;
});