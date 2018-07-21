
import * as Interfaces from './interfaces';

import InMemoryBrokerDriver from './in-memory-driver';
import RedisBrokerDriver from './redis-driver';
import { resolve } from 'path';

export { InMemoryBrokerDriver, RedisBrokerDriver }

export interface PubsubBrokerDriver {
  publish(topicId: string, payload: any): Promise<Array<any>>;
  subscribe(topicId: string, callback: (payload: any) => Promise<any>): Promise<any>;
  unsubscribe(topicId: string, callback: (payload: any) => Promise<any>): Promise<any>;
}

interface PubsubBroker {
  driver: Interfaces.PubsubBrokerDriver;

  publish(topicId: string, payload: any): Promise<Array<any>>;
  subscribe(topicId: string, callback: (payload: any) => Promise<any>): Promise<any>;
  unsubscribe(topicId: string, callback: (payload: any) => Promise<any>): Promise<any>;

  subscribeOneTime(topicId: string, callback: (payload: any) => Promise<any>): Promise<any>;
}

interface SubscriptionOptions {
  useObjectWithSingleResponse?: boolean;
}

export const Broker: PubsubBroker = {
  driver: new InMemoryBrokerDriver(),
  
  publish: async function(topicId: string, payload: any) {
    return await this.driver.publish(topicId, payload);
  },

  subscribe: async function(topicId: string, callback: (payload: any) => Promise<any>) {
    return await this.driver.subscribe(topicId, callback);
  },

  unsubscribe: async function(topicId: string, callback: (payload: any) => Promise<any>) {
    return null;
  },

  //TODO: to be fixed to subscribe funtion to async function.
  subscribeOneTime: function(topicId: string, callback: (payload: any) => Promise<any>) {
    return new Promise((resolve: Function, reject: Function) => {
      let subscribeCallback = async (payload) => {
        Broker.unsubscribe(topicId, this)
        .then((resp) => {
          return resolve(payload);
        })
        .catch((err) => {
          return reject(err);
        });
      };
      Broker.subscribe(topicId, subscribeCallback);
    });
  },
};