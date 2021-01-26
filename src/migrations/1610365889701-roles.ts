import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { TABLE_PREFIX } from '../definitions';

export class roles1610365889701 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
              name: TABLE_PREFIX+'roles',
              columns: [
                {
                  name: 'id',
                  type: 'varchar',
                  isPrimary: true,
                },
                {
                  name: 'name',
                  type: 'varchar',
                  isNullable: false,
                  isUnique: true,
                },
                {
                  name: 'description',
                  type: 'varchar',
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
    await queryRunner.dropTable(TABLE_PREFIX+'roles',);

    }

}
