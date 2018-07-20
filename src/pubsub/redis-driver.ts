
import { PubsubBrokerDriver } from './index';

export default class RedisBrokderDriver implements PubsubBrokerDriver {
  
  public async publish(topicId, payload: any): Promise<Array<any>> {
    return null;
  }

  public async subscribe(topicId, callback: (payload: any) => Promise<any>): Promise<any> {
    return null;
  }
}