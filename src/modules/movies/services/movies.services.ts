import { Movie } from '../database/entities/movie.entity';
import { Review } from '../database/entities/review.entity';
import { IMovie } from '../database/models/movie.model';
import { IReview } from '../database/models/review.model';
import movieRepository from '../database/repositories/movie.repository';
import reviewRepository from '../database/repositories/review.repository';

export async function createMovieService(data: IMovie): Promise<Movie | null> {
  // TODO: Should be better get the user from the token
  const { name, description, duration, year } = data;
  const movie = new Movie();
  movie.name = name;
  movie.description = description;
  movie.duration = duration;
  movie.year = year;

  return movieRepository().save(movie);
}

export async function createReviewService(
  data: IReview
): Promise<Review | null> {
  const { user_id, movie_id, value, description } = data;
  const review = new Review();
  review.user_id = user_id;
  review.movie = movie_id;
  review.description = description;
  review.value = value;

  return reviewRepository().save(review);
}

export async function getMoviesService(): Promise<Movie[] | null> {
  return movieRepository().find();
}

export async function getMovieByIdService(id: number): Promise<Movie | null> {
  console.log(id);
  return movieRepository().findOneOrFail(id);
}
