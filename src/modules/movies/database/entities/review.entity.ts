import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import { Movie } from './movie.entity';
import { User } from '../../libs/getUserEntity.lib';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Movie, (movie) => movie.reviews)
  @JoinColumn({ name: 'movie_id' })
  movie: number;

  @ManyToOne(() => User, (user) => user.movies)
  @JoinColumn({ name: 'user_id' })
  user: number;

  @Column('int')
  user_id: number;

  @Column('int')
  value: number;

  @Column('text')
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
