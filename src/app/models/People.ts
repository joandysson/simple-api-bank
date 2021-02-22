import {
    BaseEntity,
    Entity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToOne,
} from "typeorm";
import Account from "./Account";

@Entity('people')
export default class People extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({type: 'varchar'})
    public name: string;

    @Column({type: 'varchar'})
    public cpf: string;

    @Column({type: 'date', name: 'date_birthday'})
    public dateBirthday: Date;

    @CreateDateColumn({name: 'created_at'})
    public createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    public updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    public deletedAt: Date;

    @OneToOne(() => Account, account => account.people)
    public account: Account
}