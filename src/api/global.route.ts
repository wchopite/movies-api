import { Express } from 'express-serve-static-core';

export const healthRoute = (server: Express) => {
  server.get('/', (req, res) => {
    return res.json({
      status: 'ok'
    });
  });
};
