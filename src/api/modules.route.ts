import { Express } from 'express-serve-static-core';

// @Routes
import moviesModuleRoutes from '../modules/movies//http/movies.route';

export default function modulesRoute(server: Express) {
  moviesModuleRoutes(server);
}
