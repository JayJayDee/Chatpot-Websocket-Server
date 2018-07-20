
import logger from '../loggers';

export async function init() {
  require('./member');
  logger.info('event-handlers initialized');
  return 
}