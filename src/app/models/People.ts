import {
    BaseEntity,
    Entity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    DeleteDateColumn
} from "typeorm";

@Entity('users')
export default class People extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    public id: string;

    @Column({type: 'varchar'})
    public name: string;

    @Column({type: 'varchar'})
    public cpf: string;

    @Column({type: 'varchar'})
    public date_birthday: Date;

    @CreateDateColumn({name: 'created_at'})
    public createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    public updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    public deletedAt: Date;
}