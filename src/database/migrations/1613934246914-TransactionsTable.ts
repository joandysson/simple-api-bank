import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class TransactionsTable1613934246914 implements MigrationInterface {
    private table = 'transactions'
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: this.table,
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy: "increment",
                    isGenerated: true
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

        await queryRunner.createForeignKey(this.table, new TableForeignKey({
            columnNames: ["account_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "accounts",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table)
    }

}
