"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialMigration1761064848876 = void 0;
class InitialMigration1761064848876 {
    name = 'InitialMigration1761064848876';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.InitialMigration1761064848876 = InitialMigration1761064848876;
//# sourceMappingURL=1761064848876-InitialMigration.js.map