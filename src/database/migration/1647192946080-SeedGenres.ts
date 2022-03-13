import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';

import { GenreSeed } from '../seeders/genres.seed';

export class GenreSeed1647185733294 implements MigrationInterface {
  public async up(): Promise<void> {
    await getRepository('genre').save(GenreSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // do nothing
  }
}
