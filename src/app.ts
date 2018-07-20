
import * as EventHandlers from './event-handlers';
import * as RestEndpoints from './rest-endpoints';
import * as WebsocketEndpoints from './websocket-endpoints';
import logger from './loggers';

(async function () {
  await EventHandlers.init();
  await RestEndpoints.init();
  await WebsocketEndpoints.init();
  logger.info('server started');
})();