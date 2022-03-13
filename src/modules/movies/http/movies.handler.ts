import * as express from 'express';
import {
  createMovieService,
  createReviewService,
  getMoviesService,
  getMovieByIdService
} from '../services/movies.services';

export async function createMovieHandler(
  req: express.Request,
  res: express.Response
): Promise<void> {
  const result = await createMovieService(req.body);
  res.json(result);
}

export async function createReviewHandler(
  req: express.Request,
  res: express.Response
): Promise<void> {
  const result = await createReviewService(req.body);
  res.json(result);
}

export async function getMoviesHandler(
  req: express.Request,
  res: express.Response
): Promise<void> {
  const movies = await getMoviesService();
  res.json(movies);
}

export async function getMovieHandler(
  req: express.Request,
  res: express.Response
): Promise<void> {
  const id = req.params.id;
  const movie = await getMovieByIdService(Number(id));
  res.json(movie);
}

export function enableOrDisableMovieHandler(
  req: express.Request,
  res: express.Response
): void {
  res.send('Enable/Disable movie handler');
}

export function getMovieReviewsHandler(
  req: express.Request,
  res: express.Response
): void {
  res.send('Get movie reviews handler');
}
