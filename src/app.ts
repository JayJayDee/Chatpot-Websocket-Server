
import * as RestEndpoints from './rest-endpoints';
import * as WebsocketEndpoints from './websocket-endpoints';


(async function () {
  await RestEndpoints.init();
  await WebsocketEndpoints.init();
  console.log('Server started!');
})();