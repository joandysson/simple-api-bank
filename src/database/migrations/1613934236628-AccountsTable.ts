import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class AccountsTable1613934236628 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "accounts",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: "increment",
                },
                {
                    name: "people_id",
                    type: "int",
                },
                {
                    name: "balance",
                    type: "double",
                },
                {
                    name: "daily_summary_limit",
                    type: "int",
                },
                {
                    name: "active_flag",
                    type: "boolean",
                },
                {
                    name: "type_account",
                    type: "varchar",
                },
                {
                    name: "date_birthday",
                    type: "timestamp",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: 'NOW()'
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: 'NOW()'
                },
                {
                    name: "deleted_at",
                    type: "timestamp",
                    isNullable: true
                }
            ]
        }), true)

        await queryRunner.createForeignKey("people", new TableForeignKey({
            columnNames: ["people_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "people",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('accounts');
    }
}
