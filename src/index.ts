import 'reflect-metadata';
import config from '@movies-api/config';
import dbConnection from './database';
import { startServer } from './api/server';

dbConnection()
  .then(async () => {
    console.log('Connected to the database');
    const server = await startServer();
    server.listen(config.port, () => {
      console.info(`Starting server... listening on port ${config.port}`);
    });
  })
  .catch((err) => console.error(`Error: ${err}`));
