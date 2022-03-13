import config from '../config/index';
import { ConnectionOptions } from 'typeorm';

// Entities from Movies Module
import { Genre } from '../modules/movies/database/entities/genre.entity';
import { Movie } from '../modules/movies/database/entities/movie.entity';
import { Review } from '../modules/movies/database/entities/review.entity';

// Entities from User Module
import { User } from '../modules/users/database/entities/user.entity';

const mysqlConfig: ConnectionOptions = {
  name: 'default',
  type: 'mysql',
  host: config.dbHost,
  port: config.dbPort,
  username: config.dbUsername,
  password: config.dbPassword,
  database: config.dbName,
  entities: [Genre, Movie, Review, User],
  synchronize: config.environment === 'development' ? true : false,
  migrations: [`${__dirname}/migration/**/*.ts`],
  cli: {
    migrationsDir: `${__dirname}/migration`
  }
};

export default mysqlConfig;
