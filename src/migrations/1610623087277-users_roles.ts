import { TABLE_PREFIX } from "../definitions";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class usersRoles1610623087277 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
          new Table({
            name: TABLE_PREFIX+'users_roles',
            columns: [
              {
                name: 'id',
                type: 'varchar',
                isPrimary: true,
              },
              {
                name: 'user_id',
                type: 'varchar',
                isNullable: false,
              },
              {
                name: 'role_id',
                type: 'varchar',
                isNullable: false,
              },
              {
                name: 'created_at',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP()',
                onUpdate: 'CURRENT_TIMESTAMP()',
              },
              {
                name: 'updated_at',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP()',
                onUpdate: 'CURRENT_TIMESTAMP()',
              },
            ],
          }),
          );
      }

    public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(TABLE_PREFIX+'users_roles',);

    }

}
