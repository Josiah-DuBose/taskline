import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUserTable1761066431283 implements MigrationInterface {
    name = 'UpdateUserTable1761066431283'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }

}
