import { IAccountStore } from "@interfaces/IAccount";
import Account from "@models/Account";
import People from "@models/People";
import { Request, Response } from "express";
import { } from "typeorm";

class AccountController {
    async index() {

    }

    async store(request: Request, response: Response) {
        try {
            const insertPeople = People.create({
                name: request.body.name,
                cpf: request.body.cpf,
                dateBirthday: request.body.dateBirthday
            })

            new Account()
            const people = await insertPeople.save();
            const insertAccount = Account.create({
                peopleId: people.id,
                balance: request.body.balance,
                dailySummaryLimit: request.body.typeAccount == 'C' ? 2 : 3,
                activeFlag: true,
                typeAccount: request.body.typeAccount,
            })

            await insertAccount.save();

            response.sendStatus(200);
        } catch (error) {
            console.log(error.message)
            response.json({ error: error.message }).sendStatus(500);
        }
    }
    async deposit(request: Request, response: Response) {
        const accountExists = await Account.findOne(request.body.accountId)

        if (!accountExists) return response.json('Conta não encontrada').sendStatus(200)

        try {
            await Account.update(accountExists.id, {
                balance: accountExists.balance + parseFloat(request.body.value)
            })

            response.sendStatus(200)
        } catch (error) {
            response.json(error.message).sendStatus(500)
        }
    }

}

export default new AccountController;