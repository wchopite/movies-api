import { Express } from 'express-serve-static-core';
import {
  createMovieHandler,
  enableOrDisableMovieHandler,
  // getMovieReviewsHandler,
  getMoviesHandler,
  getMovieHandler,
  createReviewHandler
} from './movies.handler';

export = (server: Express) => {
  server.get('/movies/:id', getMovieHandler);
  server.get('/movies', getMoviesHandler);
  server.patch(
    '/movies/:id/:type(enable|disable)',
    enableOrDisableMovieHandler
  );
  server.post('/movies', createMovieHandler);
  server.post('/movies/:id/review', createReviewHandler);
};
