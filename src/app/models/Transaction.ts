import {
    BaseEntity,
    Entity,
    Column,
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    Double,
    JoinColumn,
    OneToMany
} from "typeorm";
import Account from "./Account";

@Entity('transactions')
export default class Transaction extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({type: 'numeric', name: 'acconut_id'})
    public acconutId: number;

    @Column({type: 'double'})
    public valor: Double;

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