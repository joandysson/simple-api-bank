import {
    BaseEntity,
    Entity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    DeleteDateColumn
} from "typeorm";

@Entity('people')
export default class People extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: string;

    @Column({type: 'varchar'})
    public name: string;

    @Column({type: 'varchar'})
    public cpf: string;

    @Column({type: 'date'})
    public date_birthday: Date;

    @CreateDateColumn({name: 'created_at'})
    public createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    public updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    public deletedAt: Date;
}