import Account from "@models/Account";
import People from "@models/People";

export function renderStorePeople(account: Account, people: People) {
    return {
        name: people.name,
        cpf: people.cpf,
        dateBirthday: people.dateBirthday,
        balance: account.balance,
        typeAccount: account.typeAccount,
        createdAt: account.createdAt
    }
}