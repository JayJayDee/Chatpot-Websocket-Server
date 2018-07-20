
import * as winston from 'winston';

const tsformat = () => new Date().toLocaleDateString();

const logger: winston.Logger = winston.createLogger({
  level: 'debug',
  transports: [
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
});

export default logger;