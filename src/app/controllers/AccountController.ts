import Account from "@models/Account";
import People from "@models/People";
import Transaction from "@models/Transaction";
import { renderStorePeople } from "@views/Account";
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

            const savePeople = await insertPeople.save();
            const insertAccount = Account.create({
                peopleId: savePeople.id,
                balance: request.body.balance,
                dailySummaryLimit: request.body.typeAccount == 'C' ? 2 : 3,
                activeFlag: true,
                typeAccount: request.body.typeAccount,
            })

            const saveAccount = await insertAccount.save();

            response.status(201).json(renderStorePeople(saveAccount, savePeople));
        } catch (error) {
            response.status(500).json({ error: error.message })
        }
    }
    async deposit(request: Request, response: Response) {
        const accountExists = await Account.findOne(request.body.accountId)

        if (!accountExists) return response.status(204).json('Conta não encontrada')


        try {
            await Account.update(accountExists.id, {
                balance: accountExists.balance + parseFloat(request.body.value)
            })

            const insertTransaction = Transaction.create({
                accountId: accountExists.id,
                value: request.body.value
            })

            await insertTransaction.save()

            response.status(200).json({newBalance: accountExists.balance + parseFloat(request.body.value)})
        } catch (error) {
            response.status(500).json(error.message)
        }
    }

    async withdraw(request: Request, response: Response) {
        const accountExists = await Account.findOne(request.body.accountId)

        if (!accountExists) return response.status(204).json('Conta não encontrada')

        if (!accountExists.activeFlag) return response.status(401).json('Conta bloquada')

        if (accountExists.dailySummaryLimit === 0) return response.status(401).json('Limite de saque atingido')

        if (request.body.value > accountExists.balance) return response.status(401).json('Saldo insufuciente')

        try {
            await Account.update(accountExists.id, {
                balance: accountExists.balance - parseFloat(request.body.value),
                dailySummaryLimit: accountExists.dailySummaryLimit - 1
            })

            const insertTransaction = Transaction.create({
                accountId: accountExists.id,
                value: -request.body.value
            })

            insertTransaction.save()

            response.status(200).json({newBalance: accountExists.balance - parseFloat(request.body.value)})
        } catch (error) {
            response.status(500).json(error.message)
        }
    }

    async balance(request: Request, response: Response) {
        const accountExists = await Account.findOne(request.params.accountId)

        if (!accountExists) return response.status(204).json('Conta não encontrada')

        response.status(200).json({ balance: accountExists.balance })
    }

    async block(request: Request, response: Response) {
        const accountExists = await Account.findOne(request.body.accountId)

        if (!accountExists) return response.status(204).json('Conta não encontrada')
        try {
            await Account.update(accountExists.id, {
                activeFlag: false
            })

            response.sendStatus(200)
        } catch (error) {
            response.status(500).json(error.message)
        }
    }
    async ative(request: Request, response: Response) {
        const accountExists = await Account.findOne(request.body.accountId)

        if (!accountExists) return response.status(204).json('Conta não encontrada')
        try {
            await Account.update(accountExists.id, {
                activeFlag: true
            })

            response.sendStatus(200)
        } catch (error) {
            response.status(500).json(error.message)
        }
    }
}

export default new AccountController;