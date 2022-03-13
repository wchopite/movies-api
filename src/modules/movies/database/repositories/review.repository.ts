// This can be "extended" from Repository class
import { getRepository } from 'typeorm';
import { Review } from '../entities/review.entity';

export default () => {
  return getRepository(Review);
};
