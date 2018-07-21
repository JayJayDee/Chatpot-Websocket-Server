
import * as _ from 'lodash';
import { PubsubBrokerDriver } from './index';

export default class InMemoryBrokderDriver implements PubsubBrokerDriver {

  private eventMap: { [topicId: string]: Array<(payload: any) => Promise<any>> };
  
  constructor() {
    this.eventMap = {};
  }

  public async publish(topicId: string, payload: any): Promise<Array<any>> {
    if (!this.eventMap[topicId]) {
      return [];
    }
    let promises = _.map(this.eventMap[topicId], (func: (payload: any) => Promise<any>) => {
      return func(payload);
    });
    return await Promise.all(promises);
  }

  public async subscribe(topicId, callback: (payload: any) => Promise<any>): Promise<any> {
    if (!this.eventMap[topicId]) {
      this.eventMap[topicId] = [];
    }
    this.eventMap[topicId].push(callback);
    return {};
  }

  public async unsubscribe(topicId: string, callback: (payload: any) => Promise<any>): Promise<any> {
    return null;
  }
}