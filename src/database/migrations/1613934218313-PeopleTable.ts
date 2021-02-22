import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PeopleTable1613934218313 implements MigrationInterface {
    private table = "people"
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
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
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "cpf",
                    type: "varchar",
                    length: "11"
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
    }

}
