import { MigrationInterface, QueryRunner } from "typeorm";

export class init1666185087194 implements MigrationInterface {
    name = 'init1666185087194'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "redis_to_sql_entity" ("id" SERIAL NOT NULL, "storedRedis" character varying NOT NULL, CONSTRAINT "PK_b3bc33f46e9f0d7fa235cb5314d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "redis_to_sql_entity"`);
    }

}
