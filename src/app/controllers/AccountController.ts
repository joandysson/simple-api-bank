import { IAccountStore } from "@interfaces/IAccount";
import Account from "@models/Account";
import People from "@models/People";
import Transaction from "@models/Transaction";
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

            const insertTransaction = Transaction.create({
                accountId: accountExists.id,
                value: request.body.value
            })

            await insertTransaction.save()

            response.sendStatus(200)
        } catch (error) {
            response.json(error.message).sendStatus(500)
        }
    }

    async withdraw(request: Request, response: Response) {
        const accountExists = await Account.findOne(request.body.accountId)

        if (!accountExists) return response.json('Conta não encontrada').sendStatus(200)

        if (!accountExists.activeFlag) return response.json('Conta bloquada').sendStatus(200)

        if (request.body.value > accountExists.balance) return response.json('Saldo insufuciente').sendStatus(200)

        try {
            await Account.update(accountExists.id, {
                balance: accountExists.balance - parseFloat(request.body.value)
            })

            const insertTransaction = Transaction.create({
                accountId: accountExists.id,
                value: -request.body.value
            })

            insertTransaction.save()

            response.sendStatus(200)
        } catch (error) {
            response.json(error.message).sendStatus(500)
        }
    }

    async balance(request: Request, response: Response) {
        const accountExists = await Account.findOne(request.params.accountId)

        if (!accountExists) return response.json('Conta não encontrada').sendStatus(200)

        response.json({ saldo: accountExists.balance }).sendStatus(200)
    }

    async block(request: Request, response: Response) {
        const accountExists = await Account.findOne(request.body.accountId)

        if (!accountExists) return response.json('Conta não encontrada').sendStatus(200)
        try {
            await Account.update(accountExists.id, {
                activeFlag: false
            })

            response.json({ saldo: accountExists.balance }).sendStatus(200)
        } catch (error) {
            response.json(error.message).sendStatus(500)
        }

    }

    async historyTransactions(request: Request, response: Response) {
        const trasactionsExists = await Transaction.find(request.body.accountId)

        if (!trasactionsExists) return response.json('Conta não encontrada').sendStatus(200)

        response.json({ trasactions: trasactionsExists }).sendStatus(200)

    }
}

export default new AccountController;