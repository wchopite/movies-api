// This can be "extended" from Repository class
import { getRepository } from 'typeorm';
import { Movie } from '../entities/movie.entity';

export default () => {
  return getRepository(Movie);
};
