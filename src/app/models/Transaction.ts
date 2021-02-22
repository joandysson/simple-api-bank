import {
    BaseEntity,
    Entity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    JoinColumn,
    OneToMany
} from "typeorm";
import Account from "./Account";

@Entity('transactions')
export default class Transaction extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({type: 'numeric', name: 'account_id'})
    public accountId: number;

    @Column({type: 'double'})
    public value: number;

    @CreateDateColumn({name: 'created_at'})
    public createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    public updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    public deletedAt: Date;


    @OneToMany(type => Account, account => account.transaction)
    @JoinColumn({name: 'id', referencedColumnName: 'id_acconut'})
    public account: Account
}