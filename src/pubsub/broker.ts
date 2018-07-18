
import * as _ from 'lodash';

const topics: { [key: string]: Array<(payload: any) => Promise<any>> } = {};

export async function publish(topicId: string, payload: any): Promise<Array<any>> {
  if (!topics[topicId]) {
    return [];
  }
  let promises: Array<Promise<any>> = _.map(topics[topicId], (func: (payload: any) => Promise<any>) => {
    return func(payload);
  });
  return await Promise.all(promises);
}

export function subscribe(topicId: string, callback: (payload: any) => Promise<any>) {
  if (!topics[topicId]) {
    topics[topicId] = [];
  }
  topics[topicId].push(callback);
}