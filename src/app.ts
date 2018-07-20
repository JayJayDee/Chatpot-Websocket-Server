
import * as EventHandlers from './event-handlers';
import * as RestEndpoints from './rest-endpoints';
import * as WebsocketEndpoints from './websocket-endpoints';


(async function () {
  await EventHandlers.init();
  await RestEndpoints.init();
  await WebsocketEndpoints.init();
  console.log('Server started!');
})();