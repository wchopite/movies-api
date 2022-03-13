/* eslint-disable @typescript-eslint/no-unused-vars */
import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { User } from '../../modules/users/database/entities/user.entity';

export class FirstUser1647193822560 implements MigrationInterface {
  name = 'FirstUser1647193822560';

  public async up(_: QueryRunner): Promise<void> {
    const user = new User();
    user.username = 'admin';
    user.password = 'BreakinBad2008';
    user.name = 'Walter';
    user.lastname = 'White';
    user.email = 'admin@breakingbad.com';
    user.hashPassword();
    const userRepository = getRepository(User);
    await userRepository.save(user);
  }

  public async down(_: QueryRunner): Promise<void> {
    // do nothing
  }
}
