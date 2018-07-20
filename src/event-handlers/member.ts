
import * as Pubsub from '../pubsub';
import * as MemberTypes from '../types/member-types';

import logger from '../loggers';

Pubsub.Broker.subscribe('register', async (payload: MemberTypes.ReqMemberRegister) => {
  logger.info('test');
  return null;
});