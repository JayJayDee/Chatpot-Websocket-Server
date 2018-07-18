
import * as PubsubBroker from '../pubsub/broker';
import * as MemberTypes from '../types/member-types';

PubsubBroker.subscribe('register', async (payload: MemberTypes.ReqMemberRegister) => {
  return null;
});