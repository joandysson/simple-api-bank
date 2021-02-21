import {
    BaseEntity,
    Entity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    Double,
    OneToOne,
    JoinColumn,
    OneToMany,
} from "typeorm";
import People from "./People";
import Transaction from "./Transaction";

@Entity('accounts')
export default class Account extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({type: 'number', name: 'id_people'})
    public idPeople: number;

    @Column({type: 'double'})
    public balance: Double;

    @Column({type: 'number', name: 'daily_summary_limit'})
    public dailySummaryLimit: number;

    @Column({type: 'boolean'})
    public active_flag: boolean;

    @Column({type: 'varchar'})
    public type_account: string;

    @Column({type: 'date'})
    public date_birthday: Date;

    @CreateDateColumn({name: 'created_at'})
    public createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    public updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    public deletedAt: Date;

    @OneToOne(type => People, people => people.account)
    @JoinColumn({name: 'id'})
    people: People

    @OneToMany(type => Transaction, transaction => transaction.account)
    @JoinColumn({name: 'id', referencedColumnName: 'id_people'})
    transaction: Transaction
}