
import * as PubsubBroker from '../pubsub';
import * as MemberTypes from '../types/member-types';

import logger from '../loggers';

PubsubBroker.subscribe('register', async (payload: MemberTypes.ReqMemberRegister) => {
  logger.info('test');
  return null;
});