import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable
} from 'typeorm';

import { Genre } from './genre.entity';
import { Review } from './review.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({
    length: 250
  })
  name: string;

  @Column('text')
  description: string;

  @Column('int')
  duration: number;

  @Column('int')
  year: number;

  @Column({
    default: true
  })
  is_enabled: boolean;

  @OneToMany(() => Review, (review) => review.movie)
  reviews: Review[];

  @ManyToMany(() => Genre)
  @JoinTable({
    name: 'genre_movie',
    joinColumn: {
      name: 'genre_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'movie_id',
      referencedColumnName: 'id'
    }
  })
  genres: Genre[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
