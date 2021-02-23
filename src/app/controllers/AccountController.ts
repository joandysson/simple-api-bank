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

            response.sendStatus(201);
        } catch (error) {
            response.status(500).json({ error: error.message })
        }
    }
    async deposit(request: Request, response: Response) {
        const accountExists = await Account.findOne(request.body.accountId)

        if (!accountExists) return response.status(200).json('Conta não encontrada')


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
            response.status(500).json(error.message)
        }
    }

    async withdraw(request: Request, response: Response) {
        const accountExists = await Account.findOne(request.body.accountId)

        if (!accountExists) return response.status(200).json('Conta não encontrada')

        if (!accountExists.activeFlag) return response.status(200).json('Conta bloquada')

        if (request.body.value > accountExists.balance) return response.status(200).json('Saldo insufuciente')

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
            response.status(500).json(error.message)
        }
    }

    async balance(request: Request, response: Response) {
        const accountExists = await Account.findOne(request.params.accountId)

        if (!accountExists) return response.status(200).json('Conta não encontrada')

        response.status(200).json({ saldo: accountExists.balance })
    }

    async block(request: Request, response: Response) {
        const accountExists = await Account.findOne(request.body.accountId)

        if (!accountExists) return response.status(200).json('Conta não encontrada')
        try {
            await Account.update(accountExists.id, {
                activeFlag: false
            })

            response.status(200).json({ saldo: accountExists.balance })
        } catch (error) {
            response.status(500).json(error.message)
        }
    }
}

export default new AccountController;