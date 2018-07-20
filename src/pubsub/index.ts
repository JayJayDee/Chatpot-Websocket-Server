
import * as Interfaces from './interfaces';

import InMemoryBrokerDriver from './in-memory-driver';
import RedisBrokerDriver from './redis-driver';

export { InMemoryBrokerDriver, RedisBrokerDriver }

export interface PubsubBrokerDriver {
  publish(topicId: string, payload: any): Promise<Array<any>>;
  subscribe(topicId: string, callback: (payload: any) => Promise<any>): Promise<any>;
}

interface PubsubBroker {
  driver: Interfaces.PubsubBrokerDriver;
  publish(topicId: string, payload: any): Promise<Array<any>>;
  subscribe(topicId: string, callback: (payload: any) => Promise<any>): Promise<any>;
}

export const Broker: PubsubBroker = {
  driver: new InMemoryBrokerDriver(),
  
  publish: async function (topicId: string, payload: any) {
    return await this.driver.publish(topicId, payload);
  },

  subscribe: async function (topicId: string, callback: (payload: any) => Promise<any>) {
    return await this.driver.subscribe(topicId, callback);
  }
};