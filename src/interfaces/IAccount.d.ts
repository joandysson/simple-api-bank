import { Double } from "typeorm";

export interface IAccountStore {
    name: string
    dateBirthday: Date
    cpf: string
    idPeople: number
    balance: number
    typeAccount: 'C' | 'P'
    dailySummaryLimit: number
    activeFlag: boolean
}
