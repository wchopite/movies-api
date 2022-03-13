import express from 'express';
import { Express } from 'express-serve-static-core';
import helmet from 'helmet';
import cors from 'cors';

import config from '@movies-api/config';
import expressDevlogger from '../logger/expressDevLogger';
import expressProdlogger from '../logger/expressProdLogger';
import { healthRoute } from './global.route';
import setModuleRoutes from './modules.route';

export async function startServer(): Promise<Express> {
  const server = express();

  // Set basic config for the express server
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));
  server.use(cors());
  server.use(helmet());

  if (config.expressDevLogger) {
    server.use(expressDevlogger('dev', {}));
  }

  if (config.expressProdLogger) {
    server.use(
      expressProdlogger(
        ':method :url :status :res[content-length] - :response-time ms',
        {}
      )
    );
  }

  // set health check and module routes
  healthRoute(server);
  setModuleRoutes(server);

  return server;
}
