"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserTable1761066431283 = void 0;
class UpdateUserTable1761066431283 {
    name = 'UpdateUserTable1761066431283';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }
}
exports.UpdateUserTable1761066431283 = UpdateUserTable1761066431283;
//# sourceMappingURL=1761066431283-UpdateUserTable.js.map