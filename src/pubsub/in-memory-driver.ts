
import { PubsubBrokerDriver } from './index';

export default class InMemoryBrokderDriver implements PubsubBrokerDriver {

  private eventMap: { [topicId: string]: Array<Promise<any>> };
  
  constructor() {
    this.eventMap = {};
  }

  public async publish(topicId, payload: any): Promise<Array<any>> {
    return null;
  }

  public async subscribe(topicId, callback: (payload: any) => Promise<any>): Promise<any> {
    if (!this.eventMap[topicId]) {
      this.eventMap[topicId] = [];
    }
    //this.eventMap[topicId].push(callback)
    //TODO: type must be changed.
    return null;
  }
}