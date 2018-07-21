
import { PubsubBrokerDriver } from './index';

export default class RedisBrokderDriver implements PubsubBrokerDriver {

  //TODO: to be implemented
  
  public async publish(topicId, payload: any): Promise<Array<any>> {
    return null;
  }

  public async subscribe(topicId, callback: (payload: any) => Promise<any>): Promise<any> {
    return null;
  }

  public async unsubscribe(topicId: string, callback: (payload: any) => Promise<any>): Promise<any> {
    return null;
  }
}