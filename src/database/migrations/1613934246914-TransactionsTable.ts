import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class TransactionsTable1613934246914 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'transactions',
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: "increment",
                },
                {
                    name: "account_id",
                    type: "int",
                },
                {
                    name: "value",
                    type: "double",
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
            ],

        }))

        await queryRunner.createForeignKey("people", new TableForeignKey({
            columnNames: ["account_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "account",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
