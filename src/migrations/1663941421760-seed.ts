import { Users } from "entities/User";
import { AppDataSource } from "ormConfig";
import { usersSeed } from "seeds/users";
import { In, MigrationInterface } from "typeorm";

export class seed1663941421760 implements MigrationInterface {
  public async up(): Promise<void> {
    await AppDataSource.manager.save(Users, usersSeed);
  }

  public async down(): Promise<void> {
    await AppDataSource.manager.delete(Users, { id: In([1, 2, 3]) });
  }
}
