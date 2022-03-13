import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import bcrypt from 'bcryptjs';

import { Review } from '../../libs/getReviewEntity.lib';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({
    length: 50
  })
  username: string;

  @Column({
    length: 250
  })
  password: string;

  @Column({
    length: 30
  })
  name: string;

  @Column({
    length: 30
  })
  lastname: string;

  @Index({ unique: true })
  @Column({
    length: 150
  })
  email: string;

  @OneToMany(() => Review, (review) => review.user)
  movies: Review[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
