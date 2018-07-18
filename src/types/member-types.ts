
import * as CommonTypes from './common-types';

export interface ReqMemberRegister extends CommonTypes.InternalMessageRequest {
  memberToken: string;
  topicId: string;
}